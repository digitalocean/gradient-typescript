// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.destroy_with_associated_resources',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/droplets/{droplet_id}/destroy_with_associated_resources/retry',
  operationId: 'droplets_destroy_retryWithAssociatedResources',
};

export const tool: Tool = {
  name: 'retry_gpu_droplets_destroy_with_associated_resources',
  description:
    'If the status of a request to destroy a Droplet with its associated resources\nreported any errors, it can be retried by sending a POST request to the\n`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.\n\nOnly one destroy can be active at a time per Droplet. If a retry is issued\nwhile another destroy is in progress for the Droplet a 409 status code will\nbe returned. A successful response will include a 202 response code and no\ncontent.\n',
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
      },
    },
    required: ['droplet_id'],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { droplet_id, ...body } = args as any;
  const response = await client.gpuDroplets.destroyWithAssociatedResources.retry(droplet_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
