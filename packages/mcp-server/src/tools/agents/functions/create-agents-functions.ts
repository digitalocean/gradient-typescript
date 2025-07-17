// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.functions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/functions',
  operationId: 'genai_attach_agent_function',
};

export const tool: Tool = {
  name: 'create_agents_functions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create a function route for an agent, send a POST request to `/v2/gen-ai/agents/{agent_uuid}/functions`.",
  inputSchema: {
    type: 'object',
    properties: {
      agent_uuid: {
        type: 'string',
        description: 'Agent id',
      },
      description: {
        type: 'string',
        description: 'Function description',
      },
      faas_name: {
        type: 'string',
        description: 'The name of the function in the DigitalOcean functions platform',
      },
      faas_namespace: {
        type: 'string',
        description: 'The namespace of the function in the DigitalOcean functions platform',
      },
      function_name: {
        type: 'string',
        description: 'Function name',
      },
      input_schema: {
        type: 'object',
        description: 'Describe the input schema for the function so the agent may call it',
      },
      output_schema: {
        type: 'object',
        description: 'Describe the output schema for the function so the agent handle its response',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { agent_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.functions.create(agent_uuid, body));
};

export default { metadata, tool, handler };
