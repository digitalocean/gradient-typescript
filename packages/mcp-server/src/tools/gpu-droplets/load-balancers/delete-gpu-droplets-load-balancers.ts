// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.load_balancers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/load_balancers/{lb_id}',
  operationId: 'loadBalancers_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_load_balancers',
  description:
    'To delete a load balancer instance, disassociating any Droplets assigned to it\nand removing it from your account, send a DELETE request to\n`/v2/load_balancers/$LOAD_BALANCER_ID`.\n\nA successful request will receive a 204 status code with no body in response.\nThis indicates that the request was processed successfully.\n',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { lb_id, ...body } = args as any;
  const response = await client.gpuDroplets.loadBalancers.delete(lb_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
