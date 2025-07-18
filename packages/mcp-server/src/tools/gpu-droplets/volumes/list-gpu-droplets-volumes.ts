// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.volumes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/volumes',
  operationId: 'volumes_list',
};

export const tool: Tool = {
  name: 'list_gpu_droplets_volumes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all of the block storage volumes available on your account, send a GET request to `/v2/volumes`.\n## Filtering Results\n### By Region\nThe `region` may be provided as query parameter in order to restrict results to volumes available in a specific region. For example: `/v2/volumes?region=nyc1`\n### By Name\nIt is also possible to list volumes on your account that match a specified name. To do so, send a GET request with the volume's name as a query parameter to `/v2/volumes?name=$VOLUME_NAME`.\n**Note:** You can only create one volume per region with the same name.\n### By Name and Region\nIt is also possible to retrieve information about a block storage volume by name. To do so, send a GET request with the volume's name and the region slug for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.\n\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    volumes: {\n      type: 'array',\n      description: 'Array of volumes.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The unique identifier for the block storage volume.'\n          },\n          created_at: {\n            type: 'string',\n            description: 'A time value given in ISO8601 combined date and time format that represents when the block storage volume was created.'\n          },\n          description: {\n            type: 'string',\n            description: 'An optional free-form text field to describe a block storage volume.'\n          },\n          droplet_ids: {\n            type: 'array',\n            description: 'An array containing the IDs of the Droplets the volume is attached to. Note that at this time, a volume can only be attached to a single Droplet.',\n            items: {\n              type: 'integer'\n            }\n          },\n          filesystem_label: {\n            type: 'string',\n            description: 'The label currently applied to the filesystem.'\n          },\n          filesystem_type: {\n            type: 'string',\n            description: 'The type of filesystem currently in-use on the volume.'\n          },\n          name: {\n            type: 'string',\n            description: 'A human-readable name for the block storage volume. Must be lowercase and be composed only of numbers, letters and \"-\", up to a limit of 64 characters. The name must begin with a letter.'\n          },\n          region: {\n            $ref: '#/$defs/region'\n          },\n          size_gigabytes: {\n            type: 'integer',\n            description: 'The size of the block storage volume in GiB (1024^3). This field does not apply  when creating a volume from a snapshot.'\n          },\n          tags: {\n            type: 'array',\n            description: 'A flat array of tag names as strings applied to the resource. <br><br>Requires `tag:read` scope.',\n            items: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    }\n  },\n  required: [    'meta',\n    'volumes'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      }\n    },\n    region: {\n      type: 'object',\n      properties: {\n        available: {\n          type: 'boolean',\n          description: 'This is a boolean value that represents whether new Droplets can be created in this region.'\n        },\n        features: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains features available in this region',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The display name of the region.  This will be a full name that is used in the control panel and other interfaces.'\n        },\n        sizes: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains the identifying slugs for the sizes available in this region. sizes:read is required to view.',\n          items: {\n            type: 'string'\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        }\n      },\n      required: [        'available',\n        'features',\n        'name',\n        'sizes',\n        'slug'\n      ]\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      }\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      }\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "The block storage volume's name.",
      },
      page: {
        type: 'integer',
        description: "Which 'page' of paginated results to return.",
      },
      per_page: {
        type: 'integer',
        description: 'Number of items returned per page',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.gpuDroplets.volumes.list(body)));
};

export default { metadata, tool, handler };
