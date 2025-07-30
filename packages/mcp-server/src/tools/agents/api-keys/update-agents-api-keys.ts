// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents.api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}',
  operationId: 'genai_update_agent_api_key',
};

export const tool: Tool = {
  name: 'update_agents_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update an agent API key, send a PUT request to `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    api_key_info: {\n      $ref: '#/$defs/api_agent_api_key_info'\n    }\n  },\n  $defs: {\n    api_agent_api_key_info: {\n      type: 'object',\n      description: 'Agent API Key Info',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'Creation date',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string',\n          description: 'Created by'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Deleted date',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name'\n        },\n        secret_key: {\n          type: 'string'\n        },\n        uuid: {\n          type: 'string',\n          description: 'Uuid'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_agent_uuid: {
        type: 'string',
      },
      path_api_key_uuid: {
        type: 'string',
      },
      body_agent_uuid: {
        type: 'string',
        description: 'Agent id',
      },
      body_api_key_uuid: {
        type: 'string',
        description: 'API key ID',
      },
      name: {
        type: 'string',
        description: 'Name',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_agent_uuid', 'path_api_key_uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { api_key_uuid, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agents.apiKeys.update(api_key_uuid, body)));
};

export default { metadata, tool, handler };
