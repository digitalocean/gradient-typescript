// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * The sizes objects represent different packages of hardware resources that
 * can be used for Droplets. When a Droplet is created, a size must be
 * selected so that the correct resources can be allocated.
 *
 * Each size represents a plan that bundles together specific sets of
 * resources. This includes the amount of RAM, the number of virtual CPUs,
 * disk space, and transfer. The size object also includes the pricing
 * details and the regions that the size is available in.
 */
export class Sizes extends APIResource {
  /**
   * To list all of available Droplet sizes, send a GET request to `/v2/sizes`. The
   * response will be a JSON object with a key called `sizes`. The value of this will
   * be an array of `size` objects each of which contain the standard size
   * attributes.
   *
   * @example
   * ```ts
   * const sizes = await client.gpuDroplets.sizes.list();
   * ```
   */
  list(query: SizeListParams | null | undefined = {}, options?: RequestOptions): APIPromise<SizeListResponse> {
    return this._client.get('/v2/sizes', { query, defaultBaseURL: 'https://api.digitalocean.com', ...options });
  }
}

export interface SizeListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  sizes: Array<Shared.Size>;

  links?: Shared.PageLinks;
}

export interface SizeListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export declare namespace Sizes {
  export {
    type SizeListResponse as SizeListResponse,
    type SizeListParams as SizeListParams
  };
}
