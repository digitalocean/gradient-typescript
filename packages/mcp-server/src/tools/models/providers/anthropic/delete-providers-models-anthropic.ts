// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.anthropic',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/anthropic/keys/{api_key_uuid}',
  operationId: 'delete_anthropic_api_key',
};

export const tool: Tool = {
  name: 'delete_providers_models_anthropic',
  description:
    'To delete an Anthropic API key, send a DELETE request to `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      api_key_uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { api_key_uuid, ...body } = args as any;
  return asTextContentResult(await client.models.providers.anthropic.delete(api_key_uuid));
};

export default { metadata, tool, handler };
