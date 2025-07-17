// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.floating_ips',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/floating_ips/{floating_ip}',
  operationId: 'floatingIPs_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_floating_ips',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete a floating IP and remove it from your account, send a DELETE request\nto `/v2/floating_ips/$FLOATING_IP_ADDR`.\n\nA successful request will receive a 204 status code with no body in response.\nThis indicates that the request was processed successfully.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      floating_ip: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { floating_ip, ...body } = args as any;
  const response = await client.gpuDroplets.floatingIPs.delete(floating_ip).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
