// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/agents',
  operationId: 'create_agent',
};

export const tool: Tool = {
  name: 'create_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create a new agent, send a POST request to `/v2/gen-ai/agents`. The response body contains a JSON object with the newly created agent object.",
  inputSchema: {
    type: 'object',
    properties: {
      anthropic_key_uuid: {
        type: 'string',
        title: 'Optional Anthropic API key ID to use with Anthropic models',
      },
      description: {
        type: 'string',
        title: 'a text description of the agent, not used in inference',
      },
      instruction: {
        type: 'string',
        description:
          'Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices.',
      },
      knowledge_base_uuid: {
        type: 'array',
        title: 'ids of the knowledge base(s) to attach to the agent',
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
        title: 'agent name',
      },
      open_ai_key_uuid: {
        type: 'string',
        title: 'Optional OpenAI API key ID to use with OpenAI models',
      },
      project_id: {
        type: 'string',
        title: 'the id of the DigitalOcean project this agent will belong to',
      },
      region: {
        type: 'string',
        title: 'The DigitalOcean region to deploy your agent in',
      },
      tags: {
        type: 'array',
        title: 'Agent tag to organize related resources',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agents.create(body));
};

export default { metadata, tool, handler };
