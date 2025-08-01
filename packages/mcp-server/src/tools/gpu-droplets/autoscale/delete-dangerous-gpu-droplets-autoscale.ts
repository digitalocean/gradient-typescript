// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.autoscale',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/droplets/autoscale/{autoscale_pool_id}/dangerous',
  operationId: 'autoscalepools_delete_dangerous',
};

export const tool: Tool = {
  name: 'delete_dangerous_gpu_droplets_autoscale',
  description:
    'To destroy an autoscale pool and its associated resources (Droplets),\nsend a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/dangerous` endpoint.\n',
  inputSchema: {
    type: 'object',
    properties: {
      autoscale_pool_id: {
        type: 'string',
      },
      'X-Dangerous': {
        type: 'boolean',
      },
    },
    required: ['autoscale_pool_id', 'X-Dangerous'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { autoscale_pool_id, ...body } = args as any;
  const response = await client.gpuDroplets.autoscale.deleteDangerous(autoscale_pool_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
