// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvaluationTestCasesAPI from './evaluation-test-cases';
import { APIEvaluationTestCase, APIStarMetric, EvaluationTestCases } from './evaluation-test-cases';
import * as EvaluationRunsAPI from './evaluation-runs/evaluation-runs';
import { EvaluationRuns } from './evaluation-runs/evaluation-runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Regions extends APIResource {
  evaluationRuns: EvaluationRunsAPI.EvaluationRuns = new EvaluationRunsAPI.EvaluationRuns(this._client);
  evaluationTestCases: EvaluationTestCasesAPI.EvaluationTestCases =
    new EvaluationTestCasesAPI.EvaluationTestCases(this._client);

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

export interface APIEvaluationMetric {
  description?: string;

  metric_name?: string;

  metric_type?: 'METRIC_TYPE_UNSPECIFIED' | 'METRIC_TYPE_GENERAL_QUALITY' | 'METRIC_TYPE_RAG_AND_TOOL';

  metric_uuid?: string;

  metric_value_type?:
    | 'METRIC_VALUE_TYPE_UNSPECIFIED'
    | 'METRIC_VALUE_TYPE_NUMBER'
    | 'METRIC_VALUE_TYPE_STRING';
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

Regions.EvaluationRuns = EvaluationRuns;
Regions.EvaluationTestCases = EvaluationTestCases;

export declare namespace Regions {
  export {
    type APIEvaluationMetric as APIEvaluationMetric,
    type RegionListResponse as RegionListResponse,
    type RegionListParams as RegionListParams,
  };

  export { EvaluationRuns as EvaluationRuns };

  export {
    EvaluationTestCases as EvaluationTestCases,
    type APIEvaluationTestCase as APIEvaluationTestCase,
    type APIStarMetric as APIStarMetric,
  };
}
