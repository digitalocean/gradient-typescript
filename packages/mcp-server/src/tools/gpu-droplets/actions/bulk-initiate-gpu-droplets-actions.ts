// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/droplets/actions',
  operationId: 'dropletActions_post_byTag',
};

export const tool: Tool = {
  name: 'bulk_initiate_gpu_droplets_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSome actions can be performed in bulk on tagged Droplets. The actions can be\ninitiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with\nthe action arguments.\n\nOnly a sub-set of action types are supported:\n\n- `power_cycle`\n- `power_on`\n- `power_off`\n- `shutdown`\n- `enable_ipv6`\n- `enable_backups`\n- `disable_backups`\n- `snapshot` (also requires `image:create` permission)\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    actions: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/action'\n      }\n    }\n  },\n  $defs: {\n    action: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'A unique numeric ID that can be used to identify and reference an action.'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the action was completed.',\n          format: 'date-time'\n        },\n        region: {\n          $ref: '#/$defs/region'\n        },\n        region_slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        },\n        resource_id: {\n          type: 'integer',\n          description: 'A unique identifier for the resource that the action is associated with.'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of resource that the action is associated with.'\n        },\n        started_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the action was initiated.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the action. This can be \"in-progress\", \"completed\", or \"errored\".',\n          enum: [            'in-progress',\n            'completed',\n            'errored'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'This is the type of action that the object represents. For example, this could be \"transfer\" to represent the state of an image transfer action.'\n        }\n      }\n    },\n    region: {\n      type: 'object',\n      properties: {\n        available: {\n          type: 'boolean',\n          description: 'This is a boolean value that represents whether new Droplets can be created in this region.'\n        },\n        features: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains features available in this region',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The display name of the region.  This will be a full name that is used in the control panel and other interfaces.'\n        },\n        sizes: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains the identifying slugs for the sizes available in this region. sizes:read is required to view.',\n          items: {\n            type: 'string'\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        }\n      },\n      required: [        'available',\n        'features',\n        'name',\n        'sizes',\n        'slug'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          tag_name: {
            type: 'string',
            description:
              'Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope.',
          },
        },
        required: ['type'],
      },
      {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          tag_name: {
            type: 'string',
            description:
              'Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br>Requires `tag:read` scope.',
          },
          name: {
            type: 'string',
            description: 'The name to give the new snapshot of the Droplet.',
          },
        },
        required: ['type'],
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

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.gpuDroplets.actions.bulkInitiate(body)));
};

export default { metadata, tool, handler };
