// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.openai',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/openai/keys',
  operationId: 'create_openai_api_key',
};

export const tool: Tool = {
  name: 'create_providers_models_openai',
  description: 'To create an OpenAI API key, send a POST request to `/v2/gen-ai/openai/keys`.',
  inputSchema: {
    type: 'object',
    properties: {
      api_key: {
        type: 'string',
        title: 'OpenAI API key',
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
  return asTextContentResult(await client.models.providers.openai.create(body));
};

export default { metadata, tool, handler };
