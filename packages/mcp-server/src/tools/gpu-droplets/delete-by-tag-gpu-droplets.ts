// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/droplets',
  operationId: 'droplets_destroy_byTag',
};

export const tool: Tool = {
  name: 'delete_by_tag_gpu_droplets',
  description:
    'To delete **all** Droplets assigned to a specific tag, include the `tag_name`\nquery parameter set to the name of the tag in your DELETE request. For\nexample, `/v2/droplets?tag_name=$TAG_NAME`.\n\nThis endpoint requires `tag:read` scope.\n\nA successful request will receive a 204 status code with no body in response.\nThis indicates that the request was processed successfully.\n',
  inputSchema: {
    type: 'object',
    properties: {
      tag_name: {
        type: 'string',
        description: 'Specifies Droplets to be deleted by tag.',
      },
    },
    required: ['tag_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.gpuDroplets.deleteByTag(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
