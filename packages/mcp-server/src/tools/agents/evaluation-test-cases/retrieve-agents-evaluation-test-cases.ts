// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_test_cases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/evaluation_test_cases/{test_case_uuid}',
  operationId: 'genai_get_evaluation_test_case',
};

export const tool: Tool = {
  name: 'retrieve_agents_evaluation_test_cases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrive information about an existing evaluation test case, send a GET request to `/v2/gen-ai/evaluation_test_case/{test_case_uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    evaluation_test_case: {\n      $ref: '#/$defs/api_evaluation_test_case'\n    }\n  },\n  $defs: {\n    api_evaluation_test_case: {\n      type: 'object',\n      properties: {\n        archived_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        created_by_user_email: {\n          type: 'string'\n        },\n        created_by_user_id: {\n          type: 'string'\n        },\n        dataset: {\n          type: 'object',\n          properties: {\n            created_at: {\n              type: 'string',\n              description: 'Time created at.',\n              format: 'date-time'\n            },\n            dataset_name: {\n              type: 'string',\n              description: 'Name of the dataset.'\n            },\n            dataset_uuid: {\n              type: 'string',\n              description: 'UUID of the dataset.'\n            },\n            file_size: {\n              type: 'string',\n              description: 'The size of the dataset uploaded file in bytes.'\n            },\n            has_ground_truth: {\n              type: 'boolean',\n              description: 'Does the dataset have a ground truth column?'\n            },\n            row_count: {\n              type: 'integer',\n              description: 'Number of rows in the dataset.'\n            }\n          }\n        },\n        dataset_name: {\n          type: 'string'\n        },\n        dataset_uuid: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        latest_version_number_of_runs: {\n          type: 'integer'\n        },\n        metrics: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/api_evaluation_metric'\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        star_metric: {\n          $ref: '#/$defs/api_star_metric'\n        },\n        test_case_uuid: {\n          type: 'string'\n        },\n        total_runs: {\n          type: 'integer'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        updated_by_user_email: {\n          type: 'string'\n        },\n        updated_by_user_id: {\n          type: 'string'\n        },\n        version: {\n          type: 'integer'\n        }\n      }\n    },\n    api_evaluation_metric: {\n      type: 'object',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        inverted: {\n          type: 'boolean',\n          description: 'If true, the metric is inverted, meaning that a lower value is better.'\n        },\n        metric_name: {\n          type: 'string'\n        },\n        metric_type: {\n          type: 'string',\n          enum: [            'METRIC_TYPE_UNSPECIFIED',\n            'METRIC_TYPE_GENERAL_QUALITY',\n            'METRIC_TYPE_RAG_AND_TOOL'\n          ]\n        },\n        metric_uuid: {\n          type: 'string'\n        },\n        metric_value_type: {\n          type: 'string',\n          enum: [            'METRIC_VALUE_TYPE_UNSPECIFIED',\n            'METRIC_VALUE_TYPE_NUMBER',\n            'METRIC_VALUE_TYPE_STRING',\n            'METRIC_VALUE_TYPE_PERCENTAGE'\n          ]\n        },\n        range_max: {\n          type: 'number',\n          description: 'The maximum value for the metric.'\n        },\n        range_min: {\n          type: 'number',\n          description: 'The minimum value for the metric.'\n        }\n      }\n    },\n    api_star_metric: {\n      type: 'object',\n      properties: {\n        metric_uuid: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        success_threshold: {\n          type: 'number',\n          description: 'The success threshold for the star metric.\\nThis is a value that the metric must reach to be considered successful.'\n        },\n        success_threshold_pct: {\n          type: 'integer',\n          description: 'The success threshold for the star metric.\\nThis is a percentage value between 0 and 100.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      test_case_uuid: {
        type: 'string',
      },
      evaluation_test_case_version: {
        type: 'integer',
        description: 'Version of the test case.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['test_case_uuid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { test_case_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.agents.evaluationTestCases.retrieve(test_case_uuid, body)),
  );
};

export default { metadata, tool, handler };
