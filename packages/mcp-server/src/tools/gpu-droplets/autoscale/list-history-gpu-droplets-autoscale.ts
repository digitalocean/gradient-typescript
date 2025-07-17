// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.autoscale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/autoscale/{autoscale_pool_id}/history',
  operationId: 'autoscalepools_list_history',
};

export const tool: Tool = {
  name: 'list_history_gpu_droplets_autoscale',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all of the scaling history events of an autoscale pool, send a GET request to `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/history`.\n\nThe response body will be a JSON object with a key of `history`. This will be\nset to an array containing objects each representing a history event. \n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    history: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          created_at: {\n            type: 'string',\n            description: 'The creation time of the history event in ISO8601 combined date and time format.',\n            format: 'date-time'\n          },\n          current_instance_count: {\n            type: 'integer',\n            description: 'The current number of Droplets in the autoscale pool.'\n          },\n          desired_instance_count: {\n            type: 'integer',\n            description: 'The target number of Droplets for the autoscale pool after the scaling event.'\n          },\n          history_event_id: {\n            type: 'string',\n            description: 'The unique identifier of the history event.'\n          },\n          reason: {\n            type: 'string',\n            description: 'The reason for the scaling event.',\n            enum: [              'CONFIGURATION_CHANGE',\n              'SCALE_UP',\n              'SCALE_DOWN'\n            ]\n          },\n          status: {\n            type: 'string',\n            description: 'The status of the scaling event.',\n            enum: [              'in_progress',\n              'success',\n              'error'\n            ]\n          },\n          updated_at: {\n            type: 'string',\n            description: 'The last updated time of the history event in ISO8601 combined date and time format.',\n            format: 'date-time'\n          }\n        },\n        required: [          'created_at',\n          'current_instance_count',\n          'desired_instance_count',\n          'history_event_id',\n          'reason',\n          'status',\n          'updated_at'\n        ]\n      }\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    }\n  },\n  required: [    'meta'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      },\n      required: []\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      },\n      required: []\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      },\n      required: []\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { autoscale_pool_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.autoscale.listHistory(autoscale_pool_id, body)),
  );
};

export default { metadata, tool, handler };
