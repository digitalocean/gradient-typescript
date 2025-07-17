// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/workspaces/{workspace_uuid}',
  operationId: 'get_workspace',
};

export const tool: Tool = {
  name: 'retrieve_evaluation_metrics_agents_workspaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve details of a workspace, GET request to `/v2/gen-ai/workspaces/{workspace_uuid}`. The response body is a JSON object containing the workspace.",
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
  return asTextContentResult(await client.agents.evaluationMetrics.workspaces.retrieve(workspace_uuid));
};

export default { metadata, tool, handler };
