// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.images',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/images/{image_id}',
  operationId: 'images_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_images',
  description: 'To delete a snapshot or custom image, send a `DELETE` request to `/v2/images/$IMAGE_ID`.\n',
  inputSchema: {
    type: 'object',
    properties: {
      image_id: {
        type: 'integer',
      },
    },
    required: ['image_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { image_id, ...body } = args as any;
  const response = await client.gpuDroplets.images.delete(image_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
