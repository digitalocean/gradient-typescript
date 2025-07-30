// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.firewalls.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/firewalls/{firewall_id}/rules',
  operationId: 'firewalls_add_rules',
};

export const tool: Tool = {
  name: 'add_firewalls_gpu_droplets_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo add additional access rules to a firewall, send a POST request to\n`/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an\ninbound_rules and/or outbound_rules attribute containing an array of rules to\nbe added.\n\nNo response body will be sent back, but the response code will indicate\nsuccess. Specifically, the response code will be a 204, which means that the\naction was successful with no returned body data.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firewall_id: {
        type: 'string',
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
              description: 'The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.',
              enum: ['tcp', 'udp', 'icmp'],
            },
            sources: {
              $ref: '#/$defs/firewall_rule_target',
            },
          },
          required: ['ports', 'protocol', 'sources'],
        },
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
              description: 'The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.',
              enum: ['tcp', 'udp', 'icmp'],
            },
          },
          required: ['destinations', 'ports', 'protocol'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['firewall_id'],
    $defs: {
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
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { firewall_id, ...body } = args as any;
  const response = await client.gpuDroplets.firewalls.rules.add(firewall_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
