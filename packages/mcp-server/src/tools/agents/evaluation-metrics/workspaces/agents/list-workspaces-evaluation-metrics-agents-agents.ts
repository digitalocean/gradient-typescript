// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces.agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/workspaces/{workspace_uuid}/agents',
  operationId: 'list_agents_by_workspace',
};

export const tool: Tool = {
  name: 'list_workspaces_evaluation_metrics_agents_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all agents by a Workspace, send a GET request to `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.",
  inputSchema: {
    type: 'object',
    properties: {
      workspace_uuid: {
        type: 'string',
      },
      field_mask: {
        type: 'object',
        properties: {
          paths: {
            type: 'array',
            description: 'The set of field mask paths.',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      only_deployed: {
        type: 'boolean',
        description: 'Only list agents that are deployed.',
      },
      page: {
        type: 'integer',
        description: 'page number.',
      },
      per_page: {
        type: 'integer',
        description: 'items per page.',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { workspace_uuid, ...body } = args as any;
  return asTextContentResult(
    await client.agents.evaluationMetrics.workspaces.agents.list(workspace_uuid, body),
  );
};

export default { metadata, tool, handler };
