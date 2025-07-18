// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ActionsAPI from './actions';
import {
  ActionInitiateByIDParams,
  ActionInitiateByIDResponse,
  ActionInitiateByNameParams,
  ActionInitiateByNameResponse,
  ActionListParams,
  ActionListResponse,
  ActionRetrieveParams,
  ActionRetrieveResponse,
  Actions,
  VolumeAction,
} from './actions';
import * as SnapshotsAPI from './snapshots';
import {
  SnapshotCreateParams,
  SnapshotCreateResponse,
  SnapshotListParams,
  SnapshotListResponse,
  SnapshotRetrieveResponse,
  Snapshots,
} from './snapshots';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Volumes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);

  /**
   * To create a new volume, send a POST request to `/v2/volumes`. Optionally, a
   * `filesystem_type` attribute may be provided in order to automatically format the
   * volume's filesystem. Pre-formatted volumes are automatically mounted when
   * attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created
   * on or after April 26, 2018. Attaching pre-formatted volumes to Droplets without
   * support for auto-mounting is not recommended.
   *
   * @example
   * ```ts
   * const volume = await client.gpuDroplets.volumes.create({
   *   name: 'ext4-example',
   *   region: 'nyc1',
   *   size_gigabytes: 10,
   *   description: 'Block store for examples',
   *   filesystem_label: 'ext4_volume_01',
   *   filesystem_type: 'ext4',
   * });
   * ```
   */
  create(body: VolumeCreateParams, options?: RequestOptions): APIPromise<VolumeCreateResponse> {
    return this._client.post('/v2/volumes', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To show information about a block storage volume, send a GET request to
   * `/v2/volumes/$VOLUME_ID`.
   *
   * @example
   * ```ts
   * const volume = await client.gpuDroplets.volumes.retrieve(
   *   '7724db7c-e098-11e5-b522-000f53304e51',
   * );
   * ```
   */
  retrieve(volumeID: string, options?: RequestOptions): APIPromise<VolumeRetrieveResponse> {
    return this._client.get(path`/v2/volumes/${volumeID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all of the block storage volumes available on your account, send a GET
   * request to `/v2/volumes`.
   *
   * ## Filtering Results
   *
   * ### By Region
   *
   * The `region` may be provided as query parameter in order to restrict results to
   * volumes available in a specific region. For example: `/v2/volumes?region=nyc1`
   *
   * ### By Name
   *
   * It is also possible to list volumes on your account that match a specified name.
   * To do so, send a GET request with the volume's name as a query parameter to
   * `/v2/volumes?name=$VOLUME_NAME`. **Note:** You can only create one volume per
   * region with the same name.
   *
   * ### By Name and Region
   *
   * It is also possible to retrieve information about a block storage volume by
   * name. To do so, send a GET request with the volume's name and the region slug
   * for the region it is located in as query parameters to
   * `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
   *
   * @example
   * ```ts
   * const volumes = await client.gpuDroplets.volumes.list();
   * ```
   */
  list(
    query: VolumeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VolumeListResponse> {
    return this._client.get('/v2/volumes', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a block storage volume, destroying all data and removing it from your
   * account, send a DELETE request to `/v2/volumes/$VOLUME_ID`. No response body
   * will be sent back, but the response code will indicate success. Specifically,
   * the response code will be a 204, which means that the action was successful with
   * no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.volumes.delete(
   *   '7724db7c-e098-11e5-b522-000f53304e51',
   * );
   * ```
   */
  delete(volumeID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/volumes/${volumeID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Block storage volumes may also be deleted by name by sending a DELETE request
   * with the volume's **name** and the **region slug** for the region it is located
   * in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`. No
   * response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.volumes.deleteByName();
   * ```
   */
  deleteByName(
    params: VolumeDeleteByNameParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { name, region } = params ?? {};
    return this._client.delete('/v2/volumes', {
      query: { name, region },
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VolumeCreateResponse {
  volume?: VolumeCreateResponse.Volume;
}

export namespace VolumeCreateResponse {
  export interface Volume {
    /**
     * The unique identifier for the block storage volume.
     */
    id?: string;

    /**
     * A time value given in ISO8601 combined date and time format that represents when
     * the block storage volume was created.
     */
    created_at?: string;

    /**
     * An optional free-form text field to describe a block storage volume.
     */
    description?: string;

    /**
     * An array containing the IDs of the Droplets the volume is attached to. Note that
     * at this time, a volume can only be attached to a single Droplet.
     */
    droplet_ids?: Array<number> | null;

    /**
     * The label currently applied to the filesystem.
     */
    filesystem_label?: string;

    /**
     * The type of filesystem currently in-use on the volume.
     */
    filesystem_type?: string;

    /**
     * A human-readable name for the block storage volume. Must be lowercase and be
     * composed only of numbers, letters and "-", up to a limit of 64 characters. The
     * name must begin with a letter.
     */
    name?: string;

    /**
     * The region that the block storage volume is located in. When setting a region,
     * the value should be the slug identifier for the region. When you query a block
     * storage volume, the entire region object will be returned.
     */
    region?: Shared.Region;

    /**
     * The size of the block storage volume in GiB (1024^3). This field does not apply
     * when creating a volume from a snapshot.
     */
    size_gigabytes?: number;

    /**
     * A flat array of tag names as strings applied to the resource.
     *
     * Requires `tag:read` scope.
     */
    tags?: Array<string> | null;
  }
}

export interface VolumeRetrieveResponse {
  volume?: VolumeRetrieveResponse.Volume;
}

export namespace VolumeRetrieveResponse {
  export interface Volume {
    /**
     * The unique identifier for the block storage volume.
     */
    id?: string;

    /**
     * A time value given in ISO8601 combined date and time format that represents when
     * the block storage volume was created.
     */
    created_at?: string;

    /**
     * An optional free-form text field to describe a block storage volume.
     */
    description?: string;

    /**
     * An array containing the IDs of the Droplets the volume is attached to. Note that
     * at this time, a volume can only be attached to a single Droplet.
     */
    droplet_ids?: Array<number> | null;

    /**
     * The label currently applied to the filesystem.
     */
    filesystem_label?: string;

    /**
     * The type of filesystem currently in-use on the volume.
     */
    filesystem_type?: string;

    /**
     * A human-readable name for the block storage volume. Must be lowercase and be
     * composed only of numbers, letters and "-", up to a limit of 64 characters. The
     * name must begin with a letter.
     */
    name?: string;

    /**
     * The region that the block storage volume is located in. When setting a region,
     * the value should be the slug identifier for the region. When you query a block
     * storage volume, the entire region object will be returned.
     */
    region?: Shared.Region;

    /**
     * The size of the block storage volume in GiB (1024^3). This field does not apply
     * when creating a volume from a snapshot.
     */
    size_gigabytes?: number;

    /**
     * A flat array of tag names as strings applied to the resource.
     *
     * Requires `tag:read` scope.
     */
    tags?: Array<string> | null;
  }
}

export interface VolumeListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  /**
   * Array of volumes.
   */
  volumes: Array<VolumeListResponse.Volume>;

  links?: Shared.PageLinks;
}

export namespace VolumeListResponse {
  export interface Volume {
    /**
     * The unique identifier for the block storage volume.
     */
    id?: string;

    /**
     * A time value given in ISO8601 combined date and time format that represents when
     * the block storage volume was created.
     */
    created_at?: string;

    /**
     * An optional free-form text field to describe a block storage volume.
     */
    description?: string;

    /**
     * An array containing the IDs of the Droplets the volume is attached to. Note that
     * at this time, a volume can only be attached to a single Droplet.
     */
    droplet_ids?: Array<number> | null;

    /**
     * The label currently applied to the filesystem.
     */
    filesystem_label?: string;

    /**
     * The type of filesystem currently in-use on the volume.
     */
    filesystem_type?: string;

    /**
     * A human-readable name for the block storage volume. Must be lowercase and be
     * composed only of numbers, letters and "-", up to a limit of 64 characters. The
     * name must begin with a letter.
     */
    name?: string;

    /**
     * The region that the block storage volume is located in. When setting a region,
     * the value should be the slug identifier for the region. When you query a block
     * storage volume, the entire region object will be returned.
     */
    region?: Shared.Region;

    /**
     * The size of the block storage volume in GiB (1024^3). This field does not apply
     * when creating a volume from a snapshot.
     */
    size_gigabytes?: number;

    /**
     * A flat array of tag names as strings applied to the resource.
     *
     * Requires `tag:read` scope.
     */
    tags?: Array<string> | null;
  }
}

export type VolumeCreateParams = VolumeCreateParams.VolumesExt4 | VolumeCreateParams.VolumesXfs;

export declare namespace VolumeCreateParams {
  export interface VolumesExt4 {
    /**
     * A human-readable name for the block storage volume. Must be lowercase and be
     * composed only of numbers, letters and "-", up to a limit of 64 characters. The
     * name must begin with a letter.
     */
    name: string;

    /**
     * The slug identifier for the region where the resource will initially be
     * available.
     */
    region:
      | 'ams1'
      | 'ams2'
      | 'ams3'
      | 'blr1'
      | 'fra1'
      | 'lon1'
      | 'nyc1'
      | 'nyc2'
      | 'nyc3'
      | 'sfo1'
      | 'sfo2'
      | 'sfo3'
      | 'sgp1'
      | 'tor1'
      | 'syd1';

    /**
     * The size of the block storage volume in GiB (1024^3). This field does not apply
     * when creating a volume from a snapshot.
     */
    size_gigabytes: number;

    /**
     * An optional free-form text field to describe a block storage volume.
     */
    description?: string;

    /**
     * The label applied to the filesystem. Labels for ext4 type filesystems may
     * contain 16 characters while labels for xfs type filesystems are limited to 12
     * characters. May only be used in conjunction with filesystem_type.
     */
    filesystem_label?: string;

    /**
     * The name of the filesystem type to be used on the volume. When provided, the
     * volume will automatically be formatted to the specified filesystem type.
     * Currently, the available options are `ext4` and `xfs`. Pre-formatted volumes are
     * automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic,
     * and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted
     * volumes to other Droplets is not recommended.
     */
    filesystem_type?: string;

    /**
     * The unique identifier for the volume snapshot from which to create the volume.
     */
    snapshot_id?: string;

    /**
     * A flat array of tag names as strings to be applied to the resource. Tag names
     * may be for either existing or new tags.
     *
     * Requires `tag:create` scope.
     */
    tags?: Array<string> | null;
  }

  export interface VolumesXfs {
    /**
     * A human-readable name for the block storage volume. Must be lowercase and be
     * composed only of numbers, letters and "-", up to a limit of 64 characters. The
     * name must begin with a letter.
     */
    name: string;

    /**
     * The slug identifier for the region where the resource will initially be
     * available.
     */
    region:
      | 'ams1'
      | 'ams2'
      | 'ams3'
      | 'blr1'
      | 'fra1'
      | 'lon1'
      | 'nyc1'
      | 'nyc2'
      | 'nyc3'
      | 'sfo1'
      | 'sfo2'
      | 'sfo3'
      | 'sgp1'
      | 'tor1'
      | 'syd1';

    /**
     * The size of the block storage volume in GiB (1024^3). This field does not apply
     * when creating a volume from a snapshot.
     */
    size_gigabytes: number;

    /**
     * An optional free-form text field to describe a block storage volume.
     */
    description?: string;

    /**
     * The label applied to the filesystem. Labels for ext4 type filesystems may
     * contain 16 characters while labels for xfs type filesystems are limited to 12
     * characters. May only be used in conjunction with filesystem_type.
     */
    filesystem_label?: string;

    /**
     * The name of the filesystem type to be used on the volume. When provided, the
     * volume will automatically be formatted to the specified filesystem type.
     * Currently, the available options are `ext4` and `xfs`. Pre-formatted volumes are
     * automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic,
     * and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted
     * volumes to other Droplets is not recommended.
     */
    filesystem_type?: string;

    /**
     * The unique identifier for the volume snapshot from which to create the volume.
     */
    snapshot_id?: string;

    /**
     * A flat array of tag names as strings to be applied to the resource. Tag names
     * may be for either existing or new tags.
     *
     * Requires `tag:create` scope.
     */
    tags?: Array<string> | null;
  }
}

export interface VolumeListParams {
  /**
   * The block storage volume's name.
   */
  name?: string;

  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;

  /**
   * The slug identifier for the region where the resource is available.
   */
  region?:
    | 'ams1'
    | 'ams2'
    | 'ams3'
    | 'blr1'
    | 'fra1'
    | 'lon1'
    | 'nyc1'
    | 'nyc2'
    | 'nyc3'
    | 'sfo1'
    | 'sfo2'
    | 'sfo3'
    | 'sgp1'
    | 'tor1'
    | 'syd1';
}

export interface VolumeDeleteByNameParams {
  /**
   * The block storage volume's name.
   */
  name?: string;

  /**
   * The slug identifier for the region where the resource is available.
   */
  region?:
    | 'ams1'
    | 'ams2'
    | 'ams3'
    | 'blr1'
    | 'fra1'
    | 'lon1'
    | 'nyc1'
    | 'nyc2'
    | 'nyc3'
    | 'sfo1'
    | 'sfo2'
    | 'sfo3'
    | 'sgp1'
    | 'tor1'
    | 'syd1';
}

Volumes.Actions = Actions;
Volumes.Snapshots = Snapshots;

export declare namespace Volumes {
  export {
    type VolumeCreateResponse as VolumeCreateResponse,
    type VolumeRetrieveResponse as VolumeRetrieveResponse,
    type VolumeListResponse as VolumeListResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeListParams as VolumeListParams,
    type VolumeDeleteByNameParams as VolumeDeleteByNameParams,
  };

  export {
    Actions as Actions,
    type VolumeAction as VolumeAction,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionListResponse as ActionListResponse,
    type ActionInitiateByIDResponse as ActionInitiateByIDResponse,
    type ActionInitiateByNameResponse as ActionInitiateByNameResponse,
    type ActionRetrieveParams as ActionRetrieveParams,
    type ActionListParams as ActionListParams,
    type ActionInitiateByIDParams as ActionInitiateByIDParams,
    type ActionInitiateByNameParams as ActionInitiateByNameParams,
  };

  export {
    Snapshots as Snapshots,
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotRetrieveResponse as SnapshotRetrieveResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
    type SnapshotListParams as SnapshotListParams,
  };
}
