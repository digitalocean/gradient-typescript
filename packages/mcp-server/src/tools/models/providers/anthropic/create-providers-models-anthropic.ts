// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.anthropic',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/anthropic/keys',
  operationId: 'create_anthropic_api_key',
};

export const tool: Tool = {
  name: 'create_providers_models_anthropic',
  description: 'To create an Anthropic API key, send a POST request to `/v2/gen-ai/anthropic/keys`.',
  inputSchema: {
    type: 'object',
    properties: {
      api_key: {
        type: 'string',
        title: 'Anthropic API key',
      },
      name: {
        type: 'string',
        title: 'Name of the key',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.models.providers.anthropic.create(body));
};

export default { metadata, tool, handler };
