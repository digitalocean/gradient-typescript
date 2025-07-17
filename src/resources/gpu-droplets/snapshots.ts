// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Snapshots extends APIResource {
  /**
   * To retrieve information about a snapshot, send a GET request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   *
   * The response will be a JSON object with a key called `snapshot`. The value of
   * this will be an snapshot object containing the standard snapshot attributes.
   *
   * @example
   * ```ts
   * const snapshot =
   *   await client.gpuDroplets.snapshots.retrieve(6372321);
   * ```
   */
  retrieve(snapshotID: number | string, options?: RequestOptions): APIPromise<SnapshotRetrieveResponse> {
    return this._client.get(path`/v2/snapshots/${snapshotID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all of the snapshots available on your account, send a GET request to
   * `/v2/snapshots`.
   *
   * The response will be a JSON object with a key called `snapshots`. This will be
   * set to an array of `snapshot` objects, each of which will contain the standard
   * snapshot attributes.
   *
   * ### Filtering Results by Resource Type
   *
   * It's possible to request filtered results by including certain query parameters.
   *
   * #### List Droplet Snapshots
   *
   * To retrieve only snapshots based on Droplets, include the `resource_type` query
   * parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.
   *
   * #### List Volume Snapshots
   *
   * To retrieve only snapshots based on volumes, include the `resource_type` query
   * parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.
   *
   * @example
   * ```ts
   * const snapshots = await client.gpuDroplets.snapshots.list();
   * ```
   */
  list(
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotListResponse> {
    return this._client.get('/v2/snapshots', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * Both Droplet and volume snapshots are managed through the `/v2/snapshots/`
   * endpoint. To delete a snapshot, send a DELETE request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   *
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.snapshots.delete(6372321);
   * ```
   */
  delete(snapshotID: number | string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/snapshots/${snapshotID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SnapshotRetrieveResponse {
  snapshot?: Shared.Snapshots;
}

export interface SnapshotListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  links?: Shared.PageLinks;

  snapshots?: Array<Shared.Snapshots>;
}

export interface SnapshotListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;

  /**
   * Used to filter snapshots by a resource type.
   */
  resource_type?: 'droplet' | 'volume';
}

export declare namespace Snapshots {
  export {
    type SnapshotRetrieveResponse as SnapshotRetrieveResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotListParams as SnapshotListParams,
  };
}
