// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as GPUDropletsAPI from './gpu-droplets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Backups extends APIResource {
  /**
   * To retrieve any backups associated with a Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID/backups`.
   *
   * You will get back a JSON object that has a `backups` key. This will be set to an
   * array of backup objects, each of which contain the standard Droplet backup
   * attributes.
   *
   * @example
   * ```ts
   * const backups = await client.gpuDroplets.backups.list(
   *   3164444,
   * );
   * ```
   */
  list(
    dropletID: number,
    query: BackupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackupListResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/backups`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list information about the backup policies for all Droplets in the account,
   * send a GET request to `/v2/droplets/backups/policies`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.backups.listPolicies();
   * ```
   */
  listPolicies(
    query: BackupListPoliciesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BackupListPoliciesResponse> {
    return this._client.get('/v2/droplets/backups/policies', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve a list of all supported Droplet backup policies, send a GET request
   * to `/v2/droplets/backups/supported_policies`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.backups.listSupportedPolicies();
   * ```
   */
  listSupportedPolicies(options?: RequestOptions): APIPromise<BackupListSupportedPoliciesResponse> {
    return this._client.get('/v2/droplets/backups/supported_policies', {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To show information about an individual Droplet's backup policy, send a GET
   * request to `/v2/droplets/$DROPLET_ID/backups/policy`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.backups.retrievePolicy(3164444);
   * ```
   */
  retrievePolicy(dropletID: number, options?: RequestOptions): APIPromise<BackupRetrievePolicyResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/backups/policy`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface BackupListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  backups?: Array<BackupListResponse.Backup>;

  links?: Shared.PageLinks;
}

export namespace BackupListResponse {
  export interface Backup {
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

export interface BackupListPoliciesResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  links?: Shared.PageLinks;

  /**
   * A map where the keys are the Droplet IDs and the values are objects containing
   * the backup policy information for each Droplet.
   */
  policies?: { [key: string]: BackupListPoliciesResponse.Policies };
}

export namespace BackupListPoliciesResponse {
  export interface Policies {
    /**
     * A boolean value indicating whether backups are enabled for the Droplet.
     */
    backup_enabled?: boolean;

    /**
     * An object specifying the backup policy for the Droplet.
     */
    backup_policy?: GPUDropletsAPI.DropletBackupPolicy;

    /**
     * The unique identifier for the Droplet.
     */
    droplet_id?: number;

    /**
     * An object containing keys with the start and end times of the window during
     * which the backup will occur.
     */
    next_backup_window?: Shared.DropletNextBackupWindow | null;
  }
}

export interface BackupListSupportedPoliciesResponse {
  supported_policies?: Array<BackupListSupportedPoliciesResponse.SupportedPolicy>;
}

export namespace BackupListSupportedPoliciesResponse {
  export interface SupportedPolicy {
    /**
     * The name of the Droplet backup plan.
     */
    name?: string;

    /**
     * The day of the week the backup will occur.
     */
    possible_days?: Array<string>;

    /**
     * An array of integers representing the hours of the day that a backup can start.
     */
    possible_window_starts?: Array<number>;

    /**
     * The number of days that a backup will be kept.
     */
    retention_period_days?: number;

    /**
     * The number of hours that a backup window is open.
     */
    window_length_hours?: number;
  }
}

export interface BackupRetrievePolicyResponse {
  policy?: BackupRetrievePolicyResponse.Policy;
}

export namespace BackupRetrievePolicyResponse {
  export interface Policy {
    /**
     * A boolean value indicating whether backups are enabled for the Droplet.
     */
    backup_enabled?: boolean;

    /**
     * An object specifying the backup policy for the Droplet.
     */
    backup_policy?: GPUDropletsAPI.DropletBackupPolicy;

    /**
     * The unique identifier for the Droplet.
     */
    droplet_id?: number;

    /**
     * An object containing keys with the start and end times of the window during
     * which the backup will occur.
     */
    next_backup_window?: Shared.DropletNextBackupWindow | null;
  }
}

export interface BackupListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export interface BackupListPoliciesParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export declare namespace Backups {
  export {
    type BackupListResponse as BackupListResponse,
    type BackupListPoliciesResponse as BackupListPoliciesResponse,
    type BackupListSupportedPoliciesResponse as BackupListSupportedPoliciesResponse,
    type BackupRetrievePolicyResponse as BackupRetrievePolicyResponse,
    type BackupListParams as BackupListParams,
    type BackupListPoliciesParams as BackupListPoliciesParams,
  };
}
