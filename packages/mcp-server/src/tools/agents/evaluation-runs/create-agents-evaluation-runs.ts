// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_runs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/evaluation_runs',
  operationId: 'run_evaluation_test_case',
};

export const tool: Tool = {
  name: 'create_agents_evaluation_runs',
  description: 'To run an evaluation test case, send a POST request to `/v2/gen-ai/evaluation_runs`.',
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuids: {
        type: 'array',
        description: 'Agent UUIDs to run the test case against.',
        items: {
          type: 'string',
        },
      },
      run_name: {
        type: 'string',
        description: 'The name of the run.',
      },
      test_case_uuid: {
        type: 'string',
        title: 'Test-case UUID to run',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agents.evaluationRuns.create(body));
};

export default { metadata, tool, handler };
