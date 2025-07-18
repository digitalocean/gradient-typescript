// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/agents/{uuid}/deployment_visibility',
  operationId: 'update_agent_deployment_visibility',
};

export const tool: Tool = {
  name: 'update_status_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck whether an agent is public or private. To update the agent status, send a PUT request to `/v2/gen-ai/agents/{uuid}/deployment_visibility`.",
  inputSchema: {
    type: 'object',
    properties: {
      path_uuid: {
        type: 'string',
      },
      body_uuid: {
        type: 'string',
        title: 'unique id',
      },
      visibility: {
        $ref: '#/$defs/api_deployment_visibility',
      },
    },
    required: ['path_uuid'],
    $defs: {
      api_deployment_visibility: {
        type: 'string',
        title:
          '- VISIBILITY_UNKNOWN: The status of the deployment is unknown\n - VISIBILITY_DISABLED: The deployment is disabled and will no longer service requests\n - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state\n - VISIBILITY_PUBLIC: The deployment is public and will service requests from the public internet\n - VISIBILITY_PRIVATE: The deployment is private and will only service requests from other agents, or through API keys',
        enum: [
          'VISIBILITY_UNKNOWN',
          'VISIBILITY_DISABLED',
          'VISIBILITY_PLAYGROUND',
          'VISIBILITY_PUBLIC',
          'VISIBILITY_PRIVATE',
        ],
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.agents.updateStatus(uuid, body));
};

export default { metadata, tool, handler };
