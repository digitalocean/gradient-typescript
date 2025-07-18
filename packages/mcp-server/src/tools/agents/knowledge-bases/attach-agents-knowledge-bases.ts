// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.knowledge_bases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/knowledge_bases',
  operationId: 'genai_attach_knowledge_bases',
};

export const tool: Tool = {
  name: 'attach_agents_knowledge_bases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo attach knowledge bases to an agent, send a POST request to `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases`",
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuid: {
        type: 'string',
      },
    },
    required: ['agent_uuid'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { agent_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.knowledgeBases.attach(agent_uuid));
};

export default { metadata, tool, handler };
