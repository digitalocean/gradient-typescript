// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.anthropic',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/anthropic/keys/{uuid}/agents',
  operationId: 'list_agents_by_anthropic_key',
};

export const tool: Tool = {
  name: 'list_agents_providers_models_anthropic',
  description: 'List Agents by Anthropic Key.',
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
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
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.models.providers.anthropic.listAgents(uuid, body));
};

export default { metadata, tool, handler };
