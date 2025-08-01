// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/droplets/{droplet_id}',
  operationId: 'droplets_destroy',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets',
  description:
    'To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.\n\nA successful request will receive a 204 status code with no body in response.\nThis indicates that the request was processed successfully.\n',
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
      },
    },
    required: ['droplet_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { droplet_id, ...body } = args as any;
  const response = await client.gpuDroplets.delete(droplet_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
