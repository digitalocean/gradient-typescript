// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.volumes.snapshots',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/volumes/{volume_id}/snapshots',
  operationId: 'volumeSnapshots_create',
};

export const tool: Tool = {
  name: 'create_volumes_gpu_droplets_snapshots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create a snapshot from a volume, sent a POST request to `/v2/volumes/$VOLUME_ID/snapshots`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    snapshot: {\n      $ref: '#/$defs/snapshots'\n    }\n  },\n  $defs: {\n    snapshots: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the snapshot.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the snapshot was created.',\n          format: 'date-time'\n        },\n        min_disk_size: {\n          type: 'integer',\n          description: 'The minimum size in GB required for a volume or Droplet to use this snapshot.'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-readable name for the snapshot.'\n        },\n        regions: {\n          type: 'array',\n          description: 'An array of the regions that the snapshot is available in. The regions are represented by their identifying slug values.',\n          items: {\n            type: 'string'\n          }\n        },\n        resource_id: {\n          type: 'string',\n          description: 'The unique identifier for the resource that the snapshot originated from.'\n        },\n        resource_type: {\n          type: 'string',\n          description: 'The type of resource that the snapshot originated from.',\n          enum: [            'droplet',\n            'volume'\n          ]\n        },\n        size_gigabytes: {\n          type: 'number',\n          description: 'The billable size of the snapshot in gigabytes.'\n        },\n        tags: {\n          type: 'array',\n          description: 'An array of Tags the snapshot has been tagged with.<br><br>Requires `tag:read` scope.',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'min_disk_size',\n        'name',\n        'regions',\n        'resource_id',\n        'resource_type',\n        'size_gigabytes',\n        'tags'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      volume_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'A human-readable name for the volume snapshot.',
      },
      tags: {
        type: 'array',
        description:
          'A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags. <br><br>Requires `tag:create` scope.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['volume_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { volume_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.gpuDroplets.volumes.snapshots.create(volume_id, body)),
  );
};

export default { metadata, tool, handler };
