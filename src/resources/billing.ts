// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Billing extends APIResource {
  /**
   * This endpoint returns day-over-day changes in billing resource usage based on
   * nightly invoice items, including total amount, region, SKU, and description for
   * a specified date range. It is important to note that the daily resource usage
   * may not reflect month-end billing totals when totaled for a given month as
   * nightly invoice item estimates do not necessarily encompass all invoicing
   * factors for the entire month.
   *
   * @example
   * ```ts
   * const response = await client.billing.listInsights(
   *   '2025-01-31',
   *   {
   *     account_urn:
   *       'do:team:12345678-1234-1234-1234-123456789012',
   *     start_date: '2025-01-01',
   *   },
   * );
   * ```
   */
  listInsights(
    endDate: string,
    params: BillingListInsightsParams,
    options?: RequestOptions,
  ): APIPromise<BillingListInsightsResponse> {
    const { account_urn, start_date, ...query } = params;
    return this._client.get(path`/v2/billing/${account_urn}/insights/${start_date}/${endDate}`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface BillingListInsightsResponse {
  /**
   * Current page number
   */
  current_page: number;

  /**
   * Array of billing data points, which are day-over-day changes in billing resource
   * usage based on nightly invoice item estimates, for the requested period
   */
  data_points: Array<BillingListInsightsResponse.DataPoint>;

  /**
   * Total number of items available across all pages
   */
  total_items: number;

  /**
   * Total number of pages available
   */
  total_pages: number;
}

export namespace BillingListInsightsResponse {
  export interface DataPoint {
    /**
     * Description of the billed resource or service as shown on an invoice item
     */
    description?: string;

    /**
     * Optional invoice item group name of the billed resource or service, blank when
     * not part an invoice item group
     */
    group_description?: string;

    /**
     * Region where the usage occurred
     */
    region?: string;

    /**
     * Unique SKU identifier for the billed resource
     */
    sku?: string;

    /**
     * Start date of the billing data point in YYYY-MM-DD format
     */
    start_date?: string;

    /**
     * Total amount for this data point in USD
     */
    total_amount?: string;

    /**
     * URN of the team that incurred the usage
     */
    usage_team_urn?: string;
  }
}

export interface BillingListInsightsParams {
  /**
   * Path param: URN of the customer account, can be a team (do:team:uuid) or an
   * organization (do:teamgroup:uuid)
   */
  account_urn: string;

  /**
   * Path param: Start date for billing insights in YYYY-MM-DD format
   */
  start_date: string;

  /**
   * Query param: Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Query param: Number of items returned per page
   */
  per_page?: number;
}

export declare namespace Billing {
  export {
    type BillingListInsightsResponse as BillingListInsightsResponse,
    type BillingListInsightsParams as BillingListInsightsParams,
  };
}
