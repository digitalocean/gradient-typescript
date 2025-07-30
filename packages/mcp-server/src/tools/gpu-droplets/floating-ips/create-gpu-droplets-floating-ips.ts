// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.floating_ips',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/floating_ips',
  operationId: 'floatingIPs_create',
};

export const tool: Tool = {
  name: 'create_gpu_droplets_floating_ips',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOn creation, a floating IP must be either assigned to a Droplet or reserved to a region.\n* To create a new floating IP assigned to a Droplet, send a POST\n  request to `/v2/floating_ips` with the `droplet_id` attribute.\n\n* To create a new floating IP reserved to a region, send a POST request to\n  `/v2/floating_ips` with the `region` attribute.\n\n**Note**:  In addition to the standard rate limiting, only 12 floating IPs may be created per 60 seconds.",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
            description: 'The ID of the Droplet that the floating IP will be assigned to.',
          },
        },
        required: ['droplet_id'],
      },
      {
        type: 'object',
        properties: {
          region: {
            type: 'string',
            description: 'The slug identifier for the region the floating IP will be reserved to.',
          },
          project_id: {
            type: 'string',
            description: 'The UUID of the project to which the floating IP will be assigned.',
          },
        },
        required: ['region'],
      },
    ],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gpuDroplets.floatingIPs.create(body));
};

export default { metadata, tool, handler };
