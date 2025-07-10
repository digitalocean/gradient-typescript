// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'inference.api_keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/models/api_keys',
  operationId: 'create_model_api_key',
};

export const tool: Tool = {
  name: 'create_inference_api_keys',
  description: 'To create a model API key, send a POST request to `/v2/gen-ai/models/api_keys`.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'a human friendly name to identify the key',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.inference.apiKeys.create(body));
};

export default { metadata, tool, handler };
