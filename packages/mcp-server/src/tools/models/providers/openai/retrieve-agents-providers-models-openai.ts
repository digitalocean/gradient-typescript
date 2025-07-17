// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'models.providers.openai',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/openai/keys/{uuid}/agents',
  operationId: 'list_agents_by_openai_key',
};

export const tool: Tool = {
  name: 'retrieve_agents_providers_models_openai',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Agents by OpenAI Key.",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
      },
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
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.models.providers.openai.retrieveAgents(uuid, body));
};

export default { metadata, tool, handler };
