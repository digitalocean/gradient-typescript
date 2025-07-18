// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.autoscale',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/droplets/autoscale/{autoscale_pool_id}',
  operationId: 'autoscalepools_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_autoscale',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo destroy an autoscale pool, send a DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID` endpoint.\n\nA successful response will include a 202 response code and no content. \n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      autoscale_pool_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['autoscale_pool_id'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { autoscale_pool_id, ...body } = args as any;
  const response = await client.gpuDroplets.autoscale.delete(autoscale_pool_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
