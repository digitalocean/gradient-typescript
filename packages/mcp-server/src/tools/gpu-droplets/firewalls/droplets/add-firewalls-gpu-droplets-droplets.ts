// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.firewalls.droplets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/firewalls/{firewall_id}/droplets',
  operationId: 'firewalls_assign_droplets',
};

export const tool: Tool = {
  name: 'add_firewalls_gpu_droplets_droplets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo assign a Droplet to a firewall, send a POST request to\n`/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there\nshould be a `droplet_ids` attribute containing a list of Droplet IDs.\n\nNo response body will be sent back, but the response code will indicate\nsuccess. Specifically, the response code will be a 204, which means that the\naction was successful with no returned body data.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firewall_id: {
        type: 'string',
      },
      droplet_ids: {
        type: 'array',
        description: 'An array containing the IDs of the Droplets to be assigned to the firewall.',
        items: {
          type: 'integer',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['firewall_id', 'droplet_ids'],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { firewall_id, ...body } = args as any;
  const response = await client.gpuDroplets.firewalls.droplets.add(firewall_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
