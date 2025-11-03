// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Snapshots extends APIResource {
  /**
   * To get an NFS snapshot, send a GET request to
   * `/v2/nfs/snapshots/{nfs_snapshot_id}?region=${region}`.
   *
   * A successful request will return the NFS snapshot.
   *
   * @example
   * ```ts
   * const snapshot = await client.nfs.snapshots.retrieve(
   *   '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d',
   *   { region: 'region' },
   * );
   * ```
   */
  retrieve(
    nfsSnapshotID: string,
    query: SnapshotRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SnapshotRetrieveResponse> {
    return this._client.get(path`/v2/nfs/snapshots/${nfsSnapshotID}`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all NFS snapshots, send a GET request to
   * `/v2/nfs/snapshots?region=${region}&share_id={share_id}`.
   *
   * A successful request will return all NFS snapshots belonging to the
   * authenticated user in the specified region.
   *
   * Optionally, you can filter snapshots by a specific NFS share by including the
   * `share_id` query parameter.
   *
   * @example
   * ```ts
   * const snapshots = await client.nfs.snapshots.list({
   *   region: 'region',
   * });
   * ```
   */
  list(query: SnapshotListParams, options?: RequestOptions): APIPromise<SnapshotListResponse> {
    return this._client.get('/v2/nfs/snapshots', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete an NFS snapshot, send a DELETE request to
   * `/v2/nfs/snapshots/{nfs_snapshot_id}?region=${region}`.
   *
   * A successful request will return a `204 No Content` status code.
   *
   * @example
   * ```ts
   * await client.nfs.snapshots.delete(
   *   '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d',
   *   { region: 'region' },
   * );
   * ```
   */
  delete(nfsSnapshotID: string, params: SnapshotDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { region } = params;
    return this._client.delete(path`/v2/nfs/snapshots/${nfsSnapshotID}`, {
      query: { region },
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SnapshotRetrieveResponse {
  /**
   * Represents an NFS snapshot.
   */
  snapshot?: SnapshotRetrieveResponse.Snapshot;
}

export namespace SnapshotRetrieveResponse {
  /**
   * Represents an NFS snapshot.
   */
  export interface Snapshot {
    /**
     * The unique identifier of the snapshot.
     */
    id: string;

    /**
     * The timestamp when the snapshot was created.
     */
    created_at: string;

    /**
     * The human-readable name of the snapshot.
     */
    name: string;

    /**
     * The DigitalOcean region slug where the snapshot is located.
     */
    region: string;

    /**
     * The unique identifier of the share from which this snapshot was created.
     */
    share_id: string;

    /**
     * The size of the snapshot in GiB.
     */
    size_gib: number;

    /**
     * The current status of the snapshot.
     */
    status: 'UNKNOWN' | 'CREATING' | 'ACTIVE' | 'FAILED' | 'DELETED';
  }
}

export interface SnapshotListResponse {
  snapshots?: Array<SnapshotListResponse.Snapshot>;
}

export namespace SnapshotListResponse {
  /**
   * Represents an NFS snapshot.
   */
  export interface Snapshot {
    /**
     * The unique identifier of the snapshot.
     */
    id: string;

    /**
     * The timestamp when the snapshot was created.
     */
    created_at: string;

    /**
     * The human-readable name of the snapshot.
     */
    name: string;

    /**
     * The DigitalOcean region slug where the snapshot is located.
     */
    region: string;

    /**
     * The unique identifier of the share from which this snapshot was created.
     */
    share_id: string;

    /**
     * The size of the snapshot in GiB.
     */
    size_gib: number;

    /**
     * The current status of the snapshot.
     */
    status: 'UNKNOWN' | 'CREATING' | 'ACTIVE' | 'FAILED' | 'DELETED';
  }
}

export interface SnapshotRetrieveParams {
  /**
   * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
   */
  region: string;
}

export interface SnapshotListParams {
  /**
   * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
   */
  region: string;

  /**
   * The unique ID of an NFS share. If provided, only snapshots of this specific
   * share will be returned.
   */
  share_id?: string;
}

export interface SnapshotDeleteParams {
  /**
   * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
   */
  region: string;
}

export declare namespace Snapshots {
  export {
    type SnapshotRetrieveResponse as SnapshotRetrieveResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotDeleteParams as SnapshotDeleteParams,
  };
}
