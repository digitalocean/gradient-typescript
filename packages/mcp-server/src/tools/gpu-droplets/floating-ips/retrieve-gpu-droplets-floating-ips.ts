// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.floating_ips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/floating_ips/{floating_ip}',
  operationId: 'floatingIPs_get',
};

export const tool: Tool = {
  name: 'retrieve_gpu_droplets_floating_ips',
  description:
    'To show information about a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP_ADDR`.',
  inputSchema: {
    type: 'object',
    properties: {
      floating_ip: {
        type: 'string',
      },
    },
    required: ['floating_ip'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { floating_ip, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.floatingIPs.retrieve(floating_ip));
};

export default { metadata, tool, handler };
