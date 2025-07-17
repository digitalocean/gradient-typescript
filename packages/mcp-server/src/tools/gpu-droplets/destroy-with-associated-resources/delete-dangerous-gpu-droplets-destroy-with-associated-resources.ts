// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.destroy_with_associated_resources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous',
  operationId: 'droplets_destroy_withAssociatedResourcesDangerous',
};

export const tool: Tool = {
  name: 'delete_dangerous_gpu_droplets_destroy_with_associated_resources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo destroy a Droplet along with all of its associated resources, send a DELETE\nrequest to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`\nendpoint. The headers of this request must include an `X-Dangerous` key set to\n`true`. To preview which resources will be destroyed, first query the\nDroplet's associated resources. This operation _can not_ be reverse and should\nbe used with caution.\n\nA successful response will include a 202 response code and no content. Use the\nstatus endpoint to check on the success or failure of the destruction of the\nindividual resources.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      droplet_id: {
        type: 'integer',
      },
      'X-Dangerous': {
        type: 'boolean',
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
  const response = await client.gpuDroplets.destroyWithAssociatedResources
    .deleteDangerous(droplet_id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
