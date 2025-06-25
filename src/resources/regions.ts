// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Regions extends APIResource {
  /**
   * To list all datacenter regions, send a GET request to `/v2/gen-ai/regions`.
   */
  list(
    query: RegionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RegionListResponse> {
    return this._client.get('/v2/gen-ai/regions', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface RegionListResponse {
  regions?: Array<RegionListResponse.Region>;
}

export namespace RegionListResponse {
  export interface Region {
    inference_url?: string;

    region?: string;

    serves_batch?: boolean;

    serves_inference?: boolean;

    stream_inference_url?: string;
  }
}

export interface RegionListParams {
  /**
   * include datacenters that are capable of running batch jobs.
   */
  serves_batch?: boolean;

  /**
   * include datacenters that serve inference.
   */
  serves_inference?: boolean;
}

export declare namespace Regions {
  export { type RegionListResponse as RegionListResponse, type RegionListParams as RegionListParams };
}
