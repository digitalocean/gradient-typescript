// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Regions extends APIResource {
  /**
   * To list all of the regions that are available, send a GET request to
   * `/v2/regions`. The response will be a JSON object with a key called `regions`.
   * The value of this will be an array of `region` objects, each of which will
   * contain the standard region attributes.
   *
   * @example
   * ```ts
   * const regions = await client.regions.list();
   * ```
   */
  list(
    query: RegionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RegionListResponse> {
    return this._client.get('/v2/regions', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface RegionListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  regions: Array<Shared.Region>;

  links?: Shared.PageLinks;
}

export interface RegionListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export declare namespace Regions {
  export { type RegionListResponse as RegionListResponse, type RegionListParams as RegionListParams };
}
