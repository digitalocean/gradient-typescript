// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/agents/{uuid}/versions',
  operationId: 'rollback_to_agent_version',
};

export const tool: Tool = {
  name: 'update_agents_versions',
  description:
    'To update to a specific agent version, send a PUT request to `/v2/gen-ai/agents/{uuid}/versions`.',
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
        title: 'agent unique identifier',
      },
      version_hash: {
        type: 'string',
        title: 'unique identifier',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.versions.update(uuid, body));
};

export default { metadata, tool, handler };
