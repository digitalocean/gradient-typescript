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
  httpPath: '/v2/gen-ai/evaluation_test_cases/{evaluation_test_case_uuid}/evaluation_runs',
  operationId: 'list_evaluation_runs_by_test_case',
};

export const tool: Tool = {
  name: 'list_evaluation_runs_agents_evaluation_test_cases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all evaluation runs by test case, send a GET request to `/v2/gen-ai/evaluation_test_cases/{evaluation_test_case_uuid}/evaluation_runs`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    evaluation_runs: {\n      type: 'array',\n      description: 'List of evaluation runs.',\n      items: {\n        $ref: '#/$defs/api_evaluation_run'\n      }\n    }\n  },\n  required: [],\n  $defs: {\n    api_evaluation_run: {\n      type: 'object',\n      properties: {\n        agent_deleted: {\n          type: 'boolean',\n          title: 'whether agent is deleted'\n        },\n        agent_name: {\n          type: 'string',\n          title: 'agent name'\n        },\n        agent_uuid: {\n          type: 'string',\n          description: 'Agent UUID.'\n        },\n        agent_version_hash: {\n          type: 'string',\n          title: 'version hash'\n        },\n        agent_workspace_uuid: {\n          type: 'string',\n          title: 'agent workspace uuid'\n        },\n        created_by_user_email: {\n          type: 'string'\n        },\n        created_by_user_id: {\n          type: 'string'\n        },\n        error_description: {\n          type: 'string',\n          title: 'The error description'\n        },\n        evaluation_run_uuid: {\n          type: 'string',\n          description: 'Evaluation run UUID.'\n        },\n        finished_at: {\n          type: 'string',\n          description: 'Run end time.',\n          format: 'date-time'\n        },\n        pass_status: {\n          type: 'boolean',\n          description: 'The pass status of the evaluation run based on the star metric.'\n        },\n        run_level_metric_results: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/api_evaluation_metric_result'\n          }\n        },\n        run_name: {\n          type: 'string',\n          description: 'Run name.'\n        },\n        star_metric_result: {\n          $ref: '#/$defs/api_evaluation_metric_result'\n        },\n        started_at: {\n          type: 'string',\n          description: 'Run start time.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          title: 'Evaluation Run Statuses',\n          enum: [            'EVALUATION_RUN_STATUS_UNSPECIFIED',\n            'EVALUATION_RUN_QUEUED',\n            'EVALUATION_RUN_RUNNING_DATASET',\n            'EVALUATION_RUN_EVALUATING_RESULTS',\n            'EVALUATION_RUN_CANCELLING',\n            'EVALUATION_RUN_CANCELLED',\n            'EVALUATION_RUN_SUCCESSFUL',\n            'EVALUATION_RUN_PARTIALLY_SUCCESSFUL',\n            'EVALUATION_RUN_FAILED'\n          ]\n        },\n        test_case_uuid: {\n          type: 'string',\n          description: 'Test-case UUID.'\n        },\n        test_case_version: {\n          type: 'integer',\n          description: 'Test-case-version.'\n        }\n      },\n      required: []\n    },\n    api_evaluation_metric_result: {\n      type: 'object',\n      properties: {\n        metric_name: {\n          type: 'string',\n          title: 'Metric name'\n        },\n        number_value: {\n          type: 'number',\n          description: 'The value of the metric as a number.'\n        },\n        string_value: {\n          type: 'string',\n          description: 'The value of the metric as a string.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      evaluation_test_case_uuid: {
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
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { evaluation_test_case_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.agents.evaluationTestCases.listEvaluationRuns(evaluation_test_case_uuid, body),
    ),
  );
};

export default { metadata, tool, handler };
