// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Autoscale extends APIResource {
  /**
   * To create a new autoscale pool, send a POST request to `/v2/droplets/autoscale`
   * setting the required attributes.
   *
   * The response body will contain a JSON object with a key called `autoscale_pool`
   * containing the standard attributes for the new autoscale pool.
   *
   * @example
   * ```ts
   * const autoscale = await client.gpuDroplets.autoscale.create(
   *   {
   *     config: {
   *       min_instances: 1,
   *       max_instances: 5,
   *       target_cpu_utilization: 0.5,
   *       cooldown_minutes: 10,
   *     },
   *     droplet_template: {
   *       name: 'example.com',
   *       region: 'nyc3',
   *       size: 'c-2',
   *       image: 'ubuntu-20-04-x64',
   *       ssh_keys: [
   *         '3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45',
   *       ],
   *       backups: true,
   *       ipv6: true,
   *       monitoring: true,
   *       tags: ['env:prod', 'web'],
   *       user_data:
   *         '#cloud-config\nruncmd:\n  - touch /test.txt\n',
   *       vpc_uuid: '760e09ef-dc84-11e8-981e-3cfdfeaae000',
   *     },
   *     name: 'my-autoscale-pool',
   *   },
   * );
   * ```
   */
  create(body: AutoscaleCreateParams, options?: RequestOptions): APIPromise<AutoscaleCreateResponse> {
    return this._client.post('/v2/droplets/autoscale', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To show information about an individual autoscale pool, send a GET request to
   * `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`.
   *
   * @example
   * ```ts
   * const autoscale =
   *   await client.gpuDroplets.autoscale.retrieve(
   *     '0d3db13e-a604-4944-9827-7ec2642d32ac',
   *   );
   * ```
   */
  retrieve(autoscalePoolID: string, options?: RequestOptions): APIPromise<AutoscaleRetrieveResponse> {
    return this._client.get(path`/v2/droplets/autoscale/${autoscalePoolID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update the configuration of an existing autoscale pool, send a PUT request to
   * `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID`. The request must contain a full
   * representation of the autoscale pool including existing attributes.
   *
   * @example
   * ```ts
   * const autoscale = await client.gpuDroplets.autoscale.update(
   *   '0d3db13e-a604-4944-9827-7ec2642d32ac',
   *   {
   *     config: { target_number_instances: 2 },
   *     droplet_template: {
   *       name: 'example.com',
   *       region: 'nyc3',
   *       size: 'c-2',
   *       image: 'ubuntu-20-04-x64',
   *       ssh_keys: [
   *         '3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45',
   *       ],
   *       backups: true,
   *       ipv6: true,
   *       monitoring: true,
   *       tags: ['env:prod', 'web'],
   *       user_data:
   *         '#cloud-config\nruncmd:\n  - touch /test.txt\n',
   *       vpc_uuid: '760e09ef-dc84-11e8-981e-3cfdfeaae000',
   *     },
   *     name: 'my-autoscale-pool',
   *   },
   * );
   * ```
   */
  update(
    autoscalePoolID: string,
    body: AutoscaleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AutoscaleUpdateResponse> {
    return this._client.put(path`/v2/droplets/autoscale/${autoscalePoolID}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all autoscale pools in your team, send a GET request to
   * `/v2/droplets/autoscale`. The response body will be a JSON object with a key of
   * `autoscale_pools` containing an array of autoscale pool objects. These each
   * contain the standard autoscale pool attributes.
   *
   * @example
   * ```ts
   * const autoscales =
   *   await client.gpuDroplets.autoscale.list();
   * ```
   */
  list(
    query: AutoscaleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutoscaleListResponse> {
    return this._client.get('/v2/droplets/autoscale', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To destroy an autoscale pool, send a DELETE request to the
   * `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID` endpoint.
   *
   * A successful response will include a 202 response code and no content.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.autoscale.delete(
   *   '0d3db13e-a604-4944-9827-7ec2642d32ac',
   * );
   * ```
   */
  delete(autoscalePoolID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/droplets/autoscale/${autoscalePoolID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To destroy an autoscale pool and its associated resources (Droplets), send a
   * DELETE request to the `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/dangerous`
   * endpoint.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.autoscale.deleteDangerous(
   *   '0d3db13e-a604-4944-9827-7ec2642d32ac',
   *   { 'X-Dangerous': true },
   * );
   * ```
   */
  deleteDangerous(
    autoscalePoolID: string,
    params: AutoscaleDeleteDangerousParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Dangerous': xDangerous } = params;
    return this._client.delete(path`/v2/droplets/autoscale/${autoscalePoolID}/dangerous`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'X-Dangerous': xDangerous.toString() }, options?.headers]),
    });
  }

  /**
   * To list all of the scaling history events of an autoscale pool, send a GET
   * request to `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/history`.
   *
   * The response body will be a JSON object with a key of `history`. This will be
   * set to an array containing objects each representing a history event.
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.autoscale.listHistory(
   *     '0d3db13e-a604-4944-9827-7ec2642d32ac',
   *   );
   * ```
   */
  listHistory(
    autoscalePoolID: string,
    query: AutoscaleListHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutoscaleListHistoryResponse> {
    return this._client.get(path`/v2/droplets/autoscale/${autoscalePoolID}/history`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list the Droplets in an autoscale pool, send a GET request to
   * `/v2/droplets/autoscale/$AUTOSCALE_POOL_ID/members`.
   *
   * The response body will be a JSON object with a key of `droplets`. This will be
   * set to an array containing information about each of the Droplets in the
   * autoscale pool.
   *
   * @example
   * ```ts
   * const response =
   *   await client.gpuDroplets.autoscale.listMembers(
   *     '0d3db13e-a604-4944-9827-7ec2642d32ac',
   *   );
   * ```
   */
  listMembers(
    autoscalePoolID: string,
    query: AutoscaleListMembersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutoscaleListMembersResponse> {
    return this._client.get(path`/v2/droplets/autoscale/${autoscalePoolID}/members`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface AutoscalePool {
  /**
   * A unique identifier for each autoscale pool instance. This is automatically
   * generated upon autoscale pool creation.
   */
  id: string;

  /**
   * The number of active Droplets in the autoscale pool.
   */
  active_resources_count: number;

  /**
   * The scaling configuration for an autoscale pool, which is how the pool scales up
   * and down (either by resource utilization or static configuration).
   */
  config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;

  /**
   * A time value given in ISO8601 combined date and time format that represents when
   * the autoscale pool was created.
   */
  created_at: string;

  droplet_template: AutoscalePoolDropletTemplate;

  /**
   * The human-readable name set for the autoscale pool.
   */
  name: string;

  /**
   * The current status of the autoscale pool.
   */
  status: 'active' | 'deleting' | 'error';

  /**
   * A time value given in ISO8601 combined date and time format that represents when
   * the autoscale pool was last updated.
   */
  updated_at: string;

  current_utilization?: CurrentUtilization;
}

export interface AutoscalePoolDropletTemplate {
  /**
   * The Droplet image to be used for all Droplets in the autoscale pool. You may
   * specify the slug or the image ID.
   */
  image: string;

  /**
   * The datacenter in which all of the Droplets will be created.
   */
  region:
    | 'nyc1'
    | 'nyc2'
    | 'nyc3'
    | 'ams2'
    | 'ams3'
    | 'sfo1'
    | 'sfo2'
    | 'sfo3'
    | 'sgp1'
    | 'lon1'
    | 'fra1'
    | 'tor1'
    | 'blr1'
    | 'syd1';

  /**
   * The Droplet size to be used for all Droplets in the autoscale pool.
   */
  size: string;

  /**
   * The SSH keys to be installed on the Droplets in the autoscale pool. You can
   * either specify the key ID or the fingerprint. Requires `ssh_key:read` scope.
   */
  ssh_keys: Array<string>;

  /**
   * Assigns a unique IPv6 address to each of the Droplets in the autoscale pool.
   */
  ipv6?: boolean;

  /**
   * The name(s) to be applied to all Droplets in the autoscale pool.
   */
  name?: string;

  /**
   * The project that the Droplets in the autoscale pool will belong to. Requires
   * `project:read` scope.
   */
  project_id?: string;

  /**
   * The tags to apply to each of the Droplets in the autoscale pool. Requires
   * `tag:read` scope.
   */
  tags?: Array<string>;

  /**
   * A string containing user data that cloud-init consumes to configure a Droplet on
   * first boot. User data is often a cloud-config file or Bash script. It must be
   * plain text and may not exceed 64 KiB in size.
   */
  user_data?: string;

  /**
   * The VPC where the Droplets in the autoscale pool will be created. The VPC must
   * be in the region where you want to create the Droplets. Requires `vpc:read`
   * scope.
   */
  vpc_uuid?: string;

  /**
   * Installs the Droplet agent. This must be set to true to monitor Droplets for
   * resource utilization scaling.
   */
  with_droplet_agent?: boolean;
}

export interface AutoscalePoolDynamicConfig {
  /**
   * The maximum number of Droplets in an autoscale pool.
   */
  max_instances: number;

  /**
   * The minimum number of Droplets in an autoscale pool.
   */
  min_instances: number;

  /**
   * The number of minutes to wait between scaling events in an autoscale pool.
   * Defaults to 10 minutes.
   */
  cooldown_minutes?: number;

  /**
   * Target CPU utilization as a decimal.
   */
  target_cpu_utilization?: number;

  /**
   * Target memory utilization as a decimal.
   */
  target_memory_utilization?: number;
}

export interface AutoscalePoolStaticConfig {
  /**
   * Fixed number of instances in an autoscale pool.
   */
  target_number_instances: number;
}

export interface CurrentUtilization {
  /**
   * The average CPU utilization of the autoscale pool.
   */
  cpu?: number;

  /**
   * The average memory utilization of the autoscale pool.
   */
  memory?: number;
}

export interface AutoscaleCreateResponse {
  autoscale_pool?: AutoscalePool;
}

export interface AutoscaleRetrieveResponse {
  autoscale_pool?: AutoscalePool;
}

export interface AutoscaleUpdateResponse {
  autoscale_pool?: AutoscalePool;
}

export interface AutoscaleListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  autoscale_pools?: Array<AutoscalePool>;

  links?: Shared.PageLinks;
}

export interface AutoscaleListHistoryResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  history?: Array<AutoscaleListHistoryResponse.History>;

  links?: Shared.PageLinks;
}

export namespace AutoscaleListHistoryResponse {
  export interface History {
    /**
     * The creation time of the history event in ISO8601 combined date and time format.
     */
    created_at: string;

    /**
     * The current number of Droplets in the autoscale pool.
     */
    current_instance_count: number;

    /**
     * The target number of Droplets for the autoscale pool after the scaling event.
     */
    desired_instance_count: number;

    /**
     * The unique identifier of the history event.
     */
    history_event_id: string;

    /**
     * The reason for the scaling event.
     */
    reason: 'CONFIGURATION_CHANGE' | 'SCALE_UP' | 'SCALE_DOWN';

    /**
     * The status of the scaling event.
     */
    status: 'in_progress' | 'success' | 'error';

    /**
     * The last updated time of the history event in ISO8601 combined date and time
     * format.
     */
    updated_at: string;
  }
}

export interface AutoscaleListMembersResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  droplets?: Array<AutoscaleListMembersResponse.Droplet>;

  links?: Shared.PageLinks;
}

export namespace AutoscaleListMembersResponse {
  export interface Droplet {
    /**
     * The creation time of the Droplet in ISO8601 combined date and time format.
     */
    created_at: string;

    current_utilization: Droplet.CurrentUtilization;

    /**
     * The unique identifier of the Droplet.
     */
    droplet_id: number;

    /**
     * The health status of the Droplet.
     */
    health_status: string;

    /**
     * The power status of the Droplet.
     */
    status: 'provisioning' | 'active' | 'deleting' | 'off';

    /**
     * The last updated time of the Droplet in ISO8601 combined date and time format.
     */
    updated_at: string;
  }

  export namespace Droplet {
    export interface CurrentUtilization {
      /**
       * The CPU utilization average of the individual Droplet.
       */
      cpu?: number;

      /**
       * The memory utilization average of the individual Droplet.
       */
      memory?: number;
    }
  }
}

export interface AutoscaleCreateParams {
  /**
   * The scaling configuration for an autoscale pool, which is how the pool scales up
   * and down (either by resource utilization or static configuration).
   */
  config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;

  droplet_template: AutoscalePoolDropletTemplate;

  /**
   * The human-readable name of the autoscale pool. This field cannot be updated
   */
  name: string;
}

export interface AutoscaleUpdateParams {
  /**
   * The scaling configuration for an autoscale pool, which is how the pool scales up
   * and down (either by resource utilization or static configuration).
   */
  config: AutoscalePoolStaticConfig | AutoscalePoolDynamicConfig;

  droplet_template: AutoscalePoolDropletTemplate;

  /**
   * The human-readable name of the autoscale pool. This field cannot be updated
   */
  name: string;
}

export interface AutoscaleListParams {
  /**
   * The name of the autoscale pool
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
}

export interface AutoscaleDeleteDangerousParams {
  /**
   * Acknowledge this action will destroy the autoscale pool and its associated
   * resources and _can not_ be reversed.
   */
  'X-Dangerous': boolean;
}

export interface AutoscaleListHistoryParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export interface AutoscaleListMembersParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export declare namespace Autoscale {
  export {
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
}
