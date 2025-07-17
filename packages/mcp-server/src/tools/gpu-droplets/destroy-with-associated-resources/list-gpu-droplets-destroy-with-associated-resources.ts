// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.destroy_with_associated_resources',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/{droplet_id}/destroy_with_associated_resources',
  operationId: 'droplets_list_associatedResources',
};

export const tool: Tool = {
  name: 'list_gpu_droplets_destroy_with_associated_resources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list the associated billable resources that can be destroyed along with a\nDroplet, send a GET request to the\n`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.\n\nThis endpoint will only return resources that you are authorized to see. For\nexample, to see associated Reserved IPs, include the `reserved_ip:read` scope.\n\nThe response will be a JSON object containing `snapshots`, `volumes`, and\n`volume_snapshots` keys. Each will be set to an array of objects containing\ninformation about the associated resources.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    floating_ips: {\n      type: 'array',\n      description: 'Floating IPs that are associated with this Droplet.<br>Requires `reserved_ip:read` scope.',\n      items: {\n        $ref: '#/$defs/associated_resource'\n      }\n    },\n    reserved_ips: {\n      type: 'array',\n      description: 'Reserved IPs that are associated with this Droplet.<br>Requires `reserved_ip:read` scope.',\n      items: {\n        $ref: '#/$defs/associated_resource'\n      }\n    },\n    snapshots: {\n      type: 'array',\n      description: 'Snapshots that are associated with this Droplet.<br>Requires `image:read` scope.',\n      items: {\n        $ref: '#/$defs/associated_resource'\n      }\n    },\n    volume_snapshots: {\n      type: 'array',\n      description: 'Volume Snapshots that are associated with this Droplet.<br>Requires `block_storage_snapshot:read` scope.',\n      items: {\n        $ref: '#/$defs/associated_resource'\n      }\n    },\n    volumes: {\n      type: 'array',\n      description: 'Volumes that are associated with this Droplet.<br>Requires `block_storage:read` scope.',\n      items: {\n        $ref: '#/$defs/associated_resource'\n      }\n    }\n  },\n  required: [],\n  $defs: {\n    associated_resource: {\n      type: 'object',\n      description: 'An objects containing information about a resource associated with a Droplet.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the resource associated with the Droplet.'\n        },\n        cost: {\n          type: 'string',\n          description: 'The cost of the resource in USD per month if the resource is retained after the Droplet is destroyed.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the resource associated with the Droplet.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
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
    await maybeFilter(args, await client.gpuDroplets.destroyWithAssociatedResources.list(droplet_id)),
  );
};

export default { metadata, tool, handler };
