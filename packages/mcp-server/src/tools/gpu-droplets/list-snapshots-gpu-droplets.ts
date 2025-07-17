// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/{droplet_id}/snapshots',
  operationId: 'droplets_list_snapshots',
};

export const tool: Tool = {
  name: 'list_snapshots_gpu_droplets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve the snapshots that have been created from a Droplet, send a GET\nrequest to `/v2/droplets/$DROPLET_ID/snapshots`.\n\nYou will get back a JSON object that has a `snapshots` key. This will be set\nto an array of snapshot objects, each of which contain the standard Droplet\nsnapshot attributes.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    },\n    snapshots: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer',\n            description: 'The unique identifier for the snapshot or backup.'\n          },\n          created_at: {\n            type: 'string',\n            description: 'A time value given in ISO8601 combined date and time format that represents when the snapshot was created.',\n            format: 'date-time'\n          },\n          min_disk_size: {\n            type: 'integer',\n            description: 'The minimum size in GB required for a volume or Droplet to use this snapshot.'\n          },\n          name: {\n            type: 'string',\n            description: 'A human-readable name for the snapshot.'\n          },\n          regions: {\n            type: 'array',\n            description: 'An array of the regions that the snapshot is available in. The regions are represented by their identifying slug values.',\n            items: {\n              type: 'string'\n            }\n          },\n          size_gigabytes: {\n            type: 'number',\n            description: 'The billable size of the snapshot in gigabytes.'\n          },\n          type: {\n            type: 'string',\n            description: 'Describes the kind of image. It may be one of `snapshot` or `backup`. This specifies whether an image is a user-generated Droplet snapshot or automatically created Droplet backup.',\n            enum: [              'snapshot',\n              'backup'\n            ]\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'min_disk_size',\n          'name',\n          'regions',\n          'size_gigabytes',\n          'type'\n        ]\n      }\n    }\n  },\n  required: [    'meta'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      },\n      required: []\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      },\n      required: []\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      },\n      required: []\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
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
  const { droplet_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.listSnapshots(droplet_id, body)),
  );
};

export default { metadata, tool, handler };
