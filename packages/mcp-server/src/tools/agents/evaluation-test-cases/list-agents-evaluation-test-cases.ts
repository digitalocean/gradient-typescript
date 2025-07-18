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
  httpPath: '/v2/gen-ai/evaluation_test_cases',
  operationId: 'list_evaluation_test_cases',
};

export const tool: Tool = {
  name: 'list_agents_evaluation_test_cases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all evaluation test cases, send a GET request to `/v2/gen-ai/evaluation_test_cases`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    evaluation_test_cases: {\n      type: 'array',\n      title: 'alternative way of authentication for internal usage only - should not be exposed to public api',\n      items: {\n        $ref: '#/$defs/api_evaluation_test_case'\n      }\n    }\n  },\n  $defs: {\n    api_evaluation_test_case: {\n      type: 'object',\n      properties: {\n        archived_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        created_by_user_email: {\n          type: 'string'\n        },\n        created_by_user_id: {\n          type: 'string'\n        },\n        dataset_name: {\n          type: 'string'\n        },\n        dataset_uuid: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        latest_version_number_of_runs: {\n          type: 'integer'\n        },\n        metrics: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/api_evaluation_metric'\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        star_metric: {\n          $ref: '#/$defs/api_star_metric'\n        },\n        test_case_uuid: {\n          type: 'string'\n        },\n        total_runs: {\n          type: 'integer'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        updated_by_user_email: {\n          type: 'string'\n        },\n        updated_by_user_id: {\n          type: 'string'\n        },\n        version: {\n          type: 'integer'\n        }\n      }\n    },\n    api_evaluation_metric: {\n      type: 'object',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        metric_name: {\n          type: 'string'\n        },\n        metric_type: {\n          type: 'string',\n          enum: [            'METRIC_TYPE_UNSPECIFIED',\n            'METRIC_TYPE_GENERAL_QUALITY',\n            'METRIC_TYPE_RAG_AND_TOOL'\n          ]\n        },\n        metric_uuid: {\n          type: 'string'\n        },\n        metric_value_type: {\n          type: 'string',\n          enum: [            'METRIC_VALUE_TYPE_UNSPECIFIED',\n            'METRIC_VALUE_TYPE_NUMBER',\n            'METRIC_VALUE_TYPE_STRING'\n          ]\n        }\n      }\n    },\n    api_star_metric: {\n      type: 'object',\n      properties: {\n        metric_uuid: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        success_threshold_pct: {\n          type: 'integer',\n          description: 'The success threshold for the star metric.\\nThis is a percentage value between 0 and 100.'\n        }\n      }\n    }\n  }\n}\n```",
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
    required: [],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.agents.evaluationTestCases.list()));
};

export default { metadata, tool, handler };
