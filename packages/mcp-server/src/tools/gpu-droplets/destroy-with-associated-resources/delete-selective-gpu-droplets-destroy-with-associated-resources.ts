// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.destroy_with_associated_resources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/droplets/{droplet_id}/destroy_with_associated_resources/selective',
  operationId: 'droplets_destroy_withAssociatedResourcesSelective',
};

export const tool: Tool = {
  name: 'delete_selective_gpu_droplets_destroy_with_associated_resources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo destroy a Droplet along with a sub-set of its associated resources, send a\nDELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`\nendpoint. The JSON body of the request should include `reserved_ips`, `snapshots`, `volumes`,\nor `volume_snapshots` keys each set to an array of IDs for the associated\nresources to be destroyed. The IDs can be found by querying the Droplet's\nassociated resources. Any associated resource not included in the request\nwill remain and continue to accrue changes on your account.\n\nA successful response will include a 202 response code and no content. Use\nthe status endpoint to check on the success or failure of the destruction of\nthe individual resources.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
      },
      floating_ips: {
        type: 'array',
        description: 'An array of unique identifiers for the floating IPs to be scheduled for deletion.',
        items: {
          type: 'string',
        },
      },
      reserved_ips: {
        type: 'array',
        description: 'An array of unique identifiers for the reserved IPs to be scheduled for deletion.',
        items: {
          type: 'string',
        },
      },
      snapshots: {
        type: 'array',
        description: 'An array of unique identifiers for the snapshots to be scheduled for deletion.',
        items: {
          type: 'string',
        },
      },
      volume_snapshots: {
        type: 'array',
        description: 'An array of unique identifiers for the volume snapshots to be scheduled for deletion.',
        items: {
          type: 'string',
        },
      },
      volumes: {
        type: 'array',
        description: 'An array of unique identifiers for the volumes to be scheduled for deletion.',
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
    required: ['droplet_id'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { droplet_id, ...body } = args as any;
  const response = await client.gpuDroplets.destroyWithAssociatedResources
    .deleteSelective(droplet_id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
