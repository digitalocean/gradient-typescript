// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.snapshots',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/snapshots/{snapshot_id}',
  operationId: 'snapshots_delete',
};

export const tool: Tool = {
  name: 'delete_gpu_droplets_snapshots',
  description:
    'Both Droplet and volume snapshots are managed through the `/v2/snapshots/`\nendpoint. To delete a snapshot, send a DELETE request to\n`/v2/snapshots/$SNAPSHOT_ID`.\n\nA status of 204 will be given. This indicates that the request was processed\nsuccessfully, but that no response body is needed.\n',
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
    },
    required: ['snapshot_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { snapshot_id, ...body } = args as any;
  const response = await client.gpuDroplets.snapshots.delete(snapshot_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
