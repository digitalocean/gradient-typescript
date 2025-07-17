// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ActionsAPI from './actions';
import {
  ActionCreateParams,
  ActionCreateResponse,
  ActionListResponse,
  ActionRetrieveParams,
  ActionRetrieveResponse,
  Actions,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FloatingIPs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * On creation, a floating IP must be either assigned to a Droplet or reserved to a
   * region.
   *
   * - To create a new floating IP assigned to a Droplet, send a POST request to
   *   `/v2/floating_ips` with the `droplet_id` attribute.
   *
   * - To create a new floating IP reserved to a region, send a POST request to
   *   `/v2/floating_ips` with the `region` attribute.
   *
   * **Note**: In addition to the standard rate limiting, only 12 floating IPs may be
   * created per 60 seconds.
   *
   * @example
   * ```ts
   * const floatingIP =
   *   await client.gpuDroplets.floatingIPs.create({
   *     droplet_id: 2457247,
   *   });
   * ```
   */
  create(body: FloatingIPCreateParams, options?: RequestOptions): APIPromise<FloatingIPCreateResponse> {
    return this._client.post('/v2/floating_ips', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To show information about a floating IP, send a GET request to
   * `/v2/floating_ips/$FLOATING_IP_ADDR`.
   *
   * @example
   * ```ts
   * const floatingIP =
   *   await client.gpuDroplets.floatingIPs.retrieve(
   *     '45.55.96.47',
   *   );
   * ```
   */
  retrieve(floatingIP: string, options?: RequestOptions): APIPromise<FloatingIPRetrieveResponse> {
    return this._client.get(path`/v2/floating_ips/${floatingIP}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all of the floating IPs available on your account, send a GET request to
   * `/v2/floating_ips`.
   *
   * @example
   * ```ts
   * const floatingIPs =
   *   await client.gpuDroplets.floatingIPs.list();
   * ```
   */
  list(
    query: FloatingIPListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FloatingIPListResponse> {
    return this._client.get('/v2/floating_ips', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a floating IP and remove it from your account, send a DELETE request
   * to `/v2/floating_ips/$FLOATING_IP_ADDR`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.floatingIPs.delete('45.55.96.47');
   * ```
   */
  delete(floatingIP: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/floating_ips/${floatingIP}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FloatingIP {
  /**
   * The Droplet that the floating IP has been assigned to. When you query a floating
   * IP, if it is assigned to a Droplet, the entire Droplet object will be returned.
   * If it is not assigned, the value will be null.
   *
   * Requires `droplet:read` scope.
   */
  droplet?: unknown | Shared.Droplet;

  /**
   * The public IP address of the floating IP. It also serves as its identifier.
   */
  ip?: string;

  /**
   * A boolean value indicating whether or not the floating IP has pending actions
   * preventing new ones from being submitted.
   */
  locked?: boolean;

  /**
   * The UUID of the project to which the reserved IP currently belongs.
   *
   * Requires `project:read` scope.
   */
  project_id?: string;

  /**
   * The region that the floating IP is reserved to. When you query a floating IP,
   * the entire region object will be returned.
   */
  region?: FloatingIP.Region;
}

export namespace FloatingIP {
  /**
   * The region that the floating IP is reserved to. When you query a floating IP,
   * the entire region object will be returned.
   */
  export interface Region extends Shared.Region {}
}

export interface FloatingIPCreateResponse {
  floating_ip?: FloatingIP;

  links?: FloatingIPCreateResponse.Links;
}

export namespace FloatingIPCreateResponse {
  export interface Links {
    actions?: Array<Shared.ActionLink>;

    droplets?: Array<Shared.ActionLink>;
  }
}

export interface FloatingIPRetrieveResponse {
  floating_ip?: FloatingIP;
}

export interface FloatingIPListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  floating_ips?: Array<FloatingIP>;

  links?: Shared.PageLinks;
}

export type FloatingIPCreateParams =
  | FloatingIPCreateParams.AssignToDroplet
  | FloatingIPCreateParams.ReserveToRegion;

export declare namespace FloatingIPCreateParams {
  export interface AssignToDroplet {
    /**
     * The ID of the Droplet that the floating IP will be assigned to.
     */
    droplet_id: number;
  }

  export interface ReserveToRegion {
    /**
     * The slug identifier for the region the floating IP will be reserved to.
     */
    region: string;

    /**
     * The UUID of the project to which the floating IP will be assigned.
     */
    project_id?: string;
  }
}

export interface FloatingIPListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

FloatingIPs.Actions = Actions;

export declare namespace FloatingIPs {
  export {
    type FloatingIP as FloatingIP,
    type FloatingIPCreateResponse as FloatingIPCreateResponse,
    type FloatingIPRetrieveResponse as FloatingIPRetrieveResponse,
    type FloatingIPListResponse as FloatingIPListResponse,
    type FloatingIPCreateParams as FloatingIPCreateParams,
    type FloatingIPListParams as FloatingIPListParams,
  };

  export {
    Actions as Actions,
    type ActionCreateResponse as ActionCreateResponse,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionListResponse as ActionListResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionRetrieveParams as ActionRetrieveParams,
  };
}
