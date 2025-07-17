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
  httpPath: '/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results',
  operationId: 'genai_get_evaluation_run_results',
};

export const tool: Tool = {
  name: 'list_results_agents_evaluation_runs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Gets the full results of an evaluation run with all prompts.',\n  properties: {\n    evaluation_run: {\n      $ref: '#/$defs/api_evaluation_run'\n    },\n    links: {\n      $ref: '#/$defs/api_links'\n    },\n    meta: {\n      $ref: '#/$defs/api_meta'\n    },\n    prompts: {\n      type: 'array',\n      description: 'The prompt level results.',\n      items: {\n        $ref: '#/$defs/api_evaluation_prompt'\n      }\n    }\n  },\n  required: [],\n  $defs: {\n    api_evaluation_run: {\n      type: 'object',\n      properties: {\n        agent_deleted: {\n          type: 'boolean',\n          description: 'Whether agent is deleted'\n        },\n        agent_name: {\n          type: 'string',\n          description: 'Agent name'\n        },\n        agent_uuid: {\n          type: 'string',\n          description: 'Agent UUID.'\n        },\n        agent_version_hash: {\n          type: 'string',\n          description: 'Version hash'\n        },\n        agent_workspace_uuid: {\n          type: 'string',\n          description: 'Agent workspace uuid'\n        },\n        created_by_user_email: {\n          type: 'string'\n        },\n        created_by_user_id: {\n          type: 'string'\n        },\n        error_description: {\n          type: 'string',\n          description: 'The error description'\n        },\n        evaluation_run_uuid: {\n          type: 'string',\n          description: 'Evaluation run UUID.'\n        },\n        evaluation_test_case_workspace_uuid: {\n          type: 'string',\n          description: 'Evaluation test case workspace uuid'\n        },\n        finished_at: {\n          type: 'string',\n          description: 'Run end time.',\n          format: 'date-time'\n        },\n        pass_status: {\n          type: 'boolean',\n          description: 'The pass status of the evaluation run based on the star metric.'\n        },\n        queued_at: {\n          type: 'string',\n          description: 'Run queued time.',\n          format: 'date-time'\n        },\n        run_level_metric_results: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/api_evaluation_metric_result'\n          }\n        },\n        run_name: {\n          type: 'string',\n          description: 'Run name.'\n        },\n        star_metric_result: {\n          $ref: '#/$defs/api_evaluation_metric_result'\n        },\n        started_at: {\n          type: 'string',\n          description: 'Run start time.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'Evaluation Run Statuses',\n          enum: [            'EVALUATION_RUN_STATUS_UNSPECIFIED',\n            'EVALUATION_RUN_QUEUED',\n            'EVALUATION_RUN_RUNNING_DATASET',\n            'EVALUATION_RUN_EVALUATING_RESULTS',\n            'EVALUATION_RUN_CANCELLING',\n            'EVALUATION_RUN_CANCELLED',\n            'EVALUATION_RUN_SUCCESSFUL',\n            'EVALUATION_RUN_PARTIALLY_SUCCESSFUL',\n            'EVALUATION_RUN_FAILED'\n          ]\n        },\n        test_case_description: {\n          type: 'string',\n          description: 'Test case description.'\n        },\n        test_case_name: {\n          type: 'string',\n          description: 'Test case name.'\n        },\n        test_case_uuid: {\n          type: 'string',\n          description: 'Test-case UUID.'\n        },\n        test_case_version: {\n          type: 'integer',\n          description: 'Test-case-version.'\n        }\n      },\n      required: []\n    },\n    api_evaluation_metric_result: {\n      type: 'object',\n      properties: {\n        error_description: {\n          type: 'string',\n          description: 'Error description if the metric could not be calculated.'\n        },\n        metric_name: {\n          type: 'string',\n          description: 'Metric name'\n        },\n        metric_value_type: {\n          type: 'string',\n          enum: [            'METRIC_VALUE_TYPE_UNSPECIFIED',\n            'METRIC_VALUE_TYPE_NUMBER',\n            'METRIC_VALUE_TYPE_STRING',\n            'METRIC_VALUE_TYPE_PERCENTAGE'\n          ]\n        },\n        number_value: {\n          type: 'number',\n          description: 'The value of the metric as a number.'\n        },\n        reasoning: {\n          type: 'string',\n          description: 'Reasoning of the metric result.'\n        },\n        string_value: {\n          type: 'string',\n          description: 'The value of the metric as a string.'\n        }\n      },\n      required: []\n    },\n    api_links: {\n      type: 'object',\n      description: 'Links to other pages',\n      properties: {\n        pages: {\n          type: 'object',\n          description: 'Information about how to reach other pages',\n          properties: {\n            first: {\n              type: 'string',\n              description: 'First page'\n            },\n            last: {\n              type: 'string',\n              description: 'Last page'\n            },\n            next: {\n              type: 'string',\n              description: 'Next page'\n            },\n            previous: {\n              type: 'string',\n              description: 'Previous page'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    api_meta: {\n      type: 'object',\n      description: 'Meta information about the data set',\n      properties: {\n        page: {\n          type: 'integer',\n          description: 'The current page'\n        },\n        pages: {\n          type: 'integer',\n          description: 'Total number of pages'\n        },\n        total: {\n          type: 'integer',\n          description: 'Total amount of items over all pages'\n        }\n      },\n      required: []\n    },\n    api_evaluation_prompt: {\n      type: 'object',\n      properties: {\n        ground_truth: {\n          type: 'string',\n          description: 'The ground truth for the prompt.'\n        },\n        input: {\n          type: 'string'\n        },\n        input_tokens: {\n          type: 'string',\n          description: 'The number of input tokens used in the prompt.'\n        },\n        output: {\n          type: 'string'\n        },\n        output_tokens: {\n          type: 'string',\n          description: 'The number of output tokens used in the prompt.'\n        },\n        prompt_chunks: {\n          type: 'array',\n          description: 'The list of prompt chunks.',\n          items: {\n            type: 'object',\n            properties: {\n              chunk_usage_pct: {\n                type: 'number',\n                description: 'The usage percentage of the chunk.'\n              },\n              chunk_used: {\n                type: 'boolean',\n                description: 'Indicates if the chunk was used in the prompt.'\n              },\n              index_uuid: {\n                type: 'string',\n                description: 'The index uuid (Knowledge Base) of the chunk.'\n              },\n              source_name: {\n                type: 'string',\n                description: 'The source name for the chunk, e.g., the file name or document title.'\n              },\n              text: {\n                type: 'string',\n                description: 'Text content of the chunk.'\n              }\n            },\n            required: []\n          }\n        },\n        prompt_id: {\n          type: 'integer',\n          description: 'Prompt ID'\n        },\n        prompt_level_metric_results: {\n          type: 'array',\n          description: 'The metric results for the prompt.',\n          items: {\n            $ref: '#/$defs/api_evaluation_metric_result'\n          }\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      evaluation_run_uuid: {
        type: 'string',
      },
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
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { evaluation_run_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.agents.evaluationRuns.listResults(evaluation_run_uuid, body)),
  );
};

export default { metadata, tool, handler };
