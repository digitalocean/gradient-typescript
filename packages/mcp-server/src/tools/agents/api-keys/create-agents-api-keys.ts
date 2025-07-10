// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/api_keys',
  operationId: 'create_agent_api_key',
};

export const tool: Tool = {
  name: 'create_agents_api_keys',
  description:
    'To create an agent API key, send a POST request to `/v2/gen-ai/agents/{agent_uuid}/api_keys`.',
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuid: {
        type: 'string',
        title: 'agent id',
      },
      name: {
        type: 'string',
        title: 'a human friendly name to identify the key',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { agent_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.apiKeys.create(agent_uuid, body));
};

export default { metadata, tool, handler };
