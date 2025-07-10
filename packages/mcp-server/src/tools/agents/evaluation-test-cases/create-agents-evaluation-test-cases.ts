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
  httpPath: '/v2/gen-ai/evaluation_test_cases',
  operationId: 'create_evaluation_test_case',
};

export const tool: Tool = {
  name: 'create_agents_evaluation_test_cases',
  description: 'To create an evaluation test-case send a POST request to `/v2/gen-ai/evaluation_test_cases`.',
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
  const body = args as any;
  return asTextContentResult(await client.agents.evaluationTestCases.create(body));
};

export default { metadata, tool, handler };
