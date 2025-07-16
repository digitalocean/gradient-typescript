// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/agents/{uuid}',
  operationId: 'update_agent',
};

export const tool: Tool = {
  name: 'update_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update an agent, send a PUT request to `/v2/gen-ai/agents/{uuid}`. The response body is a JSON object containing the agent.",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
        title: 'unique agent id',
      },
      anthropic_key_uuid: {
        type: 'string',
        title: 'optional anthropic key uuid for use with anthropic models',
      },
      description: {
        type: 'string',
        title: 'agent description',
      },
      instruction: {
        type: 'string',
        description:
          'Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices.',
      },
      k: {
        type: 'integer',
        title: 'how many results should be considered from an attached knowledge base',
      },
      max_tokens: {
        type: 'integer',
        description:
          'Specifies the maximum number of tokens the model can process in a single input or output, set as a number between 1 and 512. This determines the length of each response.',
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
        title: 'optional OpenAI key uuid for use with OpenAI models',
      },
      project_id: {
        type: 'string',
        title: 'the id of the DigitalOcean project this agent will belong to',
      },
      provide_citations: {
        type: 'boolean',
      },
      retrieval_method: {
        $ref: '#/$defs/api_retrieval_method',
      },
      tags: {
        type: 'array',
        title: 'A set of abitrary tags to organize your agent',
        items: {
          type: 'string',
        },
      },
      temperature: {
        type: 'number',
        description:
          'Controls the model’s creativity, specified as a number between 0 and 1. Lower values produce more predictable and conservative responses, while higher values encourage creativity and variation.',
      },
      top_p: {
        type: 'number',
        description:
          'Defines the cumulative probability threshold for word selection, specified as a number between 0 and 1. Higher values allow for more diverse outputs, while lower values ensure focused and coherent responses.',
      },
    },
    $defs: {
      api_retrieval_method: {
        type: 'string',
        title:
          '- RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown\n - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite\n - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back\n - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries\n - RETRIEVAL_METHOD_NONE: The retrieval method is none',
        enum: [
          'RETRIEVAL_METHOD_UNKNOWN',
          'RETRIEVAL_METHOD_REWRITE',
          'RETRIEVAL_METHOD_STEP_BACK',
          'RETRIEVAL_METHOD_SUB_QUERIES',
          'RETRIEVAL_METHOD_NONE',
        ],
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.update(uuid, body));
};

export default { metadata, tool, handler };
