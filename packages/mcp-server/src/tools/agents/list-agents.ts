// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/agents',
  operationId: 'list_agents',
};

export const tool: Tool = {
  name: 'list_agents',
  description: 'To list all agents, send a GET request to `/v2/gen-ai/agents`.',
  inputSchema: {
    type: 'object',
    properties: {
      only_deployed: {
        type: 'boolean',
        description: 'only list agents that are deployed.',
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
  const body = args as any;
  return asTextContentResult(await client.agents.list(body));
};

export default { metadata, tool, handler };
