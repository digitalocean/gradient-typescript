// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/{droplet_id}/neighbors',
  operationId: 'droplets_list_neighbors',
};

export const tool: Tool = {
  name: 'list_neighbors_gpu_droplets',
  description:
    'When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you\'re sure you don\'t need the data.\n\nTo retrieve a list of any "neighbors" (i.e. Droplets that are co-located on\nthe same physical hardware) for a specific Droplet, send a GET request to\n`/v2/droplets/$DROPLET_ID/neighbors`.\n\nThe results will be returned as a JSON object with a key of `droplets`. This\nwill be set to an array containing objects representing any other Droplets\nthat share the same physical hardware. An empty array indicates that the\nDroplet is not co-located any other Droplets associated with your account.\n',
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
  return asTextContentResult(await client.gpuDroplets.listNeighbors(droplet_id));
};

export default { metadata, tool, handler };
