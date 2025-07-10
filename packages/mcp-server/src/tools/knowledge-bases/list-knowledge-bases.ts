// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/knowledge_bases',
  operationId: 'list_knowledge_bases',
};

export const tool: Tool = {
  name: 'list_knowledge_bases',
  description: 'To list all knowledge bases, send a GET request to `/v2/gen-ai/knowledge_bases`.',
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return asTextContentResult(await client.knowledgeBases.list(body));
};

export default { metadata, tool, handler };
