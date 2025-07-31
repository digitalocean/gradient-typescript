// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/agents/{uuid}',
  operationId: 'genai_delete_agent',
};

export const tool: Tool = {
  name: 'delete_agents',
  description: 'To delete an agent, send a DELETE request to `/v2/gen-ai/agents/{uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
      },
    },
    required: ['uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.delete(uuid));
};

export default { metadata, tool, handler };
