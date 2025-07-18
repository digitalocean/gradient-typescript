// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Rules extends APIResource {
  /**
   * To add additional access rules to a firewall, send a POST request to
   * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
   * inbound_rules and/or outbound_rules attribute containing an array of rules to be
   * added.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.firewalls.rules.add(
   *   'bb4b2611-3d72-467b-8602-280330ecd65c',
   *   {
   *     inbound_rules: [
   *       {
   *         protocol: 'tcp',
   *         ports: '3306',
   *         sources: { droplet_ids: [49696269] },
   *       },
   *     ],
   *     outbound_rules: [
   *       {
   *         protocol: 'tcp',
   *         ports: '3306',
   *         destinations: { droplet_ids: [49696269] },
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  add(
    firewallID: string,
    body: RuleAddParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/v2/firewalls/${firewallID}/rules`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To remove access rules from a firewall, send a DELETE request to
   * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
   * `inbound_rules` and/or `outbound_rules` attribute containing an array of rules
   * to be removed.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.firewalls.rules.remove(
   *   'bb4b2611-3d72-467b-8602-280330ecd65c',
   *   {
   *     inbound_rules: [
   *       {
   *         protocol: 'tcp',
   *         ports: '3306',
   *         sources: { droplet_ids: [49696269] },
   *       },
   *     ],
   *     outbound_rules: [
   *       {
   *         protocol: 'tcp',
   *         ports: '3306',
   *         destinations: { droplet_ids: [49696269] },
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  remove(
    firewallID: string,
    body: RuleRemoveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.delete(path`/v2/firewalls/${firewallID}/rules`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RuleAddParams {
  inbound_rules?: Array<RuleAddParams.InboundRule> | null;

  outbound_rules?: Array<RuleAddParams.OutboundRule> | null;
}

export namespace RuleAddParams {
  export interface InboundRule {
    /**
     * The ports on which traffic will be allowed specified as a string containing a
     * single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a
     * protocol. For ICMP rules this parameter will always return "0".
     */
    ports: string;

    /**
     * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
     */
    protocol: 'tcp' | 'udp' | 'icmp';

    /**
     * An object specifying locations from which inbound traffic will be accepted.
     */
    sources: Shared.FirewallRuleTarget;
  }

  export interface OutboundRule {
    /**
     * An object specifying locations to which outbound traffic that will be allowed.
     */
    destinations: Shared.FirewallRuleTarget;

    /**
     * The ports on which traffic will be allowed specified as a string containing a
     * single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a
     * protocol. For ICMP rules this parameter will always return "0".
     */
    ports: string;

    /**
     * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
     */
    protocol: 'tcp' | 'udp' | 'icmp';
  }
}

export interface RuleRemoveParams {
  inbound_rules?: Array<RuleRemoveParams.InboundRule> | null;

  outbound_rules?: Array<RuleRemoveParams.OutboundRule> | null;
}

export namespace RuleRemoveParams {
  export interface InboundRule {
    /**
     * The ports on which traffic will be allowed specified as a string containing a
     * single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a
     * protocol. For ICMP rules this parameter will always return "0".
     */
    ports: string;

    /**
     * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
     */
    protocol: 'tcp' | 'udp' | 'icmp';

    /**
     * An object specifying locations from which inbound traffic will be accepted.
     */
    sources: Shared.FirewallRuleTarget;
  }

  export interface OutboundRule {
    /**
     * An object specifying locations to which outbound traffic that will be allowed.
     */
    destinations: Shared.FirewallRuleTarget;

    /**
     * The ports on which traffic will be allowed specified as a string containing a
     * single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a
     * protocol. For ICMP rules this parameter will always return "0".
     */
    ports: string;

    /**
     * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
     */
    protocol: 'tcp' | 'udp' | 'icmp';
  }
}

export declare namespace Rules {
  export { type RuleAddParams as RuleAddParams, type RuleRemoveParams as RuleRemoveParams };
}
