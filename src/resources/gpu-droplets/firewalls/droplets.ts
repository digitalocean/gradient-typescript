// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Droplets extends APIResource {
  /**
   * To assign a Droplet to a firewall, send a POST request to
   * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should
   * be a `droplet_ids` attribute containing a list of Droplet IDs.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.firewalls.droplets.add(
   *   'bb4b2611-3d72-467b-8602-280330ecd65c',
   *   { droplet_ids: [49696269] },
   * );
   * ```
   */
  add(firewallID: string, body: DropletAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v2/firewalls/${firewallID}/droplets`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To remove a Droplet from a firewall, send a DELETE request to
   * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should
   * be a `droplet_ids` attribute containing a list of Droplet IDs.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.firewalls.droplets.remove(
   *   'bb4b2611-3d72-467b-8602-280330ecd65c',
   *   { droplet_ids: [49696269] },
   * );
   * ```
   */
  remove(firewallID: string, body: DropletRemoveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/firewalls/${firewallID}/droplets`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DropletAddParams {
  /**
   * An array containing the IDs of the Droplets to be assigned to the firewall.
   */
  droplet_ids: Array<number>;
}

export interface DropletRemoveParams {
  /**
   * An array containing the IDs of the Droplets to be removed from the firewall.
   */
  droplet_ids: Array<number>;
}

export declare namespace Droplets {
  export { type DropletAddParams as DropletAddParams, type DropletRemoveParams as DropletRemoveParams };
}
