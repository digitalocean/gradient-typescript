// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.volumes',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/volumes/{volume_id}',
  operationId: 'volumes_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_volumes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.\nNo response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      volume_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['volume_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { volume_id, ...body } = args as any;
  const response = await client.gpuDroplets.volumes.delete(volume_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
