// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/workspaces',
  operationId: 'genai_create_workspace',
};

export const tool: Tool = {
  name: 'create_evaluation_metrics_agents_workspaces',
  description:
    'To create a new workspace, send a POST request to `/v2/gen-ai/workspaces`. The response body contains a JSON object with the newly created workspace object.',
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuids: {
        type: 'array',
        description: 'Ids of the agents(s) to attach to the workspace',
        items: {
          type: 'string',
        },
      },
      description: {
        type: 'string',
        description: 'Description of the workspace',
      },
      name: {
        type: 'string',
        description: 'Name of the workspace',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agents.evaluationMetrics.workspaces.create(body));
};

export default { metadata, tool, handler };
