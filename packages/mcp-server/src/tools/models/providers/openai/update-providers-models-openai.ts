// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.openai',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/openai/keys/{api_key_uuid}',
  operationId: 'update_openai_api_key',
};

export const tool: Tool = {
  name: 'update_providers_models_openai',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update an OpenAI API key, send a PUT request to `/v2/gen-ai/openai/keys/{api_key_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'UpdateOpenAIAPIKeyOutput is used to return the updated OpenAI API key.',\n  properties: {\n    api_key_info: {\n      $ref: '#/$defs/api_openai_api_key_info'\n    }\n  },\n  required: [],\n  $defs: {\n    api_openai_api_key_info: {\n      type: 'object',\n      title: 'OpenAI API Key Info',\n      properties: {\n        created_at: {\n          type: 'string',\n          title: 'key creation date',\n          format: 'date-time'\n        },\n        created_by: {\n          type: 'string',\n          title: 'created by user id from DO'\n        },\n        deleted_at: {\n          type: 'string',\n          title: 'key deleted date',\n          format: 'date-time'\n        },\n        models: {\n          type: 'array',\n          title: 'models supported by the openAI api key',\n          items: {\n            $ref: '#/$defs/api_agent_model'\n          }\n        },\n        name: {\n          type: 'string',\n          title: 'name'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'key last updated date',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          title: 'uuid'\n        }\n      },\n      required: []\n    },\n    api_agent_model: {\n      type: 'object',\n      title: 'Description of a Model',\n      properties: {\n        agreement: {\n          $ref: '#/$defs/api_agreement'\n        },\n        created_at: {\n          type: 'string',\n          title: 'creation date / time',\n          format: 'date-time'\n        },\n        inference_name: {\n          type: 'string',\n          title: 'internally used name'\n        },\n        inference_version: {\n          type: 'string',\n          title: 'internally used version'\n        },\n        is_foundational: {\n          type: 'boolean',\n          title: 'true if it is a foundational model provided by do'\n        },\n        metadata: {\n          type: 'object',\n          title: 'additional meta data'\n        },\n        name: {\n          type: 'string',\n          title: 'name of the model'\n        },\n        parent_uuid: {\n          type: 'string',\n          title: 'unique id of the model, this model is based on'\n        },\n        provider: {\n          type: 'string',\n          enum: [            'MODEL_PROVIDER_DIGITALOCEAN',\n            'MODEL_PROVIDER_ANTHROPIC',\n            'MODEL_PROVIDER_OPENAI'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          title: 'last modified',\n          format: 'date-time'\n        },\n        upload_complete: {\n          type: 'boolean',\n          title: 'model has been fully uploaded'\n        },\n        url: {\n          type: 'string',\n          title: 'download url'\n        },\n        usecases: {\n          type: 'array',\n          title: 'usecases of the model',\n          items: {\n            type: 'string',\n            title: '- MODEL_USECASE_UNKNOWN: The use case of the model is unknown\\n - MODEL_USECASE_AGENT: The model maybe used in an agent\\n - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning\\n - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)\\n - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails\\n - MODEL_USECASE_REASONING: The model usecase for reasoning\\n - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference',\n            enum: [              'MODEL_USECASE_UNKNOWN',\n              'MODEL_USECASE_AGENT',\n              'MODEL_USECASE_FINETUNED',\n              'MODEL_USECASE_KNOWLEDGEBASE',\n              'MODEL_USECASE_GUARDRAIL',\n              'MODEL_USECASE_REASONING',\n              'MODEL_USECASE_SERVERLESS'\n            ]\n          }\n        },\n        uuid: {\n          type: 'string',\n          title: 'unique id'\n        },\n        version: {\n          $ref: '#/$defs/api_model_version'\n        }\n      },\n      required: []\n    },\n    api_agreement: {\n      type: 'object',\n      title: 'Agreement Description',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        },\n        uuid: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    api_model_version: {\n      type: 'object',\n      title: 'Version Information about a Model',\n      properties: {\n        major: {\n          type: 'integer',\n          title: 'major version number'\n        },\n        minor: {\n          type: 'integer',\n          title: 'minor version number'\n        },\n        patch: {\n          type: 'integer',\n          title: 'patch version number'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      api_key_uuid: {
        type: 'string',
        title: 'API key ID',
      },
      api_key: {
        type: 'string',
        title: 'OpenAI API key',
      },
      name: {
        type: 'string',
        title: 'Name of the key',
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
  const { api_key_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.models.providers.openai.update(api_key_uuid, body)),
  );
};

export default { metadata, tool, handler };
