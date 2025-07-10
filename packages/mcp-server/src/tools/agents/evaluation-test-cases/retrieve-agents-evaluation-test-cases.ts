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
  httpPath: '/v2/gen-ai/evaluation_test_cases/{test_case_uuid}',
  operationId: 'get_evaluation_test_case',
};

export const tool: Tool = {
  name: 'retrieve_agents_evaluation_test_cases',
  description:
    'To retrive information about an existing evaluation test case, send a GET request to `/v2/gen-ai/evaluation_test_case/{test_case_uuid}`.',
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
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { test_case_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.evaluationTestCases.retrieve(test_case_uuid, body));
};

export default { metadata, tool, handler };
