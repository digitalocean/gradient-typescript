// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.firewalls',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/firewalls/{firewall_id}',
  operationId: 'firewalls_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_firewalls',
  description:
    'To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.\n\nNo response body will be sent back, but the response code will indicate\nsuccess. Specifically, the response code will be a 204, which means that the\naction was successful with no returned body data.\n',
  inputSchema: {
    type: 'object',
    properties: {
      firewall_id: {
        type: 'string',
      },
    },
    required: ['firewall_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { firewall_id, ...body } = args as any;
  const response = await client.gpuDroplets.firewalls.delete(firewall_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
