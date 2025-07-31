// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents.functions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}',
  operationId: 'genai_update_agent_function',
};

export const tool: Tool = {
  name: 'update_agents_functions',
  description:
    'To update the function route, send a PUT request to `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`.',
  inputSchema: {
    type: 'object',
    properties: {
      path_agent_uuid: {
        type: 'string',
      },
      path_function_uuid: {
        type: 'string',
      },
      body_agent_uuid: {
        type: 'string',
        description: 'Agent id',
      },
      description: {
        type: 'string',
        description: 'Funciton description',
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
      body_function_uuid: {
        type: 'string',
        description: 'Function id',
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
    required: ['path_agent_uuid', 'path_function_uuid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { function_uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.functions.update(function_uuid, body));
};

export default { metadata, tool, handler };
