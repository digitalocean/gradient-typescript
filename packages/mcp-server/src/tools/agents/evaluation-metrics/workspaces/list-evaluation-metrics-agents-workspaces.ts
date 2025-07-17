// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/workspaces',
  operationId: 'genai_list_workspaces',
};

export const tool: Tool = {
  name: 'list_evaluation_metrics_agents_workspaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all workspaces, send a GET request to `/v2/gen-ai/workspaces`.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.agents.evaluationMetrics.workspaces.list());
};

export default { metadata, tool, handler };
