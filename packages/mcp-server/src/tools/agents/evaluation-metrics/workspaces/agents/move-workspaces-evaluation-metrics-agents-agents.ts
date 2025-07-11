// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces.agents',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/workspaces/{workspace_uuid}/agents',
  operationId: 'move_agents_to_workspace',
};

export const tool: Tool = {
  name: 'move_workspaces_evaluation_metrics_agents_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo move all listed agetns a given workspace, send a PUT request to `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_uuid: {
        type: 'string',
        title: 'Workspace uuid to move agents to',
      },
      agent_uuids: {
        type: 'array',
        title: 'agent uuids',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { workspace_uuid, ...body } = args as any;
  return asTextContentResult(
    await client.agents.evaluationMetrics.workspaces.agents.move(workspace_uuid, body),
  );
};

export default { metadata, tool, handler };
