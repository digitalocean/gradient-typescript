// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.autoscale',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/droplets/autoscale/{autoscale_pool_id}',
  operationId: 'autoscalepools_update',
};

export const tool: Tool = {
  name: 'update_gpu_droplets_autoscale',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update the configuration of an existing autoscale pool, send a PUT request to\n`/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`. The request must contain a full representation\nof the autoscale pool including existing attributes. \n",
  inputSchema: {
    type: 'object',
    properties: {
      autoscale_pool_id: {
        type: 'string',
      },
      config: {
        anyOf: [
          {
            $ref: '#/$defs/autoscale_pool_static_config',
          },
          {
            $ref: '#/$defs/autoscale_pool_dynamic_config',
          },
        ],
        description:
          'The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration).',
      },
      droplet_template: {
        $ref: '#/$defs/autoscale_pool_droplet_template',
      },
      name: {
        type: 'string',
        description: 'The human-readable name of the autoscale pool. This field cannot be updated',
      },
    },
    required: ['autoscale_pool_id', 'config', 'droplet_template', 'name'],
    $defs: {
      autoscale_pool_static_config: {
        type: 'object',
        properties: {
          target_number_instances: {
            type: 'integer',
            title: 'static config',
            description: 'Fixed number of instances in an autoscale pool.',
          },
        },
        required: ['target_number_instances'],
      },
      autoscale_pool_dynamic_config: {
        type: 'object',
        properties: {
          max_instances: {
            type: 'integer',
            description: 'The maximum number of Droplets in an autoscale pool.',
          },
          min_instances: {
            type: 'integer',
            description: 'The minimum number of Droplets in an autoscale pool.',
          },
          cooldown_minutes: {
            type: 'integer',
            description:
              'The number of minutes to wait between scaling events in an autoscale pool. Defaults to 10 minutes.',
          },
          target_cpu_utilization: {
            type: 'number',
            description: 'Target CPU utilization as a decimal.',
          },
          target_memory_utilization: {
            type: 'number',
            description: 'Target memory utilization as a decimal.',
          },
        },
        required: ['max_instances', 'min_instances'],
      },
      autoscale_pool_droplet_template: {
        type: 'object',
        properties: {
          image: {
            type: 'string',
            description:
              'The Droplet image to be used for all Droplets in the autoscale pool. You may specify the slug or the image ID.',
          },
          region: {
            type: 'string',
            description: 'The datacenter in which all of the Droplets will be created.',
            enum: [
              'nyc1',
              'nyc2',
              'nyc3',
              'ams2',
              'ams3',
              'sfo1',
              'sfo2',
              'sfo3',
              'sgp1',
              'lon1',
              'fra1',
              'tor1',
              'blr1',
              'syd1',
            ],
          },
          size: {
            type: 'string',
            description: 'The Droplet size to be used for all Droplets in the autoscale pool.',
          },
          ssh_keys: {
            type: 'array',
            description:
              'The SSH keys to be installed on the Droplets in the autoscale pool. You can either specify the key ID or the fingerprint.\nRequires `ssh_key:read` scope.\n',
            items: {
              type: 'string',
            },
          },
          ipv6: {
            type: 'boolean',
            description: 'Assigns a unique IPv6 address to each of the Droplets in the autoscale pool.',
          },
          name: {
            type: 'string',
            description: 'The name(s) to be applied to all Droplets in the autoscale pool.',
          },
          project_id: {
            type: 'string',
            description:
              'The project that the Droplets in the autoscale pool will belong to.\nRequires `project:read` scope.\n',
          },
          tags: {
            type: 'array',
            description:
              'The tags to apply to each of the Droplets in the autoscale pool.\nRequires `tag:read` scope.\n',
            items: {
              type: 'string',
            },
          },
          user_data: {
            type: 'string',
            description:
              'A string containing user data that cloud-init consumes to configure a Droplet on first boot. User data is often a cloud-config file or Bash script. It must be plain text and may not exceed 64 KiB in size.',
          },
          vpc_uuid: {
            type: 'string',
            description:
              'The VPC where the Droplets in the autoscale pool will be created. The VPC must be in the region where you want to create the Droplets.\nRequires `vpc:read` scope.\n',
          },
          with_droplet_agent: {
            type: 'boolean',
            description:
              'Installs the Droplet agent. This must be set to true to monitor Droplets for resource utilization scaling.',
          },
        },
        required: ['image', 'region', 'size', 'ssh_keys'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { autoscale_pool_id, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.autoscale.update(autoscale_pool_id, body));
};

export default { metadata, tool, handler };
