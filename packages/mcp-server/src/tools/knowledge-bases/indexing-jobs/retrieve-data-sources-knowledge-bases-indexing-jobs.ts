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
  httpPath: '/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources',
  operationId: 'list_indexing_job_data_sources',
};

export const tool: Tool = {
  name: 'retrieve_data_sources_knowledge_bases_indexing_jobs',
  description:
    'To list all datasources for an indexing job, send a GET request to `/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources`.',
  inputSchema: {
    type: 'object',
    properties: {
      indexing_job_uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { indexing_job_uuid, ...body } = args as any;
  return asTextContentResult(await client.knowledgeBases.indexingJobs.retrieveDataSources(indexing_job_uuid));
};

export default { metadata, tool, handler };
