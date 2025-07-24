// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.openai',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/openai/keys',
  operationId: 'genai_list_openai_api_keys',
};

export const tool: Tool = {
  name: 'list_providers_models_openai',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all OpenAI API keys, send a GET request to `/v2/gen-ai/openai/keys`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'ListOpenAIAPIKeysOutput is used to return the list of OpenAI API keys for a specific agent.',\n  properties: {\n    api_key_infos: {\n      type: 'array',\n      description: 'Api key infos',\n      items: {\n        $ref: '#/$defs/api_openai_api_key_info'\n      }\n    },\n    links: {\n      $ref: '#/$defs/api_links'\n    },\n    meta: {\n      $ref: '#/$defs/api_meta'\n    }\n  },\n  $defs: {\n    api_openai_api_key_info: {\n      type: 'object',\n      description: 'OpenAI API Key Info',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'Key creation date',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string',\n          description: 'Created by user id from DO'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Key deleted date',\n          format: 'date-time'\n        },\n        models: {\n          type: 'array',\n          description: 'Models supported by the openAI api key',\n          items: {\n            $ref: '#/$defs/api_agent_model'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Name'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Key last updated date',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          description: 'Uuid'\n        }\n      }\n    },\n    api_agent_model: {\n      type: 'object',\n      description: 'Description of a Model',\n      properties: {\n        agreement: {\n          $ref: '#/$defs/api_agreement'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation date / time',\n          format: 'date-time'\n        },\n        inference_name: {\n          type: 'string',\n          description: 'Internally used name'\n        },\n        inference_version: {\n          type: 'string',\n          description: 'Internally used version'\n        },\n        is_foundational: {\n          type: 'boolean',\n          description: 'True if it is a foundational model provided by do'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Additional meta data'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the model'\n        },\n        parent_uuid: {\n          type: 'string',\n          description: 'Unique id of the model, this model is based on'\n        },\n        provider: {\n          type: 'string',\n          enum: [            'MODEL_PROVIDER_DIGITALOCEAN',\n            'MODEL_PROVIDER_ANTHROPIC',\n            'MODEL_PROVIDER_OPENAI'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Last modified',\n          format: 'date-time'\n        },\n        upload_complete: {\n          type: 'boolean',\n          description: 'Model has been fully uploaded'\n        },\n        url: {\n          type: 'string',\n          description: 'Download url'\n        },\n        usecases: {\n          type: 'array',\n          description: 'Usecases of the model',\n          items: {\n            type: 'string',\n            description: '- MODEL_USECASE_UNKNOWN: The use case of the model is unknown\\n - MODEL_USECASE_AGENT: The model maybe used in an agent\\n - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning\\n - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)\\n - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails\\n - MODEL_USECASE_REASONING: The model usecase for reasoning\\n - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference',\n            enum: [              'MODEL_USECASE_UNKNOWN',\n              'MODEL_USECASE_AGENT',\n              'MODEL_USECASE_FINETUNED',\n              'MODEL_USECASE_KNOWLEDGEBASE',\n              'MODEL_USECASE_GUARDRAIL',\n              'MODEL_USECASE_REASONING',\n              'MODEL_USECASE_SERVERLESS'\n            ]\n          }\n        },\n        uuid: {\n          type: 'string',\n          description: 'Unique id'\n        },\n        version: {\n          $ref: '#/$defs/api_model_version'\n        }\n      }\n    },\n    api_agreement: {\n      type: 'object',\n      description: 'Agreement Description',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        },\n        uuid: {\n          type: 'string'\n        }\n      }\n    },\n    api_model_version: {\n      type: 'object',\n      description: 'Version Information about a Model',\n      properties: {\n        major: {\n          type: 'integer',\n          description: 'Major version number'\n        },\n        minor: {\n          type: 'integer',\n          description: 'Minor version number'\n        },\n        patch: {\n          type: 'integer',\n          description: 'Patch version number'\n        }\n      }\n    },\n    api_links: {\n      type: 'object',\n      description: 'Links to other pages',\n      properties: {\n        pages: {\n          type: 'object',\n          description: 'Information about how to reach other pages',\n          properties: {\n            first: {\n              type: 'string',\n              description: 'First page'\n            },\n            last: {\n              type: 'string',\n              description: 'Last page'\n            },\n            next: {\n              type: 'string',\n              description: 'Next page'\n            },\n            previous: {\n              type: 'string',\n              description: 'Previous page'\n            }\n          }\n        }\n      }\n    },\n    api_meta: {\n      type: 'object',\n      description: 'Meta information about the data set',\n      properties: {\n        page: {\n          type: 'integer',\n          description: 'The current page'\n        },\n        pages: {\n          type: 'integer',\n          description: 'Total number of pages'\n        },\n        total: {\n          type: 'integer',\n          description: 'Total amount of items over all pages'\n        }\n      }\n    }\n  }\n}\n```",
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.models.providers.openai.list(body)));
};

export default { metadata, tool, handler };
