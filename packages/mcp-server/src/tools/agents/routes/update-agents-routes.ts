// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}',
  operationId: 'update_attached_agent',
};

export const tool: Tool = {
  name: 'update_agents_routes',
  description:
    'To update an agent route for an agent, send a PUT request to `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      parent_agent_uuid: {
        type: 'string',
        description: 'A unique identifier for the parent agent.',
      },
      child_agent_uuid: {
        type: 'string',
        title: 'routed agent id',
      },
      if_case: {
        type: 'string',
        title: 'describes the case in which the child agent should be used',
      },
      route_name: {
        type: 'string',
        title: 'route name',
      },
      uuid: {
        type: 'string',
        title: 'unique id of linkage',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { child_agent_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.routes.update(child_agent_uuid, body));
};

export default { metadata, tool, handler };
