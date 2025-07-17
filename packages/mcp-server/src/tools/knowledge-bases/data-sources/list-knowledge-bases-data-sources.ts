// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases.data_sources',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources',
  operationId: 'genai_list_knowledge_base_data_sources',
};

export const tool: Tool = {
  name: 'list_knowledge_bases_data_sources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all data sources for a knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`.",
  inputSchema: {
    type: 'object',
    properties: {
      knowledge_base_uuid: {
        type: 'string',
      },
      page: {
        type: 'integer',
        description: 'Page number.',
      },
      per_page: {
        type: 'integer',
        description: 'Items per page.',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { knowledge_base_uuid, ...body } = args as any;
  return asTextContentResult(await client.knowledgeBases.dataSources.list(knowledge_base_uuid, body));
};

export default { metadata, tool, handler };
