// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.load_balancers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/load_balancers/{lb_id}',
  operationId: 'loadBalancers_get',
};

export const tool: Tool = {
  name: 'retrieve_gpu_droplets_load_balancers',
  description:
    'To show information about a load balancer instance, send a GET request to\n`/v2/load_balancers/$LOAD_BALANCER_ID`.\n',
  inputSchema: {
    type: 'object',
    properties: {
      lb_id: {
        type: 'string',
      },
    },
    required: ['lb_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { lb_id, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.loadBalancers.retrieve(lb_id));
};

export default { metadata, tool, handler };
