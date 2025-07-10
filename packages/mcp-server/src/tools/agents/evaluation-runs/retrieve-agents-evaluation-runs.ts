// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_runs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}',
  operationId: 'get_evaluation_run',
};

export const tool: Tool = {
  name: 'retrieve_agents_evaluation_runs',
  description:
    'To retrive information about an existing evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      evaluation_run_uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { evaluation_run_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.evaluationRuns.retrieve(evaluation_run_uuid));
};

export default { metadata, tool, handler };
