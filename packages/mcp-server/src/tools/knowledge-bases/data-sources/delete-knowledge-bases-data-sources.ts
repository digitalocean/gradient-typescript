// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases.data_sources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}',
  operationId: 'delete_knowledge_base_data_source',
};

export const tool: Tool = {
  name: 'delete_knowledge_bases_data_sources',
  description:
    'To delete a data source from a knowledge base, send a DELETE request to `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      knowledge_base_uuid: {
        type: 'string',
      },
      data_source_uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { data_source_uuid, ...body } = args as any;
  return asTextContentResult(await client.knowledgeBases.dataSources.delete(data_source_uuid, body));
};

export default { metadata, tool, handler };
