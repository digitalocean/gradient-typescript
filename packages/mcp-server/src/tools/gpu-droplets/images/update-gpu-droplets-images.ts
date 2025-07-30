// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.images',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/images/{image_id}',
  operationId: 'images_update',
};

export const tool: Tool = {
  name: 'update_gpu_droplets_images',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update an image, send a `PUT` request to `/v2/images/$IMAGE_ID`.\nSet the `name` attribute to the new value you would like to use.\nFor custom images, the `description` and `distribution` attributes may also be updated.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    image: {\n      $ref: '#/$defs/image'\n    }\n  },\n  required: [    'image'\n  ],\n  $defs: {\n    image: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'A unique number that can be used to identify and reference a specific image.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the image was created.',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'An optional free-form text field to describe an image.'\n        },\n        distribution: {\n          type: 'string',\n          description: 'The name of a custom image\\'s distribution. Currently, the valid values are  `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,  `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and `Unknown`.  Any other value will be accepted but ignored, and `Unknown` will be used in its place.',\n          enum: [            'Arch Linux',\n            'CentOS',\n            'CoreOS',\n            'Debian',\n            'Fedora',\n            'Fedora Atomic',\n            'FreeBSD',\n            'Gentoo',\n            'openSUSE',\n            'RancherOS',\n            'Rocky Linux',\n            'Ubuntu',\n            'Unknown'\n          ]\n        },\n        error_message: {\n          type: 'string',\n          description: 'A string containing information about errors that may occur when importing\\n a custom image.'\n        },\n        min_disk_size: {\n          type: 'integer',\n          description: 'The minimum disk size in GB required for a Droplet to use this image.'\n        },\n        name: {\n          type: 'string',\n          description: 'The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.'\n        },\n        public: {\n          type: 'boolean',\n          description: 'This is a boolean value that indicates whether the image in question is public or not. An image that is public is available to all accounts. A non-public image is only accessible from your account.'\n        },\n        regions: {\n          type: 'array',\n          description: 'This attribute is an array of the regions that the image is available in. The regions are represented by their identifying slug values.',\n          items: {\n            type: 'string',\n            description: 'The slug identifier for the region where the resource will initially be  available.',\n            enum: [              'ams1',\n              'ams2',\n              'ams3',\n              'blr1',\n              'fra1',\n              'lon1',\n              'nyc1',\n              'nyc2',\n              'nyc3',\n              'sfo1',\n              'sfo2',\n              'sfo3',\n              'sgp1',\n              'tor1',\n              'syd1'\n            ]\n          }\n        },\n        size_gigabytes: {\n          type: 'number',\n          description: 'The size of the image in gigabytes.'\n        },\n        slug: {\n          type: 'string',\n          description: 'A uniquely identifying string that is associated with each of the DigitalOcean-provided public images. These can be used to reference a public image as an alternative to the numeric id.'\n        },\n        status: {\n          type: 'string',\n          description: 'A status string indicating the state of a custom image. This may be `NEW`,\\n `available`, `pending`, `deleted`, or `retired`.',\n          enum: [            'NEW',\n            'available',\n            'pending',\n            'deleted',\n            'retired'\n          ]\n        },\n        tags: {\n          type: 'array',\n          description: 'A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags. <br><br>Requires `tag:create` scope.',\n          items: {\n            type: 'string'\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Describes the kind of image. It may be one of `base`, `snapshot`, `backup`, `custom`, or `admin`. Respectively, this specifies whether an image is a DigitalOcean base OS image, user-generated Droplet snapshot, automatically created Droplet backup, user-provided virtual machine image, or an image used for DigitalOcean managed resources (e.g. DOKS worker nodes).',\n          enum: [            'base',\n            'snapshot',\n            'backup',\n            'custom',\n            'admin'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      image_id: {
        type: 'integer',
      },
      description: {
        type: 'string',
        description: 'An optional free-form text field to describe an image.',
      },
      distribution: {
        type: 'string',
        description:
          "The name of a custom image's distribution. Currently, the valid values are  `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,  `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and `Unknown`.  Any other value will be accepted but ignored, and `Unknown` will be used in its place.",
        enum: [
          'Arch Linux',
          'CentOS',
          'CoreOS',
          'Debian',
          'Fedora',
          'Fedora Atomic',
          'FreeBSD',
          'Gentoo',
          'openSUSE',
          'RancherOS',
          'Rocky Linux',
          'Ubuntu',
          'Unknown',
        ],
      },
      name: {
        type: 'string',
        description:
          'The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['image_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { image_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.gpuDroplets.images.update(image_id, body)));
};

export default { metadata, tool, handler };
