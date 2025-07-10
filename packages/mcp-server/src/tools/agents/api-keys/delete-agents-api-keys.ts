// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}',
  operationId: 'delete_agent_api_key',
};

export const tool: Tool = {
  name: 'delete_agents_api_keys',
  description:
    'To delete an API key for an agent, send a DELETE request to `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuid: {
        type: 'string',
      },
      api_key_uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { api_key_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.apiKeys.delete(api_key_uuid, body));
};

export default { metadata, tool, handler };
