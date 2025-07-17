// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/droplets/{droplet_id}/actions',
  operationId: 'dropletActions_post',
};

export const tool: Tool = {
  name: 'initiate_gpu_droplets_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo initiate an action on a Droplet send a POST request to\n`/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,\nset the `type` attribute to on of the supported action types:\n\n| Action                                   | Details | Additionally Required Permission |\n| ---------------------------------------- | ----------- | ----------- |\n| <nobr>`enable_backups`</nobr>            | Enables backups for a Droplet | |\n| <nobr>`disable_backups`</nobr>           | Disables backups for a Droplet | |\n| <nobr>`change_backup_policy`</nobr>      | Update the backup policy for a Droplet | |\n| <nobr>`reboot`</nobr>                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. | |\n| <nobr>`power_cycle`</nobr>               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. | |\n| <nobr>`shutdown`</nobr>                  | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. | |\n| <nobr>`power_off`</nobr>                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. | |\n| <nobr>`power_on`</nobr>                  | Powers on a Droplet. | |\n| <nobr>`restore`</nobr>                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. | droplet:admin |\n| <nobr>`password_reset`</nobr>            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. | droplet:admin |\n| <nobr>`resize`</nobr>                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. | droplet:create |\n| <nobr>`rebuild`</nobr>                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. | droplet:admin |\n| <nobr>`rename`</nobr>                    | Renames a Droplet. | |\n| <nobr>`change_kernel`</nobr>             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. | |\n| <nobr>`enable_ipv6`</nobr>               | Enables IPv6 for a Droplet. Once enabled for a Droplet, IPv6 can not be disabled. When enabling IPv6 on an existing Droplet, [additional OS-level configuration](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/#on-existing-droplets) is required. | |\n| <nobr>`snapshot`</nobr>                  | Takes a snapshot of a Droplet. | image:create |\n",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
        },
      },
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          backup_policy: {
            $ref: '#/$defs/droplet_backup_policy',
          },
        },
      },
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          backup_policy: {
            $ref: '#/$defs/droplet_backup_policy',
          },
        },
      },
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          image: {
            type: 'integer',
            description: 'The ID of a backup of the current Droplet instance to restore from.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          disk: {
            type: 'boolean',
            description:
              "When `true`, the Droplet's disk will be resized in addition to its RAM and CPU. This is a permanent change and cannot be reversed as a Droplet's disk size cannot be decreased.",
          },
          size: {
            type: 'string',
            description: 'The slug identifier for the size to which you wish to resize the Droplet.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          image: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'integer',
              },
            ],
            description:
              'The image ID of a public or private image or the slug identifier for a public image. The Droplet will be rebuilt using this image as its base.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          name: {
            type: 'string',
            description: 'The new name for the Droplet.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          kernel: {
            type: 'integer',
            description: 'A unique number used to identify and reference a specific kernel.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          droplet_id: {
            type: 'integer',
          },
          type: {
            type: 'string',
            description: 'The type of action to initiate for the Droplet.',
            enum: [
              'enable_backups',
              'disable_backups',
              'reboot',
              'power_cycle',
              'shutdown',
              'power_off',
              'power_on',
              'restore',
              'password_reset',
              'resize',
              'rebuild',
              'rename',
              'change_kernel',
              'enable_ipv6',
              'snapshot',
            ],
          },
          name: {
            type: 'string',
            description: 'The name to give the new snapshot of the Droplet.',
          },
        },
      },
    ],
    $defs: {
      droplet_backup_policy: {
        type: 'object',
        properties: {
          hour: {
            type: 'string',
            description: 'The hour of the day that the backup window will start.',
            enum: [0, 4, 8, 12, 16, 20],
          },
          plan: {
            type: 'string',
            description: 'The backup plan used for the Droplet. The plan can be either `daily` or `weekly`.',
            enum: ['daily', 'weekly'],
          },
          retention_period_days: {
            type: 'integer',
            description: 'The number of days the backup will be retained.',
          },
          weekday: {
            type: 'string',
            description: 'The day of the week on which the backup will occur.',
            enum: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
          },
          window_length_hours: {
            type: 'integer',
            description: 'The length of the backup window starting from `hour`.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { droplet_id, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.actions.initiate(droplet_id, body));
};

export default { metadata, tool, handler };
