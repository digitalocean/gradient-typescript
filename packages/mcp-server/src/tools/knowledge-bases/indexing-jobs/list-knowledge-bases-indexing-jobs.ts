// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases.indexing_jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/indexing_jobs',
  operationId: 'list_indexing_jobs',
};

export const tool: Tool = {
  name: 'list_knowledge_bases_indexing_jobs',
  description:
    'To list all indexing jobs for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs`.',
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
  return asTextContentResult(await client.knowledgeBases.indexingJobs.list(body));
};

export default { metadata, tool, handler };
