// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.backups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/backups/supported_policies',
  operationId: 'droplets_list_supported_backup_policies',
};

export const tool: Tool = {
  name: 'list_supported_policies_gpu_droplets_backups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrieve a list of all supported Droplet backup policies, send a GET\nrequest to `/v2/droplets/backups/supported_policies`.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    supported_policies: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          name: {\n            type: 'string',\n            description: 'The name of the Droplet backup plan.'\n          },\n          possible_days: {\n            type: 'array',\n            description: 'The day of the week the backup will occur.',\n            items: {\n              type: 'string'\n            }\n          },\n          possible_window_starts: {\n            type: 'array',\n            description: 'An array of integers representing the hours of the day that a backup can\\nstart.\\n',\n            items: {\n              type: 'integer'\n            }\n          },\n          retention_period_days: {\n            type: 'integer',\n            description: 'The number of days that a backup will be kept.'\n          },\n          window_length_hours: {\n            type: 'integer',\n            description: 'The number of hours that a backup window is open.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.backups.listSupportedPolicies()),
  );
};

export default { metadata, tool, handler };
