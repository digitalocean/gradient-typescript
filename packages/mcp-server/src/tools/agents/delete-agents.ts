// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/agents/{uuid}',
  operationId: 'delete_agent',
};

export const tool: Tool = {
  name: 'delete_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete an agent, send a DELETE request to `/v2/gen-ai/agents/{uuid}`.",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.delete(uuid));
};

export default { metadata, tool, handler };
