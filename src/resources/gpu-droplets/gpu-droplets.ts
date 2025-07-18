// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActionsAPI from './actions';
import {
  ActionBulkInitiateParams,
  ActionBulkInitiateResponse,
  ActionInitiateParams,
  ActionInitiateResponse,
  ActionListParams,
  ActionListResponse,
  ActionRetrieveParams,
  ActionRetrieveResponse,
  Actions,
} from './actions';
import * as AutoscaleAPI from './autoscale';
import {
  Autoscale,
  AutoscaleCreateParams,
  AutoscaleCreateResponse,
  AutoscaleDeleteDangerousParams,
  AutoscaleListHistoryParams,
  AutoscaleListHistoryResponse,
  AutoscaleListMembersParams,
  AutoscaleListMembersResponse,
  AutoscaleListParams,
  AutoscaleListResponse,
  AutoscalePool,
  AutoscalePoolDropletTemplate,
  AutoscalePoolDynamicConfig,
  AutoscalePoolStaticConfig,
  AutoscaleRetrieveResponse,
  AutoscaleUpdateParams,
  AutoscaleUpdateResponse,
  CurrentUtilization,
} from './autoscale';
import * as BackupsAPI from './backups';
import {
  BackupListParams,
  BackupListPoliciesParams,
  BackupListPoliciesResponse,
  BackupListResponse,
  BackupListSupportedPoliciesResponse,
  BackupRetrievePolicyResponse,
  Backups,
} from './backups';
import * as DestroyWithAssociatedResourcesAPI from './destroy-with-associated-resources';
import {
  AssociatedResource,
  DestroyWithAssociatedResourceCheckStatusResponse,
  DestroyWithAssociatedResourceDeleteDangerousParams,
  DestroyWithAssociatedResourceDeleteSelectiveParams,
  DestroyWithAssociatedResourceListResponse,
  DestroyWithAssociatedResources,
  DestroyedAssociatedResource,
} from './destroy-with-associated-resources';
import * as SizesAPI from './sizes';
import { SizeListParams, SizeListResponse, Sizes } from './sizes';
import * as SnapshotsAPI from './snapshots';
import { SnapshotListParams, SnapshotListResponse, SnapshotRetrieveResponse, Snapshots } from './snapshots';
import * as AccountAPI from './account/account';
import { Account } from './account/account';
import * as FirewallsAPI from './firewalls/firewalls';
import {
  Firewall,
  FirewallCreateParams,
  FirewallCreateResponse,
  FirewallListParams,
  FirewallListResponse,
  FirewallRetrieveResponse,
  FirewallUpdateParams,
  FirewallUpdateResponse,
  Firewalls,
} from './firewalls/firewalls';
import * as FloatingIPsAPI from './floating-ips/floating-ips';
import {
  FloatingIP,
  FloatingIPCreateParams,
  FloatingIPCreateResponse,
  FloatingIPListParams,
  FloatingIPListResponse,
  FloatingIPRetrieveResponse,
  FloatingIPs,
} from './floating-ips/floating-ips';
import * as ImagesAPI from './images/images';
import {
  ImageCreateParams,
  ImageCreateResponse,
  ImageListParams,
  ImageListResponse,
  ImageRetrieveResponse,
  ImageUpdateParams,
  ImageUpdateResponse,
  Images,
} from './images/images';
import * as LoadBalancersAPI from './load-balancers/load-balancers';
import {
  Domains,
  ForwardingRule,
  GlbSettings,
  HealthCheck,
  LbFirewall,
  LoadBalancer,
  LoadBalancerCreateParams,
  LoadBalancerCreateResponse,
  LoadBalancerListParams,
  LoadBalancerListResponse,
  LoadBalancerRetrieveResponse,
  LoadBalancerUpdateParams,
  LoadBalancerUpdateResponse,
  LoadBalancers,
  StickySessions,
} from './load-balancers/load-balancers';
import * as VolumesAPI from './volumes/volumes';
import {
  VolumeCreateParams,
  VolumeCreateResponse,
  VolumeDeleteByNameParams,
  VolumeListParams,
  VolumeListResponse,
  VolumeRetrieveResponse,
  Volumes,
} from './volumes/volumes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GPUDroplets extends APIResource {
  backups: BackupsAPI.Backups = new BackupsAPI.Backups(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  destroyWithAssociatedResources: DestroyWithAssociatedResourcesAPI.DestroyWithAssociatedResources =
    new DestroyWithAssociatedResourcesAPI.DestroyWithAssociatedResources(this._client);
  autoscale: AutoscaleAPI.Autoscale = new AutoscaleAPI.Autoscale(this._client);
  firewalls: FirewallsAPI.Firewalls = new FirewallsAPI.Firewalls(this._client);
  floatingIPs: FloatingIPsAPI.FloatingIPs = new FloatingIPsAPI.FloatingIPs(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  sizes: SizesAPI.Sizes = new SizesAPI.Sizes(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);

  /**
   * To create a new Droplet, send a POST request to `/v2/droplets` setting the
   * required attributes.
   *
   * A Droplet will be created using the provided information. The response body will
   * contain a JSON object with a key called `droplet`. The value will be an object
   * containing the standard attributes for your new Droplet. The response code, 202
   * Accepted, does not indicate the success or failure of the operation, just that
   * the request has been accepted for processing. The `actions` returned as part of
   * the response's `links` object can be used to check the status of the Droplet
   * create event.
   *
   * ### Create Multiple Droplets
   *
   * Creating multiple Droplets is very similar to creating a single Droplet. Instead
   * of sending `name` as a string, send `names` as an array of strings. A Droplet
   * will be created for each name you send using the associated information. Up to
   * ten Droplets may be created this way at a time.
   *
   * Rather than returning a single Droplet, the response body will contain a JSON
   * array with a key called `droplets`. This will be set to an array of JSON
   * objects, each of which will contain the standard Droplet attributes. The
   * response code, 202 Accepted, does not indicate the success or failure of any
   * operation, just that the request has been accepted for processing. The array of
   * `actions` returned as part of the response's `links` object can be used to check
   * the status of each individual Droplet create event.
   *
   * @example
   * ```ts
   * const gpuDroplet = await client.gpuDroplets.create({
   *   image: 'ubuntu-20-04-x64',
   *   name: 'example.com',
   *   size: 's-1vcpu-1gb',
   *   backups: true,
   *   ipv6: true,
   *   monitoring: true,
   *   region: 'nyc3',
   *   ssh_keys: [
   *     289794,
   *     '3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45',
   *   ],
   *   tags: ['env:prod', 'web'],
   *   user_data:
   *     '#cloud-config\nruncmd:\n  - touch /test.txt\n',
   *   vpc_uuid: '760e09ef-dc84-11e8-981e-3cfdfeaae000',
   * });
   * ```
   */
  create(body: GPUDropletCreateParams, options?: RequestOptions): APIPromise<GPUDropletCreateResponse> {
    return this._client.post('/v2/droplets', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To show information about an individual Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID`.
   *
   * @example
   * ```ts
   * const gpuDroplet = await client.gpuDroplets.retrieve(
   *   3164444,
   * );
   * ```
   */
  retrieve(dropletID: number, options?: RequestOptions): APIPromise<GPUDropletRetrieveResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all Droplets in your account, send a GET request to `/v2/droplets`.
   *
   * The response body will be a JSON object with a key of `droplets`. This will be
   * set to an array containing objects each representing a Droplet. These will
   * contain the standard Droplet attributes.
   *
   * ### Filtering Results by Tag
   *
   * It's possible to request filtered results by including certain query parameters.
   * To only list Droplets assigned to a specific tag, include the `tag_name` query
   * parameter set to the name of the tag in your GET request. For example,
   * `/v2/droplets?tag_name=$TAG_NAME`.
   *
   * ### GPU Droplets
   *
   * By default, only non-GPU Droplets are returned. To list only GPU Droplets, set
   * the `type` query parameter to `gpus`. For example, `/v2/droplets?type=gpus`.
   *
   * @example
   * ```ts
   * const gpuDroplets = await client.gpuDroplets.list();
   * ```
   */
  list(
    query: GPUDropletListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GPUDropletListResponse> {
    return this._client.get('/v2/droplets', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.delete(3164444);
   * ```
   */
  delete(dropletID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/droplets/${dropletID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To delete **all** Droplets assigned to a specific tag, include the `tag_name`
   * query parameter set to the name of the tag in your DELETE request. For example,
   * `/v2/droplets?tag_name=$TAG_NAME`.
   *
   * This endpoint requires `tag:read` scope.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.deleteByTag({
   *   tag_name: 'tag_name',
   * });
   * ```
   */
  deleteByTag(params: GPUDropletDeleteByTagParams, options?: RequestOptions): APIPromise<void> {
    const { tag_name } = params;
    return this._client.delete('/v2/droplets', {
      query: { tag_name },
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To retrieve a list of all firewalls available to a Droplet, send a GET request
   * to `/v2/droplets/$DROPLET_ID/firewalls`
   *
   * The response will be a JSON object that has a key called `firewalls`. This will
   * be set to an array of `firewall` objects, each of which contain the standard
   * `firewall` attributes.
   *
   * @example
   * ```ts
   * const response = await client.gpuDroplets.listFirewalls(
   *   3164444,
   * );
   * ```
   */
  listFirewalls(
    dropletID: number,
    query: GPUDropletListFirewallsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GPUDropletListFirewallsResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/firewalls`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve a list of all kernels available to a Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID/kernels`
   *
   * The response will be a JSON object that has a key called `kernels`. This will be
   * set to an array of `kernel` objects, each of which contain the standard `kernel`
   * attributes.
   *
   * @example
   * ```ts
   * const response = await client.gpuDroplets.listKernels(
   *   3164444,
   * );
   * ```
   */
  listKernels(
    dropletID: number,
    query: GPUDropletListKernelsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GPUDropletListKernelsResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/kernels`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve a list of any "neighbors" (i.e. Droplets that are co-located on the
   * same physical hardware) for a specific Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID/neighbors`.
   *
   * The results will be returned as a JSON object with a key of `droplets`. This
   * will be set to an array containing objects representing any other Droplets that
   * share the same physical hardware. An empty array indicates that the Droplet is
   * not co-located any other Droplets associated with your account.
   *
   * @example
   * ```ts
   * const response = await client.gpuDroplets.listNeighbors(
   *   3164444,
   * );
   * ```
   */
  listNeighbors(dropletID: number, options?: RequestOptions): APIPromise<GPUDropletListNeighborsResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/neighbors`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve the snapshots that have been created from a Droplet, send a GET
   * request to `/v2/droplets/$DROPLET_ID/snapshots`.
   *
   * You will get back a JSON object that has a `snapshots` key. This will be set to
   * an array of snapshot objects, each of which contain the standard Droplet
   * snapshot attributes.
   *
   * @example
   * ```ts
   * const response = await client.gpuDroplets.listSnapshots(
   *   3164444,
   * );
   * ```
   */
  listSnapshots(
    dropletID: number,
    query: GPUDropletListSnapshotsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GPUDropletListSnapshotsResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/snapshots`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface DropletBackupPolicy {
  /**
   * The hour of the day that the backup window will start.
   */
  hour?: 0 | 4 | 8 | 12 | 16 | 20;

  /**
   * The backup plan used for the Droplet. The plan can be either `daily` or
   * `weekly`.
   */
  plan?: 'daily' | 'weekly';

  /**
   * The number of days the backup will be retained.
   */
  retention_period_days?: number;

  /**
   * The day of the week on which the backup will occur.
   */
  weekday?: 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';

  /**
   * The length of the backup window starting from `hour`.
   */
  window_length_hours?: number;
}

export type GPUDropletCreateResponse =
  | GPUDropletCreateResponse.SingleDropletResponse
  | GPUDropletCreateResponse.MultipleDropletResponse;

export namespace GPUDropletCreateResponse {
  export interface SingleDropletResponse {
    droplet: Shared.Droplet;

    links: SingleDropletResponse.Links;
  }

  export namespace SingleDropletResponse {
    export interface Links {
      actions?: Array<Shared.ActionLink>;
    }
  }

  export interface MultipleDropletResponse {
    droplets: Array<Shared.Droplet>;

    links: MultipleDropletResponse.Links;
  }

  export namespace MultipleDropletResponse {
    export interface Links {
      actions?: Array<Shared.ActionLink>;
    }
  }
}

export interface GPUDropletRetrieveResponse {
  droplet?: Shared.Droplet;
}

export interface GPUDropletListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  droplets?: Array<Shared.Droplet>;

  links?: Shared.PageLinks;
}

export interface GPUDropletListFirewallsResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  firewalls?: Array<FirewallsAPI.Firewall>;

  links?: Shared.PageLinks;
}

export interface GPUDropletListKernelsResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  kernels?: Array<Shared.Kernel | null>;

  links?: Shared.PageLinks;
}

export interface GPUDropletListNeighborsResponse {
  droplets?: Array<Shared.Droplet>;
}

export interface GPUDropletListSnapshotsResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  links?: Shared.PageLinks;

  snapshots?: Array<GPUDropletListSnapshotsResponse.Snapshot>;
}

export namespace GPUDropletListSnapshotsResponse {
  export interface Snapshot {
    /**
     * The unique identifier for the snapshot or backup.
     */
    id: number;

    /**
     * A time value given in ISO8601 combined date and time format that represents when
     * the snapshot was created.
     */
    created_at: string;

    /**
     * The minimum size in GB required for a volume or Droplet to use this snapshot.
     */
    min_disk_size: number;

    /**
     * A human-readable name for the snapshot.
     */
    name: string;

    /**
     * An array of the regions that the snapshot is available in. The regions are
     * represented by their identifying slug values.
     */
    regions: Array<string>;

    /**
     * The billable size of the snapshot in gigabytes.
     */
    size_gigabytes: number;

    /**
     * Describes the kind of image. It may be one of `snapshot` or `backup`. This
     * specifies whether an image is a user-generated Droplet snapshot or automatically
     * created Droplet backup.
     */
    type: 'snapshot' | 'backup';
  }
}

export type GPUDropletCreateParams =
  | GPUDropletCreateParams.DropletSingleCreate
  | GPUDropletCreateParams.DropletMultiCreate;

export declare namespace GPUDropletCreateParams {
  export interface DropletSingleCreate {
    /**
     * The image ID of a public or private image or the slug identifier for a public
     * image. This image will be the base image for your Droplet. Requires `image:read`
     * scope.
     */
    image: string | number;

    /**
     * The human-readable string you wish to use when displaying the Droplet name. The
     * name, if set to a domain name managed in the DigitalOcean DNS management system,
     * will configure a PTR record for the Droplet. The name set during creation will
     * also determine the hostname for the Droplet in its internal configuration.
     */
    name: string;

    /**
     * The slug identifier for the size that you wish to select for this Droplet.
     */
    size: string;

    /**
     * An object specifying the backup policy for the Droplet. If omitted and `backups`
     * is `true`, the backup plan will default to daily.
     */
    backup_policy?: DropletBackupPolicy;

    /**
     * A boolean indicating whether automated backups should be enabled for the
     * Droplet.
     */
    backups?: boolean;

    /**
     * A boolean indicating whether to enable IPv6 on the Droplet.
     */
    ipv6?: boolean;

    /**
     * A boolean indicating whether to install the DigitalOcean agent for monitoring.
     */
    monitoring?: boolean;

    /**
     * @deprecated This parameter has been deprecated. Use `vpc_uuid` instead to
     * specify a VPC network for the Droplet. If no `vpc_uuid` is provided, the Droplet
     * will be placed in your account's default VPC for the region.
     */
    private_networking?: boolean;

    /**
     * The slug identifier for the region that you wish to deploy the Droplet in. If
     * the specific datacenter is not not important, a slug prefix (e.g. `nyc`) can be
     * used to deploy the Droplet in any of the that region's locations (`nyc1`,
     * `nyc2`, or `nyc3`). If the region is omitted from the create request completely,
     * the Droplet may deploy in any region.
     */
    region?: string;

    /**
     * An array containing the IDs or fingerprints of the SSH keys that you wish to
     * embed in the Droplet's root account upon creation. You must add the keys to your
     * team before they can be embedded on a Droplet. Requires `ssh_key:read` scope.
     */
    ssh_keys?: Array<string | number>;

    /**
     * A flat array of tag names as strings to apply to the Droplet after it is
     * created. Tag names can either be existing or new tags. Requires `tag:create`
     * scope.
     */
    tags?: Array<string> | null;

    /**
     * A string containing 'user data' which may be used to configure the Droplet on
     * first boot, often a 'cloud-config' file or Bash script. It must be plain text
     * and may not exceed 64 KiB in size.
     */
    user_data?: string;

    /**
     * An array of IDs for block storage volumes that will be attached to the Droplet
     * once created. The volumes must not already be attached to an existing Droplet.
     * Requires `block_storage:read` scpoe.
     */
    volumes?: Array<string>;

    /**
     * A string specifying the UUID of the VPC to which the Droplet will be assigned.
     * If excluded, the Droplet will be assigned to your account's default VPC for the
     * region. Requires `vpc:read` scope.
     */
    vpc_uuid?: string;

    /**
     * A boolean indicating whether to install the DigitalOcean agent used for
     * providing access to the Droplet web console in the control panel. By default,
     * the agent is installed on new Droplets but installation errors (i.e. OS not
     * supported) are ignored. To prevent it from being installed, set to `false`. To
     * make installation errors fatal, explicitly set it to `true`.
     */
    with_droplet_agent?: boolean;
  }

  export interface DropletMultiCreate {
    /**
     * The image ID of a public or private image or the slug identifier for a public
     * image. This image will be the base image for your Droplet. Requires `image:read`
     * scope.
     */
    image: string | number;

    /**
     * An array of human human-readable strings you wish to use when displaying the
     * Droplet name. Each name, if set to a domain name managed in the DigitalOcean DNS
     * management system, will configure a PTR record for the Droplet. Each name set
     * during creation will also determine the hostname for the Droplet in its internal
     * configuration.
     */
    names: Array<string>;

    /**
     * The slug identifier for the size that you wish to select for this Droplet.
     */
    size: string;

    /**
     * An object specifying the backup policy for the Droplet. If omitted and `backups`
     * is `true`, the backup plan will default to daily.
     */
    backup_policy?: DropletBackupPolicy;

    /**
     * A boolean indicating whether automated backups should be enabled for the
     * Droplet.
     */
    backups?: boolean;

    /**
     * A boolean indicating whether to enable IPv6 on the Droplet.
     */
    ipv6?: boolean;

    /**
     * A boolean indicating whether to install the DigitalOcean agent for monitoring.
     */
    monitoring?: boolean;

    /**
     * @deprecated This parameter has been deprecated. Use `vpc_uuid` instead to
     * specify a VPC network for the Droplet. If no `vpc_uuid` is provided, the Droplet
     * will be placed in your account's default VPC for the region.
     */
    private_networking?: boolean;

    /**
     * The slug identifier for the region that you wish to deploy the Droplet in. If
     * the specific datacenter is not not important, a slug prefix (e.g. `nyc`) can be
     * used to deploy the Droplet in any of the that region's locations (`nyc1`,
     * `nyc2`, or `nyc3`). If the region is omitted from the create request completely,
     * the Droplet may deploy in any region.
     */
    region?: string;

    /**
     * An array containing the IDs or fingerprints of the SSH keys that you wish to
     * embed in the Droplet's root account upon creation. You must add the keys to your
     * team before they can be embedded on a Droplet. Requires `ssh_key:read` scope.
     */
    ssh_keys?: Array<string | number>;

    /**
     * A flat array of tag names as strings to apply to the Droplet after it is
     * created. Tag names can either be existing or new tags. Requires `tag:create`
     * scope.
     */
    tags?: Array<string> | null;

    /**
     * A string containing 'user data' which may be used to configure the Droplet on
     * first boot, often a 'cloud-config' file or Bash script. It must be plain text
     * and may not exceed 64 KiB in size.
     */
    user_data?: string;

    /**
     * An array of IDs for block storage volumes that will be attached to the Droplet
     * once created. The volumes must not already be attached to an existing Droplet.
     * Requires `block_storage:read` scpoe.
     */
    volumes?: Array<string>;

    /**
     * A string specifying the UUID of the VPC to which the Droplet will be assigned.
     * If excluded, the Droplet will be assigned to your account's default VPC for the
     * region. Requires `vpc:read` scope.
     */
    vpc_uuid?: string;

    /**
     * A boolean indicating whether to install the DigitalOcean agent used for
     * providing access to the Droplet web console in the control panel. By default,
     * the agent is installed on new Droplets but installation errors (i.e. OS not
     * supported) are ignored. To prevent it from being installed, set to `false`. To
     * make installation errors fatal, explicitly set it to `true`.
     */
    with_droplet_agent?: boolean;
  }
}

export interface GPUDropletListParams {
  /**
   * Used to filter list response by Droplet name returning only exact matches. It is
   * case-insensitive and can not be combined with `tag_name`.
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
   * Used to filter Droplets by a specific tag. Can not be combined with `name` or
   * `type`. Requires `tag:read` scope.
   */
  tag_name?: string;

  /**
   * When `type` is set to `gpus`, only GPU Droplets will be returned. By default,
   * only non-GPU Droplets are returned. Can not be combined with `tag_name`.
   */
  type?: 'droplets' | 'gpus';
}

export interface GPUDropletDeleteByTagParams {
  /**
   * Specifies Droplets to be deleted by tag.
   */
  tag_name: string;
}

export interface GPUDropletListFirewallsParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export interface GPUDropletListKernelsParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export interface GPUDropletListSnapshotsParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

GPUDroplets.Backups = Backups;
GPUDroplets.Actions = Actions;
GPUDroplets.DestroyWithAssociatedResources = DestroyWithAssociatedResources;
GPUDroplets.Autoscale = Autoscale;
GPUDroplets.Firewalls = Firewalls;
GPUDroplets.FloatingIPs = FloatingIPs;
GPUDroplets.Images = Images;
GPUDroplets.LoadBalancers = LoadBalancers;
GPUDroplets.Sizes = Sizes;
GPUDroplets.Snapshots = Snapshots;
GPUDroplets.Volumes = Volumes;
GPUDroplets.Account = Account;

export declare namespace GPUDroplets {
  export {
    type DropletBackupPolicy as DropletBackupPolicy,
    type GPUDropletCreateResponse as GPUDropletCreateResponse,
    type GPUDropletRetrieveResponse as GPUDropletRetrieveResponse,
    type GPUDropletListResponse as GPUDropletListResponse,
    type GPUDropletListFirewallsResponse as GPUDropletListFirewallsResponse,
    type GPUDropletListKernelsResponse as GPUDropletListKernelsResponse,
    type GPUDropletListNeighborsResponse as GPUDropletListNeighborsResponse,
    type GPUDropletListSnapshotsResponse as GPUDropletListSnapshotsResponse,
    type GPUDropletCreateParams as GPUDropletCreateParams,
    type GPUDropletListParams as GPUDropletListParams,
    type GPUDropletDeleteByTagParams as GPUDropletDeleteByTagParams,
    type GPUDropletListFirewallsParams as GPUDropletListFirewallsParams,
    type GPUDropletListKernelsParams as GPUDropletListKernelsParams,
    type GPUDropletListSnapshotsParams as GPUDropletListSnapshotsParams,
  };

  export {
    Backups as Backups,
    type BackupListResponse as BackupListResponse,
    type BackupListPoliciesResponse as BackupListPoliciesResponse,
    type BackupListSupportedPoliciesResponse as BackupListSupportedPoliciesResponse,
    type BackupRetrievePolicyResponse as BackupRetrievePolicyResponse,
    type BackupListParams as BackupListParams,
    type BackupListPoliciesParams as BackupListPoliciesParams,
  };

  export {
    Actions as Actions,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionListResponse as ActionListResponse,
    type ActionBulkInitiateResponse as ActionBulkInitiateResponse,
    type ActionInitiateResponse as ActionInitiateResponse,
    type ActionRetrieveParams as ActionRetrieveParams,
    type ActionListParams as ActionListParams,
    type ActionBulkInitiateParams as ActionBulkInitiateParams,
    type ActionInitiateParams as ActionInitiateParams,
  };

  export {
    DestroyWithAssociatedResources as DestroyWithAssociatedResources,
    type AssociatedResource as AssociatedResource,
    type DestroyedAssociatedResource as DestroyedAssociatedResource,
    type DestroyWithAssociatedResourceListResponse as DestroyWithAssociatedResourceListResponse,
    type DestroyWithAssociatedResourceCheckStatusResponse as DestroyWithAssociatedResourceCheckStatusResponse,
    type DestroyWithAssociatedResourceDeleteDangerousParams as DestroyWithAssociatedResourceDeleteDangerousParams,
    type DestroyWithAssociatedResourceDeleteSelectiveParams as DestroyWithAssociatedResourceDeleteSelectiveParams,
  };

  export {
    Autoscale as Autoscale,
    type AutoscalePool as AutoscalePool,
    type AutoscalePoolDropletTemplate as AutoscalePoolDropletTemplate,
    type AutoscalePoolDynamicConfig as AutoscalePoolDynamicConfig,
    type AutoscalePoolStaticConfig as AutoscalePoolStaticConfig,
    type CurrentUtilization as CurrentUtilization,
    type AutoscaleCreateResponse as AutoscaleCreateResponse,
    type AutoscaleRetrieveResponse as AutoscaleRetrieveResponse,
    type AutoscaleUpdateResponse as AutoscaleUpdateResponse,
    type AutoscaleListResponse as AutoscaleListResponse,
    type AutoscaleListHistoryResponse as AutoscaleListHistoryResponse,
    type AutoscaleListMembersResponse as AutoscaleListMembersResponse,
    type AutoscaleCreateParams as AutoscaleCreateParams,
    type AutoscaleUpdateParams as AutoscaleUpdateParams,
    type AutoscaleListParams as AutoscaleListParams,
    type AutoscaleDeleteDangerousParams as AutoscaleDeleteDangerousParams,
    type AutoscaleListHistoryParams as AutoscaleListHistoryParams,
    type AutoscaleListMembersParams as AutoscaleListMembersParams,
  };

  export {
    Firewalls as Firewalls,
    type Firewall as Firewall,
    type FirewallCreateResponse as FirewallCreateResponse,
    type FirewallRetrieveResponse as FirewallRetrieveResponse,
    type FirewallUpdateResponse as FirewallUpdateResponse,
    type FirewallListResponse as FirewallListResponse,
    type FirewallCreateParams as FirewallCreateParams,
    type FirewallUpdateParams as FirewallUpdateParams,
    type FirewallListParams as FirewallListParams,
  };

  export {
    FloatingIPs as FloatingIPs,
    type FloatingIP as FloatingIP,
    type FloatingIPCreateResponse as FloatingIPCreateResponse,
    type FloatingIPRetrieveResponse as FloatingIPRetrieveResponse,
    type FloatingIPListResponse as FloatingIPListResponse,
    type FloatingIPCreateParams as FloatingIPCreateParams,
    type FloatingIPListParams as FloatingIPListParams,
  };

  export {
    Images as Images,
    type ImageCreateResponse as ImageCreateResponse,
    type ImageRetrieveResponse as ImageRetrieveResponse,
    type ImageUpdateResponse as ImageUpdateResponse,
    type ImageListResponse as ImageListResponse,
    type ImageCreateParams as ImageCreateParams,
    type ImageUpdateParams as ImageUpdateParams,
    type ImageListParams as ImageListParams,
  };

  export {
    LoadBalancers as LoadBalancers,
    type Domains as Domains,
    type ForwardingRule as ForwardingRule,
    type GlbSettings as GlbSettings,
    type HealthCheck as HealthCheck,
    type LbFirewall as LbFirewall,
    type LoadBalancer as LoadBalancer,
    type StickySessions as StickySessions,
    type LoadBalancerCreateResponse as LoadBalancerCreateResponse,
    type LoadBalancerRetrieveResponse as LoadBalancerRetrieveResponse,
    type LoadBalancerUpdateResponse as LoadBalancerUpdateResponse,
    type LoadBalancerListResponse as LoadBalancerListResponse,
    type LoadBalancerCreateParams as LoadBalancerCreateParams,
    type LoadBalancerUpdateParams as LoadBalancerUpdateParams,
    type LoadBalancerListParams as LoadBalancerListParams,
  };

  export { Sizes as Sizes, type SizeListResponse as SizeListResponse, type SizeListParams as SizeListParams };

  export {
    Snapshots as Snapshots,
    type SnapshotRetrieveResponse as SnapshotRetrieveResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotListParams as SnapshotListParams,
  };

  export {
    Volumes as Volumes,
    type VolumeCreateResponse as VolumeCreateResponse,
    type VolumeRetrieveResponse as VolumeRetrieveResponse,
    type VolumeListResponse as VolumeListResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeListParams as VolumeListParams,
    type VolumeDeleteByNameParams as VolumeDeleteByNameParams,
  };

  export { Account as Account };
}
