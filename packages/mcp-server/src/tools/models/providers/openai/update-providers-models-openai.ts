// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.openai',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/openai/keys/{api_key_uuid}',
  operationId: 'update_openai_api_key',
};

export const tool: Tool = {
  name: 'update_providers_models_openai',
  description: 'To update an OpenAI API key, send a PUT request to `/v2/gen-ai/openai/keys/{api_key_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      api_key_uuid: {
        type: 'string',
        title: 'API key ID',
      },
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
  const { api_key_uuid, ...body } = args as any;
  return asTextContentResult(await client.models.providers.openai.update(api_key_uuid, body));
};

export default { metadata, tool, handler };
