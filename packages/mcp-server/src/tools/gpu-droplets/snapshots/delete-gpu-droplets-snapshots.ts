// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBoth Droplet and volume snapshots are managed through the `/v2/snapshots/`\nendpoint. To delete a snapshot, send a DELETE request to\n`/v2/snapshots/$SNAPSHOT_ID`.\n\nA status of 204 will be given. This indicates that the request was processed\nsuccessfully, but that no response body is needed.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { snapshot_id, ...body } = args as any;
  const response = await client.gpuDroplets.snapshots.delete(snapshot_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
