// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DestroyWithAssociatedResourcesAPI from './destroy-with-associated-resources';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DestroyWithAssociatedResources extends APIResource {
  /**
   * To list the associated billable resources that can be destroyed along with a
   * Droplet, send a GET request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.
   *
   * This endpoint will only return resources that you are authorized to see. For
   * example, to see associated Reserved IPs, include the `reserved_ip:read` scope.
   *
   * The response will be a JSON object containing `snapshots`, `volumes`, and
   * `volume_snapshots` keys. Each will be set to an array of objects containing
   * information about the associated resources.
   *
   * @example
   * ```ts
   * const destroyWithAssociatedResources =
   *   await client.gpuDroplets.destroyWithAssociatedResources.list(
   *     3164444,
   *   );
   * ```
   */
  list(dropletID: number, options?: RequestOptions): APIPromise<DestroyWithAssociatedResourceListResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/destroy_with_associated_resources`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To check on the status of a request to destroy a Droplet with its associated
   * resources, send a GET request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.destroyWithAssociatedResources.checkStatus(
   *     3164444,
   *   );
   * ```
   */
  checkStatus(
    dropletID: number,
    options?: RequestOptions,
  ): APIPromise<DestroyWithAssociatedResourceCheckStatusResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/destroy_with_associated_resources/status`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To destroy a Droplet along with all of its associated resources, send a DELETE
   * request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous` endpoint.
   * The headers of this request must include an `X-Dangerous` key set to `true`. To
   * preview which resources will be destroyed, first query the Droplet's associated
   * resources. This operation _can not_ be reverse and should be used with caution.
   *
   * A successful response will include a 202 response code and no content. Use the
   * status endpoint to check on the success or failure of the destruction of the
   * individual resources.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.destroyWithAssociatedResources.deleteDangerous(
   *   3164444,
   *   { 'X-Dangerous': true },
   * );
   * ```
   */
  deleteDangerous(
    dropletID: number,
    params: DestroyWithAssociatedResourceDeleteDangerousParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Dangerous': xDangerous } = params;
    return this._client.delete(path`/v2/droplets/${dropletID}/destroy_with_associated_resources/dangerous`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'X-Dangerous': xDangerous.toString() }, options?.headers]),
    });
  }

  /**
   * To destroy a Droplet along with a sub-set of its associated resources, send a
   * DELETE request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective` endpoint.
   * The JSON body of the request should include `reserved_ips`, `snapshots`,
   * `volumes`, or `volume_snapshots` keys each set to an array of IDs for the
   * associated resources to be destroyed. The IDs can be found by querying the
   * Droplet's associated resources. Any associated resource not included in the
   * request will remain and continue to accrue changes on your account.
   *
   * A successful response will include a 202 response code and no content. Use the
   * status endpoint to check on the success or failure of the destruction of the
   * individual resources.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.destroyWithAssociatedResources.deleteSelective(
   *   3164444,
   * );
   * ```
   */
  deleteSelective(
    dropletID: number,
    body: DestroyWithAssociatedResourceDeleteSelectiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.delete(path`/v2/droplets/${dropletID}/destroy_with_associated_resources/selective`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * If the status of a request to destroy a Droplet with its associated resources
   * reported any errors, it can be retried by sending a POST request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.
   *
   * Only one destroy can be active at a time per Droplet. If a retry is issued while
   * another destroy is in progress for the Droplet a 409 status code will be
   * returned. A successful response will include a 202 response code and no content.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.destroyWithAssociatedResources.retry(
   *   3164444,
   * );
   * ```
   */
  retry(dropletID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v2/droplets/${dropletID}/destroy_with_associated_resources/retry`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An objects containing information about a resource associated with a Droplet.
 */
export interface AssociatedResource {
  /**
   * The unique identifier for the resource associated with the Droplet.
   */
  id?: string;

  /**
   * The cost of the resource in USD per month if the resource is retained after the
   * Droplet is destroyed.
   */
  cost?: string;

  /**
   * The name of the resource associated with the Droplet.
   */
  name?: string;
}

/**
 * An object containing information about a resource scheduled for deletion.
 */
export interface DestroyedAssociatedResource {
  /**
   * The unique identifier for the resource scheduled for deletion.
   */
  id?: string;

  /**
   * A time value given in ISO8601 combined date and time format indicating when the
   * resource was destroyed if the request was successful.
   */
  destroyed_at?: string;

  /**
   * A string indicating that the resource was not successfully destroyed and
   * providing additional information.
   */
  error_message?: string;

  /**
   * The name of the resource scheduled for deletion.
   */
  name?: string;
}

export interface DestroyWithAssociatedResourceListResponse {
  /**
   * Floating IPs that are associated with this Droplet. Requires `reserved_ip:read`
   * scope.
   */
  floating_ips?: Array<AssociatedResource>;

  /**
   * Reserved IPs that are associated with this Droplet. Requires `reserved_ip:read`
   * scope.
   */
  reserved_ips?: Array<AssociatedResource>;

  /**
   * Snapshots that are associated with this Droplet. Requires `image:read` scope.
   */
  snapshots?: Array<AssociatedResource>;

  /**
   * Volume Snapshots that are associated with this Droplet. Requires
   * `block_storage_snapshot:read` scope.
   */
  volume_snapshots?: Array<AssociatedResource>;

  /**
   * Volumes that are associated with this Droplet. Requires `block_storage:read`
   * scope.
   */
  volumes?: Array<AssociatedResource>;
}

/**
 * An objects containing information about a resources scheduled for deletion.
 */
export interface DestroyWithAssociatedResourceCheckStatusResponse {
  /**
   * A time value given in ISO8601 combined date and time format indicating when the
   * requested action was completed.
   */
  completed_at?: string;

  /**
   * An object containing information about a resource scheduled for deletion.
   */
  droplet?: DestroyedAssociatedResource;

  /**
   * A count of the associated resources that failed to be destroyed, if any.
   */
  failures?: number;

  /**
   * An object containing additional information about resource related to a Droplet
   * requested to be destroyed.
   */
  resources?: DestroyWithAssociatedResourceCheckStatusResponse.Resources;
}

export namespace DestroyWithAssociatedResourceCheckStatusResponse {
  /**
   * An object containing additional information about resource related to a Droplet
   * requested to be destroyed.
   */
  export interface Resources {
    floating_ips?: Array<DestroyWithAssociatedResourcesAPI.DestroyedAssociatedResource>;

    reserved_ips?: Array<DestroyWithAssociatedResourcesAPI.DestroyedAssociatedResource>;

    snapshots?: Array<DestroyWithAssociatedResourcesAPI.DestroyedAssociatedResource>;

    volume_snapshots?: Array<DestroyWithAssociatedResourcesAPI.DestroyedAssociatedResource>;

    volumes?: Array<DestroyWithAssociatedResourcesAPI.DestroyedAssociatedResource>;
  }
}

export interface DestroyWithAssociatedResourceDeleteDangerousParams {
  /**
   * Acknowledge this action will destroy the Droplet and all associated resources
   * and _can not_ be reversed.
   */
  'X-Dangerous': boolean;
}

export interface DestroyWithAssociatedResourceDeleteSelectiveParams {
  /**
   * @deprecated An array of unique identifiers for the floating IPs to be scheduled
   * for deletion.
   */
  floating_ips?: Array<string>;

  /**
   * An array of unique identifiers for the reserved IPs to be scheduled for
   * deletion.
   */
  reserved_ips?: Array<string>;

  /**
   * An array of unique identifiers for the snapshots to be scheduled for deletion.
   */
  snapshots?: Array<string>;

  /**
   * An array of unique identifiers for the volume snapshots to be scheduled for
   * deletion.
   */
  volume_snapshots?: Array<string>;

  /**
   * An array of unique identifiers for the volumes to be scheduled for deletion.
   */
  volumes?: Array<string>;
}

export declare namespace DestroyWithAssociatedResources {
  export {
    type AssociatedResource as AssociatedResource,
    type DestroyedAssociatedResource as DestroyedAssociatedResource,
    type DestroyWithAssociatedResourceListResponse as DestroyWithAssociatedResourceListResponse,
    type DestroyWithAssociatedResourceCheckStatusResponse as DestroyWithAssociatedResourceCheckStatusResponse,
    type DestroyWithAssociatedResourceDeleteDangerousParams as DestroyWithAssociatedResourceDeleteDangerousParams,
    type DestroyWithAssociatedResourceDeleteSelectiveParams as DestroyWithAssociatedResourceDeleteSelectiveParams,
  };
}
