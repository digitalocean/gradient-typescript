// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/droplets',
  operationId: 'droplets_create',
};

export const tool: Tool = {
  name: 'create_gpu_droplets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create a new Droplet, send a POST request to `/v2/droplets` setting the\nrequired attributes.\n\nA Droplet will be created using the provided information. The response body\nwill contain a JSON object with a key called `droplet`. The value will be an\nobject containing the standard attributes for your new Droplet. The response\ncode, 202 Accepted, does not indicate the success or failure of the operation,\njust that the request has been accepted for processing. The `actions` returned\nas part of the response's `links` object can be used to check the status\nof the Droplet create event.\n\n### Create Multiple Droplets\n\nCreating multiple Droplets is very similar to creating a single Droplet.\nInstead of sending `name` as a string, send `names` as an array of strings. A\nDroplet will be created for each name you send using the associated\ninformation. Up to ten Droplets may be created this way at a time.\n\nRather than returning a single Droplet, the response body will contain a JSON\narray with a key called `droplets`. This will be set to an array of JSON\nobjects, each of which will contain the standard Droplet attributes. The\nresponse code, 202 Accepted, does not indicate the success or failure of any\noperation, just that the request has been accepted for processing. The array\nof `actions` returned as part of the response's `links` object can be used to\ncheck the status of each individual Droplet create event.\n",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
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
              'The image ID of a public or private image or the slug identifier for a public image. This image will be the base image for your Droplet.<br>Requires `image:read` scope.',
          },
          name: {
            type: 'string',
            description:
              'The human-readable string you wish to use when displaying the Droplet name. The name, if set to a domain name managed in the DigitalOcean DNS management system, will configure a PTR record for the Droplet. The name set during creation will also determine the hostname for the Droplet in its internal configuration.',
          },
          size: {
            type: 'string',
            description: 'The slug identifier for the size that you wish to select for this Droplet.',
          },
          backup_policy: {
            $ref: '#/$defs/droplet_backup_policy',
          },
          backups: {
            type: 'boolean',
            description: 'A boolean indicating whether automated backups should be enabled for the Droplet.',
          },
          ipv6: {
            type: 'boolean',
            description: 'A boolean indicating whether to enable IPv6 on the Droplet.',
          },
          monitoring: {
            type: 'boolean',
            description: 'A boolean indicating whether to install the DigitalOcean agent for monitoring.',
          },
          private_networking: {
            type: 'boolean',
            description:
              "This parameter has been deprecated. Use `vpc_uuid` instead to specify a VPC network for the Droplet. If no `vpc_uuid` is provided, the Droplet will be placed in your account's default VPC for the region.",
          },
          region: {
            type: 'string',
            description:
              "The slug identifier for the region that you wish to deploy the Droplet in. If the specific datacenter is not not important, a slug prefix (e.g. `nyc`) can be used to deploy the Droplet in any of the that region's locations (`nyc1`, `nyc2`, or `nyc3`). If the region is omitted from the create request completely, the Droplet may deploy in any region.",
          },
          ssh_keys: {
            type: 'array',
            description:
              "An array containing the IDs or fingerprints of the SSH keys that you wish to embed in the Droplet's root account upon creation. You must add the keys to your team before they can be embedded on a Droplet.<br>Requires `ssh_key:read` scope.",
            items: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'integer',
                },
              ],
            },
          },
          tags: {
            type: 'array',
            description:
              'A flat array of tag names as strings to apply to the Droplet after it is created. Tag names can either be existing or new tags.<br>Requires `tag:create` scope.',
            items: {
              type: 'string',
            },
          },
          user_data: {
            type: 'string',
            description:
              "A string containing 'user data' which may be used to configure the Droplet on first boot, often a 'cloud-config' file or Bash script. It must be plain text and may not exceed 64 KiB in size.",
          },
          volumes: {
            type: 'array',
            description:
              'An array of IDs for block storage volumes that will be attached to the Droplet once created. The volumes must not already be attached to an existing Droplet.<br>Requires `block_storage:read` scpoe.',
            items: {
              type: 'string',
            },
          },
          vpc_uuid: {
            type: 'string',
            description:
              "A string specifying the UUID of the VPC to which the Droplet will be assigned. If excluded, the Droplet will be assigned to your account's default VPC for the region.<br>Requires `vpc:read` scope.",
          },
          with_droplet_agent: {
            type: 'boolean',
            description:
              'A boolean indicating whether to install the DigitalOcean agent used for providing access to the Droplet web console in the control panel. By default, the agent is installed on new Droplets but installation errors (i.e. OS not supported) are ignored. To prevent it from being installed, set to `false`. To make installation errors fatal, explicitly set it to `true`.',
          },
        },
        required: ['image', 'name', 'size'],
      },
      {
        type: 'object',
        properties: {
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
              'The image ID of a public or private image or the slug identifier for a public image. This image will be the base image for your Droplet.<br>Requires `image:read` scope.',
          },
          names: {
            type: 'array',
            description:
              'An array of human human-readable strings you wish to use when displaying the Droplet name. Each name, if set to a domain name managed in the DigitalOcean DNS management system, will configure a PTR record for the Droplet. Each name set during creation will also determine the hostname for the Droplet in its internal configuration.',
            items: {
              type: 'string',
            },
          },
          size: {
            type: 'string',
            description: 'The slug identifier for the size that you wish to select for this Droplet.',
          },
          backup_policy: {
            $ref: '#/$defs/droplet_backup_policy',
          },
          backups: {
            type: 'boolean',
            description: 'A boolean indicating whether automated backups should be enabled for the Droplet.',
          },
          ipv6: {
            type: 'boolean',
            description: 'A boolean indicating whether to enable IPv6 on the Droplet.',
          },
          monitoring: {
            type: 'boolean',
            description: 'A boolean indicating whether to install the DigitalOcean agent for monitoring.',
          },
          private_networking: {
            type: 'boolean',
            description:
              "This parameter has been deprecated. Use `vpc_uuid` instead to specify a VPC network for the Droplet. If no `vpc_uuid` is provided, the Droplet will be placed in your account's default VPC for the region.",
          },
          region: {
            type: 'string',
            description:
              "The slug identifier for the region that you wish to deploy the Droplet in. If the specific datacenter is not not important, a slug prefix (e.g. `nyc`) can be used to deploy the Droplet in any of the that region's locations (`nyc1`, `nyc2`, or `nyc3`). If the region is omitted from the create request completely, the Droplet may deploy in any region.",
          },
          ssh_keys: {
            type: 'array',
            description:
              "An array containing the IDs or fingerprints of the SSH keys that you wish to embed in the Droplet's root account upon creation. You must add the keys to your team before they can be embedded on a Droplet.<br>Requires `ssh_key:read` scope.",
            items: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'integer',
                },
              ],
            },
          },
          tags: {
            type: 'array',
            description:
              'A flat array of tag names as strings to apply to the Droplet after it is created. Tag names can either be existing or new tags.<br>Requires `tag:create` scope.',
            items: {
              type: 'string',
            },
          },
          user_data: {
            type: 'string',
            description:
              "A string containing 'user data' which may be used to configure the Droplet on first boot, often a 'cloud-config' file or Bash script. It must be plain text and may not exceed 64 KiB in size.",
          },
          volumes: {
            type: 'array',
            description:
              'An array of IDs for block storage volumes that will be attached to the Droplet once created. The volumes must not already be attached to an existing Droplet.<br>Requires `block_storage:read` scpoe.',
            items: {
              type: 'string',
            },
          },
          vpc_uuid: {
            type: 'string',
            description:
              "A string specifying the UUID of the VPC to which the Droplet will be assigned. If excluded, the Droplet will be assigned to your account's default VPC for the region.<br>Requires `vpc:read` scope.",
          },
          with_droplet_agent: {
            type: 'boolean',
            description:
              'A boolean indicating whether to install the DigitalOcean agent used for providing access to the Droplet web console in the control panel. By default, the agent is installed on new Droplets but installation errors (i.e. OS not supported) are ignored. To prevent it from being installed, set to `false`. To make installation errors fatal, explicitly set it to `true`.',
          },
        },
        required: ['image', 'names', 'size'],
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
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.gpuDroplets.create(body));
};

export default { metadata, tool, handler };
