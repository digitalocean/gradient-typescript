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
  httpPath: '/v2/gen-ai/indexing_jobs/{uuid}',
  operationId: 'get_indexing_job',
};

export const tool: Tool = {
  name: 'retrieve_knowledge_bases_indexing_jobs',
  description:
    'To get status of an indexing Job for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs/{uuid}`.',
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
  return asTextContentResult(await client.knowledgeBases.indexingJobs.retrieve(uuid));
};

export default { metadata, tool, handler };
