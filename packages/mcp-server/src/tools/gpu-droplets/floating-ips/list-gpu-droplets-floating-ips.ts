// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.floating_ips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/floating_ips',
  operationId: 'floatingIPs_list',
};

export const tool: Tool = {
  name: 'list_gpu_droplets_floating_ips',
  description:
    'To list all of the floating IPs available on your account, send a GET request to `/v2/floating_ips`.',
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: "Which 'page' of paginated results to return.",
      },
      per_page: {
        type: 'integer',
        description: 'Number of items returned per page',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gpuDroplets.floatingIPs.list(body));
};

export default { metadata, tool, handler };
