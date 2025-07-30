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
  httpPath: '/v2/snapshots/{snapshot_id}',
  operationId: 'snapshots_get',
};

export const tool: Tool = {
  name: 'retrieve_gpu_droplets_snapshots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve information about a snapshot, send a GET request to\n`/v2/snapshots/$SNAPSHOT_ID`.\n\nThe response will be a JSON object with a key called `snapshot`. The value of\nthis will be an snapshot object containing the standard snapshot attributes.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    snapshot: {\n      $ref: '#/$defs/snapshots'\n    }\n  },\n  $defs: {\n    snapshots: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the snapshot.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the snapshot was created.',\n          format: 'date-time'\n        },\n        min_disk_size: {\n          type: 'integer',\n          description: 'The minimum size in GB required for a volume or Droplet to use this snapshot.'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-readable name for the snapshot.'\n        },\n        regions: {\n          type: 'array',\n          description: 'An array of the regions that the snapshot is available in. The regions are represented by their identifying slug values.',\n          items: {\n            type: 'string'\n          }\n        },\n        resource_id: {\n          type: 'string',\n          description: 'The unique identifier for the resource that the snapshot originated from.'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of resource that the snapshot originated from.',\n          enum: [            'droplet',\n            'volume'\n          ]\n        },\n        size_gigabytes: {\n          type: 'number',\n          description: 'The billable size of the snapshot in gigabytes.'\n        },\n        tags: {\n          type: 'array',\n          description: 'An array of Tags the snapshot has been tagged with.<br><br>Requires `tag:read` scope.',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'min_disk_size',\n        'name',\n        'regions',\n        'resource_id',\n        'resource_type',\n        'size_gigabytes',\n        'tags'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      snapshot_id: {
        anyOf: [
          {
            type: 'integer',
            description: 'The ID of a Droplet snapshot.',
          },
          {
            type: 'string',
            description: 'The ID of a volume snapshot.',
          },
        ],
        description: 'The ID of a Droplet snapshot.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['snapshot_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { snapshot_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.snapshots.retrieve(snapshot_id)),
  );
};

export default { metadata, tool, handler };
