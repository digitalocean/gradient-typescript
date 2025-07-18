// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.functions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}',
  operationId: 'genai_detach_agent_function',
};

export const tool: Tool = {
  name: 'delete_agents_functions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete a function route from an agent, send a DELETE request to `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`.",
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuid: {
        type: 'string',
      },
      function_uuid: {
        type: 'string',
      },
    },
    required: ['agent_uuid', 'function_uuid'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { function_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.functions.delete(function_uuid, body));
};

export default { metadata, tool, handler };
