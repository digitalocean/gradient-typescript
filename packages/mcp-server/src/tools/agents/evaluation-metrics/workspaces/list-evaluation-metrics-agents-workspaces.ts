// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

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
  description: 'To list all workspaces, send a GET request to `/v2/gen-ai/workspaces`.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.agents.evaluationMetrics.workspaces.list());
};

export default { metadata, tool, handler };
