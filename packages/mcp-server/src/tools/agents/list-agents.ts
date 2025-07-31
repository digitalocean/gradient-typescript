// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/agents',
  operationId: 'genai_list_agents',
};

export const tool: Tool = {
  name: 'list_agents',
  description: 'To list all agents, send a GET request to `/v2/gen-ai/agents`.',
  inputSchema: {
    type: 'object',
    properties: {
      only_deployed: {
        type: 'boolean',
        description: 'Only list agents that are deployed.',
      },
      page: {
        type: 'integer',
        description: 'Page number.',
      },
      per_page: {
        type: 'integer',
        description: 'Items per page.',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agents.list(body));
};

export default { metadata, tool, handler };
