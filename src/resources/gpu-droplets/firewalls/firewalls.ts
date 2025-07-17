// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FirewallsAPI from './firewalls';
import * as Shared from '../../shared';
import * as DropletsAPI from './droplets';
import { DropletAddParams, DropletRemoveParams, Droplets } from './droplets';
import * as RulesAPI from './rules';
import { RuleAddParams, RuleRemoveParams, Rules } from './rules';
import * as TagsAPI from './tags';
import { TagAddParams, TagRemoveParams, Tags } from './tags';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Firewalls extends APIResource {
  droplets: DropletsAPI.Droplets = new DropletsAPI.Droplets(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * To create a new firewall, send a POST request to `/v2/firewalls`. The request
   * must contain at least one inbound or outbound access rule.
   *
   * @example
   * ```ts
   * const firewall =
   *   await client.gpuDroplets.firewalls.create();
   * ```
   */
  create(
    params: FirewallCreateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<FirewallCreateResponse> {
    const { body } = params ?? {};
    return this._client.post('/v2/firewalls', {
      body: body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To show information about an existing firewall, send a GET request to
   * `/v2/firewalls/$FIREWALL_ID`.
   *
   * @example
   * ```ts
   * const firewall =
   *   await client.gpuDroplets.firewalls.retrieve(
   *     'bb4b2611-3d72-467b-8602-280330ecd65c',
   *   );
   * ```
   */
  retrieve(firewallID: string, options?: RequestOptions): APIPromise<FirewallRetrieveResponse> {
    return this._client.get(path`/v2/firewalls/${firewallID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update the configuration of an existing firewall, send a PUT request to
   * `/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation
   * of the firewall including existing attributes. **Note that any attributes that
   * are not provided will be reset to their default values.**
   *
   * You must have read access (e.g. `droplet:read`) to all resources attached to the
   * firewall to successfully update the firewall.
   *
   * @example
   * ```ts
   * const firewall = await client.gpuDroplets.firewalls.update(
   *   'bb4b2611-3d72-467b-8602-280330ecd65c',
   *   { firewall: { name: 'frontend-firewall' } },
   * );
   * ```
   */
  update(
    firewallID: string,
    params: FirewallUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FirewallUpdateResponse> {
    const { firewall } = params;
    return this._client.put(path`/v2/firewalls/${firewallID}`, {
      body: firewall,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all of the firewalls available on your account, send a GET request to
   * `/v2/firewalls`.
   *
   * @example
   * ```ts
   * const firewalls = await client.gpuDroplets.firewalls.list();
   * ```
   */
  list(
    query: FirewallListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FirewallListResponse> {
    return this._client.get('/v2/firewalls', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.firewalls.delete(
   *   'bb4b2611-3d72-467b-8602-280330ecd65c',
   * );
   * ```
   */
  delete(firewallID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/firewalls/${firewallID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Firewall {
  /**
   * A unique ID that can be used to identify and reference a firewall.
   */
  id?: string;

  /**
   * A time value given in ISO8601 combined date and time format that represents when
   * the firewall was created.
   */
  created_at?: string;

  /**
   * An array containing the IDs of the Droplets assigned to the firewall.
   *
   * Requires `droplet:read` scope.
   */
  droplet_ids?: Array<number> | null;

  inbound_rules?: Array<Firewall.InboundRule> | null;

  /**
   * A human-readable name for a firewall. The name must begin with an alphanumeric
   * character. Subsequent characters must either be alphanumeric characters, a
   * period (.), or a dash (-).
   */
  name?: string;

  outbound_rules?: Array<Firewall.OutboundRule> | null;

  /**
   * An array of objects each containing the fields "droplet_id", "removing", and
   * "status". It is provided to detail exactly which Droplets are having their
   * security policies updated. When empty, all changes have been successfully
   * applied.
   */
  pending_changes?: Array<Firewall.PendingChange>;

  /**
   * A status string indicating the current state of the firewall. This can be
   * "waiting", "succeeded", or "failed".
   */
  status?: 'waiting' | 'succeeded' | 'failed';

  /**
   * A flat array of tag names as strings to be applied to the resource. Tag names
   * must exist in order to be referenced in a request.
   *
   * Requires `tag:create` and `tag:read` scopes.
   */
  tags?: Array<string> | null;
}

export namespace Firewall {
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

  export interface PendingChange {
    droplet_id?: number;

    removing?: boolean;

    status?: string;
  }
}

export interface FirewallCreateResponse {
  firewall?: Firewall;
}

export interface FirewallRetrieveResponse {
  firewall?: Firewall;
}

export interface FirewallUpdateResponse {
  firewall?: Firewall;
}

export interface FirewallListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  firewalls?: Array<Firewall>;

  links?: Shared.PageLinks;
}

export interface FirewallCreateParams {
  body?: FirewallCreateParams.Body;
}

export namespace FirewallCreateParams {
  export interface Body extends FirewallsAPI.Firewall {}
}

export interface FirewallUpdateParams {
  firewall: Firewall;
}

export interface FirewallListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

Firewalls.Droplets = Droplets;
Firewalls.Tags = Tags;
Firewalls.Rules = Rules;

export declare namespace Firewalls {
  export {
    type Firewall as Firewall,
    type FirewallCreateResponse as FirewallCreateResponse,
    type FirewallRetrieveResponse as FirewallRetrieveResponse,
    type FirewallUpdateResponse as FirewallUpdateResponse,
    type FirewallListResponse as FirewallListResponse,
    type FirewallCreateParams as FirewallCreateParams,
    type FirewallUpdateParams as FirewallUpdateParams,
    type FirewallListParams as FirewallListParams,
  };

  export {
    Droplets as Droplets,
    type DropletAddParams as DropletAddParams,
    type DropletRemoveParams as DropletRemoveParams,
  };

  export { Tags as Tags, type TagAddParams as TagAddParams, type TagRemoveParams as TagRemoveParams };

  export { Rules as Rules, type RuleAddParams as RuleAddParams, type RuleRemoveParams as RuleRemoveParams };
}
