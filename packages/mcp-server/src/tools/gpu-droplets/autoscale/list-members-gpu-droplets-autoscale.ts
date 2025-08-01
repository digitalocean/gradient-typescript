// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.autoscale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/autoscale/{autoscale_pool_id}/members',
  operationId: 'autoscalepools_list_members',
};

export const tool: Tool = {
  name: 'list_members_gpu_droplets_autoscale',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list the Droplets in an autoscale pool, send a GET request to `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/members`.\n\nThe response body will be a JSON object with a key of `droplets`. This will be\nset to an array containing information about each of the Droplets in the autoscale pool.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    droplets: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          created_at: {\n            type: 'string',\n            description: 'The creation time of the Droplet in ISO8601 combined date and time format.',\n            format: 'date-time'\n          },\n          current_utilization: {\n            type: 'object',\n            properties: {\n              cpu: {\n                type: 'number',\n                description: 'The CPU utilization average of the individual Droplet.'\n              },\n              memory: {\n                type: 'number',\n                description: 'The memory utilization average of the individual Droplet.'\n              }\n            }\n          },\n          droplet_id: {\n            type: 'integer',\n            description: 'The unique identifier of the Droplet.'\n          },\n          health_status: {\n            type: 'string',\n            description: 'The health status of the Droplet.'\n          },\n          status: {\n            type: 'string',\n            description: 'The power status of the Droplet.',\n            enum: [              'provisioning',\n              'active',\n              'deleting',\n              'off'\n            ]\n          },\n          updated_at: {\n            type: 'string',\n            description: 'The last updated time of the Droplet in ISO8601 combined date and time format.',\n            format: 'date-time'\n          }\n        },\n        required: [          'created_at',\n          'current_utilization',\n          'droplet_id',\n          'health_status',\n          'status',\n          'updated_at'\n        ]\n      }\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    }\n  },\n  required: [    'meta'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      }\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      }\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      }\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      autoscale_pool_id: {
        type: 'string',
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
    required: ['autoscale_pool_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { autoscale_pool_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.gpuDroplets.autoscale.listMembers(autoscale_pool_id, body)),
  );
};

export default { metadata, tool, handler };
