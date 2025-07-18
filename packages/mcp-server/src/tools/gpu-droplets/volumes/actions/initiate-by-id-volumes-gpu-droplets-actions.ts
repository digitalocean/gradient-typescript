// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.volumes.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/volumes/{volume_id}/actions',
  operationId: 'volumeActions_post_byId',
};

export const tool: Tool = {
  name: 'initiate_by_id_volumes_gpu_droplets_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo initiate an action on a block storage volume by Id, send a POST request to\n`~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate\nattributes for the respective action.\n\n## Attach a Block Storage Volume to a Droplet\n\n| Attribute  | Details                                                             |\n| ---------- | ------------------------------------------------------------------- |\n| type       | This must be `attach`                                               |\n| droplet_id | Set to the Droplet's ID                                             |\n| region     | Set to the slug representing the region where the volume is located |\n\nEach volume may only be attached to a single Droplet. However, up to fifteen\nvolumes may be attached to a Droplet at a time. Pre-formatted volumes will be\nautomatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS\nDroplets created on or after April 26, 2018 when attached. On older Droplets,\n[additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)\nis required.\n\n## Remove a Block Storage Volume from a Droplet\n\n| Attribute  | Details                                                             |\n| ---------- | ------------------------------------------------------------------- |\n| type       | This must be `detach`                                               |\n| droplet_id | Set to the Droplet's ID                                             |\n| region     | Set to the slug representing the region where the volume is located |\n\n## Resize a Volume\n\n| Attribute      | Details                                                             |\n| -------------- | ------------------------------------------------------------------- |\n| type           | This must be `resize`                                               |\n| size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |\n| region         | Set to the slug representing the region where the volume is located |\n\nVolumes may only be resized upwards. The maximum size for a volume is 16TiB.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    action: {\n      $ref: '#/$defs/volume_action'\n    }\n  },\n  $defs: {\n    volume_action: {\n      allOf: [        {\n          $ref: '#/$defs/action'\n        }\n      ]\n    },\n    action: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'A unique numeric ID that can be used to identify and reference an action.'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the action was completed.',\n          format: 'date-time'\n        },\n        region: {\n          $ref: '#/$defs/region'\n        },\n        region_slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        },\n        resource_id: {\n          type: 'integer',\n          description: 'A unique identifier for the resource that the action is associated with.'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of resource that the action is associated with.'\n        },\n        started_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the action was initiated.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the action. This can be \"in-progress\", \"completed\", or \"errored\".',\n          enum: [            'in-progress',\n            'completed',\n            'errored'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'This is the type of action that the object represents. For example, this could be \"transfer\" to represent the state of an image transfer action.'\n        }\n      }\n    },\n    region: {\n      type: 'object',\n      properties: {\n        available: {\n          type: 'boolean',\n          description: 'This is a boolean value that represents whether new Droplets can be created in this region.'\n        },\n        features: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains features available in this region',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The display name of the region.  This will be a full name that is used in the control panel and other interfaces.'\n        },\n        sizes: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains the identifying slugs for the sizes available in this region. sizes:read is required to view.',\n          items: {\n            type: 'string'\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        }\n      },\n      required: [        'available',\n        'features',\n        'name',\n        'sizes',\n        'slug'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          volume_id: {
            type: 'string',
          },
          droplet_id: {
            type: 'integer',
            description:
              'The unique identifier for the Droplet the volume will be attached or detached from.',
          },
          type: {
            type: 'string',
            description: 'The volume action to initiate.',
            enum: ['attach', 'detach', 'resize'],
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
            description:
              'The slug identifier for the region where the resource will initially be  available.',
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
          tags: {
            type: 'array',
            description:
              'A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags. <br><br>Requires `tag:create` scope.',
            items: {
              type: 'string',
            },
          },
        },
        required: ['volume_id', 'droplet_id', 'type'],
      },
      {
        type: 'object',
        properties: {
          volume_id: {
            type: 'string',
          },
          droplet_id: {
            type: 'integer',
            description:
              'The unique identifier for the Droplet the volume will be attached or detached from.',
          },
          type: {
            type: 'string',
            description: 'The volume action to initiate.',
            enum: ['attach', 'detach', 'resize'],
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
            description:
              'The slug identifier for the region where the resource will initially be  available.',
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
        },
        required: ['volume_id', 'droplet_id', 'type'],
      },
      {
        type: 'object',
        properties: {
          volume_id: {
            type: 'string',
          },
          size_gigabytes: {
            type: 'integer',
            description: 'The new size of the block storage volume in GiB (1024^3).',
          },
          type: {
            type: 'string',
            description: 'The volume action to initiate.',
            enum: ['attach', 'detach', 'resize'],
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
            description:
              'The slug identifier for the region where the resource will initially be  available.',
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
        },
        required: ['volume_id', 'size_gigabytes', 'type'],
      },
    ],
    properties: {
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
  const { volume_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.volumes.actions.initiateByID(volume_id, body)),
  );
};

export default { metadata, tool, handler };
