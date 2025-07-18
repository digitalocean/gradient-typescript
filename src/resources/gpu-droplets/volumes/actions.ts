// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * To retrieve the status of a volume action, send a GET request to
   * `/v2/volumes/$VOLUME_ID/actions/$ACTION_ID`.
   *
   * @example
   * ```ts
   * const action =
   *   await client.gpuDroplets.volumes.actions.retrieve(
   *     36804636,
   *     { volume_id: '7724db7c-e098-11e5-b522-000f53304e51' },
   *   );
   * ```
   */
  retrieve(
    actionID: number,
    params: ActionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ActionRetrieveResponse> {
    const { volume_id, ...query } = params;
    return this._client.get(path`/v2/volumes/${volume_id}/actions/${actionID}`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve all actions that have been executed on a volume, send a GET request
   * to `/v2/volumes/$VOLUME_ID/actions`.
   *
   * @example
   * ```ts
   * const actions =
   *   await client.gpuDroplets.volumes.actions.list(
   *     '7724db7c-e098-11e5-b522-000f53304e51',
   *   );
   * ```
   */
  list(
    volumeID: string,
    query: ActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionListResponse> {
    return this._client.get(path`/v2/volumes/${volumeID}/actions`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To initiate an action on a block storage volume by Id, send a POST request to
   * `~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate
   * attributes for the respective action.
   *
   * ## Attach a Block Storage Volume to a Droplet
   *
   * | Attribute  | Details                                                             |
   * | ---------- | ------------------------------------------------------------------- |
   * | type       | This must be `attach`                                               |
   * | droplet_id | Set to the Droplet's ID                                             |
   * | region     | Set to the slug representing the region where the volume is located |
   *
   * Each volume may only be attached to a single Droplet. However, up to fifteen
   * volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
   * automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
   * Droplets created on or after April 26, 2018 when attached. On older Droplets,
   * [additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)
   * is required.
   *
   * ## Remove a Block Storage Volume from a Droplet
   *
   * | Attribute  | Details                                                             |
   * | ---------- | ------------------------------------------------------------------- |
   * | type       | This must be `detach`                                               |
   * | droplet_id | Set to the Droplet's ID                                             |
   * | region     | Set to the slug representing the region where the volume is located |
   *
   * ## Resize a Volume
   *
   * | Attribute      | Details                                                             |
   * | -------------- | ------------------------------------------------------------------- |
   * | type           | This must be `resize`                                               |
   * | size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |
   * | region         | Set to the slug representing the region where the volume is located |
   *
   * Volumes may only be resized upwards. The maximum size for a volume is 16TiB.
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.volumes.actions.initiateByID(
   *     '7724db7c-e098-11e5-b522-000f53304e51',
   *     {
   *       droplet_id: 11612190,
   *       type: 'attach',
   *       region: 'nyc1',
   *       tags: ['aninterestingtag'],
   *     },
   *   );
   * ```
   */
  initiateByID(
    volumeID: string,
    params: ActionInitiateByIDParams,
    options?: RequestOptions,
  ): APIPromise<ActionInitiateByIDResponse> {
    const { page, per_page, ...body } = params;
    return this._client.post(path`/v2/volumes/${volumeID}/actions`, {
      query: { page, per_page },
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To initiate an action on a block storage volume by Name, send a POST request to
   * `~/v2/volumes/actions`. The body should contain the appropriate attributes for
   * the respective action.
   *
   * ## Attach a Block Storage Volume to a Droplet
   *
   * | Attribute   | Details                                                             |
   * | ----------- | ------------------------------------------------------------------- |
   * | type        | This must be `attach`                                               |
   * | volume_name | The name of the block storage volume                                |
   * | droplet_id  | Set to the Droplet's ID                                             |
   * | region      | Set to the slug representing the region where the volume is located |
   *
   * Each volume may only be attached to a single Droplet. However, up to fifteen
   * volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
   * automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
   * Droplets created on or after April 26, 2018 when attached. On older Droplets,
   * [additional configuration](https://docs.digitalocean.com/products/volumes/how-to/mount/)
   * is required.
   *
   * ## Remove a Block Storage Volume from a Droplet
   *
   * | Attribute   | Details                                                             |
   * | ----------- | ------------------------------------------------------------------- |
   * | type        | This must be `detach`                                               |
   * | volume_name | The name of the block storage volume                                |
   * | droplet_id  | Set to the Droplet's ID                                             |
   * | region      | Set to the slug representing the region where the volume is located |
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.volumes.actions.initiateByName({
   *     droplet_id: 11612190,
   *     type: 'attach',
   *     region: 'nyc1',
   *     tags: ['aninterestingtag'],
   *   });
   * ```
   */
  initiateByName(
    params: ActionInitiateByNameParams,
    options?: RequestOptions,
  ): APIPromise<ActionInitiateByNameResponse> {
    const { page, per_page, ...body } = params;
    return this._client.post('/v2/volumes/actions', {
      query: { page, per_page },
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface VolumeAction extends Shared.Action {
  resource_id?: number | null;

  /**
   * This is the type of action that the object represents. For example, this could
   * be "attach_volume" to represent the state of a volume attach action.
   */
  type?: string;
}

export interface ActionRetrieveResponse {
  action?: VolumeAction;
}

export interface ActionListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  actions?: Array<VolumeAction>;

  links?: Shared.PageLinks;
}

export interface ActionInitiateByIDResponse {
  action?: VolumeAction;
}

export interface ActionInitiateByNameResponse {
  action?: VolumeAction;
}

export interface ActionRetrieveParams {
  /**
   * Path param: The ID of the block storage volume.
   */
  volume_id: string;

  /**
   * Query param: Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Query param: Number of items returned per page
   */
  per_page?: number;
}

export interface ActionListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export type ActionInitiateByIDParams =
  | ActionInitiateByIDParams.VolumeActionPostAttach
  | ActionInitiateByIDParams.VolumeActionPostDetach
  | ActionInitiateByIDParams.VolumeActionPostResize;

export declare namespace ActionInitiateByIDParams {
  export interface VolumeActionPostAttach {
    /**
     * Body param: The unique identifier for the Droplet the volume will be attached or
     * detached from.
     */
    droplet_id: number;

    /**
     * Body param: The volume action to initiate.
     */
    type: 'attach' | 'detach' | 'resize';

    /**
     * Query param: Which 'page' of paginated results to return.
     */
    page?: number;

    /**
     * Query param: Number of items returned per page
     */
    per_page?: number;

    /**
     * Body param: The slug identifier for the region where the resource will initially
     * be available.
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

    /**
     * Body param: A flat array of tag names as strings to be applied to the resource.
     * Tag names may be for either existing or new tags.
     *
     * Requires `tag:create` scope.
     */
    tags?: Array<string> | null;
  }

  export interface VolumeActionPostDetach {
    /**
     * Body param: The unique identifier for the Droplet the volume will be attached or
     * detached from.
     */
    droplet_id: number;

    /**
     * Body param: The volume action to initiate.
     */
    type: 'attach' | 'detach' | 'resize';

    /**
     * Query param: Which 'page' of paginated results to return.
     */
    page?: number;

    /**
     * Query param: Number of items returned per page
     */
    per_page?: number;

    /**
     * Body param: The slug identifier for the region where the resource will initially
     * be available.
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

  export interface VolumeActionPostResize {
    /**
     * Body param: The new size of the block storage volume in GiB (1024^3).
     */
    size_gigabytes: number;

    /**
     * Body param: The volume action to initiate.
     */
    type: 'attach' | 'detach' | 'resize';

    /**
     * Query param: Which 'page' of paginated results to return.
     */
    page?: number;

    /**
     * Query param: Number of items returned per page
     */
    per_page?: number;

    /**
     * Body param: The slug identifier for the region where the resource will initially
     * be available.
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
}

export type ActionInitiateByNameParams =
  | ActionInitiateByNameParams.VolumeActionPostAttach
  | ActionInitiateByNameParams.VolumeActionPostDetach;

export declare namespace ActionInitiateByNameParams {
  export interface VolumeActionPostAttach {
    /**
     * Body param: The unique identifier for the Droplet the volume will be attached or
     * detached from.
     */
    droplet_id: number;

    /**
     * Body param: The volume action to initiate.
     */
    type: 'attach' | 'detach' | 'resize';

    /**
     * Query param: Which 'page' of paginated results to return.
     */
    page?: number;

    /**
     * Query param: Number of items returned per page
     */
    per_page?: number;

    /**
     * Body param: The slug identifier for the region where the resource will initially
     * be available.
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

    /**
     * Body param: A flat array of tag names as strings to be applied to the resource.
     * Tag names may be for either existing or new tags.
     *
     * Requires `tag:create` scope.
     */
    tags?: Array<string> | null;
  }

  export interface VolumeActionPostDetach {
    /**
     * Body param: The unique identifier for the Droplet the volume will be attached or
     * detached from.
     */
    droplet_id: number;

    /**
     * Body param: The volume action to initiate.
     */
    type: 'attach' | 'detach' | 'resize';

    /**
     * Query param: Which 'page' of paginated results to return.
     */
    page?: number;

    /**
     * Query param: Number of items returned per page
     */
    per_page?: number;

    /**
     * Body param: The slug identifier for the region where the resource will initially
     * be available.
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
}

export declare namespace Actions {
  export {
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
}
