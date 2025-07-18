// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'inference.api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/models/api_keys/{api_key_uuid}',
  operationId: 'update_model_api_key',
};

export const tool: Tool = {
  name: 'update_inference_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update a model API key, send a PUT request to `/v2/gen-ai/models/api_keys/{api_key_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    api_key_info: {\n      $ref: '#/$defs/api_model_api_key_info'\n    }\n  },\n  $defs: {\n    api_model_api_key_info: {\n      type: 'object',\n      title: 'Model API Key Info',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'creation date',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string',\n          title: 'created by'\n        },\n        deleted_at: {\n          type: 'string',\n          title: 'deleted date',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'name'\n        },\n        secret_key: {\n          type: 'string'\n        },\n        uuid: {\n          type: 'string',\n          title: 'uuid'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_api_key_uuid: {
        type: 'string',
      },
      body_api_key_uuid: {
        type: 'string',
        title: 'API key ID',
      },
      name: {
        type: 'string',
        title: 'name',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_api_key_uuid'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { api_key_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.inference.apiKeys.update(api_key_uuid, body)),
  );
};

export default { metadata, tool, handler };
