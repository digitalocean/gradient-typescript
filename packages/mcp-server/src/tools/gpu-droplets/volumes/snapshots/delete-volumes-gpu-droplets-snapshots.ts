// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.volumes.snapshots',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/volumes/snapshots/{snapshot_id}',
  operationId: 'volumeSnapshots_delete_byId',
};

export const tool: Tool = {
  name: 'delete_volumes_gpu_droplets_snapshots',
  description:
    'To delete a volume snapshot, send a DELETE request to\n`/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.\n\nA status of 204 will be given. This indicates that the request was processed\nsuccessfully, but that no response body is needed.\n',
  inputSchema: {
    type: 'object',
    properties: {
      snapshot_id: {
        type: 'string',
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
  const response = await client.gpuDroplets.volumes.snapshots.delete(snapshot_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
