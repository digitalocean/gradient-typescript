// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/workspaces/{workspace_uuid}',
  operationId: 'delete_workspace',
};

export const tool: Tool = {
  name: 'delete_evaluation_metrics_agents_workspaces',
  description: 'To delete a workspace, send a DELETE request to `/v2/gen-ai/workspace/{workspace_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { workspace_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.evaluationMetrics.workspaces.delete(workspace_uuid));
};

export default { metadata, tool, handler };
