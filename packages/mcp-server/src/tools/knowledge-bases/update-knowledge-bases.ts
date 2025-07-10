// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/knowledge_bases/{uuid}',
  operationId: 'update_knowledge_base',
};

export const tool: Tool = {
  name: 'update_knowledge_bases',
  description: 'To update a knowledge base, send a PUT request to `/v2/gen-ai/knowledge_bases/{uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
        title: 'knowledge base id',
      },
      database_id: {
        type: 'string',
        description: 'the id of the DigitalOcean database this knowledge base will use, optiona.',
      },
      embedding_model_uuid: {
        type: 'string',
        description: 'Identifier for the foundation model.',
      },
      name: {
        type: 'string',
        title: 'knowledge base name',
      },
      project_id: {
        type: 'string',
        title: 'the id of the DigitalOcean project this knowledge base will belong to',
      },
      tags: {
        type: 'array',
        description: 'Tags to organize your knowledge base.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.knowledgeBases.update(uuid, body));
};

export default { metadata, tool, handler };
