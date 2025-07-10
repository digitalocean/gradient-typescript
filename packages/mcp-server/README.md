# Gradient AI TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/gradientai-typescript.git
cd gradientai-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export GRADIENTAI_API_KEY="My API Key"
export GRADIENTAI_INFERENCE_KEY="My Inference Key"
export GRADIENTAI_AGENT_KEY="My Agent Key"
export GRADIENT_AI_AGENT_DOMAIN="My Agent Domain"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y gradientai-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "gradientai_api": {
      "command": "node",
      "args": [
        "/path/to/local/gradientai-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "GRADIENTAI_API_KEY": "My API Key",
        "GRADIENTAI_INFERENCE_KEY": "My Inference Key",
        "GRADIENTAI_AGENT_KEY": "My Agent Key",
        "GRADIENT_AI_AGENT_DOMAIN": "My Agent Domain"
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

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "gradientai-mcp/server";

// import a specific tool
import createAgents from "gradientai-mcp/tools/agents/create-agents";

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

### Resource `agents.evaluation_metrics.workspaces`:

- `create_evaluation_metrics_agents_workspaces` (`write`): To create a new workspace, send a POST request to `/v2/gen-ai/workspaces`. The response body contains a JSON object with the newly created workspace object.
- `retrieve_evaluation_metrics_agents_workspaces` (`read`): To retrieve details of a workspace, GET request to `/v2/gen-ai/workspaces/{workspace_uuid}`. The response body is a JSON object containing the workspace.
- `update_evaluation_metrics_agents_workspaces` (`write`): To update a workspace, send a PUT request to `/v2/gen-ai/workspaces/{workspace_uuid}`. The response body is a JSON object containing the workspace.
- `list_evaluation_metrics_agents_workspaces` (`read`): To list all workspaces, send a GET request to `/v2/gen-ai/workspaces`.
- `delete_evaluation_metrics_agents_workspaces` (`write`): To delete a workspace, send a DELETE request to `/v2/gen-ai/workspace/{workspace_uuid}`.
- `list_evaluation_test_cases_evaluation_metrics_agents_workspaces` (`read`): To list all evaluation test cases by a workspace, send a GET request to `/v2/gen-ai/workspaces/{workspace_uuid}/evaluation_test_cases`.

### Resource `agents.evaluation_metrics.workspaces.agents`:

- `list_workspaces_evaluation_metrics_agents_agents` (`read`): To list all agents by a Workspace, send a GET request to `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.
- `move_workspaces_evaluation_metrics_agents_agents` (`write`): To move all listed agetns a given workspace, send a PUT request to `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.

### Resource `agents.evaluation_runs`:

- `create_agents_evaluation_runs` (`write`): To run an evaluation test case, send a POST request to `/v2/gen-ai/evaluation_runs`.
- `retrieve_agents_evaluation_runs` (`read`): To retrive information about an existing evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}`.
- `list_results_agents_evaluation_runs` (`read`): To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results`.
- `retrieve_results_agents_evaluation_runs` (`read`): To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}`.

### Resource `agents.evaluation_test_cases`:

- `create_agents_evaluation_test_cases` (`write`): To create an evaluation test-case send a POST request to `/v2/gen-ai/evaluation_test_cases`.
- `retrieve_agents_evaluation_test_cases` (`read`): To retrive information about an existing evaluation test case, send a GET request to `/v2/gen-ai/evaluation_test_case/{test_case_uuid}`.
- `update_agents_evaluation_test_cases` (`write`): To update an evaluation test-case send a POST request to `/v2/gen-ai/evaluation_test_cases/{test_case_uuid}`.
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

### Resource `regions`:

- `list_regions` (`read`): To list all datacenter regions, send a GET request to `/v2/gen-ai/regions`.

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

### Resource `inference.api_keys`:

- `create_inference_api_keys` (`write`): To create a model API key, send a POST request to `/v2/gen-ai/models/api_keys`.
- `update_inference_api_keys` (`write`): To update a model API key, send a PUT request to `/v2/gen-ai/models/api_keys/{api_key_uuid}`.
- `list_inference_api_keys` (`read`): To list all model API keys, send a GET request to `/v2/gen-ai/models/api_keys`.
- `delete_inference_api_keys` (`write`): To delete an API key for a model, send a DELETE request to `/v2/gen-ai/models/api_keys/{api_key_uuid}`.
- `update_regenerate_inference_api_keys` (`write`): To regenerate a model API key, send a PUT request to `/v2/gen-ai/models/api_keys/{api_key_uuid}/regenerate`.

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
