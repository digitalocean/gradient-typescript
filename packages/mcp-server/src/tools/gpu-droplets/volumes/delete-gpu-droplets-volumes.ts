// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.volumes',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/volumes/{volume_id}',
  operationId: 'volumes_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_volumes',
  description:
    'To delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.\nNo response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.\n\n',
  inputSchema: {
    type: 'object',
    properties: {
      volume_id: {
        type: 'string',
      },
    },
    required: ['volume_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { volume_id, ...body } = args as any;
  const response = await client.gpuDroplets.volumes.delete(volume_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
