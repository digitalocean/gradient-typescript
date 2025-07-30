// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'gpu_droplets.load_balancers.forwarding_rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/load_balancers/{lb_id}/forwarding_rules',
  operationId: 'loadBalancers_remove_forwardingRules',
};

export const tool: Tool = {
  name: 'remove_load_balancers_gpu_droplets_forwarding_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo remove forwarding rules from a load balancer instance, send a DELETE\nrequest to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the\nbody of the request, there should be a `forwarding_rules` attribute containing\nan array of rules to be removed.\n\nNo response body will be sent back, but the response code will indicate\nsuccess. Specifically, the response code will be a 204, which means that the\naction was successful with no returned body data.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      lb_id: {
        type: 'string',
      },
      forwarding_rules: {
        type: 'array',
        items: {
          $ref: '#/$defs/forwarding_rule',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['lb_id', 'forwarding_rules'],
    $defs: {
      forwarding_rule: {
        type: 'object',
        description: 'An object specifying a forwarding rule for a load balancer.',
        properties: {
          entry_port: {
            type: 'integer',
            description: 'An integer representing the port on which the load balancer instance will listen.',
          },
          entry_protocol: {
            type: 'string',
            description:
              'The protocol used for traffic to the load balancer. The possible values are: `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the  `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.',
            enum: ['http', 'https', 'http2', 'http3', 'tcp', 'udp'],
          },
          target_port: {
            type: 'integer',
            description:
              'An integer representing the port on the backend Droplets to which the load balancer will send traffic.',
          },
          target_protocol: {
            type: 'string',
            description:
              'The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set the `target_protocol` to `udp`, the `entry_protocol` must be set to  `udp`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.',
            enum: ['http', 'https', 'http2', 'tcp', 'udp'],
          },
          certificate_id: {
            type: 'string',
            description: 'The ID of the TLS certificate used for SSL termination if enabled.',
          },
          tls_passthrough: {
            type: 'boolean',
            description:
              'A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.',
          },
        },
        required: ['entry_port', 'entry_protocol', 'target_port', 'target_protocol'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { lb_id, ...body } = args as any;
  const response = await client.gpuDroplets.loadBalancers.forwardingRules.remove(lb_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
