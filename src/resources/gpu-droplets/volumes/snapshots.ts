// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Snapshots extends APIResource {
  /**
   * To create a snapshot from a volume, sent a POST request to
   * `/v2/volumes/$VOLUME_ID/snapshots`.
   *
   * @example
   * ```ts
   * const snapshot =
   *   await client.gpuDroplets.volumes.snapshots.create(
   *     '7724db7c-e098-11e5-b522-000f53304e51',
   *     { name: 'big-data-snapshot1475261774' },
   *   );
   * ```
   */
  create(
    volumeID: string,
    body: SnapshotCreateParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotCreateResponse> {
    return this._client.post(path`/v2/volumes/${volumeID}/snapshots`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve the details of a snapshot that has been created from a volume, send
   * a GET request to `/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.
   *
   * @example
   * ```ts
   * const snapshot =
   *   await client.gpuDroplets.volumes.snapshots.retrieve(
   *     'fbe805e8-866b-11e6-96bf-000f53315a41',
   *   );
   * ```
   */
  retrieve(snapshotID: string, options?: RequestOptions): APIPromise<SnapshotRetrieveResponse> {
    return this._client.get(path`/v2/volumes/snapshots/${snapshotID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve the snapshots that have been created from a volume, send a GET
   * request to `/v2/volumes/$VOLUME_ID/snapshots`.
   *
   * @example
   * ```ts
   * const snapshots =
   *   await client.gpuDroplets.volumes.snapshots.list(
   *     '7724db7c-e098-11e5-b522-000f53304e51',
   *   );
   * ```
   */
  list(
    volumeID: string,
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotListResponse> {
    return this._client.get(path`/v2/volumes/${volumeID}/snapshots`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a volume snapshot, send a DELETE request to
   * `/v2/volumes/snapshots/$VOLUME_SNAPSHOT_ID`.
   *
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.volumes.snapshots.delete(
   *   'fbe805e8-866b-11e6-96bf-000f53315a41',
   * );
   * ```
   */
  delete(snapshotID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/volumes/snapshots/${snapshotID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SnapshotCreateResponse {
  snapshot?: Shared.Snapshots;
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

export interface SnapshotCreateParams {
  /**
   * A human-readable name for the volume snapshot.
   */
  name: string;

  /**
   * A flat array of tag names as strings to be applied to the resource. Tag names
   * may be for either existing or new tags.
   *
   * Requires `tag:create` scope.
   */
  tags?: Array<string> | null;
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
}

export declare namespace Snapshots {
  export {
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotRetrieveResponse as SnapshotRetrieveResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
    type SnapshotListParams as SnapshotListParams,
  };
}
