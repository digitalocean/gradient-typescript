// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.sizes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/sizes',
  operationId: 'sizes_list',
};

export const tool: Tool = {
  name: 'list_gpu_droplets_sizes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all of available Droplet sizes, send a GET request to `/v2/sizes`.\nThe response will be a JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    sizes: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/size'\n      }\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    }\n  },\n  required: [    'meta',\n    'sizes'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      },\n      required: []\n    },\n    size: {\n      type: 'object',\n      properties: {\n        available: {\n          type: 'boolean',\n          description: 'This is a boolean value that represents whether new Droplets can be created with this size.'\n        },\n        description: {\n          type: 'string',\n          description: 'A string describing the class of Droplets created from this size. For example: Basic, General Purpose, CPU-Optimized, Memory-Optimized, or Storage-Optimized.'\n        },\n        disk: {\n          type: 'integer',\n          description: 'The amount of disk space set aside for Droplets of this size. The value is represented in gigabytes.'\n        },\n        memory: {\n          type: 'integer',\n          description: 'The amount of RAM allocated to Droplets created of this size. The value is represented in megabytes.'\n        },\n        price_hourly: {\n          type: 'number',\n          description: 'This describes the price of the Droplet size as measured hourly. The value is measured in US dollars.'\n        },\n        price_monthly: {\n          type: 'number',\n          description: 'This attribute describes the monthly cost of this Droplet size if the Droplet is kept for an entire month. The value is measured in US dollars.'\n        },\n        regions: {\n          type: 'array',\n          description: 'An array containing the region slugs where this size is available for Droplet creates. regions:read is required to view.',\n          items: {\n            type: 'string'\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'A human-readable string that is used to uniquely identify each size.'\n        },\n        transfer: {\n          type: 'number',\n          description: 'The amount of transfer bandwidth that is available for Droplets created in this size. This only counts traffic on the public interface. The value is given in terabytes.'\n        },\n        vcpus: {\n          type: 'integer',\n          description: 'The number of CPUs allocated to Droplets of this size.'\n        },\n        disk_info: {\n          type: 'array',\n          description: 'An array of objects containing information about the disks available to Droplets created with this size.',\n          items: {\n            $ref: '#/$defs/disk_info'\n          }\n        },\n        gpu_info: {\n          $ref: '#/$defs/gpu_info'\n        }\n      },\n      required: [        'available',\n        'description',\n        'disk',\n        'memory',\n        'price_hourly',\n        'price_monthly',\n        'regions',\n        'slug',\n        'transfer',\n        'vcpus'\n      ]\n    },\n    disk_info: {\n      type: 'object',\n      properties: {\n        size: {\n          type: 'object',\n          properties: {\n            amount: {\n              type: 'integer',\n              description: 'The amount of space allocated to the disk.'\n            },\n            unit: {\n              type: 'string',\n              description: 'The unit of measure for the disk size.'\n            }\n          },\n          required: []\n        },\n        type: {\n          type: 'string',\n          description: 'The type of disk. All Droplets contain a `local` disk. Additionally, GPU Droplets can also have a `scratch` disk for non-persistent data.',\n          enum: [            'local',\n            'scratch'\n          ]\n        }\n      },\n      required: []\n    },\n    gpu_info: {\n      type: 'object',\n      description: 'An object containing information about the GPU capabilities of Droplets created with this size.',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'The number of GPUs allocated to the Droplet.'\n        },\n        model: {\n          type: 'string',\n          description: 'The model of the GPU.'\n        },\n        vram: {\n          type: 'object',\n          properties: {\n            amount: {\n              type: 'integer',\n              description: 'The amount of VRAM allocated to the GPU.'\n            },\n            unit: {\n              type: 'string',\n              description: 'The unit of measure for the VRAM.'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      },\n      required: []\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      },\n      required: []\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.gpuDroplets.sizes.list(body)));
};

export default { metadata, tool, handler };
