// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo show information about a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP_ADDR`.",
  inputSchema: {
    type: 'object',
    properties: {
      floating_ip: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { floating_ip, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.floatingIPs.retrieve(floating_ip));
};

export default { metadata, tool, handler };
