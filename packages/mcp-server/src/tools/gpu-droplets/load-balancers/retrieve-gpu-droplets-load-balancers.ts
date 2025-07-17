// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo show information about a load balancer instance, send a GET request to\n`/v2/load_balancers/$LOAD_BALANCER_ID`.\n",
  inputSchema: {
    type: 'object',
    properties: {
      lb_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { lb_id, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.loadBalancers.retrieve(lb_id));
};

export default { metadata, tool, handler };
