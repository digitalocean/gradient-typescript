// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * The following actions are available on an Image.
   *
   * ## Convert an Image to a Snapshot
   *
   * To convert an image, for example, a backup to a snapshot, send a POST request to
   * `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.
   *
   * ## Transfer an Image
   *
   * To transfer an image to another region, send a POST request to
   * `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set
   * `region` attribute to the slug identifier of the region you wish to transfer to.
   *
   * @example
   * ```ts
   * const action =
   *   await client.gpuDroplets.images.actions.create(62137902, {
   *     type: 'convert',
   *   });
   * ```
   */
  create(imageID: number, body: ActionCreateParams, options?: RequestOptions): APIPromise<Shared.Action> {
    return this._client.post(path`/v2/images/${imageID}/actions`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve the status of an image action, send a GET request to
   * `/v2/images/$IMAGE_ID/actions/$IMAGE_ACTION_ID`.
   *
   * @example
   * ```ts
   * const action =
   *   await client.gpuDroplets.images.actions.retrieve(
   *     36804636,
   *     { image_id: 62137902 },
   *   );
   * ```
   */
  retrieve(
    actionID: number,
    params: ActionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Action> {
    const { image_id } = params;
    return this._client.get(path`/v2/images/${image_id}/actions/${actionID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve all actions that have been executed on an image, send a GET request
   * to `/v2/images/$IMAGE_ID/actions`.
   *
   * @example
   * ```ts
   * const actions =
   *   await client.gpuDroplets.images.actions.list(62137902);
   * ```
   */
  list(imageID: number, options?: RequestOptions): APIPromise<ActionListResponse> {
    return this._client.get(path`/v2/images/${imageID}/actions`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface ActionListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  actions?: Array<Shared.Action>;

  links?: Shared.PageLinks;
}

export type ActionCreateParams = ActionCreateParams.ImageActionBase | ActionCreateParams.ImageActionTransfer;

export declare namespace ActionCreateParams {
  export interface ImageActionBase {
    /**
     * The action to be taken on the image. Can be either `convert` or `transfer`.
     */
    type: 'convert' | 'transfer';
  }

  export interface ImageActionTransfer {
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
     * The action to be taken on the image. Can be either `convert` or `transfer`.
     */
    type: 'convert' | 'transfer';
  }
}

export interface ActionRetrieveParams {
  /**
   * A unique number that can be used to identify and reference a specific image.
   */
  image_id: number;
}

export declare namespace Actions {
  export {
    type ActionListResponse as ActionListResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionRetrieveParams as ActionRetrieveParams,
  };
}
