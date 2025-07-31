// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/{droplet_id}',
  operationId: 'droplets_get',
};

export const tool: Tool = {
  name: 'retrieve_gpu_droplets',
  description:
    'To show information about an individual Droplet, send a GET request to\n`/v2/droplets/$DROPLET_ID`.\n',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { droplet_id, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.retrieve(droplet_id));
};

export default { metadata, tool, handler };
