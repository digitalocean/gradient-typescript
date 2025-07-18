// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.firewalls',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/firewalls/{firewall_id}',
  operationId: 'firewalls_get',
};

export const tool: Tool = {
  name: 'retrieve_gpu_droplets_firewalls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo show information about an existing firewall, send a GET request to `/v2/firewalls/$FIREWALL_ID`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    firewall: {\n      $ref: '#/$defs/firewall'\n    }\n  },\n  $defs: {\n    firewall: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A unique ID that can be used to identify and reference a firewall.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'A time value given in ISO8601 combined date and time format that represents when the firewall was created.',\n          format: 'date-time'\n        },\n        droplet_ids: {\n          type: 'array',\n          description: 'An array containing the IDs of the Droplets assigned to the firewall. <br><br>Requires `droplet:read` scope.',\n          items: {\n            type: 'integer'\n          }\n        },\n        inbound_rules: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              ports: {\n                type: 'string',\n                description: 'The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. \"8000-9000\"), or \"0\" when all ports are open for a protocol. For ICMP rules this parameter will always return \"0\".'\n              },\n              protocol: {\n                type: 'string',\n                description: 'The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.',\n                enum: [                  'tcp',\n                  'udp',\n                  'icmp'\n                ]\n              },\n              sources: {\n                $ref: '#/$defs/firewall_rule_target'\n              }\n            },\n            required: [              'ports',\n              'protocol',\n              'sources'\n            ]\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'A human-readable name for a firewall. The name must begin with an alphanumeric character. Subsequent characters must either be alphanumeric characters, a period (.), or a dash (-).'\n        },\n        outbound_rules: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              destinations: {\n                $ref: '#/$defs/firewall_rule_target'\n              },\n              ports: {\n                type: 'string',\n                description: 'The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. \"8000-9000\"), or \"0\" when all ports are open for a protocol. For ICMP rules this parameter will always return \"0\".'\n              },\n              protocol: {\n                type: 'string',\n                description: 'The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.',\n                enum: [                  'tcp',\n                  'udp',\n                  'icmp'\n                ]\n              }\n            },\n            required: [              'destinations',\n              'ports',\n              'protocol'\n            ]\n          }\n        },\n        pending_changes: {\n          type: 'array',\n          description: 'An array of objects each containing the fields \"droplet_id\", \"removing\", and \"status\". It is provided to detail exactly which Droplets are having their security policies updated. When empty, all changes have been successfully applied.',\n          items: {\n            type: 'object',\n            properties: {\n              droplet_id: {\n                type: 'integer'\n              },\n              removing: {\n                type: 'boolean'\n              },\n              status: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'A status string indicating the current state of the firewall. This can be \"waiting\", \"succeeded\", or \"failed\".',\n          enum: [            'waiting',\n            'succeeded',\n            'failed'\n          ]\n        },\n        tags: {\n          type: 'array',\n          description: 'A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br><br>Requires `tag:create` and `tag:read` scopes.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    firewall_rule_target: {\n      type: 'object',\n      properties: {\n        addresses: {\n          type: 'array',\n          description: 'An array of strings containing the IPv4 addresses, IPv6 addresses, IPv4 CIDRs, and/or IPv6 CIDRs to which the firewall will allow traffic.',\n          items: {\n            type: 'string'\n          }\n        },\n        droplet_ids: {\n          type: 'array',\n          description: 'An array containing the IDs of the Droplets to which the firewall will allow traffic.',\n          items: {\n            type: 'integer'\n          }\n        },\n        kubernetes_ids: {\n          type: 'array',\n          description: 'An array containing the IDs of the Kubernetes clusters to which the firewall will allow traffic.',\n          items: {\n            type: 'string'\n          }\n        },\n        load_balancer_uids: {\n          type: 'array',\n          description: 'An array containing the IDs of the load balancers to which the firewall will allow traffic.',\n          items: {\n            type: 'string'\n          }\n        },\n        tags: {\n          type: 'array',\n          description: 'A flat array of tag names as strings to be applied to the resource. Tag names must exist in order to be referenced in a request. <br><br>Requires `tag:create` and `tag:read` scopes.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firewall_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['firewall_id'],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { firewall_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.gpuDroplets.firewalls.retrieve(firewall_id)),
  );
};

export default { metadata, tool, handler };
