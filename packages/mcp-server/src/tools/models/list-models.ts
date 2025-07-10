// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/models',
  operationId: 'list_models',
};

export const tool: Tool = {
  name: 'list_models',
  description: 'To list all models, send a GET request to `/v2/gen-ai/models`.',
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
      public_only: {
        type: 'boolean',
        description: 'only include models that are publicly available.',
      },
      usecases: {
        type: 'array',
        description:
          'include only models defined for the listed usecases.\n\n - MODEL_USECASE_UNKNOWN: The use case of the model is unknown\n - MODEL_USECASE_AGENT: The model maybe used in an agent\n - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning\n - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)\n - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails\n - MODEL_USECASE_REASONING: The model usecase for reasoning\n - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference',
        items: {
          type: 'string',
          enum: [
            'MODEL_USECASE_UNKNOWN',
            'MODEL_USECASE_AGENT',
            'MODEL_USECASE_FINETUNED',
            'MODEL_USECASE_KNOWLEDGEBASE',
            'MODEL_USECASE_GUARDRAIL',
            'MODEL_USECASE_REASONING',
            'MODEL_USECASE_SERVERLESS',
          ],
        },
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.models.list(body));
};

export default { metadata, tool, handler };
