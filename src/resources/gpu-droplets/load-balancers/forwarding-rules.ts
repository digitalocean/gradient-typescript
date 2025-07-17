// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LoadBalancersAPI from './load-balancers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ForwardingRules extends APIResource {
  /**
   * To add an additional forwarding rule to a load balancer instance, send a POST
   * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body
   * of the request, there should be a `forwarding_rules` attribute containing an
   * array of rules to be added.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.loadBalancers.forwardingRules.add(
   *   '4de7ac8b-495b-4884-9a69-1050c6793cd6',
   *   {
   *     forwarding_rules: [
   *       {
   *         entry_port: 443,
   *         entry_protocol: 'https',
   *         target_port: 80,
   *         target_protocol: 'http',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  add(lbID: string, body: ForwardingRuleAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v2/load_balancers/${lbID}/forwarding_rules`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To remove forwarding rules from a load balancer instance, send a DELETE request
   * to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body of the
   * request, there should be a `forwarding_rules` attribute containing an array of
   * rules to be removed.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.loadBalancers.forwardingRules.remove(
   *   '4de7ac8b-495b-4884-9a69-1050c6793cd6',
   *   {
   *     forwarding_rules: [
   *       {
   *         entry_port: 443,
   *         entry_protocol: 'https',
   *         target_port: 80,
   *         target_protocol: 'http',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  remove(lbID: string, body: ForwardingRuleRemoveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/load_balancers/${lbID}/forwarding_rules`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ForwardingRuleAddParams {
  forwarding_rules: Array<LoadBalancersAPI.ForwardingRule>;
}

export interface ForwardingRuleRemoveParams {
  forwarding_rules: Array<LoadBalancersAPI.ForwardingRule>;
}

export declare namespace ForwardingRules {
  export {
    type ForwardingRuleAddParams as ForwardingRuleAddParams,
    type ForwardingRuleRemoveParams as ForwardingRuleRemoveParams,
  };
}
