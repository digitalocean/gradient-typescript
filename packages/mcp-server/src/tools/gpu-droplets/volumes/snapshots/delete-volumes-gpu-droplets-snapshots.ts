// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo delete a volume snapshot, send a DELETE request to\n`/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.\n\nA status of 204 will be given. This indicates that the request was processed\nsuccessfully, but that no response body is needed.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      snapshot_id: {
        type: 'string',
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
    idempotentHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { snapshot_id, ...body } = args as any;
  const response = await client.gpuDroplets.volumes.snapshots.delete(snapshot_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
