// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.firewalls.droplets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/firewalls/{firewall_id}/droplets',
  operationId: 'firewalls_delete_droplets',
};

export const tool: Tool = {
  name: 'remove_firewalls_gpu_droplets_droplets',
  description:
    'To remove a Droplet from a firewall, send a DELETE request to\n`/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should\nbe a `droplet_ids` attribute containing a list of Droplet IDs.\n\nNo response body will be sent back, but the response code will indicate\nsuccess. Specifically, the response code will be a 204, which means that the\naction was successful with no returned body data.\n',
  inputSchema: {
    type: 'object',
    properties: {
      firewall_id: {
        type: 'string',
      },
      droplet_ids: {
        type: 'array',
        description: 'An array containing the IDs of the Droplets to be removed from the firewall.',
        items: {
          type: 'integer',
        },
      },
    },
    required: ['firewall_id', 'droplet_ids'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { firewall_id, ...body } = args as any;
  const response = await client.gpuDroplets.firewalls.droplets.remove(firewall_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
