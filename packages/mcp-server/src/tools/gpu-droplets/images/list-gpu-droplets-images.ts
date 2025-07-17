// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.images',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/images',
  operationId: 'images_list',
};

export const tool: Tool = {
  name: 'list_gpu_droplets_images',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all of the images available on your account, send a GET request to /v2/images.\n\n## Filtering Results\n-----\n\nIt's possible to request filtered results by including certain query parameters.\n\n**Image Type**\n\nEither 1-Click Application or OS Distribution images can be filtered by using the `type` query parameter.\n\n> Important: The `type` query parameter does not directly relate to the `type` attribute.\n\nTo retrieve only ***distribution*** images, include the `type` query parameter set to distribution, `/v2/images?type=distribution`.\n\nTo retrieve only ***application*** images, include the `type` query parameter set to application, `/v2/images?type=application`.\n\n**User Images**\n\nTo retrieve only the private images of a user, include the `private` query parameter set to true, `/v2/images?private=true`.\n\n**Tags**\n\nTo list all images assigned to a specific tag, include the `tag_name` query parameter set to the name of the tag in your GET request. For example, `/v2/images?tag_name=$TAG_NAME`.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    images: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/image'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    }\n  },\n  required: [    'images',\n    'meta'\n  ],\n  $defs: {\n    image: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'A unique number that can be used to identify and reference a specific image.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the image was created.',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'An optional free-form text field to describe an image.'\n        },\n        distribution: {\n          type: 'string',\n          description: 'The name of a custom image\\'s distribution. Currently, the valid values are  `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,  `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and `Unknown`.  Any other value will be accepted but ignored, and `Unknown` will be used in its place.',\n          enum: [            'Arch Linux',\n            'CentOS',\n            'CoreOS',\n            'Debian',\n            'Fedora',\n            'Fedora Atomic',\n            'FreeBSD',\n            'Gentoo',\n            'openSUSE',\n            'RancherOS',\n            'Rocky Linux',\n            'Ubuntu',\n            'Unknown'\n          ]\n        },\n        error_message: {\n          type: 'string',\n          description: 'A string containing information about errors that may occur when importing\\n a custom image.'\n        },\n        min_disk_size: {\n          type: 'integer',\n          description: 'The minimum disk size in GB required for a Droplet to use this image.'\n        },\n        name: {\n          type: 'string',\n          description: 'The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.'\n        },\n        public: {\n          type: 'boolean',\n          description: 'This is a boolean value that indicates whether the image in question is public or not. An image that is public is available to all accounts. A non-public image is only accessible from your account.'\n        },\n        regions: {\n          type: 'array',\n          description: 'This attribute is an array of the regions that the image is available in. The regions are represented by their identifying slug values.',\n          items: {\n            type: 'string',\n            description: 'The slug identifier for the region where the resource will initially be  available.',\n            enum: [              'ams1',\n              'ams2',\n              'ams3',\n              'blr1',\n              'fra1',\n              'lon1',\n              'nyc1',\n              'nyc2',\n              'nyc3',\n              'sfo1',\n              'sfo2',\n              'sfo3',\n              'sgp1',\n              'tor1',\n              'syd1'\n            ]\n          }\n        },\n        size_gigabytes: {\n          type: 'number',\n          description: 'The size of the image in gigabytes.'\n        },\n        slug: {\n          type: 'string',\n          description: 'A uniquely identifying string that is associated with each of the DigitalOcean-provided public images. These can be used to reference a public image as an alternative to the numeric id.'\n        },\n        status: {\n          type: 'string',\n          description: 'A status string indicating the state of a custom image. This may be `NEW`,\\n `available`, `pending`, `deleted`, or `retired`.',\n          enum: [            'NEW',\n            'available',\n            'pending',\n            'deleted',\n            'retired'\n          ]\n        },\n        tags: {\n          type: 'array',\n          description: 'A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags. <br><br>Requires `tag:create` scope.',\n          items: {\n            type: 'string'\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Describes the kind of image. It may be one of `base`, `snapshot`, `backup`, `custom`, or `admin`. Respectively, this specifies whether an image is a DigitalOcean base OS image, user-generated Droplet snapshot, automatically created Droplet backup, user-provided virtual machine image, or an image used for DigitalOcean managed resources (e.g. DOKS worker nodes).',\n          enum: [            'base',\n            'snapshot',\n            'backup',\n            'custom',\n            'admin'\n          ]\n        }\n      },\n      required: []\n    },\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      },\n      required: []\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      },\n      required: []\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      },\n      required: []\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
      private: {
        type: 'boolean',
        description: 'Used to filter only user images.',
      },
      tag_name: {
        type: 'string',
        description: 'Used to filter images by a specific tag.',
      },
      type: {
        type: 'string',
        description:
          'Filters results based on image type which can be either `application` or `distribution`.',
        enum: ['application', 'distribution'],
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
  return asTextContentResult(await maybeFilter(args, await client.gpuDroplets.images.list(body)));
};

export default { metadata, tool, handler };
