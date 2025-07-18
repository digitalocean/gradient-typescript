// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.autoscale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/droplets/autoscale',
  operationId: 'autoscalepools_list',
};

export const tool: Tool = {
  name: 'list_gpu_droplets_autoscale',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all autoscale pools in your team, send a GET request to `/v2/droplets/autoscale`.\nThe response body will be a JSON object with a key of `autoscale_pools` containing an array of autoscale pool objects.\nThese each contain the standard autoscale pool attributes.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      $ref: '#/$defs/meta_properties'\n    },\n    autoscale_pools: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/autoscale_pool'\n      }\n    },\n    links: {\n      $ref: '#/$defs/page_links'\n    }\n  },\n  required: [    'meta'\n  ],\n  $defs: {\n    meta_properties: {\n      type: 'object',\n      description: 'Information about the response itself.',\n      properties: {\n        total: {\n          type: 'integer',\n          description: 'Number of objects returned by the request.'\n        }\n      }\n    },\n    autoscale_pool: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique identifier for each autoscale pool instance. This is automatically generated upon autoscale pool creation.'\n        },\n        active_resources_count: {\n          type: 'integer',\n          description: 'The number of active Droplets in the autoscale pool.'\n        },\n        config: {\n          anyOf: [            {\n              $ref: '#/$defs/autoscale_pool_static_config'\n            },\n            {\n              $ref: '#/$defs/autoscale_pool_dynamic_config'\n            }\n          ],\n          description: 'The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration).'\n        },\n        created_at: {\n          type: 'string',\n          title: 'The creation time of the autoscale pool',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the autoscale pool was created.',\n          format: 'date-time'\n        },\n        droplet_template: {\n          $ref: '#/$defs/autoscale_pool_droplet_template'\n        },\n        name: {\n          type: 'string',\n          description: 'The human-readable name set for the autoscale pool.'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the autoscale pool.',\n          enum: [            'active',\n            'deleting',\n            'error'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          title: 'When the autoscale pool was last updated',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the autoscale pool was last updated.',\n          format: 'date-time'\n        },\n        current_utilization: {\n          $ref: '#/$defs/current_utilization'\n        }\n      },\n      required: [        'id',\n        'active_resources_count',\n        'config',\n        'created_at',\n        'droplet_template',\n        'name',\n        'status',\n        'updated_at'\n      ]\n    },\n    autoscale_pool_static_config: {\n      type: 'object',\n      properties: {\n        target_number_instances: {\n          type: 'integer',\n          title: 'static config',\n          description: 'Fixed number of instances in an autoscale pool.'\n        }\n      },\n      required: [        'target_number_instances'\n      ]\n    },\n    autoscale_pool_dynamic_config: {\n      type: 'object',\n      properties: {\n        max_instances: {\n          type: 'integer',\n          description: 'The maximum number of Droplets in an autoscale pool.'\n        },\n        min_instances: {\n          type: 'integer',\n          description: 'The minimum number of Droplets in an autoscale pool.'\n        },\n        cooldown_minutes: {\n          type: 'integer',\n          description: 'The number of minutes to wait between scaling events in an autoscale pool. Defaults to 10 minutes.'\n        },\n        target_cpu_utilization: {\n          type: 'number',\n          description: 'Target CPU utilization as a decimal.'\n        },\n        target_memory_utilization: {\n          type: 'number',\n          description: 'Target memory utilization as a decimal.'\n        }\n      },\n      required: [        'max_instances',\n        'min_instances'\n      ]\n    },\n    autoscale_pool_droplet_template: {\n      type: 'object',\n      properties: {\n        image: {\n          type: 'string',\n          description: 'The Droplet image to be used for all Droplets in the autoscale pool. You may specify the slug or the image ID.'\n        },\n        region: {\n          type: 'string',\n          description: 'The datacenter in which all of the Droplets will be created.',\n          enum: [            'nyc1',\n            'nyc2',\n            'nyc3',\n            'ams2',\n            'ams3',\n            'sfo1',\n            'sfo2',\n            'sfo3',\n            'sgp1',\n            'lon1',\n            'fra1',\n            'tor1',\n            'blr1',\n            'syd1'\n          ]\n        },\n        size: {\n          type: 'string',\n          description: 'The Droplet size to be used for all Droplets in the autoscale pool.'\n        },\n        ssh_keys: {\n          type: 'array',\n          description: 'The SSH keys to be installed on the Droplets in the autoscale pool. You can either specify the key ID or the fingerprint.\\nRequires `ssh_key:read` scope.\\n',\n          items: {\n            type: 'string'\n          }\n        },\n        ipv6: {\n          type: 'boolean',\n          description: 'Assigns a unique IPv6 address to each of the Droplets in the autoscale pool.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name(s) to be applied to all Droplets in the autoscale pool.'\n        },\n        project_id: {\n          type: 'string',\n          description: 'The project that the Droplets in the autoscale pool will belong to.\\nRequires `project:read` scope.\\n'\n        },\n        tags: {\n          type: 'array',\n          description: 'The tags to apply to each of the Droplets in the autoscale pool.\\nRequires `tag:read` scope.\\n',\n          items: {\n            type: 'string'\n          }\n        },\n        user_data: {\n          type: 'string',\n          description: 'A string containing user data that cloud-init consumes to configure a Droplet on first boot. User data is often a cloud-config file or Bash script. It must be plain text and may not exceed 64 KiB in size.'\n        },\n        vpc_uuid: {\n          type: 'string',\n          description: 'The VPC where the Droplets in the autoscale pool will be created. The VPC must be in the region where you want to create the Droplets.\\nRequires `vpc:read` scope.\\n'\n        },\n        with_droplet_agent: {\n          type: 'boolean',\n          description: 'Installs the Droplet agent. This must be set to true to monitor Droplets for resource utilization scaling.'\n        }\n      },\n      required: [        'image',\n        'region',\n        'size',\n        'ssh_keys'\n      ]\n    },\n    current_utilization: {\n      type: 'object',\n      properties: {\n        cpu: {\n          type: 'number',\n          description: 'The average CPU utilization of the autoscale pool.'\n        },\n        memory: {\n          type: 'number',\n          description: 'The average memory utilization of the autoscale pool.'\n        }\n      }\n    },\n    page_links: {\n      type: 'object',\n      properties: {\n        pages: {\n          anyOf: [            {\n              $ref: '#/$defs/forward_links'\n            },\n            {\n              $ref: '#/$defs/backward_links'\n            },\n            {\n              type: 'object'\n            }\n          ]\n        }\n      }\n    },\n    forward_links: {\n      type: 'object',\n      properties: {\n        last: {\n          type: 'string',\n          description: 'URI of the last page of the results.'\n        },\n        next: {\n          type: 'string',\n          description: 'URI of the next page of the results.'\n        }\n      }\n    },\n    backward_links: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string',\n          description: 'URI of the first page of the results.'\n        },\n        prev: {\n          type: 'string',\n          description: 'URI of the previous page of the results.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the autoscale pool',
      },
      page: {
        type: 'integer',
        description: "Which 'page' of paginated results to return.",
      },
      per_page: {
        type: 'integer',
        description: 'Number of items returned per page',
      },
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.gpuDroplets.autoscale.list(body)));
};

export default { metadata, tool, handler };
