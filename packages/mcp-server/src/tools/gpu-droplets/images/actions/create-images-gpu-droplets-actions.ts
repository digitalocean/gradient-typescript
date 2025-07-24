// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.images.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/images/{image_id}/actions',
  operationId: 'imageActions_post',
};

export const tool: Tool = {
  name: 'create_images_gpu_droplets_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe following actions are available on an Image.\n\n## Convert an Image to a Snapshot\n\nTo convert an image, for example, a backup to a snapshot, send a POST request\nto `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.\n\n## Transfer an Image\n\nTo transfer an image to another region, send a POST request to\n`/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set\n`region` attribute to the slug identifier of the region you wish to transfer\nto.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action',\n  $defs: {\n    action: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'A unique numeric ID that can be used to identify and reference an action.'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the action was completed.',\n          format: 'date-time'\n        },\n        region: {\n          $ref: '#/$defs/region'\n        },\n        region_slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        },\n        resource_id: {\n          type: 'integer',\n          description: 'A unique identifier for the resource that the action is associated with.'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of resource that the action is associated with.'\n        },\n        started_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the action was initiated.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the action. This can be \"in-progress\", \"completed\", or \"errored\".',\n          enum: [            'in-progress',\n            'completed',\n            'errored'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'This is the type of action that the object represents. For example, this could be \"transfer\" to represent the state of an image transfer action.'\n        }\n      }\n    },\n    region: {\n      type: 'object',\n      properties: {\n        available: {\n          type: 'boolean',\n          description: 'This is a boolean value that represents whether new Droplets can be created in this region.'\n        },\n        features: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains features available in this region',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The display name of the region.  This will be a full name that is used in the control panel and other interfaces.'\n        },\n        sizes: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains the identifying slugs for the sizes available in this region. sizes:read is required to view.',\n          items: {\n            type: 'string'\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        }\n      },\n      required: [        'available',\n        'features',\n        'name',\n        'sizes',\n        'slug'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          image_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The action to be taken on the image. Can be either `convert` or `transfer`.',
            enum: ['convert', 'transfer'],
          },
        },
        required: ['image_id', 'type'],
      },
      {
        type: 'object',
        properties: {
          image_id: {
            type: 'integer',
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
          type: {
            type: 'string',
            description: 'The action to be taken on the image. Can be either `convert` or `transfer`.',
            enum: ['convert', 'transfer'],
          },
        },
        required: ['image_id', 'region', 'type'],
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
  annotations: {},
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { image_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.images.actions.create(image_id, body)),
  );
};

export default { metadata, tool, handler };
