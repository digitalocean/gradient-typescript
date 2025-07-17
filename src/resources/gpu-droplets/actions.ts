// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as GPUDropletsAPI from './gpu-droplets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * To retrieve a Droplet action, send a GET request to
   * `/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.
   *
   * The response will be a JSON object with a key called `action`. The value will be
   * a Droplet action object.
   *
   * @example
   * ```ts
   * const action = await client.gpuDroplets.actions.retrieve(
   *   36804636,
   *   { droplet_id: 3164444 },
   * );
   * ```
   */
  retrieve(
    actionID: number,
    params: ActionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ActionRetrieveResponse> {
    const { droplet_id } = params;
    return this._client.get(path`/v2/droplets/${droplet_id}/actions/${actionID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve a list of all actions that have been executed for a Droplet, send a
   * GET request to `/v2/droplets/$DROPLET_ID/actions`.
   *
   * The results will be returned as a JSON object with an `actions` key. This will
   * be set to an array filled with `action` objects containing the standard `action`
   * attributes.
   *
   * @example
   * ```ts
   * const actions = await client.gpuDroplets.actions.list(
   *   3164444,
   * );
   * ```
   */
  list(
    dropletID: number,
    query: ActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionListResponse> {
    return this._client.get(path`/v2/droplets/${dropletID}/actions`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * Some actions can be performed in bulk on tagged Droplets. The actions can be
   * initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with
   * the action arguments.
   *
   * Only a sub-set of action types are supported:
   *
   * - `power_cycle`
   * - `power_on`
   * - `power_off`
   * - `shutdown`
   * - `enable_ipv6`
   * - `enable_backups`
   * - `disable_backups`
   * - `snapshot` (also requires `image:create` permission)
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.actions.bulkInitiate({
   *     type: 'reboot',
   *   });
   * ```
   */
  bulkInitiate(
    params: ActionBulkInitiateParams,
    options?: RequestOptions,
  ): APIPromise<ActionBulkInitiateResponse> {
    const { tag_name, ...body } = params;
    return this._client.post('/v2/droplets/actions', {
      query: { tag_name },
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To initiate an action on a Droplet send a POST request to
   * `/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request, set the
   * `type` attribute to on of the supported action types:
   *
   * | Action                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                             | Additionally Required Permission |
   * | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
   * | <nobr>`enable_backups`</nobr>       | Enables backups for a Droplet                                                                                                                                                                                                                                                                                                                                                                                                       |                                  |
   * | <nobr>`disable_backups`</nobr>      | Disables backups for a Droplet                                                                                                                                                                                                                                                                                                                                                                                                      |                                  |
   * | <nobr>`change_backup_policy`</nobr> | Update the backup policy for a Droplet                                                                                                                                                                                                                                                                                                                                                                                              |                                  |
   * | <nobr>`reboot`</nobr>               | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console.                                                                                                                                                                                                                                                                                 |                                  |
   * | <nobr>`power_cycle`</nobr>          | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch.                                                                                                                                                                                                                                                                                   |                                  |
   * | <nobr>`shutdown`</nobr>             | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. |                                  |
   * | <nobr>`power_off`</nobr>            | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications.                                                                                                                                                                                                                    |                                  |
   * | <nobr>`power_on`</nobr>             | Powers on a Droplet.                                                                                                                                                                                                                                                                                                                                                                                                                |                                  |
   * | <nobr>`restore`</nobr>              | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact.                                                                                                                                                                                                                                                     | droplet:admin                    |
   * | <nobr>`password_reset`</nobr>       | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use.                                                                                                                                                                                                                                                                                                              | droplet:admin                    |
   * | <nobr>`resize`</nobr>               | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`.                                                                                                                                                                                                                                                                        | droplet:create                   |
   * | <nobr>`rebuild`</nobr>              | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug.                                                                                                                                                                                                                                                                                                                                         | droplet:admin                    |
   * | <nobr>`rename`</nobr>               | Renames a Droplet.                                                                                                                                                                                                                                                                                                                                                                                                                  |                                  |
   * | <nobr>`change_kernel`</nobr>        | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default.                                                                                                                                                                                                                                                                        |                                  |
   * | <nobr>`enable_ipv6`</nobr>          | Enables IPv6 for a Droplet. Once enabled for a Droplet, IPv6 can not be disabled. When enabling IPv6 on an existing Droplet, [additional OS-level configuration](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/#on-existing-droplets) is required.                                                                                                                                                           |                                  |
   * | <nobr>`snapshot`</nobr>             | Takes a snapshot of a Droplet.                                                                                                                                                                                                                                                                                                                                                                                                      | image:create                     |
   *
   * @example
   * ```ts
   * const response = await client.gpuDroplets.actions.initiate(
   *   3164444,
   *   { type: 'reboot' },
   * );
   * ```
   */
  initiate(
    dropletID: number,
    body: ActionInitiateParams,
    options?: RequestOptions,
  ): APIPromise<ActionInitiateResponse> {
    return this._client.post(path`/v2/droplets/${dropletID}/actions`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface ActionRetrieveResponse {
  action?: Shared.Action;
}

export interface ActionListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  actions?: Array<Shared.Action>;

  links?: Shared.PageLinks;
}

export interface ActionBulkInitiateResponse {
  actions?: Array<Shared.Action>;
}

export interface ActionInitiateResponse {
  action?: Shared.Action;
}

export interface ActionRetrieveParams {
  /**
   * A unique identifier for a Droplet instance.
   */
  droplet_id: number;
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

export type ActionBulkInitiateParams =
  | ActionBulkInitiateParams.DropletAction
  | ActionBulkInitiateParams.DropletActionSnapshot;

export declare namespace ActionBulkInitiateParams {
  export interface DropletAction {
    /**
     * Body param: The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * Query param: Used to filter Droplets by a specific tag. Can not be combined with
     * `name` or `type`. Requires `tag:read` scope.
     */
    tag_name?: string;
  }

  export interface DropletActionSnapshot {
    /**
     * Body param: The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * Query param: Used to filter Droplets by a specific tag. Can not be combined with
     * `name` or `type`. Requires `tag:read` scope.
     */
    tag_name?: string;

    /**
     * Body param: The name to give the new snapshot of the Droplet.
     */
    name?: string;
  }
}

export type ActionInitiateParams =
  | ActionInitiateParams.DropletAction
  | ActionInitiateParams.DropletActionEnableBackups
  | ActionInitiateParams.DropletActionChangeBackupPolicy
  | ActionInitiateParams.DropletActionRestore
  | ActionInitiateParams.DropletActionResize
  | ActionInitiateParams.DropletActionRebuild
  | ActionInitiateParams.DropletActionRename
  | ActionInitiateParams.DropletActionChangeKernel
  | ActionInitiateParams.DropletActionSnapshot;

export declare namespace ActionInitiateParams {
  export interface DropletAction {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';
  }

  export interface DropletActionEnableBackups {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * An object specifying the backup policy for the Droplet. If omitted, the backup
     * plan will default to daily.
     */
    backup_policy?: GPUDropletsAPI.DropletBackupPolicy;
  }

  export interface DropletActionChangeBackupPolicy {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * An object specifying the backup policy for the Droplet.
     */
    backup_policy?: GPUDropletsAPI.DropletBackupPolicy;
  }

  export interface DropletActionRestore {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * The ID of a backup of the current Droplet instance to restore from.
     */
    image?: number;
  }

  export interface DropletActionResize {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * When `true`, the Droplet's disk will be resized in addition to its RAM and CPU.
     * This is a permanent change and cannot be reversed as a Droplet's disk size
     * cannot be decreased.
     */
    disk?: boolean;

    /**
     * The slug identifier for the size to which you wish to resize the Droplet.
     */
    size?: string;
  }

  export interface DropletActionRebuild {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * The image ID of a public or private image or the slug identifier for a public
     * image. The Droplet will be rebuilt using this image as its base.
     */
    image?: string | number;
  }

  export interface DropletActionRename {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * The new name for the Droplet.
     */
    name?: string;
  }

  export interface DropletActionChangeKernel {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * A unique number used to identify and reference a specific kernel.
     */
    kernel?: number;
  }

  export interface DropletActionSnapshot {
    /**
     * The type of action to initiate for the Droplet.
     */
    type:
      | 'enable_backups'
      | 'disable_backups'
      | 'reboot'
      | 'power_cycle'
      | 'shutdown'
      | 'power_off'
      | 'power_on'
      | 'restore'
      | 'password_reset'
      | 'resize'
      | 'rebuild'
      | 'rename'
      | 'change_kernel'
      | 'enable_ipv6'
      | 'snapshot';

    /**
     * The name to give the new snapshot of the Droplet.
     */
    name?: string;
  }
}

export declare namespace Actions {
  export {
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionListResponse as ActionListResponse,
    type ActionBulkInitiateResponse as ActionBulkInitiateResponse,
    type ActionInitiateResponse as ActionInitiateResponse,
    type ActionRetrieveParams as ActionRetrieveParams,
    type ActionListParams as ActionListParams,
    type ActionBulkInitiateParams as ActionBulkInitiateParams,
    type ActionInitiateParams as ActionInitiateParams,
  };
}
