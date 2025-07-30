// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/workspaces/{workspace_uuid}',
  operationId: 'genai_update_workspace',
};

export const tool: Tool = {
  name: 'update_evaluation_metrics_agents_workspaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update a workspace, send a PUT request to `/v2/gen-ai/workspaces/{workspace_uuid}`. The response body is a JSON object containing the workspace.",
  inputSchema: {
    type: 'object',
    properties: {
      path_workspace_uuid: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'The new description of the workspace',
      },
      name: {
        type: 'string',
        description: 'The new name of the workspace',
      },
      body_workspace_uuid: {
        type: 'string',
        description: 'Workspace UUID.',
      },
    },
    required: ['path_workspace_uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { workspace_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.evaluationMetrics.workspaces.update(workspace_uuid, body));
};

export default { metadata, tool, handler };
