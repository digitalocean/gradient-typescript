// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Droplets extends APIResource {
  /**
   * To assign a Droplet to a load balancer instance, send a POST request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
   * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
   * Individual Droplets can not be added to a load balancer configured with a
   * Droplet tag. Attempting to do so will result in a "422 Unprocessable Entity"
   * response from the API.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.loadBalancers.droplets.add(
   *   '4de7ac8b-495b-4884-9a69-1050c6793cd6',
   *   { droplet_ids: [3164444, 3164445] },
   * );
   * ```
   */
  add(lbID: string, body: DropletAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v2/load_balancers/${lbID}/droplets`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To remove a Droplet from a load balancer instance, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
   * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.loadBalancers.droplets.remove(
   *   '4de7ac8b-495b-4884-9a69-1050c6793cd6',
   *   { droplet_ids: [3164444, 3164445] },
   * );
   * ```
   */
  remove(lbID: string, body: DropletRemoveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/load_balancers/${lbID}/droplets`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DropletAddParams {
  /**
   * An array containing the IDs of the Droplets assigned to the load balancer.
   */
  droplet_ids: Array<number>;
}

export interface DropletRemoveParams {
  /**
   * An array containing the IDs of the Droplets assigned to the load balancer.
   */
  droplet_ids: Array<number>;
}

export declare namespace Droplets {
  export { type DropletAddParams as DropletAddParams, type DropletRemoveParams as DropletRemoveParams };
}
