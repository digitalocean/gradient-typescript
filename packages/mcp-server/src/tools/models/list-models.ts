// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/models',
  operationId: 'listModels',
};

export const tool: Tool = {
  name: 'list_models',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists the currently available models, and provides basic information about each one such as the owner and availability.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'Model',\n        description: 'Describes a model offering that can be used with the API.',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The model identifier, which can be referenced in the API endpoints.'\n          },\n          created: {\n            type: 'integer',\n            description: 'The Unix timestamp (in seconds) when the model was created.'\n          },\n          object: {\n            type: 'string',\n            description: 'The object type, which is always \"model\".',\n            enum: [              'model'\n            ]\n          },\n          owned_by: {\n            type: 'string',\n            description: 'The organization that owns the model.'\n          }\n        },\n        required: [          'id',\n          'created',\n          'object',\n          'owned_by'\n        ]\n      }\n    },\n    object: {\n      type: 'string',\n      enum: [        'list'\n      ]\n    }\n  },\n  required: [    'data',\n    'object'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.models.list()));
};

export default { metadata, tool, handler };
