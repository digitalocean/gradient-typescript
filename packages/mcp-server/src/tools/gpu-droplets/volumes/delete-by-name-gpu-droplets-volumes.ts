// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.volumes',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/volumes',
  operationId: 'volumes_delete_byName',
};

export const tool: Tool = {
  name: 'delete_by_name_gpu_droplets_volumes',
  description:
    "Block storage volumes may also be deleted by name by sending a DELETE request with the volume's **name** and the **region slug** for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.\nNo response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.\n\n",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "The block storage volume's name.",
      },
      region: {
        type: 'string',
        description: 'The slug identifier for the region where the resource is available.',
        enum: [
          'ams1',
          'ams2',
          'ams3',
          'blr1',
          'fra1',
          'lon1',
          'nyc1',
          'nyc2',
          'nyc3',
          'sfo1',
          'sfo2',
          'sfo3',
          'sgp1',
          'tor1',
          'syd1',
        ],
      },
    },
    required: [],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.gpuDroplets.volumes.deleteByName(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
