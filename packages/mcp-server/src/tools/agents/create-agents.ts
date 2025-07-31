// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/agents',
  operationId: 'genai_create_agent',
};

export const tool: Tool = {
  name: 'create_agents',
  description:
    'To create a new agent, send a POST request to `/v2/gen-ai/agents`. The response body contains a JSON object with the newly created agent object.',
  inputSchema: {
    type: 'object',
    properties: {
      anthropic_key_uuid: {
        type: 'string',
        description: 'Optional Anthropic API key ID to use with Anthropic models',
      },
      description: {
        type: 'string',
        description: 'A text description of the agent, not used in inference',
      },
      instruction: {
        type: 'string',
        description:
          'Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices.',
      },
      knowledge_base_uuid: {
        type: 'array',
        description: 'Ids of the knowledge base(s) to attach to the agent',
        items: {
          type: 'string',
        },
      },
      model_uuid: {
        type: 'string',
        description: 'Identifier for the foundation model.',
      },
      name: {
        type: 'string',
        description: 'Agent name',
      },
      open_ai_key_uuid: {
        type: 'string',
        description: 'Optional OpenAI API key ID to use with OpenAI models',
      },
      project_id: {
        type: 'string',
        description: 'The id of the DigitalOcean project this agent will belong to',
      },
      region: {
        type: 'string',
        description: 'The DigitalOcean region to deploy your agent in',
      },
      tags: {
        type: 'array',
        description: 'Agent tag to organize related resources',
        items: {
          type: 'string',
        },
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agents.create(body));
};

export default { metadata, tool, handler };
