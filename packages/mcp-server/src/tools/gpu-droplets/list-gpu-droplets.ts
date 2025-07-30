// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets',
  operationId: 'droplets_list',
};

export const tool: Tool = {
  name: 'list_gpu_droplets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all Droplets in your account, send a GET request to `/v2/droplets`.\n\nThe response body will be a JSON object with a key of `droplets`. This will be\nset to an array containing objects each representing a Droplet. These will\ncontain the standard Droplet attributes.\n\n### Filtering Results by Tag\n\nIt's possible to request filtered results by including certain query parameters.\nTo only list Droplets assigned to a specific tag, include the `tag_name` query\nparameter set to the name of the tag in your GET request. For example,\n`/v2/droplets?tag_name=$TAG_NAME`.\n\n### GPU Droplets\n\nBy default, only non-GPU Droplets are returned. To list only GPU Droplets, set\nthe `type` query parameter to `gpus`. For example, `/v2/droplets?type=gpus`.\n",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description:
          'Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`.',
      },
      page: {
        type: 'integer',
        description: "Which 'page' of paginated results to return.",
      },
      per_page: {
        type: 'integer',
        description: 'Number of items returned per page',
      },
      tag_name: {
        type: 'string',
        description:
          'Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope.',
      },
      type: {
        type: 'string',
        description:
          'When `type` is set to `gpus`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with `tag_name`.',
        enum: ['droplets', 'gpus'],
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gpuDroplets.list(body));
};

export default { metadata, tool, handler };
