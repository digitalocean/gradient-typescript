// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.firewalls.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/firewalls/{firewall_id}/tags',
  operationId: 'firewalls_add_tags',
};

export const tool: Tool = {
  name: 'add_firewalls_gpu_droplets_tags',
  description:
    'To assign a tag representing a group of Droplets to a firewall, send a POST\nrequest to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request,\nthere should be a `tags` attribute containing a list of tag names.\n\nNo response body will be sent back, but the response code will indicate\nsuccess. Specifically, the response code will be a 204, which means that the\naction was successful with no returned body data.\n',
  inputSchema: {
    type: 'object',
    properties: {
      firewall_id: {
        type: 'string',
      },
      tags: {
        type: 'array',
        description:
          'A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br><br>Requires `tag:create` and `tag:read` scopes.',
        items: {
          type: 'string',
        },
      },
    },
    required: ['firewall_id', 'tags'],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { firewall_id, ...body } = args as any;
  const response = await client.gpuDroplets.firewalls.tags.add(firewall_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
