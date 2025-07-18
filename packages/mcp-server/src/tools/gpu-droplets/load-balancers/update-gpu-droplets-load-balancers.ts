// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'gpu_droplets.load_balancers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/load_balancers/{lb_id}',
  operationId: 'loadBalancers_update',
};

export const tool: Tool = {
  name: 'update_gpu_droplets_load_balancers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update a load balancer's settings, send a PUT request to\n`/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full\nrepresentation of the load balancer including existing attributes. It may\ncontain _one of_ the `droplets_ids` or `tag` attributes as they are mutually\nexclusive. **Note that any attribute that is not provided will be reset to its\ndefault value.**\n",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          lb_id: {
            type: 'string',
          },
          forwarding_rules: {
            type: 'array',
            description: 'An array of objects specifying the forwarding rules for a load balancer.',
            items: {
              $ref: '#/$defs/forwarding_rule',
            },
          },
          algorithm: {
            type: 'string',
            description:
              'This field has been deprecated. You can no longer specify an algorithm for load balancers.',
            enum: ['round_robin', 'least_connections'],
          },
          disable_lets_encrypt_dns_records: {
            type: 'boolean',
            description:
              "A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.",
          },
          domains: {
            type: 'array',
            description:
              'An array of objects specifying the domain configurations for a Global load balancer.',
            items: {
              $ref: '#/$defs/domains',
            },
          },
          droplet_ids: {
            type: 'array',
            description: 'An array containing the IDs of the Droplets assigned to the load balancer.',
            items: {
              type: 'integer',
            },
          },
          enable_backend_keepalive: {
            type: 'boolean',
            description:
              'A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.',
          },
          enable_proxy_protocol: {
            type: 'boolean',
            description: 'A boolean value indicating whether PROXY Protocol is in use.',
          },
          firewall: {
            $ref: '#/$defs/lb_firewall',
          },
          glb_settings: {
            $ref: '#/$defs/glb_settings',
          },
          health_check: {
            $ref: '#/$defs/health_check',
          },
          http_idle_timeout_seconds: {
            type: 'integer',
            description:
              'An integer value which configures the idle timeout for HTTP requests to the target droplets.',
          },
          name: {
            type: 'string',
            description: 'A human-readable name for a load balancer instance.',
          },
          network: {
            type: 'string',
            description:
              'A string indicating whether the load balancer should be external or internal. Internal load balancers have no public IPs and are only accessible to resources on the same VPC network. This property cannot be updated after creating the load balancer.',
            enum: ['EXTERNAL', 'INTERNAL'],
          },
          network_stack: {
            type: 'string',
            description:
              'A string indicating whether the load balancer will support IPv4 or both IPv4 and IPv6 networking. This property cannot be updated after creating the load balancer.',
            enum: ['IPV4', 'DUALSTACK'],
          },
          project_id: {
            type: 'string',
            description:
              "The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created.",
          },
          redirect_http_to_https: {
            type: 'boolean',
            description:
              'A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.',
          },
          region: {
            type: 'string',
            description:
              'The slug identifier for the region where the resource will initially be  available.',
            enum: [
              'ams1',
              'ams2',
              'ams3',
              'blr1',
              'fra1',
              'lon1',
              'nyc1',
              'nyc2',
              'nyc3',
              'sfo1',
              'sfo2',
              'sfo3',
              'sgp1',
              'tor1',
              'syd1',
            ],
          },
          size: {
            type: 'string',
            description:
              'This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes.\n* `lb-small` = 1 node\n* `lb-medium` = 3 nodes\n* `lb-large` = 6 nodes\n\nYou can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation.',
            enum: ['lb-small', 'lb-medium', 'lb-large'],
          },
          size_unit: {
            type: 'integer',
            description:
              "How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.",
          },
          sticky_sessions: {
            $ref: '#/$defs/sticky_sessions',
          },
          target_load_balancer_ids: {
            type: 'array',
            description:
              'An array containing the UUIDs of the Regional load balancers to be used as target backends for a Global load balancer.',
            items: {
              type: 'string',
            },
          },
          tls_cipher_policy: {
            type: 'string',
            description:
              'A string indicating the policy for the TLS cipher suites used by the load balancer. The possible values are `DEFAULT` or `STRONG`. The default value is `DEFAULT`.',
            enum: ['DEFAULT', 'STRONG'],
          },
          type: {
            type: 'string',
            description:
              'A string indicating whether the load balancer should be a standard regional HTTP load balancer, a regional network load balancer that routes traffic at the TCP/UDP transport layer, or a global load balancer.',
            enum: ['REGIONAL', 'REGIONAL_NETWORK', 'GLOBAL'],
          },
          vpc_uuid: {
            type: 'string',
            description: 'A string specifying the UUID of the VPC to which the load balancer is assigned.',
          },
        },
        required: ['lb_id', 'forwarding_rules'],
      },
      {
        type: 'object',
        properties: {
          lb_id: {
            type: 'string',
          },
          forwarding_rules: {
            type: 'array',
            description: 'An array of objects specifying the forwarding rules for a load balancer.',
            items: {
              $ref: '#/$defs/forwarding_rule',
            },
          },
          algorithm: {
            type: 'string',
            description:
              'This field has been deprecated. You can no longer specify an algorithm for load balancers.',
            enum: ['round_robin', 'least_connections'],
          },
          disable_lets_encrypt_dns_records: {
            type: 'boolean',
            description:
              "A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.",
          },
          domains: {
            type: 'array',
            description:
              'An array of objects specifying the domain configurations for a Global load balancer.',
            items: {
              $ref: '#/$defs/domains',
            },
          },
          enable_backend_keepalive: {
            type: 'boolean',
            description:
              'A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.',
          },
          enable_proxy_protocol: {
            type: 'boolean',
            description: 'A boolean value indicating whether PROXY Protocol is in use.',
          },
          firewall: {
            $ref: '#/$defs/lb_firewall',
          },
          glb_settings: {
            $ref: '#/$defs/glb_settings',
          },
          health_check: {
            $ref: '#/$defs/health_check',
          },
          http_idle_timeout_seconds: {
            type: 'integer',
            description:
              'An integer value which configures the idle timeout for HTTP requests to the target droplets.',
          },
          name: {
            type: 'string',
            description: 'A human-readable name for a load balancer instance.',
          },
          network: {
            type: 'string',
            description:
              'A string indicating whether the load balancer should be external or internal. Internal load balancers have no public IPs and are only accessible to resources on the same VPC network. This property cannot be updated after creating the load balancer.',
            enum: ['EXTERNAL', 'INTERNAL'],
          },
          network_stack: {
            type: 'string',
            description:
              'A string indicating whether the load balancer will support IPv4 or both IPv4 and IPv6 networking. This property cannot be updated after creating the load balancer.',
            enum: ['IPV4', 'DUALSTACK'],
          },
          project_id: {
            type: 'string',
            description:
              "The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created.",
          },
          redirect_http_to_https: {
            type: 'boolean',
            description:
              'A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.',
          },
          region: {
            type: 'string',
            description:
              'The slug identifier for the region where the resource will initially be  available.',
            enum: [
              'ams1',
              'ams2',
              'ams3',
              'blr1',
              'fra1',
              'lon1',
              'nyc1',
              'nyc2',
              'nyc3',
              'sfo1',
              'sfo2',
              'sfo3',
              'sgp1',
              'tor1',
              'syd1',
            ],
          },
          size: {
            type: 'string',
            description:
              'This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes.\n* `lb-small` = 1 node\n* `lb-medium` = 3 nodes\n* `lb-large` = 6 nodes\n\nYou can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation.',
            enum: ['lb-small', 'lb-medium', 'lb-large'],
          },
          size_unit: {
            type: 'integer',
            description:
              "How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.",
          },
          sticky_sessions: {
            $ref: '#/$defs/sticky_sessions',
          },
          tag: {
            type: 'string',
            description: 'The name of a Droplet tag corresponding to Droplets assigned to the load balancer.',
          },
          target_load_balancer_ids: {
            type: 'array',
            description:
              'An array containing the UUIDs of the Regional load balancers to be used as target backends for a Global load balancer.',
            items: {
              type: 'string',
            },
          },
          tls_cipher_policy: {
            type: 'string',
            description:
              'A string indicating the policy for the TLS cipher suites used by the load balancer. The possible values are `DEFAULT` or `STRONG`. The default value is `DEFAULT`.',
            enum: ['DEFAULT', 'STRONG'],
          },
          type: {
            type: 'string',
            description:
              'A string indicating whether the load balancer should be a standard regional HTTP load balancer, a regional network load balancer that routes traffic at the TCP/UDP transport layer, or a global load balancer.',
            enum: ['REGIONAL', 'REGIONAL_NETWORK', 'GLOBAL'],
          },
          vpc_uuid: {
            type: 'string',
            description: 'A string specifying the UUID of the VPC to which the load balancer is assigned.',
          },
        },
        required: ['lb_id', 'forwarding_rules'],
      },
    ],
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
      domains: {
        type: 'object',
        description: 'An object specifying domain configurations for a Global load balancer.',
        properties: {
          certificate_id: {
            type: 'string',
            description: 'The ID of the TLS certificate used for SSL termination.',
          },
          is_managed: {
            type: 'boolean',
            description:
              'A boolean value indicating if the domain is already managed by DigitalOcean. If true, all A and AAAA records required to enable Global load balancers will be automatically added.',
          },
          name: {
            type: 'string',
            description: 'FQDN to associate with a Global load balancer.',
          },
        },
      },
      lb_firewall: {
        type: 'object',
        description: 'An object specifying allow and deny rules to control traffic to the load balancer.',
        properties: {
          allow: {
            type: 'array',
            description:
              "the rules for allowing traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')",
            items: {
              type: 'string',
            },
          },
          deny: {
            type: 'array',
            description:
              "the rules for denying traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')",
            items: {
              type: 'string',
            },
          },
        },
      },
      glb_settings: {
        type: 'object',
        description: 'An object specifying forwarding configurations for a Global load balancer.',
        properties: {
          cdn: {
            type: 'object',
            description: 'An object specifying CDN configurations for a Global load balancer.',
            properties: {
              is_enabled: {
                type: 'boolean',
                description: 'A boolean flag to enable CDN caching.',
              },
            },
          },
          failover_threshold: {
            type: 'integer',
            description:
              'An integer value as a percentage to indicate failure threshold to decide how the regional priorities will take effect. A value of `50` would indicate that the Global load balancer will choose a lower priority region to forward traffic to once this failure threshold has been reached for the higher priority region.',
          },
          region_priorities: {
            type: 'object',
            description:
              'A map of region string to an integer priority value indicating preference for which regional target a Global load balancer will forward traffic to. A lower value indicates a higher priority.',
          },
          target_port: {
            type: 'integer',
            description:
              'An integer representing the port on the target backends which the load balancer will forward traffic to.',
          },
          target_protocol: {
            type: 'string',
            description:
              'The protocol used for forwarding traffic from the load balancer to the target backends. The possible values are `http`, `https` and `http2`.',
            enum: ['http', 'https', 'http2'],
          },
        },
      },
      health_check: {
        type: 'object',
        description: 'An object specifying health check settings for the load balancer.',
        properties: {
          check_interval_seconds: {
            type: 'integer',
            description: 'The number of seconds between between two consecutive health checks.',
          },
          healthy_threshold: {
            type: 'integer',
            description:
              'The number of times a health check must pass for a backend Droplet to be marked "healthy" and be re-added to the pool.',
          },
          path: {
            type: 'string',
            description:
              'The path on the backend Droplets to which the load balancer instance will send a request.',
          },
          port: {
            type: 'integer',
            description:
              'An integer representing the port on the backend Droplets on which the health check will attempt a connection.',
          },
          protocol: {
            type: 'string',
            description:
              'The protocol used for health checks sent to the backend Droplets. The possible values are `http`, `https`, or `tcp`.',
            enum: ['http', 'https', 'tcp'],
          },
          response_timeout_seconds: {
            type: 'integer',
            description:
              'The number of seconds the load balancer instance will wait for a response until marking a health check as failed.',
          },
          unhealthy_threshold: {
            type: 'integer',
            description:
              'The number of times a health check must fail for a backend Droplet to be marked "unhealthy" and be removed from the pool.',
          },
        },
      },
      sticky_sessions: {
        type: 'object',
        description: 'An object specifying sticky sessions settings for the load balancer.',
        properties: {
          cookie_name: {
            type: 'string',
            description:
              'The name of the cookie sent to the client. This attribute is only returned when using `cookies` for the sticky sessions type.',
          },
          cookie_ttl_seconds: {
            type: 'integer',
            description:
              'The number of seconds until the cookie set by the load balancer expires. This attribute is only returned when using `cookies` for the sticky sessions type.',
          },
          type: {
            type: 'string',
            description:
              'An attribute indicating how and if requests from a client will be persistently served by the same backend Droplet. The possible values are `cookies` or `none`.',
            enum: ['cookies', 'none'],
          },
        },
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { lb_id, ...body } = args as any;
  return asTextContentResult(await client.gpuDroplets.loadBalancers.update(lb_id, body));
};

export default { metadata, tool, handler };
