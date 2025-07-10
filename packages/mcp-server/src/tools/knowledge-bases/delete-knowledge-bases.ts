// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/knowledge_bases/{uuid}',
  operationId: 'delete_knowledge_base',
};

export const tool: Tool = {
  name: 'delete_knowledge_bases',
  description: 'To delete a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/{uuid}`.',
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
  return asTextContentResult(await client.knowledgeBases.delete(uuid));
};

export default { metadata, tool, handler };
