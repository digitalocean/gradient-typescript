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
  httpPath: '/v2/gen-ai/knowledge_bases/{uuid}',
  operationId: 'get_knowledge_base',
};

export const tool: Tool = {
  name: 'retrieve_knowledge_bases',
  description:
    'To retrive information about an existing knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/{uuid}`.',
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
  return asTextContentResult(await client.knowledgeBases.retrieve(uuid));
};

export default { metadata, tool, handler };
