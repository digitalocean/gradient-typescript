// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'models.providers.anthropic',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/anthropic/keys/{uuid}/agents',
  operationId: 'genai_list_agents_by_anthropic_key',
};

export const tool: Tool = {
  name: 'list_agents_providers_models_anthropic',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Agents by Anthropic Key.",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
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
    required: ['uuid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.models.providers.anthropic.listAgents(uuid, body));
};

export default { metadata, tool, handler };
