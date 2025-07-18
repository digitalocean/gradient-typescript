// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.anthropic',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/anthropic/keys/{api_key_uuid}',
  operationId: 'get_anthropic_api_key',
};

export const tool: Tool = {
  name: 'retrieve_providers_models_anthropic',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve details of an Anthropic API key, send a GET request to `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    api_key_info: {\n      $ref: '#/$defs/api_anthropic_api_key_info'\n    }\n  },\n  $defs: {\n    api_anthropic_api_key_info: {\n      type: 'object',\n      title: 'Anthropic API Key Info',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'key creation date',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string',\n          title: 'created by user id from DO'\n        },\n        deleted_at: {\n          type: 'string',\n          title: 'key deleted date',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'name'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'key last updated date',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          title: 'uuid'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      api_key_uuid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['api_key_uuid'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { api_key_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.models.providers.anthropic.retrieve(api_key_uuid)),
  );
};

export default { metadata, tool, handler };
