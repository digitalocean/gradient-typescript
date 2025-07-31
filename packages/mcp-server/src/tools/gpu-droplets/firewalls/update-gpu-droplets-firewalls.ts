// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.firewalls',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/firewalls/{firewall_id}',
  operationId: 'firewalls_update',
};

export const tool: Tool = {
  name: 'update_gpu_droplets_firewalls',
  description:
    'To update the configuration of an existing firewall, send a PUT request to\n`/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation\nof the firewall including existing attributes. **Note that any attributes that\nare not provided will be reset to their default values.**\n<br><br>You must have read access (e.g. `droplet:read`) to all resources attached\nto the firewall to successfully update the firewall.\n',
  inputSchema: {
    type: 'object',
    properties: {
      firewall_id: {
        type: 'string',
      },
      firewall: {
        $ref: '#/$defs/firewall',
      },
    },
    required: ['firewall_id', 'firewall'],
    $defs: {
      firewall: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'A unique ID that can be used to identify and reference a firewall.',
          },
          created_at: {
            type: 'string',
            description:
              'A time value given in ISO8601 combined date and time format that represents when the firewall was created.',
            format: 'date-time',
          },
          droplet_ids: {
            type: 'array',
            description:
              'An array containing the IDs of the Droplets assigned to the firewall. <br><br>Requires `droplet:read` scope.',
            items: {
              type: 'integer',
            },
          },
          inbound_rules: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                ports: {
                  type: 'string',
                  description:
                    'The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".',
                },
                protocol: {
                  type: 'string',
                  description:
                    'The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.',
                  enum: ['tcp', 'udp', 'icmp'],
                },
                sources: {
                  $ref: '#/$defs/firewall_rule_target',
                },
              },
              required: ['ports', 'protocol', 'sources'],
            },
          },
          name: {
            type: 'string',
            description:
              'A human-readable name for a firewall. The name must begin with an alphanumeric character. Subsequent characters must either be alphanumeric characters, a period (.), or a dash (-).',
          },
          outbound_rules: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                destinations: {
                  $ref: '#/$defs/firewall_rule_target',
                },
                ports: {
                  type: 'string',
                  description:
                    'The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".',
                },
                protocol: {
                  type: 'string',
                  description:
                    'The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.',
                  enum: ['tcp', 'udp', 'icmp'],
                },
              },
              required: ['destinations', 'ports', 'protocol'],
            },
          },
          pending_changes: {
            type: 'array',
            description:
              'An array of objects each containing the fields "droplet_id", "removing", and "status". It is provided to detail exactly which Droplets are having their security policies updated. When empty, all changes have been successfully applied.',
            items: {
              type: 'object',
              properties: {
                droplet_id: {
                  type: 'integer',
                },
                removing: {
                  type: 'boolean',
                },
                status: {
                  type: 'string',
                },
              },
            },
          },
          status: {
            type: 'string',
            description:
              'A status string indicating the current state of the firewall. This can be "waiting", "succeeded", or "failed".',
            enum: ['waiting', 'succeeded', 'failed'],
          },
          tags: {
            type: 'array',
            description:
              'A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br><br>Requires `tag:create` and `tag:read` scopes.',
            items: {
              type: 'string',
            },
          },
        },
      },
      firewall_rule_target: {
        type: 'object',
        properties: {
          addresses: {
            type: 'array',
            description:
              'An array of strings containing the IPv4 addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs to which the firewall will allow traffic.',
            items: {
              type: 'string',
            },
          },
          droplet_ids: {
            type: 'array',
            description:
              'An array containing the IDs of the Droplets to which the firewall will allow traffic.',
            items: {
              type: 'integer',
            },
          },
          kubernetes_ids: {
            type: 'array',
            description:
              'An array containing the IDs of the Kubernetes clusters to which the firewall will allow traffic.',
            items: {
              type: 'string',
            },
          },
          load_balancer_uids: {
            type: 'array',
            description:
              'An array containing the IDs of the load balancers to which the firewall will allow traffic.',
            items: {
              type: 'string',
            },
          },
          tags: {
            type: 'array',
            description:
              'A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br><br>Requires `tag:create` and `tag:read` scopes.',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { firewall_id, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.firewalls.update(firewall_id, body));
};

export default { metadata, tool, handler };
