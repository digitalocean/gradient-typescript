// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SnapshotsAPI from './snapshots';
import {
  SnapshotDeleteParams,
  SnapshotListParams,
  SnapshotListResponse,
  SnapshotRetrieveParams,
  SnapshotRetrieveResponse,
  Snapshots,
} from './snapshots';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Nfs extends APIResource {
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);

  /**
   * To create a new NFS share, send a POST request to `/v2/nfs`.
   *
   * @example
   * ```ts
   * const nf = await client.nfs.create({
   *   name: 'sammy-share-drive',
   *   region: 'atl1',
   *   size_gib: 1024,
   *   vpc_ids: ['796c6fe3-2a1d-4da2-9f3e-38239827dc91'],
   *   performance_tier: 'standard',
   * });
   * ```
   */
  create(body: NfCreateParams, options?: RequestOptions): APIPromise<NfCreateResponse> {
    return this._client.post('/v2/nfs', { body, defaultBaseURL: 'https://api.digitalocean.com', ...options });
  }

  /**
   * To get an NFS share, send a GET request to `/v2/nfs/{nfs_id}?region=${region}`.
   *
   * A successful request will return the NFS share.
   *
   * @example
   * ```ts
   * const nf = await client.nfs.retrieve(
   *   '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d',
   * );
   * ```
   */
  retrieve(
    nfsID: string,
    query: NfRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NfRetrieveResponse> {
    return this._client.get(path`/v2/nfs/${nfsID}`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list NFS shares, send a GET request to `/v2/nfs?region=${region}`.
   *
   * A successful request will return all NFS shares belonging to the authenticated
   * user.
   *
   * @example
   * ```ts
   * const nfs = await client.nfs.list();
   * ```
   */
  list(query: NfListParams | null | undefined = {}, options?: RequestOptions): APIPromise<NfListResponse> {
    return this._client.get('/v2/nfs', { query, defaultBaseURL: 'https://api.digitalocean.com', ...options });
  }

  /**
   * To delete an NFS share, send a DELETE request to
   * `/v2/nfs/{nfs_id}?region=${region}`.
   *
   * A successful request will return a `204 No Content` status code.
   *
   * @example
   * ```ts
   * await client.nfs.delete(
   *   '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d',
   * );
   * ```
   */
  delete(
    nfsID: string,
    params: NfDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { region } = params ?? {};
    return this._client.delete(path`/v2/nfs/${nfsID}`, {
      query: { region },
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To execute an action (such as resize) on a specified NFS share, send a POST
   * request to `/v2/nfs/{nfs_id}/actions`. In the JSON body to the request, set the
   * `type` attribute to on of the supported action types:
   *
   * | Action                                 | Details                                                                                                                      |
   * | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
   * | <nobr>`resize`</nobr>                  | Resizes an NFS share. Set the size_gib attribute to a desired value in GiB                                                   |
   * | <nobr>`snapshot`</nobr>                | Takes a snapshot of an NFS share                                                                                             |
   * | <nobr>`attach`</nobr>                  | Attaches an NFS share to a VPC. Set the vpc_id attribute to the desired VPC ID                                               |
   * | <nobr>`detach`</nobr>                  | Detaches an NFS share from a VPC. Set the vpc_id attribute to the desired VPC ID                                             |
   * | <nobr>`switch_performance_tier`</nobr> | Switches the performance tier of an NFS share. Set the performance_tier attribute to the desired tier (e.g., standard, high) |
   *
   * @example
   * ```ts
   * const response = await client.nfs.initiateAction(
   *   '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d',
   *   { type: 'resize' },
   * );
   * ```
   */
  initiateAction(
    nfsID: string,
    body: NfInitiateActionParams,
    options?: RequestOptions,
  ): APIPromise<NfInitiateActionResponse> {
    return this._client.post(path`/v2/nfs/${nfsID}/actions`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface NfCreateResponse {
  share?: NfCreateResponse.Share;
}

export namespace NfCreateResponse {
  export interface Share {
    /**
     * The unique identifier of the NFS share.
     */
    id: string;

    /**
     * Timestamp for when the NFS share was created.
     */
    created_at: string;

    /**
     * The human-readable name of the share.
     */
    name: string;

    /**
     * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
     */
    region: string;

    /**
     * The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50.
     */
    size_gib: number;

    /**
     * The current status of the share.
     */
    status: 'CREATING' | 'ACTIVE' | 'FAILED' | 'DELETED';

    /**
     * The host IP of the NFS server that will be accessible from the associated VPC
     */
    host?: string;

    /**
     * Path at which the share will be available, to be mounted at a target of the
     * user's choice within the client
     */
    mount_path?: string;

    /**
     * List of VPC IDs that should be able to access the share.
     */
    vpc_ids?: Array<string>;
  }
}

export interface NfRetrieveResponse {
  share?: NfRetrieveResponse.Share;
}

export namespace NfRetrieveResponse {
  export interface Share {
    /**
     * The unique identifier of the NFS share.
     */
    id: string;

    /**
     * Timestamp for when the NFS share was created.
     */
    created_at: string;

    /**
     * The human-readable name of the share.
     */
    name: string;

    /**
     * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
     */
    region: string;

    /**
     * The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50.
     */
    size_gib: number;

    /**
     * The current status of the share.
     */
    status: 'CREATING' | 'ACTIVE' | 'FAILED' | 'DELETED';

    /**
     * The host IP of the NFS server that will be accessible from the associated VPC
     */
    host?: string;

    /**
     * Path at which the share will be available, to be mounted at a target of the
     * user's choice within the client
     */
    mount_path?: string;

    /**
     * List of VPC IDs that should be able to access the share.
     */
    vpc_ids?: Array<string>;
  }
}

export interface NfListResponse {
  shares?: Array<NfListResponse.Share>;
}

export namespace NfListResponse {
  export interface Share {
    /**
     * The unique identifier of the NFS share.
     */
    id: string;

    /**
     * Timestamp for when the NFS share was created.
     */
    created_at: string;

    /**
     * The human-readable name of the share.
     */
    name: string;

    /**
     * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
     */
    region: string;

    /**
     * The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50.
     */
    size_gib: number;

    /**
     * The current status of the share.
     */
    status: 'CREATING' | 'ACTIVE' | 'FAILED' | 'DELETED';

    /**
     * The host IP of the NFS server that will be accessible from the associated VPC
     */
    host?: string;

    /**
     * Path at which the share will be available, to be mounted at a target of the
     * user's choice within the client
     */
    mount_path?: string;

    /**
     * List of VPC IDs that should be able to access the share.
     */
    vpc_ids?: Array<string>;
  }
}

/**
 * Action response of an NFS share.
 */
export interface NfInitiateActionResponse {
  /**
   * The action that was submitted.
   */
  action: NfInitiateActionResponse.Action;
}

export namespace NfInitiateActionResponse {
  /**
   * The action that was submitted.
   */
  export interface Action {
    /**
     * The DigitalOcean region slug where the resource is located.
     */
    region_slug: string;

    /**
     * The unique identifier of the resource on which the action is being performed.
     */
    resource_id: string;

    /**
     * The type of resource on which the action is being performed.
     */
    resource_type: 'network_file_share' | 'network_file_share_snapshot';

    /**
     * The timestamp when the action was started.
     */
    started_at: string;

    /**
     * The current status of the action.
     */
    status: 'in-progress' | 'completed' | 'errored';

    /**
     * The type of action being performed.
     */
    type: string;
  }
}

export interface NfCreateParams {
  /**
   * The human-readable name of the share.
   */
  name: string;

  /**
   * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
   */
  region: string;

  /**
   * The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50.
   */
  size_gib: number;

  /**
   * List of VPC IDs that should be able to access the share.
   */
  vpc_ids: Array<string>;

  /**
   * The performance tier of the share.
   */
  performance_tier?: string;
}

export interface NfRetrieveParams {
  /**
   * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
   */
  region?: string;
}

export interface NfListParams {
  /**
   * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
   */
  region?: string;
}

export interface NfDeleteParams {
  /**
   * The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
   */
  region?: string;
}

export type NfInitiateActionParams =
  | NfInitiateActionParams.NfsActionResize
  | NfInitiateActionParams.NfsActionSnapshot
  | NfInitiateActionParams.NfsActionAttach
  | NfInitiateActionParams.NfsActionDetach
  | NfInitiateActionParams.NfsActionSwitchPerformanceTier;

export declare namespace NfInitiateActionParams {
  export interface NfsActionResize {
    /**
     * The type of action to initiate for the NFS share (such as resize or snapshot).
     */
    type: 'resize' | 'snapshot';

    params?: NfsActionResize.Params;

    /**
     * The DigitalOcean region slug (e.g. atl1, nyc2) where the NFS snapshot resides.
     */
    region?: string;
  }

  export namespace NfsActionResize {
    export interface Params {
      /**
       * The new size for the NFS share.
       */
      size_gib: number;
    }
  }

  export interface NfsActionSnapshot {
    /**
     * The type of action to initiate for the NFS share (such as resize or snapshot).
     */
    type: 'resize' | 'snapshot';

    params?: NfsActionSnapshot.Params;

    /**
     * The DigitalOcean region slug (e.g. atl1, nyc2) where the NFS snapshot resides.
     */
    region?: string;
  }

  export namespace NfsActionSnapshot {
    export interface Params {
      /**
       * Snapshot name of the NFS share
       */
      name: string;
    }
  }

  export interface NfsActionAttach {
    /**
     * The type of action to initiate for the NFS share (such as resize or snapshot).
     */
    type: 'resize' | 'snapshot';

    params?: NfsActionAttach.Params;

    /**
     * The DigitalOcean region slug (e.g. atl1, nyc2) where the NFS snapshot resides.
     */
    region?: string;
  }

  export namespace NfsActionAttach {
    export interface Params {
      /**
       * The ID of the VPC to which the NFS share will be attached
       */
      vpc_id: string;
    }
  }

  export interface NfsActionDetach {
    /**
     * The type of action to initiate for the NFS share (such as resize or snapshot).
     */
    type: 'resize' | 'snapshot';

    params?: NfsActionDetach.Params;

    /**
     * The DigitalOcean region slug (e.g. atl1, nyc2) where the NFS snapshot resides.
     */
    region?: string;
  }

  export namespace NfsActionDetach {
    export interface Params {
      /**
       * The ID of the VPC from which the NFS share will be detached
       */
      vpc_id: string;
    }
  }

  export interface NfsActionSwitchPerformanceTier {
    /**
     * The type of action to initiate for the NFS share (such as resize or snapshot).
     */
    type: 'resize' | 'snapshot';

    params?: NfsActionSwitchPerformanceTier.Params;

    /**
     * The DigitalOcean region slug (e.g. atl1, nyc2) where the NFS snapshot resides.
     */
    region?: string;
  }

  export namespace NfsActionSwitchPerformanceTier {
    export interface Params {
      /**
       * The performance tier to which the NFS share will be switched (e.g., standard,
       * high).
       */
      performance_tier: string;
    }
  }
}

Nfs.Snapshots = Snapshots;

export declare namespace Nfs {
  export {
    type NfCreateResponse as NfCreateResponse,
    type NfRetrieveResponse as NfRetrieveResponse,
    type NfListResponse as NfListResponse,
    type NfInitiateActionResponse as NfInitiateActionResponse,
    type NfCreateParams as NfCreateParams,
    type NfRetrieveParams as NfRetrieveParams,
    type NfListParams as NfListParams,
    type NfDeleteParams as NfDeleteParams,
    type NfInitiateActionParams as NfInitiateActionParams,
  };

  export {
    Snapshots as Snapshots,
    type SnapshotRetrieveResponse as SnapshotRetrieveResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotDeleteParams as SnapshotDeleteParams,
  };
}
