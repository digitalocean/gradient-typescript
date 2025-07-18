// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.load_balancers.droplets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/load_balancers/{lb_id}/droplets',
  operationId: 'loadBalancers_remove_droplets',
};

export const tool: Tool = {
  name: 'remove_load_balancers_gpu_droplets_droplets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo remove a Droplet from a load balancer instance, send a DELETE request to\n`/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,\nthere should be a `droplet_ids` attribute containing a list of Droplet IDs.\n\nNo response body will be sent back, but the response code will indicate\nsuccess. Specifically, the response code will be a 204, which means that the\naction was successful with no returned body data.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      lb_id: {
        type: 'string',
      },
      droplet_ids: {
        type: 'array',
        description: 'An array containing the IDs of the Droplets assigned to the load balancer.',
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
    required: ['lb_id', 'droplet_ids'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { lb_id, ...body } = args as any;
  const response = await client.gpuDroplets.loadBalancers.droplets.remove(lb_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
