// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * To initiate an action on a floating IP send a POST request to
   * `/v2/floating_ips/$FLOATING_IP/actions`. In the JSON body to the request, set
   * the `type` attribute to on of the supported action types:
   *
   * | Action     | Details                               |
   * | ---------- | ------------------------------------- |
   * | `assign`   | Assigns a floating IP to a Droplet    |
   * | `unassign` | Unassign a floating IP from a Droplet |
   *
   * @example
   * ```ts
   * const action =
   *   await client.gpuDroplets.floatingIPs.actions.create(
   *     '45.55.96.47',
   *     { type: 'assign' },
   *   );
   * ```
   */
  create(
    floatingIP: string,
    body: ActionCreateParams,
    options?: RequestOptions,
  ): APIPromise<ActionCreateResponse> {
    return this._client.post(path`/v2/floating_ips/${floatingIP}/actions`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve the status of a floating IP action, send a GET request to
   * `/v2/floating_ips/$FLOATING_IP/actions/$ACTION_ID`.
   *
   * @example
   * ```ts
   * const action =
   *   await client.gpuDroplets.floatingIPs.actions.retrieve(
   *     36804636,
   *     { floating_ip: '45.55.96.47' },
   *   );
   * ```
   */
  retrieve(
    actionID: number,
    params: ActionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ActionRetrieveResponse> {
    const { floating_ip } = params;
    return this._client.get(path`/v2/floating_ips/${floating_ip}/actions/${actionID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve all actions that have been executed on a floating IP, send a GET
   * request to `/v2/floating_ips/$FLOATING_IP/actions`.
   *
   * @example
   * ```ts
   * const actions =
   *   await client.gpuDroplets.floatingIPs.actions.list(
   *     '45.55.96.47',
   *   );
   * ```
   */
  list(floatingIP: string, options?: RequestOptions): APIPromise<ActionListResponse> {
    return this._client.get(path`/v2/floating_ips/${floatingIP}/actions`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface ActionCreateResponse {
  action?: ActionCreateResponse.Action;
}

export namespace ActionCreateResponse {
  export interface Action extends Shared.Action {
    /**
     * The UUID of the project to which the reserved IP currently belongs.
     */
    project_id?: string;
  }
}

export interface ActionRetrieveResponse {
  action?: ActionRetrieveResponse.Action;
}

export namespace ActionRetrieveResponse {
  export interface Action extends Shared.Action {
    /**
     * The UUID of the project to which the reserved IP currently belongs.
     */
    project_id?: string;
  }
}

export interface ActionListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  actions?: Array<Shared.Action>;

  links?: Shared.PageLinks;
}

export type ActionCreateParams =
  | ActionCreateParams.FloatingIPActionUnassign
  | ActionCreateParams.FloatingIPActionAssign;

export declare namespace ActionCreateParams {
  export interface FloatingIPActionUnassign {
    /**
     * The type of action to initiate for the floating IP.
     */
    type: 'assign' | 'unassign';
  }

  export interface FloatingIPActionAssign {
    /**
     * The ID of the Droplet that the floating IP will be assigned to.
     */
    droplet_id: number;

    /**
     * The type of action to initiate for the floating IP.
     */
    type: 'assign' | 'unassign';
  }
}

export interface ActionRetrieveParams {
  /**
   * A floating IP address.
   */
  floating_ip: string;
}

export declare namespace Actions {
  export {
    type ActionCreateResponse as ActionCreateResponse,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionListResponse as ActionListResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionRetrieveParams as ActionRetrieveParams,
  };
}
