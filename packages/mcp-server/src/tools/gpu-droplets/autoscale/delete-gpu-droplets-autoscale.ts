// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.autoscale',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/droplets/autoscale/{autoscale_pool_id}',
  operationId: 'autoscalepools_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_autoscale',
  description:
    'To destroy an autoscale pool, send a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID` endpoint.\n\nA successful response will include a 202 response code and no content. \n',
  inputSchema: {
    type: 'object',
    properties: {
      autoscale_pool_id: {
        type: 'string',
      },
    },
    required: ['autoscale_pool_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { autoscale_pool_id, ...body } = args as any;
  const response = await client.gpuDroplets.autoscale.delete(autoscale_pool_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
