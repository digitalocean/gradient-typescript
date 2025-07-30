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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIf the status of a request to destroy a Droplet with its associated resources\nreported any errors, it can be retried by sending a POST request to the\n`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.\n\nOnly one destroy can be active at a time per Droplet. If a retry is issued\nwhile another destroy is in progress for the Droplet a 409 status code will\nbe returned. A successful response will include a 202 response code and no\ncontent.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
