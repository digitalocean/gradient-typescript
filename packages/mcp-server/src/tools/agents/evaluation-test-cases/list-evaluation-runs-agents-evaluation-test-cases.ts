// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'To list all evaluation runs by test case, send a GET request to `/v2/gen-ai/evaluation_test_cases/{evaluation_test_case_uuid}/evaluation_runs`.',
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
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { evaluation_test_case_uuid, ...body } = args as any;
  return asTextContentResult(
    await client.agents.evaluationTestCases.listEvaluationRuns(evaluation_test_case_uuid, body),
  );
};

export default { metadata, tool, handler };
