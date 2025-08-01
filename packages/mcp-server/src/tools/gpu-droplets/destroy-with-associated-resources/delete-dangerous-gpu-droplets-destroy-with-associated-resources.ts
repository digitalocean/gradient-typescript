// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.destroy_with_associated_resources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous',
  operationId: 'droplets_destroy_withAssociatedResourcesDangerous',
};

export const tool: Tool = {
  name: 'delete_dangerous_gpu_droplets_destroy_with_associated_resources',
  description:
    "To destroy a Droplet along with all of its associated resources, send a DELETE\nrequest to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`\nendpoint. The headers of this request must include an `X-Dangerous` key set to\n`true`. To preview which resources will be destroyed, first query the\nDroplet's associated resources. This operation _can not_ be reverse and should\nbe used with caution.\n\nA successful response will include a 202 response code and no content. Use the\nstatus endpoint to check on the success or failure of the destruction of the\nindividual resources.\n",
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
      },
      'X-Dangerous': {
        type: 'boolean',
      },
    },
    required: ['droplet_id', 'X-Dangerous'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { droplet_id, ...body } = args as any;
  const response = await client.gpuDroplets.destroyWithAssociatedResources
    .deleteDangerous(droplet_id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
