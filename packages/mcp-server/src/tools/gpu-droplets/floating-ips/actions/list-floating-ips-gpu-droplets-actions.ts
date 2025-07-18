// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.floating_ips.actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/floating_ips/{floating_ip}/actions',
  operationId: 'floatingIPsAction_list',
};

export const tool: Tool = {
  name: 'list_floating_ips_gpu_droplets_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve all actions that have been executed on a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    actions: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/action'\n      }\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    }\n  },\n  required: [    'meta'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      }\n    },\n    action: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'A unique numeric ID that can be used to identify and reference an action.'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the action was completed.',\n          format: 'date-time'\n        },\n        region: {\n          $ref: '#/$defs/region'\n        },\n        region_slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        },\n        resource_id: {\n          type: 'integer',\n          description: 'A unique identifier for the resource that the action is associated with.'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of resource that the action is associated with.'\n        },\n        started_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the action was initiated.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the action. This can be \"in-progress\", \"completed\", or \"errored\".',\n          enum: [            'in-progress',\n            'completed',\n            'errored'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'This is the type of action that the object represents. For example, this could be \"transfer\" to represent the state of an image transfer action.'\n        }\n      }\n    },\n    region: {\n      type: 'object',\n      properties: {\n        available: {\n          type: 'boolean',\n          description: 'This is a boolean value that represents whether new Droplets can be created in this region.'\n        },\n        features: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains features available in this region',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The display name of the region.  This will be a full name that is used in the control panel and other interfaces.'\n        },\n        sizes: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains the identifying slugs for the sizes available in this region. sizes:read is required to view.',\n          items: {\n            type: 'string'\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        }\n      },\n      required: [        'available',\n        'features',\n        'name',\n        'sizes',\n        'slug'\n      ]\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      }\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      }\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      floating_ip: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['floating_ip'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { floating_ip, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.floatingIPs.actions.list(floating_ip)),
  );
};

export default { metadata, tool, handler };
