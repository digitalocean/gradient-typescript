// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}',
  operationId: 'genai_update_attached_agent',
};

export const tool: Tool = {
  name: 'update_agents_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update an agent route for an agent, send a PUT request to `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Information about an updated linkage',\n  properties: {\n    child_agent_uuid: {\n      type: 'string',\n      description: 'Routed agent id'\n    },\n    parent_agent_uuid: {\n      type: 'string',\n      description: 'A unique identifier for the parent agent.'\n    },\n    rollback: {\n      type: 'boolean'\n    },\n    uuid: {\n      type: 'string',\n      description: 'Unique id of linkage'\n    }\n  }\n}\n```",
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
        description: 'Describes the case in which the child agent should be used',
      },
      body_parent_agent_uuid: {
        type: 'string',
        description: 'A unique identifier for the parent agent.',
      },
      route_name: {
        type: 'string',
        description: 'Route name',
      },
      uuid: {
        type: 'string',
        description: 'Unique id of linkage',
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
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { child_agent_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.agents.routes.update(child_agent_uuid, body)),
  );
};

export default { metadata, tool, handler };
