// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'inference.api_keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/models/api_keys',
  operationId: 'genai_list_model_api_keys',
};

export const tool: Tool = {
  name: 'list_inference_api_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all model API keys, send a GET request to `/v2/gen-ai/models/api_keys`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    api_key_infos: {\n      type: 'array',\n      description: 'Api key infos',\n      items: {\n        $ref: '#/$defs/api_model_api_key_info'\n      }\n    },\n    links: {\n      $ref: '#/$defs/api_links'\n    },\n    meta: {\n      $ref: '#/$defs/api_meta'\n    }\n  },\n  $defs: {\n    api_model_api_key_info: {\n      type: 'object',\n      description: 'Model API Key Info',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'Creation date',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string',\n          description: 'Created by'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Deleted date',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name'\n        },\n        secret_key: {\n          type: 'string'\n        },\n        uuid: {\n          type: 'string',\n          description: 'Uuid'\n        }\n      }\n    },\n    api_links: {\n      type: 'object',\n      description: 'Links to other pages',\n      properties: {\n        pages: {\n          type: 'object',\n          description: 'Information about how to reach other pages',\n          properties: {\n            first: {\n              type: 'string',\n              description: 'First page'\n            },\n            last: {\n              type: 'string',\n              description: 'Last page'\n            },\n            next: {\n              type: 'string',\n              description: 'Next page'\n            },\n            previous: {\n              type: 'string',\n              description: 'Previous page'\n            }\n          }\n        }\n      }\n    },\n    api_meta: {\n      type: 'object',\n      description: 'Meta information about the data set',\n      properties: {\n        page: {\n          type: 'integer',\n          description: 'The current page'\n        },\n        pages: {\n          type: 'integer',\n          description: 'Total number of pages'\n        },\n        total: {\n          type: 'integer',\n          description: 'Total amount of items over all pages'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'Page number.',
      },
      per_page: {
        type: 'integer',
        description: 'Items per page.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.inference.apiKeys.list(body)));
};

export default { metadata, tool, handler };
