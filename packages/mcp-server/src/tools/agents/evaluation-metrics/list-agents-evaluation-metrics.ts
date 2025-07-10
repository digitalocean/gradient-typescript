// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/evaluation_metrics',
  operationId: 'list_evaluation_metrics',
};

export const tool: Tool = {
  name: 'list_agents_evaluation_metrics',
  description: 'To list all evaluation metrics, send a GET request to `/v2/gen-ai/evaluation_metrics`.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.agents.evaluationMetrics.list());
};

export default { metadata, tool, handler };
