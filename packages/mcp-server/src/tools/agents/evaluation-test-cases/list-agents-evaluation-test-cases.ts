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
  httpPath: '/v2/gen-ai/evaluation_test_cases',
  operationId: 'list_evaluation_test_cases',
};

export const tool: Tool = {
  name: 'list_agents_evaluation_test_cases',
  description: 'To list all evaluation test cases, send a GET request to `/v2/gen-ai/evaluation_test_cases`.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.agents.evaluationTestCases.list());
};

export default { metadata, tool, handler };
