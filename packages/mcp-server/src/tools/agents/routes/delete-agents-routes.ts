// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}',
  operationId: 'detach_agent',
};

export const tool: Tool = {
  name: 'delete_agents_routes',
  description:
    'To delete an agent route from a parent agent, send a DELETE request to `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      parent_agent_uuid: {
        type: 'string',
      },
      child_agent_uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { child_agent_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.routes.delete(child_agent_uuid, body));
};

export default { metadata, tool, handler };
