// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as DropletsAPI from './droplets';
import { DropletAddParams, DropletRemoveParams, Droplets } from './droplets';
import * as ForwardingRulesAPI from './forwarding-rules';
import { ForwardingRuleAddParams, ForwardingRuleRemoveParams, ForwardingRules } from './forwarding-rules';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class LoadBalancers extends APIResource {
  droplets: DropletsAPI.Droplets = new DropletsAPI.Droplets(this._client);
  forwardingRules: ForwardingRulesAPI.ForwardingRules = new ForwardingRulesAPI.ForwardingRules(this._client);

  /**
   * To create a new load balancer instance, send a POST request to
   * `/v2/load_balancers`.
   *
   * You can specify the Droplets that will sit behind the load balancer using one of
   * two methods:
   *
   * - Set `droplet_ids` to a list of specific Droplet IDs.
   * - Set `tag` to the name of a tag. All Droplets with this tag applied will be
   *   assigned to the load balancer. Additional Droplets will be automatically
   *   assigned as they are tagged.
   *
   * These methods are mutually exclusive.
   *
   * @example
   * ```ts
   * const loadBalancer =
   *   await client.gpuDroplets.loadBalancers.create({
   *     forwarding_rules: [
   *       {
   *         entry_protocol: 'http',
   *         entry_port: 80,
   *         target_protocol: 'http',
   *         target_port: 80,
   *       },
   *       {
   *         entry_protocol: 'https',
   *         entry_port: 443,
   *         target_protocol: 'https',
   *         target_port: 443,
   *         tls_passthrough: true,
   *       },
   *     ],
   *     droplet_ids: [3164444, 3164445],
   *     firewall: {
   *       deny: ['cidr:1.2.0.0/16', 'ip:2.3.4.5'],
   *       allow: ['ip:1.2.3.4', 'cidr:2.3.4.0/24'],
   *     },
   *     http_idle_timeout_seconds: 60,
   *     name: 'example-lb-01',
   *     project_id: '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
   *     region: 'nyc3',
   *   });
   * ```
   */
  create(body: LoadBalancerCreateParams, options?: RequestOptions): APIPromise<LoadBalancerCreateResponse> {
    return this._client.post('/v2/load_balancers', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To show information about a load balancer instance, send a GET request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`.
   *
   * @example
   * ```ts
   * const loadBalancer =
   *   await client.gpuDroplets.loadBalancers.retrieve(
   *     '4de7ac8b-495b-4884-9a69-1050c6793cd6',
   *   );
   * ```
   */
  retrieve(lbID: string, options?: RequestOptions): APIPromise<LoadBalancerRetrieveResponse> {
    return this._client.get(path`/v2/load_balancers/${lbID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update a load balancer's settings, send a PUT request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full
   * representation of the load balancer including existing attributes. It may
   * contain _one of_ the `droplets_ids` or `tag` attributes as they are mutually
   * exclusive. **Note that any attribute that is not provided will be reset to its
   * default value.**
   *
   * @example
   * ```ts
   * const loadBalancer = await client.gpuDroplets.loadBalancers.update(
   *   '4de7ac8b-495b-4884-9a69-1050c6793cd6',
   *   {
   *     forwarding_rules: [
   *       {
   *         entry_protocol: 'http',
   *         entry_port: 80,
   *         target_protocol: 'http',
   *         target_port: 80,
   *         certificate_id: '',
   *         tls_passthrough: false,
   *       },
   *       {
   *         entry_protocol: 'https',
   *         entry_port: 443,
   *         target_protocol: 'https',
   *         target_port: 443,
   *         certificate_id: '',
   *         tls_passthrough: true,
   *       },
   *     ],
   *     algorithm: 'round_robin',
   *     droplet_ids: [3164444, 3164445],
   *     enable_backend_keepalive: true,
   *     enable_proxy_protocol: true,
   *     firewall: {
   *       deny: ['cidr:1.2.0.0/16', 'ip:2.3.4.5'],
   *       allow: ['ip:1.2.3.4', 'cidr:2.3.4.0/24'],
   *     },
   *     health_check: {
   *       protocol: 'http',
   *       port: 80,
   *       path: '/',
   *       check_interval_seconds: 10,
   *       response_timeout_seconds: 5,
   *       healthy_threshold: 5,
   *       unhealthy_threshold: 3,
   *     },
   *     http_idle_timeout_seconds: 60,
   *     name: 'updated-example-lb-01',
   *     project_id: '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
   *     region: 'nyc3',
   *     sticky_sessions: { type: 'none' },
   *     vpc_uuid: 'c33931f2-a26a-4e61-b85c-4e95a2ec431b',
   *   },
   * );
   * ```
   */
  update(
    lbID: string,
    body: LoadBalancerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LoadBalancerUpdateResponse> {
    return this._client.put(path`/v2/load_balancers/${lbID}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all of the load balancer instances on your account, send a GET request
   * to `/v2/load_balancers`.
   *
   * @example
   * ```ts
   * const loadBalancers =
   *   await client.gpuDroplets.loadBalancers.list();
   * ```
   */
  list(
    query: LoadBalancerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LoadBalancerListResponse> {
    return this._client.get('/v2/load_balancers', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a load balancer instance, disassociating any Droplets assigned to it
   * and removing it from your account, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.loadBalancers.delete(
   *   '4de7ac8b-495b-4884-9a69-1050c6793cd6',
   * );
   * ```
   */
  delete(lbID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/load_balancers/${lbID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To delete a Global load balancer CDN cache, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/cache`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.loadBalancers.deleteCache(
   *   '4de7ac8b-495b-4884-9a69-1050c6793cd6',
   * );
   * ```
   */
  deleteCache(lbID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/load_balancers/${lbID}/cache`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An object specifying domain configurations for a Global load balancer.
 */
export interface Domains {
  /**
   * The ID of the TLS certificate used for SSL termination.
   */
  certificate_id?: string;

  /**
   * A boolean value indicating if the domain is already managed by DigitalOcean. If
   * true, all A and AAAA records required to enable Global load balancers will be
   * automatically added.
   */
  is_managed?: boolean;

  /**
   * FQDN to associate with a Global load balancer.
   */
  name?: string;
}

/**
 * An object specifying a forwarding rule for a load balancer.
 */
export interface ForwardingRule {
  /**
   * An integer representing the port on which the load balancer instance will
   * listen.
   */
  entry_port: number;

  /**
   * The protocol used for traffic to the load balancer. The possible values are:
   * `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the
   * `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`. When
   * using UDP, the load balancer requires that you set up a health check with a port
   * that uses TCP, HTTP, or HTTPS to work properly.
   */
  entry_protocol: 'http' | 'https' | 'http2' | 'http3' | 'tcp' | 'udp';

  /**
   * An integer representing the port on the backend Droplets to which the load
   * balancer will send traffic.
   */
  target_port: number;

  /**
   * The protocol used for traffic from the load balancer to the backend Droplets.
   * The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set
   * the `target_protocol` to `udp`, the `entry_protocol` must be set to `udp`. When
   * using UDP, the load balancer requires that you set up a health check with a port
   * that uses TCP, HTTP, or HTTPS to work properly.
   */
  target_protocol: 'http' | 'https' | 'http2' | 'tcp' | 'udp';

  /**
   * The ID of the TLS certificate used for SSL termination if enabled.
   */
  certificate_id?: string;

  /**
   * A boolean value indicating whether SSL encrypted traffic will be passed through
   * to the backend Droplets.
   */
  tls_passthrough?: boolean;
}

/**
 * An object specifying forwarding configurations for a Global load balancer.
 */
export interface GlbSettings {
  /**
   * An object specifying CDN configurations for a Global load balancer.
   */
  cdn?: GlbSettings.Cdn;

  /**
   * An integer value as a percentage to indicate failure threshold to decide how the
   * regional priorities will take effect. A value of `50` would indicate that the
   * Global load balancer will choose a lower priority region to forward traffic to
   * once this failure threshold has been reached for the higher priority region.
   */
  failover_threshold?: number;

  /**
   * A map of region string to an integer priority value indicating preference for
   * which regional target a Global load balancer will forward traffic to. A lower
   * value indicates a higher priority.
   */
  region_priorities?: { [key: string]: number };

  /**
   * An integer representing the port on the target backends which the load balancer
   * will forward traffic to.
   */
  target_port?: number;

  /**
   * The protocol used for forwarding traffic from the load balancer to the target
   * backends. The possible values are `http`, `https` and `http2`.
   */
  target_protocol?: 'http' | 'https' | 'http2';
}

export namespace GlbSettings {
  /**
   * An object specifying CDN configurations for a Global load balancer.
   */
  export interface Cdn {
    /**
     * A boolean flag to enable CDN caching.
     */
    is_enabled?: boolean;
  }
}

/**
 * An object specifying health check settings for the load balancer.
 */
export interface HealthCheck {
  /**
   * The number of seconds between between two consecutive health checks.
   */
  check_interval_seconds?: number;

  /**
   * The number of times a health check must pass for a backend Droplet to be marked
   * "healthy" and be re-added to the pool.
   */
  healthy_threshold?: number;

  /**
   * The path on the backend Droplets to which the load balancer instance will send a
   * request.
   */
  path?: string;

  /**
   * An integer representing the port on the backend Droplets on which the health
   * check will attempt a connection.
   */
  port?: number;

  /**
   * The protocol used for health checks sent to the backend Droplets. The possible
   * values are `http`, `https`, or `tcp`.
   */
  protocol?: 'http' | 'https' | 'tcp';

  /**
   * The number of seconds the load balancer instance will wait for a response until
   * marking a health check as failed.
   */
  response_timeout_seconds?: number;

  /**
   * The number of times a health check must fail for a backend Droplet to be marked
   * "unhealthy" and be removed from the pool.
   */
  unhealthy_threshold?: number;
}

/**
 * An object specifying allow and deny rules to control traffic to the load
 * balancer.
 */
export interface LbFirewall {
  /**
   * the rules for allowing traffic to the load balancer (in the form 'ip:1.2.3.4' or
   * 'cidr:1.2.0.0/16')
   */
  allow?: Array<string>;

  /**
   * the rules for denying traffic to the load balancer (in the form 'ip:1.2.3.4' or
   * 'cidr:1.2.0.0/16')
   */
  deny?: Array<string>;
}

export interface LoadBalancer {
  /**
   * An array of objects specifying the forwarding rules for a load balancer.
   */
  forwarding_rules: Array<ForwardingRule>;

  /**
   * A unique ID that can be used to identify and reference a load balancer.
   */
  id?: string;

  /**
   * @deprecated This field has been deprecated. You can no longer specify an
   * algorithm for load balancers.
   */
  algorithm?: 'round_robin' | 'least_connections';

  /**
   * A time value given in ISO8601 combined date and time format that represents when
   * the load balancer was created.
   */
  created_at?: string;

  /**
   * A boolean value indicating whether to disable automatic DNS record creation for
   * Let's Encrypt certificates that are added to the load balancer.
   */
  disable_lets_encrypt_dns_records?: boolean;

  /**
   * An array of objects specifying the domain configurations for a Global load
   * balancer.
   */
  domains?: Array<Domains>;

  /**
   * An array containing the IDs of the Droplets assigned to the load balancer.
   */
  droplet_ids?: Array<number>;

  /**
   * A boolean value indicating whether HTTP keepalive connections are maintained to
   * target Droplets.
   */
  enable_backend_keepalive?: boolean;

  /**
   * A boolean value indicating whether PROXY Protocol is in use.
   */
  enable_proxy_protocol?: boolean;

  /**
   * An object specifying allow and deny rules to control traffic to the load
   * balancer.
   */
  firewall?: LbFirewall;

  /**
   * An object specifying forwarding configurations for a Global load balancer.
   */
  glb_settings?: GlbSettings;

  /**
   * An object specifying health check settings for the load balancer.
   */
  health_check?: HealthCheck;

  /**
   * An integer value which configures the idle timeout for HTTP requests to the
   * target droplets.
   */
  http_idle_timeout_seconds?: number;

  /**
   * An attribute containing the public-facing IP address of the load balancer.
   */
  ip?: string;

  /**
   * An attribute containing the public-facing IPv6 address of the load balancer.
   */
  ipv6?: string;

  /**
   * A human-readable name for a load balancer instance.
   */
  name?: string;

  /**
   * A string indicating whether the load balancer should be external or internal.
   * Internal load balancers have no public IPs and are only accessible to resources
   * on the same VPC network. This property cannot be updated after creating the load
   * balancer.
   */
  network?: 'EXTERNAL' | 'INTERNAL';

  /**
   * A string indicating whether the load balancer will support IPv4 or both IPv4 and
   * IPv6 networking. This property cannot be updated after creating the load
   * balancer.
   */
  network_stack?: 'IPV4' | 'DUALSTACK';

  /**
   * The ID of the project that the load balancer is associated with. If no ID is
   * provided at creation, the load balancer associates with the user's default
   * project. If an invalid project ID is provided, the load balancer will not be
   * created.
   */
  project_id?: string;

  /**
   * A boolean value indicating whether HTTP requests to the load balancer on port 80
   * will be redirected to HTTPS on port 443.
   */
  redirect_http_to_https?: boolean;

  /**
   * The region where the load balancer instance is located. When setting a region,
   * the value should be the slug identifier for the region. When you query a load
   * balancer, an entire region object will be returned.
   */
  region?: Shared.Region;

  /**
   * @deprecated This field has been replaced by the `size_unit` field for all
   * regions except in AMS2, NYC2, and SFO1. Each available load balancer size now
   * equates to the load balancer having a set number of nodes.
   *
   * - `lb-small` = 1 node
   * - `lb-medium` = 3 nodes
   * - `lb-large` = 6 nodes
   *
   * You can resize load balancers after creation up to once per hour. You cannot
   * resize a load balancer within the first hour of its creation.
   */
  size?: 'lb-small' | 'lb-medium' | 'lb-large';

  /**
   * How many nodes the load balancer contains. Each additional node increases the
   * load balancer's ability to manage more connections. Load balancers can be scaled
   * up or down, and you can change the number of nodes after creation up to once per
   * hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions.
   * Use the `size` field to scale load balancers that reside in these regions.
   */
  size_unit?: number;

  /**
   * A status string indicating the current state of the load balancer. This can be
   * `new`, `active`, or `errored`.
   */
  status?: 'new' | 'active' | 'errored';

  /**
   * An object specifying sticky sessions settings for the load balancer.
   */
  sticky_sessions?: StickySessions;

  /**
   * The name of a Droplet tag corresponding to Droplets assigned to the load
   * balancer.
   */
  tag?: string;

  /**
   * An array containing the UUIDs of the Regional load balancers to be used as
   * target backends for a Global load balancer.
   */
  target_load_balancer_ids?: Array<string>;

  /**
   * A string indicating the policy for the TLS cipher suites used by the load
   * balancer. The possible values are `DEFAULT` or `STRONG`. The default value is
   * `DEFAULT`.
   */
  tls_cipher_policy?: 'DEFAULT' | 'STRONG';

  /**
   * A string indicating whether the load balancer should be a standard regional HTTP
   * load balancer, a regional network load balancer that routes traffic at the
   * TCP/UDP transport layer, or a global load balancer.
   */
  type?: 'REGIONAL' | 'REGIONAL_NETWORK' | 'GLOBAL';

  /**
   * A string specifying the UUID of the VPC to which the load balancer is assigned.
   */
  vpc_uuid?: string;
}

/**
 * An object specifying sticky sessions settings for the load balancer.
 */
export interface StickySessions {
  /**
   * The name of the cookie sent to the client. This attribute is only returned when
   * using `cookies` for the sticky sessions type.
   */
  cookie_name?: string;

  /**
   * The number of seconds until the cookie set by the load balancer expires. This
   * attribute is only returned when using `cookies` for the sticky sessions type.
   */
  cookie_ttl_seconds?: number;

  /**
   * An attribute indicating how and if requests from a client will be persistently
   * served by the same backend Droplet. The possible values are `cookies` or `none`.
   */
  type?: 'cookies' | 'none';
}

export interface LoadBalancerCreateResponse {
  load_balancer?: LoadBalancer;
}

export interface LoadBalancerRetrieveResponse {
  load_balancer?: LoadBalancer;
}

export interface LoadBalancerUpdateResponse {
  load_balancer?: LoadBalancer;
}

export interface LoadBalancerListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  links?: Shared.PageLinks;

  load_balancers?: Array<LoadBalancer>;
}

export type LoadBalancerCreateParams =
  | LoadBalancerCreateParams.AssignDropletsByID
  | LoadBalancerCreateParams.AssignDropletsByTag;

export declare namespace LoadBalancerCreateParams {
  export interface AssignDropletsByID {
    /**
     * An array of objects specifying the forwarding rules for a load balancer.
     */
    forwarding_rules: Array<ForwardingRule>;

    /**
     * @deprecated This field has been deprecated. You can no longer specify an
     * algorithm for load balancers.
     */
    algorithm?: 'round_robin' | 'least_connections';

    /**
     * A boolean value indicating whether to disable automatic DNS record creation for
     * Let's Encrypt certificates that are added to the load balancer.
     */
    disable_lets_encrypt_dns_records?: boolean;

    /**
     * An array of objects specifying the domain configurations for a Global load
     * balancer.
     */
    domains?: Array<Domains>;

    /**
     * An array containing the IDs of the Droplets assigned to the load balancer.
     */
    droplet_ids?: Array<number>;

    /**
     * A boolean value indicating whether HTTP keepalive connections are maintained to
     * target Droplets.
     */
    enable_backend_keepalive?: boolean;

    /**
     * A boolean value indicating whether PROXY Protocol is in use.
     */
    enable_proxy_protocol?: boolean;

    /**
     * An object specifying allow and deny rules to control traffic to the load
     * balancer.
     */
    firewall?: LbFirewall;

    /**
     * An object specifying forwarding configurations for a Global load balancer.
     */
    glb_settings?: GlbSettings;

    /**
     * An object specifying health check settings for the load balancer.
     */
    health_check?: HealthCheck;

    /**
     * An integer value which configures the idle timeout for HTTP requests to the
     * target droplets.
     */
    http_idle_timeout_seconds?: number;

    /**
     * A human-readable name for a load balancer instance.
     */
    name?: string;

    /**
     * A string indicating whether the load balancer should be external or internal.
     * Internal load balancers have no public IPs and are only accessible to resources
     * on the same VPC network. This property cannot be updated after creating the load
     * balancer.
     */
    network?: 'EXTERNAL' | 'INTERNAL';

    /**
     * A string indicating whether the load balancer will support IPv4 or both IPv4 and
     * IPv6 networking. This property cannot be updated after creating the load
     * balancer.
     */
    network_stack?: 'IPV4' | 'DUALSTACK';

    /**
     * The ID of the project that the load balancer is associated with. If no ID is
     * provided at creation, the load balancer associates with the user's default
     * project. If an invalid project ID is provided, the load balancer will not be
     * created.
     */
    project_id?: string;

    /**
     * A boolean value indicating whether HTTP requests to the load balancer on port 80
     * will be redirected to HTTPS on port 443.
     */
    redirect_http_to_https?: boolean;

    /**
     * The slug identifier for the region where the resource will initially be
     * available.
     */
    region?:
      | 'ams1'
      | 'ams2'
      | 'ams3'
      | 'blr1'
      | 'fra1'
      | 'lon1'
      | 'nyc1'
      | 'nyc2'
      | 'nyc3'
      | 'sfo1'
      | 'sfo2'
      | 'sfo3'
      | 'sgp1'
      | 'tor1'
      | 'syd1';

    /**
     * @deprecated This field has been replaced by the `size_unit` field for all
     * regions except in AMS2, NYC2, and SFO1. Each available load balancer size now
     * equates to the load balancer having a set number of nodes.
     *
     * - `lb-small` = 1 node
     * - `lb-medium` = 3 nodes
     * - `lb-large` = 6 nodes
     *
     * You can resize load balancers after creation up to once per hour. You cannot
     * resize a load balancer within the first hour of its creation.
     */
    size?: 'lb-small' | 'lb-medium' | 'lb-large';

    /**
     * How many nodes the load balancer contains. Each additional node increases the
     * load balancer's ability to manage more connections. Load balancers can be scaled
     * up or down, and you can change the number of nodes after creation up to once per
     * hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions.
     * Use the `size` field to scale load balancers that reside in these regions.
     */
    size_unit?: number;

    /**
     * An object specifying sticky sessions settings for the load balancer.
     */
    sticky_sessions?: StickySessions;

    /**
     * An array containing the UUIDs of the Regional load balancers to be used as
     * target backends for a Global load balancer.
     */
    target_load_balancer_ids?: Array<string>;

    /**
     * A string indicating the policy for the TLS cipher suites used by the load
     * balancer. The possible values are `DEFAULT` or `STRONG`. The default value is
     * `DEFAULT`.
     */
    tls_cipher_policy?: 'DEFAULT' | 'STRONG';

    /**
     * A string indicating whether the load balancer should be a standard regional HTTP
     * load balancer, a regional network load balancer that routes traffic at the
     * TCP/UDP transport layer, or a global load balancer.
     */
    type?: 'REGIONAL' | 'REGIONAL_NETWORK' | 'GLOBAL';

    /**
     * A string specifying the UUID of the VPC to which the load balancer is assigned.
     */
    vpc_uuid?: string;
  }

  export interface AssignDropletsByTag {
    /**
     * An array of objects specifying the forwarding rules for a load balancer.
     */
    forwarding_rules: Array<ForwardingRule>;

    /**
     * @deprecated This field has been deprecated. You can no longer specify an
     * algorithm for load balancers.
     */
    algorithm?: 'round_robin' | 'least_connections';

    /**
     * A boolean value indicating whether to disable automatic DNS record creation for
     * Let's Encrypt certificates that are added to the load balancer.
     */
    disable_lets_encrypt_dns_records?: boolean;

    /**
     * An array of objects specifying the domain configurations for a Global load
     * balancer.
     */
    domains?: Array<Domains>;

    /**
     * A boolean value indicating whether HTTP keepalive connections are maintained to
     * target Droplets.
     */
    enable_backend_keepalive?: boolean;

    /**
     * A boolean value indicating whether PROXY Protocol is in use.
     */
    enable_proxy_protocol?: boolean;

    /**
     * An object specifying allow and deny rules to control traffic to the load
     * balancer.
     */
    firewall?: LbFirewall;

    /**
     * An object specifying forwarding configurations for a Global load balancer.
     */
    glb_settings?: GlbSettings;

    /**
     * An object specifying health check settings for the load balancer.
     */
    health_check?: HealthCheck;

    /**
     * An integer value which configures the idle timeout for HTTP requests to the
     * target droplets.
     */
    http_idle_timeout_seconds?: number;

    /**
     * A human-readable name for a load balancer instance.
     */
    name?: string;

    /**
     * A string indicating whether the load balancer should be external or internal.
     * Internal load balancers have no public IPs and are only accessible to resources
     * on the same VPC network. This property cannot be updated after creating the load
     * balancer.
     */
    network?: 'EXTERNAL' | 'INTERNAL';

    /**
     * A string indicating whether the load balancer will support IPv4 or both IPv4 and
     * IPv6 networking. This property cannot be updated after creating the load
     * balancer.
     */
    network_stack?: 'IPV4' | 'DUALSTACK';

    /**
     * The ID of the project that the load balancer is associated with. If no ID is
     * provided at creation, the load balancer associates with the user's default
     * project. If an invalid project ID is provided, the load balancer will not be
     * created.
     */
    project_id?: string;

    /**
     * A boolean value indicating whether HTTP requests to the load balancer on port 80
     * will be redirected to HTTPS on port 443.
     */
    redirect_http_to_https?: boolean;

    /**
     * The slug identifier for the region where the resource will initially be
     * available.
     */
    region?:
      | 'ams1'
      | 'ams2'
      | 'ams3'
      | 'blr1'
      | 'fra1'
      | 'lon1'
      | 'nyc1'
      | 'nyc2'
      | 'nyc3'
      | 'sfo1'
      | 'sfo2'
      | 'sfo3'
      | 'sgp1'
      | 'tor1'
      | 'syd1';

    /**
     * @deprecated This field has been replaced by the `size_unit` field for all
     * regions except in AMS2, NYC2, and SFO1. Each available load balancer size now
     * equates to the load balancer having a set number of nodes.
     *
     * - `lb-small` = 1 node
     * - `lb-medium` = 3 nodes
     * - `lb-large` = 6 nodes
     *
     * You can resize load balancers after creation up to once per hour. You cannot
     * resize a load balancer within the first hour of its creation.
     */
    size?: 'lb-small' | 'lb-medium' | 'lb-large';

    /**
     * How many nodes the load balancer contains. Each additional node increases the
     * load balancer's ability to manage more connections. Load balancers can be scaled
     * up or down, and you can change the number of nodes after creation up to once per
     * hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions.
     * Use the `size` field to scale load balancers that reside in these regions.
     */
    size_unit?: number;

    /**
     * An object specifying sticky sessions settings for the load balancer.
     */
    sticky_sessions?: StickySessions;

    /**
     * The name of a Droplet tag corresponding to Droplets assigned to the load
     * balancer.
     */
    tag?: string;

    /**
     * An array containing the UUIDs of the Regional load balancers to be used as
     * target backends for a Global load balancer.
     */
    target_load_balancer_ids?: Array<string>;

    /**
     * A string indicating the policy for the TLS cipher suites used by the load
     * balancer. The possible values are `DEFAULT` or `STRONG`. The default value is
     * `DEFAULT`.
     */
    tls_cipher_policy?: 'DEFAULT' | 'STRONG';

    /**
     * A string indicating whether the load balancer should be a standard regional HTTP
     * load balancer, a regional network load balancer that routes traffic at the
     * TCP/UDP transport layer, or a global load balancer.
     */
    type?: 'REGIONAL' | 'REGIONAL_NETWORK' | 'GLOBAL';

    /**
     * A string specifying the UUID of the VPC to which the load balancer is assigned.
     */
    vpc_uuid?: string;
  }
}

export type LoadBalancerUpdateParams =
  | LoadBalancerUpdateParams.AssignDropletsByID
  | LoadBalancerUpdateParams.AssignDropletsByTag;

export declare namespace LoadBalancerUpdateParams {
  export interface AssignDropletsByID {
    /**
     * An array of objects specifying the forwarding rules for a load balancer.
     */
    forwarding_rules: Array<ForwardingRule>;

    /**
     * @deprecated This field has been deprecated. You can no longer specify an
     * algorithm for load balancers.
     */
    algorithm?: 'round_robin' | 'least_connections';

    /**
     * A boolean value indicating whether to disable automatic DNS record creation for
     * Let's Encrypt certificates that are added to the load balancer.
     */
    disable_lets_encrypt_dns_records?: boolean;

    /**
     * An array of objects specifying the domain configurations for a Global load
     * balancer.
     */
    domains?: Array<Domains>;

    /**
     * An array containing the IDs of the Droplets assigned to the load balancer.
     */
    droplet_ids?: Array<number>;

    /**
     * A boolean value indicating whether HTTP keepalive connections are maintained to
     * target Droplets.
     */
    enable_backend_keepalive?: boolean;

    /**
     * A boolean value indicating whether PROXY Protocol is in use.
     */
    enable_proxy_protocol?: boolean;

    /**
     * An object specifying allow and deny rules to control traffic to the load
     * balancer.
     */
    firewall?: LbFirewall;

    /**
     * An object specifying forwarding configurations for a Global load balancer.
     */
    glb_settings?: GlbSettings;

    /**
     * An object specifying health check settings for the load balancer.
     */
    health_check?: HealthCheck;

    /**
     * An integer value which configures the idle timeout for HTTP requests to the
     * target droplets.
     */
    http_idle_timeout_seconds?: number;

    /**
     * A human-readable name for a load balancer instance.
     */
    name?: string;

    /**
     * A string indicating whether the load balancer should be external or internal.
     * Internal load balancers have no public IPs and are only accessible to resources
     * on the same VPC network. This property cannot be updated after creating the load
     * balancer.
     */
    network?: 'EXTERNAL' | 'INTERNAL';

    /**
     * A string indicating whether the load balancer will support IPv4 or both IPv4 and
     * IPv6 networking. This property cannot be updated after creating the load
     * balancer.
     */
    network_stack?: 'IPV4' | 'DUALSTACK';

    /**
     * The ID of the project that the load balancer is associated with. If no ID is
     * provided at creation, the load balancer associates with the user's default
     * project. If an invalid project ID is provided, the load balancer will not be
     * created.
     */
    project_id?: string;

    /**
     * A boolean value indicating whether HTTP requests to the load balancer on port 80
     * will be redirected to HTTPS on port 443.
     */
    redirect_http_to_https?: boolean;

    /**
     * The slug identifier for the region where the resource will initially be
     * available.
     */
    region?:
      | 'ams1'
      | 'ams2'
      | 'ams3'
      | 'blr1'
      | 'fra1'
      | 'lon1'
      | 'nyc1'
      | 'nyc2'
      | 'nyc3'
      | 'sfo1'
      | 'sfo2'
      | 'sfo3'
      | 'sgp1'
      | 'tor1'
      | 'syd1';

    /**
     * @deprecated This field has been replaced by the `size_unit` field for all
     * regions except in AMS2, NYC2, and SFO1. Each available load balancer size now
     * equates to the load balancer having a set number of nodes.
     *
     * - `lb-small` = 1 node
     * - `lb-medium` = 3 nodes
     * - `lb-large` = 6 nodes
     *
     * You can resize load balancers after creation up to once per hour. You cannot
     * resize a load balancer within the first hour of its creation.
     */
    size?: 'lb-small' | 'lb-medium' | 'lb-large';

    /**
     * How many nodes the load balancer contains. Each additional node increases the
     * load balancer's ability to manage more connections. Load balancers can be scaled
     * up or down, and you can change the number of nodes after creation up to once per
     * hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions.
     * Use the `size` field to scale load balancers that reside in these regions.
     */
    size_unit?: number;

    /**
     * An object specifying sticky sessions settings for the load balancer.
     */
    sticky_sessions?: StickySessions;

    /**
     * An array containing the UUIDs of the Regional load balancers to be used as
     * target backends for a Global load balancer.
     */
    target_load_balancer_ids?: Array<string>;

    /**
     * A string indicating the policy for the TLS cipher suites used by the load
     * balancer. The possible values are `DEFAULT` or `STRONG`. The default value is
     * `DEFAULT`.
     */
    tls_cipher_policy?: 'DEFAULT' | 'STRONG';

    /**
     * A string indicating whether the load balancer should be a standard regional HTTP
     * load balancer, a regional network load balancer that routes traffic at the
     * TCP/UDP transport layer, or a global load balancer.
     */
    type?: 'REGIONAL' | 'REGIONAL_NETWORK' | 'GLOBAL';

    /**
     * A string specifying the UUID of the VPC to which the load balancer is assigned.
     */
    vpc_uuid?: string;
  }

  export interface AssignDropletsByTag {
    /**
     * An array of objects specifying the forwarding rules for a load balancer.
     */
    forwarding_rules: Array<ForwardingRule>;

    /**
     * @deprecated This field has been deprecated. You can no longer specify an
     * algorithm for load balancers.
     */
    algorithm?: 'round_robin' | 'least_connections';

    /**
     * A boolean value indicating whether to disable automatic DNS record creation for
     * Let's Encrypt certificates that are added to the load balancer.
     */
    disable_lets_encrypt_dns_records?: boolean;

    /**
     * An array of objects specifying the domain configurations for a Global load
     * balancer.
     */
    domains?: Array<Domains>;

    /**
     * A boolean value indicating whether HTTP keepalive connections are maintained to
     * target Droplets.
     */
    enable_backend_keepalive?: boolean;

    /**
     * A boolean value indicating whether PROXY Protocol is in use.
     */
    enable_proxy_protocol?: boolean;

    /**
     * An object specifying allow and deny rules to control traffic to the load
     * balancer.
     */
    firewall?: LbFirewall;

    /**
     * An object specifying forwarding configurations for a Global load balancer.
     */
    glb_settings?: GlbSettings;

    /**
     * An object specifying health check settings for the load balancer.
     */
    health_check?: HealthCheck;

    /**
     * An integer value which configures the idle timeout for HTTP requests to the
     * target droplets.
     */
    http_idle_timeout_seconds?: number;

    /**
     * A human-readable name for a load balancer instance.
     */
    name?: string;

    /**
     * A string indicating whether the load balancer should be external or internal.
     * Internal load balancers have no public IPs and are only accessible to resources
     * on the same VPC network. This property cannot be updated after creating the load
     * balancer.
     */
    network?: 'EXTERNAL' | 'INTERNAL';

    /**
     * A string indicating whether the load balancer will support IPv4 or both IPv4 and
     * IPv6 networking. This property cannot be updated after creating the load
     * balancer.
     */
    network_stack?: 'IPV4' | 'DUALSTACK';

    /**
     * The ID of the project that the load balancer is associated with. If no ID is
     * provided at creation, the load balancer associates with the user's default
     * project. If an invalid project ID is provided, the load balancer will not be
     * created.
     */
    project_id?: string;

    /**
     * A boolean value indicating whether HTTP requests to the load balancer on port 80
     * will be redirected to HTTPS on port 443.
     */
    redirect_http_to_https?: boolean;

    /**
     * The slug identifier for the region where the resource will initially be
     * available.
     */
    region?:
      | 'ams1'
      | 'ams2'
      | 'ams3'
      | 'blr1'
      | 'fra1'
      | 'lon1'
      | 'nyc1'
      | 'nyc2'
      | 'nyc3'
      | 'sfo1'
      | 'sfo2'
      | 'sfo3'
      | 'sgp1'
      | 'tor1'
      | 'syd1';

    /**
     * @deprecated This field has been replaced by the `size_unit` field for all
     * regions except in AMS2, NYC2, and SFO1. Each available load balancer size now
     * equates to the load balancer having a set number of nodes.
     *
     * - `lb-small` = 1 node
     * - `lb-medium` = 3 nodes
     * - `lb-large` = 6 nodes
     *
     * You can resize load balancers after creation up to once per hour. You cannot
     * resize a load balancer within the first hour of its creation.
     */
    size?: 'lb-small' | 'lb-medium' | 'lb-large';

    /**
     * How many nodes the load balancer contains. Each additional node increases the
     * load balancer's ability to manage more connections. Load balancers can be scaled
     * up or down, and you can change the number of nodes after creation up to once per
     * hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions.
     * Use the `size` field to scale load balancers that reside in these regions.
     */
    size_unit?: number;

    /**
     * An object specifying sticky sessions settings for the load balancer.
     */
    sticky_sessions?: StickySessions;

    /**
     * The name of a Droplet tag corresponding to Droplets assigned to the load
     * balancer.
     */
    tag?: string;

    /**
     * An array containing the UUIDs of the Regional load balancers to be used as
     * target backends for a Global load balancer.
     */
    target_load_balancer_ids?: Array<string>;

    /**
     * A string indicating the policy for the TLS cipher suites used by the load
     * balancer. The possible values are `DEFAULT` or `STRONG`. The default value is
     * `DEFAULT`.
     */
    tls_cipher_policy?: 'DEFAULT' | 'STRONG';

    /**
     * A string indicating whether the load balancer should be a standard regional HTTP
     * load balancer, a regional network load balancer that routes traffic at the
     * TCP/UDP transport layer, or a global load balancer.
     */
    type?: 'REGIONAL' | 'REGIONAL_NETWORK' | 'GLOBAL';

    /**
     * A string specifying the UUID of the VPC to which the load balancer is assigned.
     */
    vpc_uuid?: string;
  }
}

export interface LoadBalancerListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

LoadBalancers.Droplets = Droplets;
LoadBalancers.ForwardingRules = ForwardingRules;

export declare namespace LoadBalancers {
  export {
    type Domains as Domains,
    type ForwardingRule as ForwardingRule,
    type GlbSettings as GlbSettings,
    type HealthCheck as HealthCheck,
    type LbFirewall as LbFirewall,
    type LoadBalancer as LoadBalancer,
    type StickySessions as StickySessions,
    type LoadBalancerCreateResponse as LoadBalancerCreateResponse,
    type LoadBalancerRetrieveResponse as LoadBalancerRetrieveResponse,
    type LoadBalancerUpdateResponse as LoadBalancerUpdateResponse,
    type LoadBalancerListResponse as LoadBalancerListResponse,
    type LoadBalancerCreateParams as LoadBalancerCreateParams,
    type LoadBalancerUpdateParams as LoadBalancerUpdateParams,
    type LoadBalancerListParams as LoadBalancerListParams,
  };

  export {
    Droplets as Droplets,
    type DropletAddParams as DropletAddParams,
    type DropletRemoveParams as DropletRemoveParams,
  };

  export {
    ForwardingRules as ForwardingRules,
    type ForwardingRuleAddParams as ForwardingRuleAddParams,
    type ForwardingRuleRemoveParams as ForwardingRuleRemoveParams,
  };
}
