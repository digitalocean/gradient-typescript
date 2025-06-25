// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RegionsAPI from './regions';
import * as ResultsAPI from './evaluation-runs/results';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EvaluationTestCases extends APIResource {
  /**
   * To create an evaluation test-case send a POST request to
   * `/v2/gen-ai/evaluation_test_cases`.
   */
  create(
    body: EvaluationTestCaseCreateParams,
    options?: RequestOptions,
  ): APIPromise<EvaluationTestCaseCreateResponse> {
    return this._client.post('/v2/gen-ai/evaluation_test_cases', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrive information about an existing evaluation test case, send a GET
   * request to `/v2/gen-ai/evaluation_test_case/{test_case_uuid}`.
   */
  retrieve(testCaseUuid: string, options?: RequestOptions): APIPromise<EvaluationTestCaseRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/evaluation_test_cases/${testCaseUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update an evaluation test-case send a POST request to
   * `/v2/gen-ai/evaluation_test_cases/{test_case_uuid}`.
   */
  update(
    testCaseUuid: string,
    body: EvaluationTestCaseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EvaluationTestCaseUpdateResponse> {
    return this._client.post(path`/v2/gen-ai/evaluation_test_cases/${testCaseUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all evaluation test cases, send a GET request to
   * `/v2/gen-ai/evaluation_test_cases`.
   */
  list(options?: RequestOptions): APIPromise<EvaluationTestCaseListResponse> {
    return this._client.get('/v2/gen-ai/evaluation_test_cases', {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all evaluation runs by test case, send a GET request to
   * `/v2/gen-ai/evaluation_test_cases/{evaluation_test_case_uuid}/evaluation_runs`.
   */
  listEvaluationRuns(
    evaluationTestCaseUuid: string,
    query: EvaluationTestCaseListEvaluationRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvaluationTestCaseListEvaluationRunsResponse> {
    return this._client.get(
      path`/v2/gen-ai/evaluation_test_cases/${evaluationTestCaseUuid}/evaluation_runs`,
      { query, defaultBaseURL: 'https://api.digitalocean.com', ...options },
    );
  }
}

export interface APIEvaluationTestCase {
  archived_at?: string;

  created_at?: string;

  created_by_user_email?: string;

  created_by_user_id?: string;

  dataset_name?: string;

  dataset_uuid?: string;

  description?: string;

  latest_version_number_of_runs?: number;

  metrics?: Array<RegionsAPI.APIEvaluationMetric>;

  name?: string;

  star_metric?: APIStarMetric;

  test_case_uuid?: string;

  total_runs?: number;

  updated_at?: string;

  updated_by_user_email?: string;

  updated_by_user_id?: string;

  version?: number;
}

export interface APIStarMetric {
  metric_uuid?: string;

  name?: string;

  /**
   * The success threshold for the star metric. This is a percentage value between 0
   * and 100.
   */
  success_threshold_pct?: number;
}

export interface EvaluationTestCaseCreateResponse {
  /**
   * Test‑case UUID.
   */
  test_case_uuid?: string;
}

export interface EvaluationTestCaseRetrieveResponse {
  evaluation_test_case?: APIEvaluationTestCase;
}

export interface EvaluationTestCaseUpdateResponse {
  test_case_uuid?: string;

  /**
   * The new verson of the test case.
   */
  version?: number;
}

export interface EvaluationTestCaseListResponse {
  evaluation_test_cases?: Array<APIEvaluationTestCase>;
}

export interface EvaluationTestCaseListEvaluationRunsResponse {
  /**
   * List of evaluation runs.
   */
  evaluation_runs?: Array<ResultsAPI.APIEvaluationRun>;
}

export interface EvaluationTestCaseCreateParams {
  /**
   * Dataset against which the test‑case is executed.
   */
  dataset_uuid?: string;

  /**
   * Description of the test case.
   */
  description?: string;

  /**
   * Full metric list to use for evaluation test case.
   */
  metrics?: Array<string>;

  /**
   * Name of the test case.
   */
  name?: string;

  star_metric?: APIStarMetric;

  /**
   * The workspace uuid.
   */
  workspace_uuid?: string;
}

export interface EvaluationTestCaseUpdateParams {
  /**
   * Dataset against which the test‑case is executed.
   */
  dataset_uuid?: string;

  /**
   * Description of the test case.
   */
  description?: string;

  metrics?: EvaluationTestCaseUpdateParams.Metrics;

  /**
   * Name of the test case.
   */
  name?: string;

  star_metric?: APIStarMetric;

  body_test_case_uuid?: string;
}

export namespace EvaluationTestCaseUpdateParams {
  export interface Metrics {
    metric_uuids?: Array<string>;
  }
}

export interface EvaluationTestCaseListEvaluationRunsParams {
  /**
   * Version of the test case.
   */
  evaluation_test_case_version?: number;
}

export declare namespace EvaluationTestCases {
  export {
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
}
