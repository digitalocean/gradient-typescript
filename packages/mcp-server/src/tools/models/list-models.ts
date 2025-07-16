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
  httpPath: '/v2/gen-ai/models',
  operationId: 'list_models',
};

export const tool: Tool = {
  name: 'list_models',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all models, send a GET request to `/v2/gen-ai/models`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'a list of models',\n  properties: {\n    links: {\n      $ref: '#/$defs/api_links'\n    },\n    meta: {\n      $ref: '#/$defs/api_meta'\n    },\n    models: {\n      type: 'array',\n      title: 'the models',\n      items: {\n        $ref: '#/$defs/api_model'\n      }\n    }\n  },\n  required: [],\n  $defs: {\n    api_links: {\n      type: 'object',\n      title: 'Links to other pages',\n      properties: {\n        pages: {\n          type: 'object',\n          title: 'Information about how to reach other pages',\n          properties: {\n            first: {\n              type: 'string',\n              title: 'first page'\n            },\n            last: {\n              type: 'string',\n              title: 'last page'\n            },\n            next: {\n              type: 'string',\n              title: 'next page'\n            },\n            previous: {\n              type: 'string',\n              title: 'previous page'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    api_meta: {\n      type: 'object',\n      title: 'Meta information about the data set',\n      properties: {\n        page: {\n          type: 'integer',\n          title: 'the current page'\n        },\n        pages: {\n          type: 'integer',\n          title: 'total number of pages'\n        },\n        total: {\n          type: 'integer',\n          title: 'total amount of items over all pages'\n        }\n      },\n      required: []\n    },\n    api_model: {\n      type: 'object',\n      title: 'A machine learning model stored on the GenAI platform',\n      properties: {\n        agreement: {\n          $ref: '#/$defs/api_agreement'\n        },\n        created_at: {\n          type: 'string',\n          title: 'creation date / time',\n          format: 'date-time'\n        },\n        is_foundational: {\n          type: 'boolean',\n          title: 'true if it is a foundational model provided by do'\n        },\n        name: {\n          type: 'string',\n          title: 'name of the model'\n        },\n        parent_uuid: {\n          type: 'string',\n          title: 'unique id of the model, this model is based on'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'last modified',\n          format: 'date-time'\n        },\n        upload_complete: {\n          type: 'boolean',\n          title: 'model has been fully uploaded'\n        },\n        url: {\n          type: 'string',\n          title: 'download url'\n        },\n        uuid: {\n          type: 'string',\n          title: 'unique id'\n        },\n        version: {\n          $ref: '#/$defs/api_model_version'\n        }\n      },\n      required: []\n    },\n    api_agreement: {\n      type: 'object',\n      title: 'Agreement Description',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        },\n        uuid: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    api_model_version: {\n      type: 'object',\n      title: 'Version Information about a Model',\n      properties: {\n        major: {\n          type: 'integer',\n          title: 'major version number'\n        },\n        minor: {\n          type: 'integer',\n          title: 'minor version number'\n        },\n        patch: {\n          type: 'integer',\n          title: 'patch version number'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
      public_only: {
        type: 'boolean',
        description: 'only include models that are publicly available.',
      },
      usecases: {
        type: 'array',
        description:
          'include only models defined for the listed usecases.\n\n - MODEL_USECASE_UNKNOWN: The use case of the model is unknown\n - MODEL_USECASE_AGENT: The model maybe used in an agent\n - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning\n - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)\n - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails\n - MODEL_USECASE_REASONING: The model usecase for reasoning\n - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference',
        items: {
          type: 'string',
          enum: [
            'MODEL_USECASE_UNKNOWN',
            'MODEL_USECASE_AGENT',
            'MODEL_USECASE_FINETUNED',
            'MODEL_USECASE_KNOWLEDGEBASE',
            'MODEL_USECASE_GUARDRAIL',
            'MODEL_USECASE_REASONING',
            'MODEL_USECASE_SERVERLESS',
          ],
        },
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
  return asTextContentResult(await maybeFilter(args, await client.models.list(body)));
};

export default { metadata, tool, handler };
