// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/{droplet_id}/kernels',
  operationId: 'droplets_list_kernels',
};

export const tool: Tool = {
  name: 'list_kernels_gpu_droplets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve a list of all kernels available to a Droplet, send a GET request\nto `/v2/droplets/$DROPLET_ID/kernels`\n\nThe response will be a JSON object that has a key called `kernels`. This will\nbe set to an array of `kernel` objects, each of which contain the standard\n`kernel` attributes.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    kernels: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/kernel'\n      }\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    }\n  },\n  required: [    'meta'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      },\n      required: []\n    },\n    kernel: {\n      type: 'object',\n      description: '**Note**: All Droplets created after March 2017 use internal kernels by default.\\nThese Droplets will have this attribute set to `null`.\\n\\nThe current [kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)\\nfor Droplets with externally managed kernels. This will initially be set to\\nthe kernel of the base image when the Droplet is created.\\n',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'A unique number used to identify and reference a specific kernel.'\n        },\n        name: {\n          type: 'string',\n          description: 'The display name of the kernel. This is shown in the web UI and is generally a descriptive title for the kernel in question.'\n        },\n        version: {\n          type: 'string',\n          description: 'A standard kernel version string representing the version, patch, and release information.'\n        }\n      },\n      required: []\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      },\n      required: []\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      },\n      required: []\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
      },
      page: {
        type: 'integer',
        description: "Which 'page' of paginated results to return.",
      },
      per_page: {
        type: 'integer',
        description: 'Number of items returned per page',
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
  const { droplet_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.gpuDroplets.listKernels(droplet_id, body)));
};

export default { metadata, tool, handler };
