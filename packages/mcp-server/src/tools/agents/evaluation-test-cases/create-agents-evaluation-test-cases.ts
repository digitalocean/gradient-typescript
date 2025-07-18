// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_test_cases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/evaluation_test_cases',
  operationId: 'genai_create_evaluation_test_case',
};

export const tool: Tool = {
  name: 'create_agents_evaluation_test_cases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create an evaluation test-case send a POST request to `/v2/gen-ai/evaluation_test_cases`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    test_case_uuid: {\n      type: 'string',\n      description: 'Test‑case UUID.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset_uuid: {
        type: 'string',
        description: 'Dataset against which the test‑case is executed.',
      },
      description: {
        type: 'string',
        description: 'Description of the test case.',
      },
      metrics: {
        type: 'array',
        description: 'Full metric list to use for evaluation test case.',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
        description: 'Name of the test case.',
      },
      star_metric: {
        $ref: '#/$defs/api_star_metric',
      },
      workspace_uuid: {
        type: 'string',
        description: 'The workspace uuid.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      api_star_metric: {
        type: 'object',
        properties: {
          metric_uuid: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          success_threshold: {
            type: 'number',
            description:
              'The success threshold for the star metric.\nThis is a value that the metric must reach to be considered successful.',
          },
          success_threshold_pct: {
            type: 'integer',
            description:
              'The success threshold for the star metric.\nThis is a percentage value between 0 and 100.',
          },
        },
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agents.evaluationTestCases.create(body)));
};

export default { metadata, tool, handler };
