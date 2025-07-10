// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases.indexing_jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/indexing_jobs',
  operationId: 'create_indexing_job',
};

export const tool: Tool = {
  name: 'create_knowledge_bases_indexing_jobs',
  description:
    'To start an indexing job for a knowledge base, send a POST request to `/v2/gen-ai/indexing_jobs`.',
  inputSchema: {
    type: 'object',
    properties: {
      data_source_uuids: {
        type: 'array',
        title: 'list of data source ids to index, if none are provided, all data sources will be indexed',
        items: {
          type: 'string',
        },
      },
      knowledge_base_uuid: {
        type: 'string',
        title: 'knowledge base id',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.knowledgeBases.indexingJobs.create(body));
};

export default { metadata, tool, handler };
