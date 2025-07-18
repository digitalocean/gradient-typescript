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
  httpPath: '/v2/droplets/{droplet_id}/destroy_with_associated_resources/status',
  operationId: 'droplets_get_DestroyAssociatedResourcesStatus',
};

export const tool: Tool = {
  name: 'check_status_gpu_droplets_destroy_with_associated_resources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo check on the status of a request to destroy a Droplet with its associated\nresources, send a GET request to the\n`/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'An objects containing information about a resources scheduled for deletion.',\n  properties: {\n    completed_at: {\n      type: 'string',\n      description: 'A time value given in ISO8601 combined date and time format indicating when the requested action was completed.',\n      format: 'date-time'\n    },\n    droplet: {\n      $ref: '#/$defs/destroyed_associated_resource'\n    },\n    failures: {\n      type: 'integer',\n      description: 'A count of the associated resources that failed to be destroyed, if any.'\n    },\n    resources: {\n      type: 'object',\n      description: 'An object containing additional information about resource related to a Droplet requested to be destroyed.',\n      properties: {\n        floating_ips: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/destroyed_associated_resource'\n          }\n        },\n        reserved_ips: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/destroyed_associated_resource'\n          }\n        },\n        snapshots: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/destroyed_associated_resource'\n          }\n        },\n        volume_snapshots: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/destroyed_associated_resource'\n          }\n        },\n        volumes: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/destroyed_associated_resource'\n          }\n        }\n      }\n    }\n  },\n  $defs: {\n    destroyed_associated_resource: {\n      type: 'object',\n      description: 'An object containing information about a resource scheduled for deletion.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier for the resource scheduled for deletion.'\n        },\n        destroyed_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format indicating when the resource was destroyed if the request was successful.',\n          format: 'date-time'\n        },\n        error_message: {\n          type: 'string',\n          description: 'A string indicating that the resource was not successfully destroyed and providing additional information.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the resource scheduled for deletion.'\n        }\n      }\n    }\n  }\n}\n```",
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
    required: ['droplet_id'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { droplet_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.destroyWithAssociatedResources.checkStatus(droplet_id)),
  );
};

export default { metadata, tool, handler };
