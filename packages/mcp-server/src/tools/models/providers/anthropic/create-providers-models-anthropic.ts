// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'models.providers.anthropic',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/anthropic/keys',
  operationId: 'genai_create_anthropic_api_key',
};

export const tool: Tool = {
  name: 'create_providers_models_anthropic',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create an Anthropic API key, send a POST request to `/v2/gen-ai/anthropic/keys`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'CreateAnthropicAPIKeyOutput is used to return the newly created Anthropic API key.',\n  properties: {\n    api_key_info: {\n      $ref: '#/$defs/api_anthropic_api_key_info'\n    }\n  },\n  $defs: {\n    api_anthropic_api_key_info: {\n      type: 'object',\n      description: 'Anthropic API Key Info',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'Key creation date',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string',\n          description: 'Created by user id from DO'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Key deleted date',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Key last updated date',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          description: 'Uuid'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      api_key: {
        type: 'string',
        description: 'Anthropic API key',
      },
      name: {
        type: 'string',
        description: 'Name of the key',
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
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.models.providers.anthropic.create(body)));
};

export default { metadata, tool, handler };
