# Gradient TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/gradient-typescript.git
cd gradient-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export DIGITALOCEAN_ACCESS_TOKEN="My Access Token"
export GRADIENT_MODEL_ACCESS_KEY="My Model Access Key"
export GRADIENT_AGENT_ACCESS_KEY="My Agent Access Key"
export GRADIENT_AGENT_ENDPOINT="My-Agent-Endpoint"
export GRADIENT_INFERENCE_ENDPOINT="My Inference Endpoint"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y gradient-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "digitalocean_gradient_api": {
      "command": "node",
      "args": [
        "/path/to/local/gradient-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "DIGITALOCEAN_ACCESS_TOKEN": "My Access Token",
        "GRADIENT_MODEL_ACCESS_KEY": "My Model Access Key",
        "GRADIENT_AGENT_ACCESS_KEY": "My Agent Access Key",
        "GRADIENT_AGENT_ENDPOINT": "My-Agent-Endpoint",
        "GRADIENT_INFERENCE_ENDPOINT": "My Inference Endpoint"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------------------- | ------------------------ | --------------- |
| `x-digitalocean-access-token` | `accessToken` | ApiKeyAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "digitalocean_gradient_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "gradient-mcp/server";

// import a specific tool
import createAgents from "gradient-mcp/tools/agents/create-agents";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAgents, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `agents`:

- `create_agents` (`write`): To create a new agent, send a POST request to `/v2/gen-ai/agents`. The response body contains a JSON object with the newly created agent object.
- `retrieve_agents` (`read`): To retrieve details of an agent, GET request to `/v2/gen-ai/agents/{uuid}`. The response body is a JSON object containing the agent.
- `update_agents` (`write`): To update an agent, send a PUT request to `/v2/gen-ai/agents/{uuid}`. The response body is a JSON object containing the agent.
- `list_agents` (`read`): To list all agents, send a GET request to `/v2/gen-ai/agents`.
- `delete_agents` (`write`): To delete an agent, send a DELETE request to `/v2/gen-ai/agents/{uuid}`.
- `update_status_agents` (`write`): Check whether an agent is public or private. To update the agent status, send a PUT request to `/v2/gen-ai/agents/{uuid}/deployment_visibility`.

### Resource `agents.api_keys`:

- `create_agents_api_keys` (`write`): To create an agent API key, send a POST request to `/v2/gen-ai/agents/{agent_uuid}/api_keys`.
- `update_agents_api_keys` (`write`): To update an agent API key, send a PUT request to `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`.
- `list_agents_api_keys` (`read`): To list all agent API keys, send a GET request to `/v2/gen-ai/agents/{agent_uuid}/api_keys`.
- `delete_agents_api_keys` (`write`): To delete an API key for an agent, send a DELETE request to `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`.
- `regenerate_agents_api_keys` (`write`): To regenerate an agent API key, send a PUT request to `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}/regenerate`.

### Resource `agents.chat.completions`:

- `create_chat_agents_completions` (`write`): Creates a model response for the given chat conversation.

### Resource `agents.evaluation_metrics`:

- `list_agents_evaluation_metrics` (`read`): To list all evaluation metrics, send a GET request to `/v2/gen-ai/evaluation_metrics`.
- `list_regions_agents_evaluation_metrics` (`read`): To list all datacenter regions, send a GET request to `/v2/gen-ai/regions`.

### Resource `agents.evaluation_metrics.workspaces`:

- `create_evaluation_metrics_agents_workspaces` (`write`): To create a new workspace, send a POST request to `/v2/gen-ai/workspaces`. The response body contains a JSON object with the newly created workspace object.
- `retrieve_evaluation_metrics_agents_workspaces` (`read`): To retrieve details of a workspace, GET request to `/v2/gen-ai/workspaces/{workspace_uuid}`. The response body is a JSON object containing the workspace.
- `update_evaluation_metrics_agents_workspaces` (`write`): To update a workspace, send a PUT request to `/v2/gen-ai/workspaces/{workspace_uuid}`. The response body is a JSON object containing the workspace.
- `list_evaluation_metrics_agents_workspaces` (`read`): To list all workspaces, send a GET request to `/v2/gen-ai/workspaces`.
- `delete_evaluation_metrics_agents_workspaces` (`write`): To delete a workspace, send a DELETE request to `/v2/gen-ai/workspace/{workspace_uuid}`.
- `list_evaluation_test_cases_evaluation_metrics_agents_workspaces` (`read`): To list all evaluation test cases by a workspace, send a GET request to `/v2/gen-ai/workspaces/{workspace_uuid}/evaluation_test_cases`.

### Resource `agents.evaluation_metrics.workspaces.agents`:

- `list_workspaces_evaluation_metrics_agents_agents` (`read`): To list all agents by a Workspace, send a GET request to `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.
- `move_workspaces_evaluation_metrics_agents_agents` (`write`): To move all listed agents a given workspace, send a PUT request to `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.

### Resource `agents.evaluation_metrics.models`:

- `list_evaluation_metrics_agents_models` (`read`): To list all models, send a GET request to `/v2/gen-ai/models`.

### Resource `agents.evaluation_metrics.anthropic.keys`:

- `create_anthropic_evaluation_metrics_agents_keys` (`write`): To create an Anthropic API key, send a POST request to `/v2/gen-ai/anthropic/keys`.
- `retrieve_anthropic_evaluation_metrics_agents_keys` (`read`): To retrieve details of an Anthropic API key, send a GET request to `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
- `update_anthropic_evaluation_metrics_agents_keys` (`write`): To update an Anthropic API key, send a PUT request to `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
- `list_anthropic_evaluation_metrics_agents_keys` (`read`): To list all Anthropic API keys, send a GET request to `/v2/gen-ai/anthropic/keys`.
- `delete_anthropic_evaluation_metrics_agents_keys` (`write`): To delete an Anthropic API key, send a DELETE request to `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
- `list_agents_anthropic_evaluation_metrics_agents_keys` (`read`): List Agents by Anthropic Key.

### Resource `agents.evaluation_metrics.openai.keys`:

- `create_openai_evaluation_metrics_agents_keys` (`write`): To create an OpenAI API key, send a POST request to `/v2/gen-ai/openai/keys`.
- `retrieve_openai_evaluation_metrics_agents_keys` (`read`): To retrieve details of an OpenAI API key, send a GET request to `/v2/gen-ai/openai/keys/{api_key_uuid}`.
- `update_openai_evaluation_metrics_agents_keys` (`write`): To update an OpenAI API key, send a PUT request to `/v2/gen-ai/openai/keys/{api_key_uuid}`.
- `list_openai_evaluation_metrics_agents_keys` (`read`): To list all OpenAI API keys, send a GET request to `/v2/gen-ai/openai/keys`.
- `delete_openai_evaluation_metrics_agents_keys` (`write`): To delete an OpenAI API key, send a DELETE request to `/v2/gen-ai/openai/keys/{api_key_uuid}`.
- `list_agents_openai_evaluation_metrics_agents_keys` (`read`): List Agents by OpenAI Key.

### Resource `agents.evaluation_runs`:

- `create_agents_evaluation_runs` (`write`): To run an evaluation test case, send a POST request to `/v2/gen-ai/evaluation_runs`.
- `retrieve_agents_evaluation_runs` (`read`): To retrive information about an existing evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}`.
- `list_results_agents_evaluation_runs` (`read`): To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results`.
- `retrieve_results_agents_evaluation_runs` (`read`): To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}`.

### Resource `agents.evaluation_test_cases`:

- `create_agents_evaluation_test_cases` (`write`): To create an evaluation test-case send a POST request to `/v2/gen-ai/evaluation_test_cases`.
- `retrieve_agents_evaluation_test_cases` (`read`): To retrive information about an existing evaluation test case, send a GET request to `/v2/gen-ai/evaluation_test_case/{test_case_uuid}`.
- `update_agents_evaluation_test_cases` (`write`): To update an evaluation test-case send a PUT request to `/v2/gen-ai/evaluation_test_cases/{test_case_uuid}`.
- `list_agents_evaluation_test_cases` (`read`): To list all evaluation test cases, send a GET request to `/v2/gen-ai/evaluation_test_cases`.
- `list_evaluation_runs_agents_evaluation_test_cases` (`read`): To list all evaluation runs by test case, send a GET request to `/v2/gen-ai/evaluation_test_cases/{evaluation_test_case_uuid}/evaluation_runs`.

### Resource `agents.evaluation_datasets`:

- `create_agents_evaluation_datasets` (`write`): To create an evaluation dataset, send a POST request to `/v2/gen-ai/evaluation_datasets`.
- `create_file_upload_presigned_urls_agents_evaluation_datasets` (`write`): To create presigned URLs for evaluation dataset file upload, send a POST request to `/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls`.

### Resource `agents.functions`:

- `create_agents_functions` (`write`): To create a function route for an agent, send a POST request to `/v2/gen-ai/agents/{agent_uuid}/functions`.
- `update_agents_functions` (`write`): To update the function route, send a PUT request to `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`.
- `delete_agents_functions` (`write`): To delete a function route from an agent, send a DELETE request to `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`.

### Resource `agents.versions`:

- `update_agents_versions` (`write`): To update to a specific agent version, send a PUT request to `/v2/gen-ai/agents/{uuid}/versions`.
- `list_agents_versions` (`read`): To list all agent versions, send a GET request to `/v2/gen-ai/agents/{uuid}/versions`.

### Resource `agents.knowledge_bases`:

- `attach_agents_knowledge_bases` (`write`): To attach knowledge bases to an agent, send a POST request to `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases`
- `attach_single_agents_knowledge_bases` (`write`): To attach a knowledge base to an agent, send a POST request to `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}`
- `detach_agents_knowledge_bases` (`write`): To detach a knowledge base from an agent, send a DELETE request to `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}`.

### Resource `agents.routes`:

- `update_agents_routes` (`write`): To update an agent route for an agent, send a PUT request to `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
- `delete_agents_routes` (`write`): To delete an agent route from a parent agent, send a DELETE request to `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
- `add_agents_routes` (`write`): To add an agent route to an agent, send a POST request to `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
- `view_agents_routes` (`read`): To view agent routes for an agent, send a GET requtest to `/v2/gen-ai/agents/{uuid}/child_agents`.

### Resource `chat.completions`:

- `create_chat_completions` (`write`): Creates a model response for the given chat conversation.

### Resource `gpu_droplets`:

- `create_gpu_droplets` (`write`): To create a new Droplet, send a POST request to `/v2/droplets` setting the
  required attributes.

  A Droplet will be created using the provided information. The response body
  will contain a JSON object with a key called `droplet`. The value will be an
  object containing the standard attributes for your new Droplet. The response
  code, 202 Accepted, does not indicate the success or failure of the operation,
  just that the request has been accepted for processing. The `actions` returned
  as part of the response's `links` object can be used to check the status
  of the Droplet create event.

  ### Create Multiple Droplets

  Creating multiple Droplets is very similar to creating a single Droplet.
  Instead of sending `name` as a string, send `names` as an array of strings. A
  Droplet will be created for each name you send using the associated
  information. Up to ten Droplets may be created this way at a time.

  Rather than returning a single Droplet, the response body will contain a JSON
  array with a key called `droplets`. This will be set to an array of JSON
  objects, each of which will contain the standard Droplet attributes. The
  response code, 202 Accepted, does not indicate the success or failure of any
  operation, just that the request has been accepted for processing. The array
  of `actions` returned as part of the response's `links` object can be used to
  check the status of each individual Droplet create event.

- `retrieve_gpu_droplets` (`read`): To show information about an individual Droplet, send a GET request to
  `/v2/droplets/$DROPLET_ID`.
- `list_gpu_droplets` (`read`): To list all Droplets in your account, send a GET request to `/v2/droplets`.

  The response body will be a JSON object with a key of `droplets`. This will be
  set to an array containing objects each representing a Droplet. These will
  contain the standard Droplet attributes.

  ### Filtering Results by Tag

  It's possible to request filtered results by including certain query parameters.
  To only list Droplets assigned to a specific tag, include the `tag_name` query
  parameter set to the name of the tag in your GET request. For example,
  `/v2/droplets?tag_name=$TAG_NAME`.

  ### GPU Droplets

  By default, only non-GPU Droplets are returned. To list only GPU Droplets, set
  the `type` query parameter to `gpus`. For example, `/v2/droplets?type=gpus`.

- `delete_gpu_droplets` (`write`): To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.

  A successful request will receive a 204 status code with no body in response.
  This indicates that the request was processed successfully.

- `delete_by_tag_gpu_droplets` (`write`): To delete **all** Droplets assigned to a specific tag, include the `tag_name`
  query parameter set to the name of the tag in your DELETE request. For
  example, `/v2/droplets?tag_name=$TAG_NAME`.

  This endpoint requires `tag:read` scope.

  A successful request will receive a 204 status code with no body in response.
  This indicates that the request was processed successfully.

- `list_firewalls_gpu_droplets` (`read`): To retrieve a list of all firewalls available to a Droplet, send a GET request
  to `/v2/droplets/$DROPLET_ID/firewalls`

  The response will be a JSON object that has a key called `firewalls`. This will
  be set to an array of `firewall` objects, each of which contain the standard
  `firewall` attributes.

- `list_kernels_gpu_droplets` (`read`): To retrieve a list of all kernels available to a Droplet, send a GET request
  to `/v2/droplets/$DROPLET_ID/kernels`

  The response will be a JSON object that has a key called `kernels`. This will
  be set to an array of `kernel` objects, each of which contain the standard
  `kernel` attributes.

- `list_neighbors_gpu_droplets` (`read`): To retrieve a list of any "neighbors" (i.e. Droplets that are co-located on
  the same physical hardware) for a specific Droplet, send a GET request to
  `/v2/droplets/$DROPLET_ID/neighbors`.

  The results will be returned as a JSON object with a key of `droplets`. This
  will be set to an array containing objects representing any other Droplets
  that share the same physical hardware. An empty array indicates that the
  Droplet is not co-located any other Droplets associated with your account.

- `list_snapshots_gpu_droplets` (`read`): To retrieve the snapshots that have been created from a Droplet, send a GET
  request to `/v2/droplets/$DROPLET_ID/snapshots`.

  You will get back a JSON object that has a `snapshots` key. This will be set
  to an array of snapshot objects, each of which contain the standard Droplet
  snapshot attributes.

### Resource `gpu_droplets.backups`:

- `list_gpu_droplets_backups` (`read`): To retrieve any backups associated with a Droplet, send a GET request to
  `/v2/droplets/$DROPLET_ID/backups`.

  You will get back a JSON object that has a `backups` key. This will be set to
  an array of backup objects, each of which contain the standard
  Droplet backup attributes.

- `list_policies_gpu_droplets_backups` (`read`): To list information about the backup policies for all Droplets in the account,
  send a GET request to `/v2/droplets/backups/policies`.
- `list_supported_policies_gpu_droplets_backups` (`read`): To retrieve a list of all supported Droplet backup policies, send a GET
  request to `/v2/droplets/backups/supported_policies`.
- `retrieve_policy_gpu_droplets_backups` (`read`): To show information about an individual Droplet's backup policy, send a GET
  request to `/v2/droplets/$DROPLET_ID/backups/policy`.

### Resource `gpu_droplets.actions`:

- `retrieve_gpu_droplets_actions` (`read`): To retrieve a Droplet action, send a GET request to
  `/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.

  The response will be a JSON object with a key called `action`. The value will
  be a Droplet action object.

- `list_gpu_droplets_actions` (`read`): To retrieve a list of all actions that have been executed for a Droplet, send
  a GET request to `/v2/droplets/$DROPLET_ID/actions`.

  The results will be returned as a JSON object with an `actions` key. This will
  be set to an array filled with `action` objects containing the standard
  `action` attributes.

- `bulk_initiate_gpu_droplets_actions` (`write`): Some actions can be performed in bulk on tagged Droplets. The actions can be
  initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with
  the action arguments.

  Only a sub-set of action types are supported:

  - `power_cycle`
  - `power_on`
  - `power_off`
  - `shutdown`
  - `enable_ipv6`
  - `enable_backups`
  - `disable_backups`
  - `snapshot` (also requires `image:create` permission)

- `initiate_gpu_droplets_actions` (`write`): To initiate an action on a Droplet send a POST request to
  `/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,
  set the `type` attribute to on of the supported action types:

  | Action                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                             | Additionally Required Permission |
  | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
  | <nobr>`enable_backups`</nobr>       | Enables backups for a Droplet                                                                                                                                                                                                                                                                                                                                                                                                       |                                  |
  | <nobr>`disable_backups`</nobr>      | Disables backups for a Droplet                                                                                                                                                                                                                                                                                                                                                                                                      |                                  |
  | <nobr>`change_backup_policy`</nobr> | Update the backup policy for a Droplet                                                                                                                                                                                                                                                                                                                                                                                              |                                  |
  | <nobr>`reboot`</nobr>               | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console.                                                                                                                                                                                                                                                                                 |                                  |
  | <nobr>`power_cycle`</nobr>          | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch.                                                                                                                                                                                                                                                                                   |                                  |
  | <nobr>`shutdown`</nobr>             | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. |                                  |
  | <nobr>`power_off`</nobr>            | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications.                                                                                                                                                                                                                    |                                  |
  | <nobr>`power_on`</nobr>             | Powers on a Droplet.                                                                                                                                                                                                                                                                                                                                                                                                                |                                  |
  | <nobr>`restore`</nobr>              | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact.                                                                                                                                                                                                                                                     | droplet:admin                    |
  | <nobr>`password_reset`</nobr>       | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use.                                                                                                                                                                                                                                                                                                              | droplet:admin                    |
  | <nobr>`resize`</nobr>               | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`.                                                                                                                                                                                                                                                                        | droplet:create                   |
  | <nobr>`rebuild`</nobr>              | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug.                                                                                                                                                                                                                                                                                                                                         | droplet:admin                    |
  | <nobr>`rename`</nobr>               | Renames a Droplet.                                                                                                                                                                                                                                                                                                                                                                                                                  |                                  |
  | <nobr>`change_kernel`</nobr>        | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default.                                                                                                                                                                                                                                                                        |                                  |
  | <nobr>`enable_ipv6`</nobr>          | Enables IPv6 for a Droplet. Once enabled for a Droplet, IPv6 can not be disabled. When enabling IPv6 on an existing Droplet, [additional OS-level configuration](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/#on-existing-droplets) is required.                                                                                                                                                           |                                  |
  | <nobr>`snapshot`</nobr>             | Takes a snapshot of a Droplet.                                                                                                                                                                                                                                                                                                                                                                                                      | image:create                     |

### Resource `gpu_droplets.destroy_with_associated_resources`:

- `list_gpu_droplets_destroy_with_associated_resources` (`read`): To list the associated billable resources that can be destroyed along with a
  Droplet, send a GET request to the
  `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.

  This endpoint will only return resources that you are authorized to see. For
  example, to see associated Reserved IPs, include the `reserved_ip:read` scope.

  The response will be a JSON object containing `snapshots`, `volumes`, and
  `volume_snapshots` keys. Each will be set to an array of objects containing
  information about the associated resources.

- `check_status_gpu_droplets_destroy_with_associated_resources` (`read`): To check on the status of a request to destroy a Droplet with its associated
  resources, send a GET request to the
  `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.
- `delete_dangerous_gpu_droplets_destroy_with_associated_resources` (`write`): To destroy a Droplet along with all of its associated resources, send a DELETE
  request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`
  endpoint. The headers of this request must include an `X-Dangerous` key set to
  `true`. To preview which resources will be destroyed, first query the
  Droplet's associated resources. This operation _can not_ be reverse and should
  be used with caution.

  A successful response will include a 202 response code and no content. Use the
  status endpoint to check on the success or failure of the destruction of the
  individual resources.

- `delete_selective_gpu_droplets_destroy_with_associated_resources` (`write`): To destroy a Droplet along with a sub-set of its associated resources, send a
  DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`
  endpoint. The JSON body of the request should include `reserved_ips`, `snapshots`, `volumes`,
  or `volume_snapshots` keys each set to an array of IDs for the associated
  resources to be destroyed. The IDs can be found by querying the Droplet's
  associated resources. Any associated resource not included in the request
  will remain and continue to accrue changes on your account.

  A successful response will include a 202 response code and no content. Use
  the status endpoint to check on the success or failure of the destruction of
  the individual resources.

- `retry_gpu_droplets_destroy_with_associated_resources` (`write`): If the status of a request to destroy a Droplet with its associated resources
  reported any errors, it can be retried by sending a POST request to the
  `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.

  Only one destroy can be active at a time per Droplet. If a retry is issued
  while another destroy is in progress for the Droplet a 409 status code will
  be returned. A successful response will include a 202 response code and no
  content.

### Resource `gpu_droplets.autoscale`:

- `create_gpu_droplets_autoscale` (`write`): To create a new autoscale pool, send a POST request to `/v2/droplets/autoscale` setting the required attributes.

  The response body will contain a JSON object with a key called `autoscale_pool` containing the standard attributes for the new autoscale pool.

- `retrieve_gpu_droplets_autoscale` (`read`): To show information about an individual autoscale pool, send a GET request to
  `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`.
- `update_gpu_droplets_autoscale` (`write`): To update the configuration of an existing autoscale pool, send a PUT request to
  `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`. The request must contain a full representation
  of the autoscale pool including existing attributes.
- `list_gpu_droplets_autoscale` (`read`): To list all autoscale pools in your team, send a GET request to `/v2/droplets/autoscale`.
  The response body will be a JSON object with a key of `autoscale_pools` containing an array of autoscale pool objects.
  These each contain the standard autoscale pool attributes.
- `delete_gpu_droplets_autoscale` (`write`): To destroy an autoscale pool, send a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID` endpoint.

  A successful response will include a 202 response code and no content.

- `delete_dangerous_gpu_droplets_autoscale` (`write`): To destroy an autoscale pool and its associated resources (Droplets),
  send a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/dangerous` endpoint.
- `list_history_gpu_droplets_autoscale` (`read`): To list all of the scaling history events of an autoscale pool, send a GET request to `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/history`.

  The response body will be a JSON object with a key of `history`. This will be
  set to an array containing objects each representing a history event.

- `list_members_gpu_droplets_autoscale` (`read`): To list the Droplets in an autoscale pool, send a GET request to `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/members`.

  The response body will be a JSON object with a key of `droplets`. This will be
  set to an array containing information about each of the Droplets in the autoscale pool.

### Resource `gpu_droplets.firewalls`:

- `create_gpu_droplets_firewalls` (`write`): To create a new firewall, send a POST request to `/v2/firewalls`. The request
  must contain at least one inbound or outbound access rule.
- `retrieve_gpu_droplets_firewalls` (`read`): To show information about an existing firewall, send a GET request to `/v2/firewalls/$FIREWALL_ID`.
- `update_gpu_droplets_firewalls` (`write`): To update the configuration of an existing firewall, send a PUT request to
  `/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation
  of the firewall including existing attributes. **Note that any attributes that
  are not provided will be reset to their default values.**
  <br><br>You must have read access (e.g. `droplet:read`) to all resources attached
  to the firewall to successfully update the firewall.
- `list_gpu_droplets_firewalls` (`read`): To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.
- `delete_gpu_droplets_firewalls` (`write`): To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

### Resource `gpu_droplets.firewalls.droplets`:

- `add_firewalls_gpu_droplets_droplets` (`write`): To assign a Droplet to a firewall, send a POST request to
  `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there
  should be a `droplet_ids` attribute containing a list of Droplet IDs.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

- `remove_firewalls_gpu_droplets_droplets` (`write`): To remove a Droplet from a firewall, send a DELETE request to
  `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should
  be a `droplet_ids` attribute containing a list of Droplet IDs.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

### Resource `gpu_droplets.firewalls.tags`:

- `add_firewalls_gpu_droplets_tags` (`write`): To assign a tag representing a group of Droplets to a firewall, send a POST
  request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request,
  there should be a `tags` attribute containing a list of tag names.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

- `remove_firewalls_gpu_droplets_tags` (`write`): To remove a tag representing a group of Droplets from a firewall, send a
  DELETE request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the
  request, there should be a `tags` attribute containing a list of tag names.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

### Resource `gpu_droplets.firewalls.rules`:

- `add_firewalls_gpu_droplets_rules` (`write`): To add additional access rules to a firewall, send a POST request to
  `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
  inbound_rules and/or outbound_rules attribute containing an array of rules to
  be added.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

- `remove_firewalls_gpu_droplets_rules` (`write`): To remove access rules from a firewall, send a DELETE request to
  `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
  `inbound_rules` and/or `outbound_rules` attribute containing an array of rules
  to be removed.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

### Resource `gpu_droplets.floating_ips`:

- `create_gpu_droplets_floating_ips` (`write`): On creation, a floating IP must be either assigned to a Droplet or reserved to a region.

  - To create a new floating IP assigned to a Droplet, send a POST
    request to `/v2/floating_ips` with the `droplet_id` attribute.

  - To create a new floating IP reserved to a region, send a POST request to
    `/v2/floating_ips` with the `region` attribute.

  **Note**: In addition to the standard rate limiting, only 12 floating IPs may be created per 60 seconds.

- `retrieve_gpu_droplets_floating_ips` (`read`): To show information about a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP_ADDR`.
- `list_gpu_droplets_floating_ips` (`read`): To list all of the floating IPs available on your account, send a GET request to `/v2/floating_ips`.
- `delete_gpu_droplets_floating_ips` (`write`): To delete a floating IP and remove it from your account, send a DELETE request
  to `/v2/floating_ips/$FLOATING_IP_ADDR`.

  A successful request will receive a 204 status code with no body in response.
  This indicates that the request was processed successfully.

### Resource `gpu_droplets.floating_ips.actions`:

- `create_floating_ips_gpu_droplets_actions` (`write`): To initiate an action on a floating IP send a POST request to
  `/v2/floating_ips/$FLOATING_IP/actions`. In the JSON body to the request,
  set the `type` attribute to on of the supported action types:

  | Action     | Details                               |
  | ---------- | ------------------------------------- |
  | `assign`   | Assigns a floating IP to a Droplet    |
  | `unassign` | Unassign a floating IP from a Droplet |

- `retrieve_floating_ips_gpu_droplets_actions` (`read`): To retrieve the status of a floating IP action, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions/$ACTION_ID`.
- `list_floating_ips_gpu_droplets_actions` (`read`): To retrieve all actions that have been executed on a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions`.

### Resource `gpu_droplets.images`:

- `create_gpu_droplets_images` (`write`): To create a new custom image, send a POST request to /v2/images.
  The body must contain a url attribute pointing to a Linux virtual machine
  image to be imported into DigitalOcean.
  The image must be in the raw, qcow2, vhdx, vdi, or vmdk format.
  It may be compressed using gzip or bzip2 and must be smaller than 100 GB after
  being decompressed.
- `retrieve_gpu_droplets_images` (`read`): To retrieve information about an image, send a `GET` request to
  `/v2/images/$IDENTIFIER`.
- `update_gpu_droplets_images` (`write`): To update an image, send a `PUT` request to `/v2/images/$IMAGE_ID`.
  Set the `name` attribute to the new value you would like to use.
  For custom images, the `description` and `distribution` attributes may also be updated.
- `list_gpu_droplets_images` (`read`): To list all of the images available on your account, send a GET request to /v2/images.

  ## Filtering Results

  ***

  It's possible to request filtered results by including certain query parameters.

  **Image Type**

  Either 1-Click Application or OS Distribution images can be filtered by using the `type` query parameter.

  > Important: The `type` query parameter does not directly relate to the `type` attribute.

  To retrieve only **_distribution_** images, include the `type` query parameter set to distribution, `/v2/images?type=distribution`.

  To retrieve only **_application_** images, include the `type` query parameter set to application, `/v2/images?type=application`.

  **User Images**

  To retrieve only the private images of a user, include the `private` query parameter set to true, `/v2/images?private=true`.

  **Tags**

  To list all images assigned to a specific tag, include the `tag_name` query parameter set to the name of the tag in your GET request. For example, `/v2/images?tag_name=$TAG_NAME`.

- `delete_gpu_droplets_images` (`write`): To delete a snapshot or custom image, send a `DELETE` request to `/v2/images/$IMAGE_ID`.

### Resource `gpu_droplets.images.actions`:

- `create_images_gpu_droplets_actions` (`write`): The following actions are available on an Image.

  ## Convert an Image to a Snapshot

  To convert an image, for example, a backup to a snapshot, send a POST request
  to `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.

  ## Transfer an Image

  To transfer an image to another region, send a POST request to
  `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set
  `region` attribute to the slug identifier of the region you wish to transfer
  to.

- `retrieve_images_gpu_droplets_actions` (`read`): To retrieve the status of an image action, send a GET request to `/v2/images/$IMAGE_ID/actions/$IMAGE_ACTION_ID`.
- `list_images_gpu_droplets_actions` (`read`): To retrieve all actions that have been executed on an image, send a GET request to `/v2/images/$IMAGE_ID/actions`.

### Resource `gpu_droplets.load_balancers`:

- `create_gpu_droplets_load_balancers` (`write`): To create a new load balancer instance, send a POST request to
  `/v2/load_balancers`.

  You can specify the Droplets that will sit behind the load balancer using one
  of two methods:

  - Set `droplet_ids` to a list of specific Droplet IDs.
  - Set `tag` to the name of a tag. All Droplets with this tag applied will be
    assigned to the load balancer. Additional Droplets will be automatically
    assigned as they are tagged.

  These methods are mutually exclusive.

- `retrieve_gpu_droplets_load_balancers` (`read`): To show information about a load balancer instance, send a GET request to
  `/v2/load_balancers/$LOAD_BALANCER_ID`.
- `update_gpu_droplets_load_balancers` (`write`): To update a load balancer's settings, send a PUT request to
  `/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full
  representation of the load balancer including existing attributes. It may
  contain _one of_ the `droplets_ids` or `tag` attributes as they are mutually
  exclusive. **Note that any attribute that is not provided will be reset to its
  default value.**
- `list_gpu_droplets_load_balancers` (`read`): To list all of the load balancer instances on your account, send a GET request
  to `/v2/load_balancers`.
- `delete_gpu_droplets_load_balancers` (`write`): To delete a load balancer instance, disassociating any Droplets assigned to it
  and removing it from your account, send a DELETE request to
  `/v2/load_balancers/$LOAD_BALANCER_ID`.

  A successful request will receive a 204 status code with no body in response.
  This indicates that the request was processed successfully.

- `delete_cache_gpu_droplets_load_balancers` (`write`): To delete a Global load balancer CDN cache, send a DELETE request to
  `/v2/load_balancers/$LOAD_BALANCER_ID/cache`.

  A successful request will receive a 204 status code with no body in response.
  This indicates that the request was processed successfully.

### Resource `gpu_droplets.load_balancers.droplets`:

- `add_load_balancers_gpu_droplets_droplets` (`write`): To assign a Droplet to a load balancer instance, send a POST request to
  `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
  there should be a `droplet_ids` attribute containing a list of Droplet IDs.
  Individual Droplets can not be added to a load balancer configured with a
  Droplet tag. Attempting to do so will result in a "422 Unprocessable Entity"
  response from the API.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

- `remove_load_balancers_gpu_droplets_droplets` (`write`): To remove a Droplet from a load balancer instance, send a DELETE request to
  `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
  there should be a `droplet_ids` attribute containing a list of Droplet IDs.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

### Resource `gpu_droplets.load_balancers.forwarding_rules`:

- `add_load_balancers_gpu_droplets_forwarding_rules` (`write`): To add an additional forwarding rule to a load balancer instance, send a POST
  request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body
  of the request, there should be a `forwarding_rules` attribute containing an
  array of rules to be added.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

- `remove_load_balancers_gpu_droplets_forwarding_rules` (`write`): To remove forwarding rules from a load balancer instance, send a DELETE
  request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the
  body of the request, there should be a `forwarding_rules` attribute containing
  an array of rules to be removed.

  No response body will be sent back, but the response code will indicate
  success. Specifically, the response code will be a 204, which means that the
  action was successful with no returned body data.

### Resource `gpu_droplets.sizes`:

- `list_gpu_droplets_sizes` (`read`): To list all of available Droplet sizes, send a GET request to `/v2/sizes`.
  The response will be a JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.

### Resource `gpu_droplets.snapshots`:

- `retrieve_gpu_droplets_snapshots` (`read`): To retrieve information about a snapshot, send a GET request to
  `/v2/snapshots/$SNAPSHOT_ID`.

  The response will be a JSON object with a key called `snapshot`. The value of
  this will be an snapshot object containing the standard snapshot attributes.

- `list_gpu_droplets_snapshots` (`read`): To list all of the snapshots available on your account, send a GET request to
  `/v2/snapshots`.

  The response will be a JSON object with a key called `snapshots`. This will be
  set to an array of `snapshot` objects, each of which will contain the standard
  snapshot attributes.

  ### Filtering Results by Resource Type

  It's possible to request filtered results by including certain query parameters.

  #### List Droplet Snapshots

  To retrieve only snapshots based on Droplets, include the `resource_type`
  query parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.

  #### List Volume Snapshots

  To retrieve only snapshots based on volumes, include the `resource_type`
  query parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.

- `delete_gpu_droplets_snapshots` (`write`): Both Droplet and volume snapshots are managed through the `/v2/snapshots/`
  endpoint. To delete a snapshot, send a DELETE request to
  `/v2/snapshots/$SNAPSHOT_ID`.

  A status of 204 will be given. This indicates that the request was processed
  successfully, but that no response body is needed.

### Resource `gpu_droplets.volumes`:

- `create_gpu_droplets_volumes` (`write`): To create a new volume, send a POST request to `/v2/volumes`. Optionally, a `filesystem_type` attribute may be provided in order to automatically format the volume's filesystem. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to Droplets without support for auto-mounting is not recommended.
- `retrieve_gpu_droplets_volumes` (`read`): To show information about a block storage volume, send a GET request to `/v2/volumes/$VOLUME_ID`.
- `list_gpu_droplets_volumes` (`read`): To list all of the block storage volumes available on your account, send a GET request to `/v2/volumes`.
  ## Filtering Results
  ### By Region
  The `region` may be provided as query parameter in order to restrict results to volumes available in a specific region. For example: `/v2/volumes?region=nyc1`
  ### By Name
  It is also possible to list volumes on your account that match a specified name. To do so, send a GET request with the volume's name as a query parameter to `/v2/volumes?name=$VOLUME_NAME`.
  **Note:** You can only create one volume per region with the same name.
  ### By Name and Region
  It is also possible to retrieve information about a block storage volume by name. To do so, send a GET request with the volume's name and the region slug for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
- `delete_gpu_droplets_volumes` (`write`): To delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.
  No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
- `delete_by_name_gpu_droplets_volumes` (`write`): Block storage volumes may also be deleted by name by sending a DELETE request with the volume's **name** and the **region slug** for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
  No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.

### Resource `gpu_droplets.volumes.actions`:

- `retrieve_volumes_gpu_droplets_actions` (`read`): To retrieve the status of a volume action, send a GET request to `/v2/volumes/$VOLUME_ID/actions/$ACTION_ID`.
- `list_volumes_gpu_droplets_actions` (`read`): To retrieve all actions that have been executed on a volume, send a GET request to `/v2/volumes/$VOLUME_ID/actions`.
- `initiate_by_id_volumes_gpu_droplets_actions` (`write`): To initiate an action on a block storage volume by Id, send a POST request to
  `~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate
  attributes for the respective action.

  ## Attach a Block Storage Volume to a Droplet

  | Attribute  | Details                                                             |
  | ---------- | ------------------------------------------------------------------- |
  | type       | This must be `attach`                                               |
  | droplet_id | Set to the Droplet's ID                                             |
  | region     | Set to the slug representing the region where the volume is located |

  Each volume may only be attached to a single Droplet. However, up to fifteen
  volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
  automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
  Droplets created on or after April 26, 2018 when attached. On older Droplets,
  [additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)
  is required.

  ## Remove a Block Storage Volume from a Droplet

  | Attribute  | Details                                                             |
  | ---------- | ------------------------------------------------------------------- |
  | type       | This must be `detach`                                               |
  | droplet_id | Set to the Droplet's ID                                             |
  | region     | Set to the slug representing the region where the volume is located |

  ## Resize a Volume

  | Attribute      | Details                                                             |
  | -------------- | ------------------------------------------------------------------- |
  | type           | This must be `resize`                                               |
  | size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |
  | region         | Set to the slug representing the region where the volume is located |

  Volumes may only be resized upwards. The maximum size for a volume is 16TiB.

- `initiate_by_name_volumes_gpu_droplets_actions` (`write`): To initiate an action on a block storage volume by Name, send a POST request to
  `~/v2/volumes/actions`. The body should contain the appropriate
  attributes for the respective action.

  ## Attach a Block Storage Volume to a Droplet

  | Attribute   | Details                                                             |
  | ----------- | ------------------------------------------------------------------- |
  | type        | This must be `attach`                                               |
  | volume_name | The name of the block storage volume                                |
  | droplet_id  | Set to the Droplet's ID                                             |
  | region      | Set to the slug representing the region where the volume is located |

  Each volume may only be attached to a single Droplet. However, up to fifteen
  volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
  automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
  Droplets created on or after April 26, 2018 when attached. On older Droplets,
  [additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)
  is required.

  ## Remove a Block Storage Volume from a Droplet

  | Attribute   | Details                                                             |
  | ----------- | ------------------------------------------------------------------- |
  | type        | This must be `detach`                                               |
  | volume_name | The name of the block storage volume                                |
  | droplet_id  | Set to the Droplet's ID                                             |
  | region      | Set to the slug representing the region where the volume is located |

### Resource `gpu_droplets.volumes.snapshots`:

- `create_volumes_gpu_droplets_snapshots` (`write`): To create a snapshot from a volume, sent a POST request to `/v2/volumes/$VOLUME_ID/snapshots`.
- `retrieve_volumes_gpu_droplets_snapshots` (`read`): To retrieve the details of a snapshot that has been created from a volume, send a GET request to `/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.
- `list_volumes_gpu_droplets_snapshots` (`read`): To retrieve the snapshots that have been created from a volume, send a GET request to `/v2/volumes/$VOLUME_ID/snapshots`.
- `delete_volumes_gpu_droplets_snapshots` (`write`): To delete a volume snapshot, send a DELETE request to
  `/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.

  A status of 204 will be given. This indicates that the request was processed
  successfully, but that no response body is needed.

### Resource `gpu_droplets.account.keys`:

- `create_account_gpu_droplets_keys` (`write`): To add a new SSH public key to your DigitalOcean account, send a POST request to `/v2/account/keys`. Set the `name` attribute to the name you wish to use and the `public_key` attribute to the full public key you are adding.
- `retrieve_account_gpu_droplets_keys` (`read`): To get information about a key, send a GET request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.
  The response will be a JSON object with the key `ssh_key` and value an ssh_key object which contains the standard ssh_key attributes.
- `update_account_gpu_droplets_keys` (`write`): To update the name of an SSH key, send a PUT request to either `/v2/account/keys/$SSH_KEY_ID` or `/v2/account/keys/$SSH_KEY_FINGERPRINT`. Set the `name` attribute to the new name you want to use.
- `list_account_gpu_droplets_keys` (`read`): To list all of the keys in your account, send a GET request to `/v2/account/keys`. The response will be a JSON object with a key set to `ssh_keys`. The value of this will be an array of ssh_key objects, each of which contains the standard ssh_key attributes.
- `delete_account_gpu_droplets_keys` (`write`): To destroy a public SSH key that you have in your account, send a DELETE request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.
  A 204 status will be returned, indicating that the action was successful and that the response body is empty.

### Resource `inference.api_keys`:

- `create_inference_api_keys` (`write`): To create a model API key, send a POST request to `/v2/gen-ai/models/api_keys`.
- `update_inference_api_keys` (`write`): To update a model API key, send a PUT request to `/v2/gen-ai/models/api_keys/{api_key_uuid}`.
- `list_inference_api_keys` (`read`): To list all model API keys, send a GET request to `/v2/gen-ai/models/api_keys`.
- `delete_inference_api_keys` (`write`): To delete an API key for a model, send a DELETE request to `/v2/gen-ai/models/api_keys/{api_key_uuid}`.
- `update_regenerate_inference_api_keys` (`write`): To regenerate a model API key, send a PUT request to `/v2/gen-ai/models/api_keys/{api_key_uuid}/regenerate`.

### Resource `knowledge_bases`:

- `create_knowledge_bases` (`write`): To create a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases`.
- `retrieve_knowledge_bases` (`read`): To retrive information about an existing knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/{uuid}`.
- `update_knowledge_bases` (`write`): To update a knowledge base, send a PUT request to `/v2/gen-ai/knowledge_bases/{uuid}`.
- `list_knowledge_bases` (`read`): To list all knowledge bases, send a GET request to `/v2/gen-ai/knowledge_bases`.
- `delete_knowledge_bases` (`write`): To delete a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/{uuid}`.

### Resource `knowledge_bases.data_sources`:

- `create_knowledge_bases_data_sources` (`write`): To add a data source to a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`.
- `list_knowledge_bases_data_sources` (`read`): To list all data sources for a knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`.
- `delete_knowledge_bases_data_sources` (`write`): To delete a data source from a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}`.

### Resource `knowledge_bases.indexing_jobs`:

- `create_knowledge_bases_indexing_jobs` (`write`): To start an indexing job for a knowledge base, send a POST request to `/v2/gen-ai/indexing_jobs`.
- `retrieve_knowledge_bases_indexing_jobs` (`read`): To get status of an indexing Job for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs/{uuid}`.
- `list_knowledge_bases_indexing_jobs` (`read`): To list all indexing jobs for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs`.
- `retrieve_data_sources_knowledge_bases_indexing_jobs` (`read`): To list all datasources for an indexing job, send a GET request to `/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources`.
- `update_cancel_knowledge_bases_indexing_jobs` (`write`): To cancel an indexing job for a knowledge base, send a PUT request to `/v2/gen-ai/indexing_jobs/{uuid}/cancel`.

### Resource `models`:

- `list_models` (`read`): To list all models, send a GET request to `/v2/gen-ai/models`.

### Resource `models.providers.anthropic`:

- `create_providers_models_anthropic` (`write`): To create an Anthropic API key, send a POST request to `/v2/gen-ai/anthropic/keys`.
- `retrieve_providers_models_anthropic` (`read`): To retrieve details of an Anthropic API key, send a GET request to `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
- `update_providers_models_anthropic` (`write`): To update an Anthropic API key, send a PUT request to `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
- `list_providers_models_anthropic` (`read`): To list all Anthropic API keys, send a GET request to `/v2/gen-ai/anthropic/keys`.
- `delete_providers_models_anthropic` (`write`): To delete an Anthropic API key, send a DELETE request to `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
- `list_agents_providers_models_anthropic` (`read`): List Agents by Anthropic Key.

### Resource `models.providers.openai`:

- `create_providers_models_openai` (`write`): To create an OpenAI API key, send a POST request to `/v2/gen-ai/openai/keys`.
- `retrieve_providers_models_openai` (`read`): To retrieve details of an OpenAI API key, send a GET request to `/v2/gen-ai/openai/keys/{api_key_uuid}`.
- `update_providers_models_openai` (`write`): To update an OpenAI API key, send a PUT request to `/v2/gen-ai/openai/keys/{api_key_uuid}`.
- `list_providers_models_openai` (`read`): To list all OpenAI API keys, send a GET request to `/v2/gen-ai/openai/keys`.
- `delete_providers_models_openai` (`write`): To delete an OpenAI API key, send a DELETE request to `/v2/gen-ai/openai/keys/{api_key_uuid}`.
- `retrieve_agents_providers_models_openai` (`read`): List Agents by OpenAI Key.

### Resource `regions`:

- `list_regions` (`read`): To list all of the regions that are available, send a GET request to `/v2/regions`.
  The response will be a JSON object with a key called `regions`. The value of this will be an array of `region` objects, each of which will contain the standard region attributes.

### Resource `databases.schema_registry.config`:

- `retrieve_schema_registry_databases_config` (`read`): To retrieve the Schema Registry configuration for a Kafka cluster, send a GET request to
  `/v2/databases/$DATABASE_ID/schema-registry/config`.
  The response is a JSON object with a `compatibility_level` key, which is set to an object
  containing any database configuration parameters.
- `update_schema_registry_databases_config` (`write`): To update the Schema Registry configuration for a Kafka cluster, send a PUT request to
  `/v2/databases/$DATABASE_ID/schema-registry/config`.
  The response is a JSON object with a `compatibility_level` key, which is set to an object
  containing any database configuration parameters.
- `retrieve_subject_schema_registry_databases_config` (`read`): To retrieve the Schema Registry configuration for a Subject of a Kafka cluster, send a GET request to
  `/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`.
  The response is a JSON object with a `compatibility_level` key, which is set to an object
  containing any database configuration parameters.
- `update_subject_schema_registry_databases_config` (`write`): To update the Schema Registry configuration for a Subject of a Kafka cluster, send a PUT request to
  `/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`.
  The response is a JSON object with a `compatibility_level` key, which is set to an object
  containing any database configuration parameters.
