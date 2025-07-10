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
  httpPath: '/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}',
  operationId: 'get_evaluation_run_prompt_results',
};

export const tool: Tool = {
  name: 'retrieve_results_agents_evaluation_runs',
  description:
    'To retrieve results of an evaluation run, send a GET request to `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}`.',
  inputSchema: {
    type: 'object',
    properties: {
      evaluation_run_uuid: {
        type: 'string',
      },
      prompt_id: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { prompt_id, ...body } = args as any;
  return asTextContentResult(await client.agents.evaluationRuns.retrieveResults(prompt_id, body));
};

export default { metadata, tool, handler };
