// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.floating_ips',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/floating_ips/{floating_ip}',
  operationId: 'floatingIPs_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_floating_ips',
  description:
    'To delete a floating IP and remove it from your account, send a DELETE request\nto `/v2/floating_ips/$FLOATING_IP_ADDR`.\n\nA successful request will receive a 204 status code with no body in response.\nThis indicates that the request was processed successfully.\n',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { floating_ip, ...body } = args as any;
  const response = await client.gpuDroplets.floatingIPs.delete(floating_ip).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
