// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.volumes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/volumes/{volume_id}',
  operationId: 'volumes_get',
};

export const tool: Tool = {
  name: 'retrieve_gpu_droplets_volumes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo show information about a block storage volume, send a GET request to `/v2/volumes/$VOLUME_ID`.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    volume: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the block storage volume.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the block storage volume was created.'\n        },\n        description: {\n          type: 'string',\n          description: 'An optional free-form text field to describe a block storage volume.'\n        },\n        droplet_ids: {\n          type: 'array',\n          description: 'An array containing the IDs of the Droplets the volume is attached to. Note that at this time, a volume can only be attached to a single Droplet.',\n          items: {\n            type: 'integer'\n          }\n        },\n        filesystem_label: {\n          type: 'string',\n          description: 'The label currently applied to the filesystem.'\n        },\n        filesystem_type: {\n          type: 'string',\n          description: 'The type of filesystem currently in-use on the volume.'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-readable name for the block storage volume. Must be lowercase and be composed only of numbers, letters and \"-\", up to a limit of 64 characters. The name must begin with a letter.'\n        },\n        region: {\n          $ref: '#/$defs/region'\n        },\n        size_gigabytes: {\n          type: 'integer',\n          description: 'The size of the block storage volume in GiB (1024^3). This field does not apply  when creating a volume from a snapshot.'\n        },\n        tags: {\n          type: 'array',\n          description: 'A flat array of tag names as strings applied to the resource. <br><br>Requires `tag:read` scope.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  },\n  $defs: {\n    region: {\n      type: 'object',\n      properties: {\n        available: {\n          type: 'boolean',\n          description: 'This is a boolean value that represents whether new Droplets can be created in this region.'\n        },\n        features: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains features available in this region',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The display name of the region.  This will be a full name that is used in the control panel and other interfaces.'\n        },\n        sizes: {\n          type: 'array',\n          description: 'This attribute is set to an array which contains the identifying slugs for the sizes available in this region. sizes:read is required to view.',\n          items: {\n            type: 'string'\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'A human-readable string that is used as a unique identifier for each region.'\n        }\n      },\n      required: [        'available',\n        'features',\n        'name',\n        'sizes',\n        'slug'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      volume_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['volume_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { volume_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.gpuDroplets.volumes.retrieve(volume_id)),
  );
};

export default { metadata, tool, handler };
