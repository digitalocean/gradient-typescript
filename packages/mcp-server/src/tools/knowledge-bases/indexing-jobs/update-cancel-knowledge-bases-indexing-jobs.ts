// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases.indexing_jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/indexing_jobs/{uuid}/cancel',
  operationId: 'cancel_indexing_job',
};

export const tool: Tool = {
  name: 'update_cancel_knowledge_bases_indexing_jobs',
  description:
    'To cancel an indexing job for a knowledge base, send a PUT request to `/v2/gen-ai/indexing_jobs/{uuid}/cancel`.',
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
        description: 'A unique identifier for an indexing job.',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.knowledgeBases.indexingJobs.updateCancel(uuid, body));
};

export default { metadata, tool, handler };
