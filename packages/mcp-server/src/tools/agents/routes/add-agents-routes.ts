// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}',
  operationId: 'attach_agent',
};

export const tool: Tool = {
  name: 'add_agents_routes',
  description:
    'To add an agent route to an agent, send a POST request to `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.',
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
      },
      route_name: {
        type: 'string',
        title: 'name of route',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { child_agent_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.routes.add(child_agent_uuid, body));
};

export default { metadata, tool, handler };
