// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/evaluation_datasets',
  operationId: 'genai_create_evaluation_dataset',
};

export const tool: Tool = {
  name: 'create_agents_evaluation_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create an evaluation dataset, send a POST request to `/v2/gen-ai/evaluation_datasets`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Output for creating an agent evaluation dataset',\n  properties: {\n    evaluation_dataset_uuid: {\n      type: 'string',\n      description: 'Evaluation dataset uuid.'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file_upload_dataset: {
        $ref: '#/$defs/api_file_upload_data_source',
      },
      name: {
        type: 'string',
        description: 'The name of the agent evaluation dataset.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      api_file_upload_data_source: {
        type: 'object',
        description: 'File to upload as data source for knowledge base.',
        properties: {
          original_file_name: {
            type: 'string',
            description: 'The original file name',
          },
          size_in_bytes: {
            type: 'string',
            description: 'The size of the file in bytes',
          },
          stored_object_key: {
            type: 'string',
            description: 'The object key the file was stored as',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agents.evaluationDatasets.create(body)));
};

export default { metadata, tool, handler };
