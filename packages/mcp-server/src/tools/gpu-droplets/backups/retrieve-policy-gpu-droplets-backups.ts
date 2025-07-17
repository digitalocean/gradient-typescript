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
  httpPath: '/v2/droplets/{droplet_id}/backups/policy',
  operationId: 'droplets_get_backup_policy',
};

export const tool: Tool = {
  name: 'retrieve_policy_gpu_droplets_backups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo show information about an individual Droplet's backup policy, send a GET\nrequest to `/v2/droplets/$DROPLET_ID/backups/policy`.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    policy: {\n      type: 'object',\n      properties: {\n        backup_enabled: {\n          type: 'boolean',\n          description: 'A boolean value indicating whether backups are enabled for the Droplet.'\n        },\n        backup_policy: {\n          $ref: '#/$defs/droplet_backup_policy'\n        },\n        droplet_id: {\n          type: 'integer',\n          description: 'The unique identifier for the Droplet.'\n        },\n        next_backup_window: {\n          $ref: '#/$defs/droplet_next_backup_window'\n        }\n      },\n      required: []\n    }\n  },\n  required: [],\n  $defs: {\n    droplet_backup_policy: {\n      type: 'object',\n      properties: {\n        hour: {\n          type: 'string',\n          description: 'The hour of the day that the backup window will start.',\n          enum: [            0,\n            4,\n            8,\n            12,\n            16,\n            20\n          ]\n        },\n        plan: {\n          type: 'string',\n          description: 'The backup plan used for the Droplet. The plan can be either `daily` or `weekly`.',\n          enum: [            'daily',\n            'weekly'\n          ]\n        },\n        retention_period_days: {\n          type: 'integer',\n          description: 'The number of days the backup will be retained.'\n        },\n        weekday: {\n          type: 'string',\n          description: 'The day of the week on which the backup will occur.',\n          enum: [            'SUN',\n            'MON',\n            'TUE',\n            'WED',\n            'THU',\n            'FRI',\n            'SAT'\n          ]\n        },\n        window_length_hours: {\n          type: 'integer',\n          description: 'The length of the backup window starting from `hour`.'\n        }\n      },\n      required: []\n    },\n    droplet_next_backup_window: {\n      type: 'object',\n      properties: {\n        end: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format specifying the end of the Droplet\\'s backup window.',\n          format: 'date-time'\n        },\n        start: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format specifying the start of the Droplet\\'s backup window.',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
    await maybeFilter(args, await client.gpuDroplets.backups.retrievePolicy(droplet_id)),
  );
};

export default { metadata, tool, handler };
