// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_test_cases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/evaluation_test_cases/{test_case_uuid}',
  operationId: 'update_evaluation_test_case',
};

export const tool: Tool = {
  name: 'update_agents_evaluation_test_cases',
  description:
    'To update an evaluation test-case send a POST request to `/v2/gen-ai/evaluation_test_cases/{test_case_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      test_case_uuid: {
        type: 'string',
        title: 'Test-case UUID to update',
      },
      dataset_uuid: {
        type: 'string',
        description: 'Dataset against which the test‑case is executed.',
      },
      description: {
        type: 'string',
        description: 'Description of the test case.',
      },
      metrics: {
        type: 'object',
        properties: {
          metric_uuids: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      name: {
        type: 'string',
        description: 'Name of the test case.',
      },
      star_metric: {
        $ref: '#/$defs/api_star_metric',
      },
    },
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
          success_threshold_pct: {
            type: 'integer',
            description:
              'The success threshold for the star metric.\nThis is a percentage value between 0 and 100.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { test_case_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.evaluationTestCases.update(test_case_uuid, body));
};

export default { metadata, tool, handler };
