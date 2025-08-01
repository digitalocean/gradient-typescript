// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}',
  operationId: 'genai_attach_agent',
};

export const tool: Tool = {
  name: 'add_agents_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo add an agent route to an agent, send a POST request to `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Information about a newly linked agent',\n  properties: {\n    child_agent_uuid: {\n      type: 'string',\n      description: 'Routed agent id'\n    },\n    parent_agent_uuid: {\n      type: 'string',\n      description: 'A unique identifier for the parent agent.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_parent_agent_uuid: {
        type: 'string',
      },
      path_child_agent_uuid: {
        type: 'string',
      },
      body_child_agent_uuid: {
        type: 'string',
        description: 'Routed agent id',
      },
      if_case: {
        type: 'string',
      },
      body_parent_agent_uuid: {
        type: 'string',
        description: 'A unique identifier for the parent agent.',
      },
      route_name: {
        type: 'string',
        description: 'Name of route',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_parent_agent_uuid', 'path_child_agent_uuid'],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { child_agent_uuid, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.agents.routes.add(child_agent_uuid, body)),
  );
};

export default { metadata, tool, handler };
