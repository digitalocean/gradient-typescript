// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.knowledge_bases',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}',
  operationId: 'genai_detach_knowledge_base',
};

export const tool: Tool = {
  name: 'detach_agents_knowledge_bases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo detach a knowledge base from an agent, send a DELETE request to `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}`.",
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuid: {
        type: 'string',
      },
      knowledge_base_uuid: {
        type: 'string',
      },
    },
    required: ['agent_uuid', 'knowledge_base_uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { knowledge_base_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.knowledgeBases.detach(knowledge_base_uuid, body));
};

export default { metadata, tool, handler };
