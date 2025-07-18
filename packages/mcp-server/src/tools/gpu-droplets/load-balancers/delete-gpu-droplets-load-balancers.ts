// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete a load balancer instance, disassociating any Droplets assigned to it\nand removing it from your account, send a DELETE request to\n`/v2/load_balancers/$LOAD_BALANCER_ID`.\n\nA successful request will receive a 204 status code with no body in response.\nThis indicates that the request was processed successfully.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      lb_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['lb_id'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { lb_id, ...body } = args as any;
  const response = await client.gpuDroplets.loadBalancers.delete(lb_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
