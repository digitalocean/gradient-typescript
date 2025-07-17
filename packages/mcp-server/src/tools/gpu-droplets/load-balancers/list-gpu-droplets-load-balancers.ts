// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.load_balancers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/load_balancers',
  operationId: 'loadBalancers_list',
};

export const tool: Tool = {
  name: 'list_gpu_droplets_load_balancers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all of the load balancer instances on your account, send a GET request\nto `/v2/load_balancers`.\n",
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
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gpuDroplets.loadBalancers.list(body));
};

export default { metadata, tool, handler };
