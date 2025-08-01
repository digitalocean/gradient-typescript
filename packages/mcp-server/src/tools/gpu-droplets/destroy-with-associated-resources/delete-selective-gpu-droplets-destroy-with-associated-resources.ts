// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

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
    "To destroy a Droplet along with a sub-set of its associated resources, send a\nDELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`\nendpoint. The JSON body of the request should include `reserved_ips`, `snapshots`, `volumes`,\nor `volume_snapshots` keys each set to an array of IDs for the associated\nresources to be destroyed. The IDs can be found by querying the Droplet's\nassociated resources. Any associated resource not included in the request\nwill remain and continue to accrue changes on your account.\n\nA successful response will include a 202 response code and no content. Use\nthe status endpoint to check on the success or failure of the destruction of\nthe individual resources.\n",
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
    },
    required: ['droplet_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { droplet_id, ...body } = args as any;
  const response = await client.gpuDroplets.destroyWithAssociatedResources
    .deleteSelective(droplet_id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
