// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.snapshots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/snapshots',
  operationId: 'snapshots_list',
};

export const tool: Tool = {
  name: 'list_gpu_droplets_snapshots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all of the snapshots available on your account, send a GET request to\n`/v2/snapshots`.\n\nThe response will be a JSON object with a key called `snapshots`. This will be\nset to an array of `snapshot` objects, each of which will contain the standard\nsnapshot attributes.\n\n### Filtering Results by Resource Type\n\nIt's possible to request filtered results by including certain query parameters.\n\n#### List Droplet Snapshots\n\nTo retrieve only snapshots based on Droplets, include the `resource_type`\nquery parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.\n\n#### List Volume Snapshots\n\nTo retrieve only snapshots based on volumes, include the `resource_type`\nquery parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    },\n    snapshots: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/snapshots'\n      }\n    }\n  },\n  required: [    'meta'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      }\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object',\n              additionalProperties: true\n            }\n          ]\n        }\n      }\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      }\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      }\n    },\n    snapshots: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the snapshot.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the snapshot was created.',\n          format: 'date-time'\n        },\n        min_disk_size: {\n          type: 'integer',\n          description: 'The minimum size in GB required for a volume or Droplet to use this snapshot.'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-readable name for the snapshot.'\n        },\n        regions: {\n          type: 'array',\n          description: 'An array of the regions that the snapshot is available in. The regions are represented by their identifying slug values.',\n          items: {\n            type: 'string'\n          }\n        },\n        resource_id: {\n          type: 'string',\n          description: 'The unique identifier for the resource that the snapshot originated from.'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of resource that the snapshot originated from.',\n          enum: [            'droplet',\n            'volume'\n          ]\n        },\n        size_gigabytes: {\n          type: 'number',\n          description: 'The billable size of the snapshot in gigabytes.'\n        },\n        tags: {\n          type: 'array',\n          description: 'An array of Tags the snapshot has been tagged with.<br><br>Requires `tag:read` scope.',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'min_disk_size',\n        'name',\n        'regions',\n        'resource_id',\n        'resource_type',\n        'size_gigabytes',\n        'tags'\n      ]\n    }\n  }\n}\n```",
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
      resource_type: {
        type: 'string',
        description: 'Used to filter snapshots by a resource type.',
        enum: ['droplet', 'volume'],
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.gpuDroplets.snapshots.list(body)));
};

export default { metadata, tool, handler };
