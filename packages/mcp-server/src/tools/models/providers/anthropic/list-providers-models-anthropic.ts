// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.anthropic',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/anthropic/keys',
  operationId: 'list_anthropic_api_keys',
};

export const tool: Tool = {
  name: 'list_providers_models_anthropic',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all Anthropic API keys, send a GET request to `/v2/gen-ai/anthropic/keys`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'ListAnthropicAPIKeysOutput is used to return the list of Anthropic API keys for a specific agent.',\n  properties: {\n    api_key_infos: {\n      type: 'array',\n      title: 'api key infos',\n      items: {\n        $ref: '#/$defs/api_anthropic_api_key_info'\n      }\n    },\n    links: {\n      $ref: '#/$defs/api_links'\n    },\n    meta: {\n      $ref: '#/$defs/api_meta'\n    }\n  },\n  required: [],\n  $defs: {\n    api_anthropic_api_key_info: {\n      type: 'object',\n      title: 'Anthropic API Key Info',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'key creation date',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string',\n          title: 'created by user id from DO'\n        },\n        deleted_at: {\n          type: 'string',\n          title: 'key deleted date',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'name'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'key last updated date',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          title: 'uuid'\n        }\n      },\n      required: []\n    },\n    api_links: {\n      type: 'object',\n      title: 'Links to other pages',\n      properties: {\n        pages: {\n          type: 'object',\n          title: 'Information about how to reach other pages',\n          properties: {\n            first: {\n              type: 'string',\n              title: 'first page'\n            },\n            last: {\n              type: 'string',\n              title: 'last page'\n            },\n            next: {\n              type: 'string',\n              title: 'next page'\n            },\n            previous: {\n              type: 'string',\n              title: 'previous page'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    api_meta: {\n      type: 'object',\n      title: 'Meta information about the data set',\n      properties: {\n        page: {\n          type: 'integer',\n          title: 'the current page'\n        },\n        pages: {\n          type: 'integer',\n          title: 'total number of pages'\n        },\n        total: {\n          type: 'integer',\n          title: 'total amount of items over all pages'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'page number.',
      },
      per_page: {
        type: 'integer',
        description: 'items per page.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.models.providers.anthropic.list(body)));
};

export default { metadata, tool, handler };
