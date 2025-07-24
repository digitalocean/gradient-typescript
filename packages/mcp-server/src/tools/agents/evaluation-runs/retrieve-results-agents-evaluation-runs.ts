// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_runs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}',
  operationId: 'genai_get_evaluation_run_prompt_results',
};

export const tool: Tool = {
  name: 'retrieve_results_agents_evaluation_runs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    prompt: {\n      $ref: '#/$defs/api_evaluation_prompt'\n    }\n  },\n  $defs: {\n    api_evaluation_prompt: {\n      type: 'object',\n      properties: {\n        ground_truth: {\n          type: 'string',\n          description: 'The ground truth for the prompt.'\n        },\n        input: {\n          type: 'string'\n        },\n        input_tokens: {\n          type: 'string',\n          description: 'The number of input tokens used in the prompt.'\n        },\n        output: {\n          type: 'string'\n        },\n        output_tokens: {\n          type: 'string',\n          description: 'The number of output tokens used in the prompt.'\n        },\n        prompt_chunks: {\n          type: 'array',\n          description: 'The list of prompt chunks.',\n          items: {\n            type: 'object',\n            properties: {\n              chunk_usage_pct: {\n                type: 'number',\n                description: 'The usage percentage of the chunk.'\n              },\n              chunk_used: {\n                type: 'boolean',\n                description: 'Indicates if the chunk was used in the prompt.'\n              },\n              index_uuid: {\n                type: 'string',\n                description: 'The index uuid (Knowledge Base) of the chunk.'\n              },\n              source_name: {\n                type: 'string',\n                description: 'The source name for the chunk, e.g., the file name or document title.'\n              },\n              text: {\n                type: 'string',\n                description: 'Text content of the chunk.'\n              }\n            }\n          }\n        },\n        prompt_id: {\n          type: 'integer',\n          description: 'Prompt ID'\n        },\n        prompt_level_metric_results: {\n          type: 'array',\n          description: 'The metric results for the prompt.',\n          items: {\n            $ref: '#/$defs/api_evaluation_metric_result'\n          }\n        }\n      }\n    },\n    api_evaluation_metric_result: {\n      type: 'object',\n      properties: {\n        error_description: {\n          type: 'string',\n          description: 'Error description if the metric could not be calculated.'\n        },\n        metric_name: {\n          type: 'string',\n          description: 'Metric name'\n        },\n        metric_value_type: {\n          type: 'string',\n          enum: [            'METRIC_VALUE_TYPE_UNSPECIFIED',\n            'METRIC_VALUE_TYPE_NUMBER',\n            'METRIC_VALUE_TYPE_STRING',\n            'METRIC_VALUE_TYPE_PERCENTAGE'\n          ]\n        },\n        number_value: {\n          type: 'number',\n          description: 'The value of the metric as a number.'\n        },\n        reasoning: {\n          type: 'string',\n          description: 'Reasoning of the metric result.'\n        },\n        string_value: {\n          type: 'string',\n          description: 'The value of the metric as a string.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      evaluation_run_uuid: {
        type: 'string',
      },
      prompt_id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['evaluation_run_uuid', 'prompt_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { prompt_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.agents.evaluationRuns.retrieveResults(prompt_id, body)),
  );
};

export default { metadata, tool, handler };
