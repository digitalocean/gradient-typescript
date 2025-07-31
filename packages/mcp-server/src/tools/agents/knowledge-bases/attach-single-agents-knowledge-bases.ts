// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents.knowledge_bases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}',
  operationId: 'genai_attach_knowledge_base',
};

export const tool: Tool = {
  name: 'attach_single_agents_knowledge_bases',
  description:
    'To attach a knowledge base to an agent, send a POST request to `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}`',
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
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { knowledge_base_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.knowledgeBases.attachSingle(knowledge_base_uuid, body));
};

export default { metadata, tool, handler };
