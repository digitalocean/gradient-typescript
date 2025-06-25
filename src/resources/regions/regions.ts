// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvaluationDatasetsAPI from './evaluation-datasets';
import {
  EvaluationDatasetCreateFileUploadPresignedURLsParams,
  EvaluationDatasetCreateFileUploadPresignedURLsResponse,
  EvaluationDatasetCreateParams,
  EvaluationDatasetCreateResponse,
  EvaluationDatasets,
} from './evaluation-datasets';
import * as EvaluationTestCasesAPI from './evaluation-test-cases';
import {
  APIEvaluationTestCase,
  APIStarMetric,
  EvaluationTestCaseCreateParams,
  EvaluationTestCaseCreateResponse,
  EvaluationTestCaseListEvaluationRunsParams,
  EvaluationTestCaseListEvaluationRunsResponse,
  EvaluationTestCaseListResponse,
  EvaluationTestCaseRetrieveResponse,
  EvaluationTestCaseUpdateParams,
  EvaluationTestCaseUpdateResponse,
  EvaluationTestCases,
} from './evaluation-test-cases';
import * as EvaluationRunsAPI from './evaluation-runs/evaluation-runs';
import {
  EvaluationRunCreateParams,
  EvaluationRunCreateResponse,
  EvaluationRunRetrieveResponse,
  EvaluationRuns,
} from './evaluation-runs/evaluation-runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Regions extends APIResource {
  evaluationRuns: EvaluationRunsAPI.EvaluationRuns = new EvaluationRunsAPI.EvaluationRuns(this._client);
  evaluationTestCases: EvaluationTestCasesAPI.EvaluationTestCases =
    new EvaluationTestCasesAPI.EvaluationTestCases(this._client);
  evaluationDatasets: EvaluationDatasetsAPI.EvaluationDatasets = new EvaluationDatasetsAPI.EvaluationDatasets(
    this._client,
  );

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

  /**
   * To list all evaluation metrics, send a GET request to
   * `/v2/gen-ai/evaluation_metrics`.
   */
  listEvaluationMetrics(options?: RequestOptions): APIPromise<RegionListEvaluationMetricsResponse> {
    return this._client.get('/v2/gen-ai/evaluation_metrics', {
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

export interface RegionListEvaluationMetricsResponse {
  metrics?: Array<APIEvaluationMetric>;
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
Regions.EvaluationDatasets = EvaluationDatasets;

export declare namespace Regions {
  export {
    type APIEvaluationMetric as APIEvaluationMetric,
    type RegionListResponse as RegionListResponse,
    type RegionListEvaluationMetricsResponse as RegionListEvaluationMetricsResponse,
    type RegionListParams as RegionListParams,
  };

  export {
    EvaluationRuns as EvaluationRuns,
    type EvaluationRunCreateResponse as EvaluationRunCreateResponse,
    type EvaluationRunRetrieveResponse as EvaluationRunRetrieveResponse,
    type EvaluationRunCreateParams as EvaluationRunCreateParams,
  };

  export {
    EvaluationTestCases as EvaluationTestCases,
    type APIEvaluationTestCase as APIEvaluationTestCase,
    type APIStarMetric as APIStarMetric,
    type EvaluationTestCaseCreateResponse as EvaluationTestCaseCreateResponse,
    type EvaluationTestCaseRetrieveResponse as EvaluationTestCaseRetrieveResponse,
    type EvaluationTestCaseUpdateResponse as EvaluationTestCaseUpdateResponse,
    type EvaluationTestCaseListResponse as EvaluationTestCaseListResponse,
    type EvaluationTestCaseListEvaluationRunsResponse as EvaluationTestCaseListEvaluationRunsResponse,
    type EvaluationTestCaseCreateParams as EvaluationTestCaseCreateParams,
    type EvaluationTestCaseUpdateParams as EvaluationTestCaseUpdateParams,
    type EvaluationTestCaseListEvaluationRunsParams as EvaluationTestCaseListEvaluationRunsParams,
  };

  export {
    EvaluationDatasets as EvaluationDatasets,
    type EvaluationDatasetCreateResponse as EvaluationDatasetCreateResponse,
    type EvaluationDatasetCreateFileUploadPresignedURLsResponse as EvaluationDatasetCreateFileUploadPresignedURLsResponse,
    type EvaluationDatasetCreateParams as EvaluationDatasetCreateParams,
    type EvaluationDatasetCreateFileUploadPresignedURLsParams as EvaluationDatasetCreateFileUploadPresignedURLsParams,
  };
}
