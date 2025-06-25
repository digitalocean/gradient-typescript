// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EvaluationRuns extends APIResource {
  /**
   * To run an evaluation test case, send a POST request to
   * `/v2/gen-ai/evaluation_runs`.
   */
  create(body: EvaluationRunCreateParams, options?: RequestOptions): APIPromise<EvaluationRunCreateResponse> {
    return this._client.post('/v2/gen-ai/evaluation_runs', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrive information about an existing evaluation run, send a GET request to
   * `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}`.
   */
  retrieve(evaluationRunUuid: string, options?: RequestOptions): APIPromise<EvaluationRunRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/evaluation_runs/${evaluationRunUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve results of an evaluation run, send a GET request to
   * `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results`.
   */
  listResults(
    evaluationRunUuid: string,
    options?: RequestOptions,
  ): APIPromise<EvaluationRunListResultsResponse> {
    return this._client.get(path`/v2/gen-ai/evaluation_runs/${evaluationRunUuid}/results`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve results of an evaluation run, send a GET request to
   * `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}`.
   */
  retrieveResults(
    promptID: number,
    params: EvaluationRunRetrieveResultsParams,
    options?: RequestOptions,
  ): APIPromise<EvaluationRunRetrieveResultsResponse> {
    const { evaluation_run_uuid } = params;
    return this._client.get(path`/v2/gen-ai/evaluation_runs/${evaluation_run_uuid}/results/${promptID}`, {
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

export interface APIEvaluationMetricResult {
  metric_name?: string;

  /**
   * The value of the metric as a number.
   */
  number_value?: number;

  /**
   * The value of the metric as a string.
   */
  string_value?: string;
}

export interface APIEvaluationPrompt {
  /**
   * The ground truth for the prompt.
   */
  ground_truth?: string;

  input?: string;

  output?: string;

  /**
   * The list of prompt chunks.
   */
  prompt_chunks?: Array<APIEvaluationPrompt.PromptChunk>;

  prompt_id?: number;

  /**
   * The metric results for the prompt.
   */
  prompt_level_metric_results?: Array<APIEvaluationMetricResult>;
}

export namespace APIEvaluationPrompt {
  export interface PromptChunk {
    /**
     * The usage percentage of the chunk.
     */
    chunk_usage_pct?: number;

    /**
     * Indicates if the chunk was used in the prompt.
     */
    chunk_used?: boolean;

    /**
     * The index uuid (Knowledge Base) of the chunk.
     */
    index_uuid?: string;

    /**
     * The source name for the chunk, e.g., the file name or document title.
     */
    source_name?: string;

    /**
     * Text content of the chunk.
     */
    text?: string;
  }
}

export interface APIEvaluationRun {
  agent_deleted?: boolean;

  agent_name?: string;

  /**
   * Agent UUID.
   */
  agent_uuid?: string;

  agent_version_hash?: string;

  agent_workspace_uuid?: string;

  created_by_user_email?: string;

  created_by_user_id?: string;

  error_description?: string;

  /**
   * Evaluation run UUID.
   */
  evaluation_run_uuid?: string;

  /**
   * Run end time.
   */
  finished_at?: string;

  /**
   * The pass status of the evaluation run based on the star metric.
   */
  pass_status?: boolean;

  run_level_metric_results?: Array<APIEvaluationMetricResult>;

  /**
   * Run name.
   */
  run_name?: string;

  star_metric_result?: APIEvaluationMetricResult;

  /**
   * Run start time.
   */
  started_at?: string;

  status?:
    | 'EVALUATION_RUN_STATUS_UNSPECIFIED'
    | 'EVALUATION_RUN_QUEUED'
    | 'EVALUATION_RUN_RUNNING_DATASET'
    | 'EVALUATION_RUN_EVALUATING_RESULTS'
    | 'EVALUATION_RUN_CANCELLING'
    | 'EVALUATION_RUN_CANCELLED'
    | 'EVALUATION_RUN_SUCCESSFUL'
    | 'EVALUATION_RUN_PARTIALLY_SUCCESSFUL'
    | 'EVALUATION_RUN_FAILED';

  /**
   * Test-case UUID.
   */
  test_case_uuid?: string;

  /**
   * Test-case-version.
   */
  test_case_version?: number;
}

export interface EvaluationRunCreateResponse {
  evaluation_run_uuids?: Array<string>;
}

export interface EvaluationRunRetrieveResponse {
  evaluation_run?: APIEvaluationRun;
}

/**
 * Gets the full results of an evaluation run with all prompts.
 */
export interface EvaluationRunListResultsResponse {
  evaluation_run?: APIEvaluationRun;

  /**
   * The prompt level results.
   */
  prompts?: Array<APIEvaluationPrompt>;
}

export interface EvaluationRunRetrieveResultsResponse {
  prompt?: APIEvaluationPrompt;
}

export interface EvaluationRunCreateParams {
  /**
   * Agent UUIDs to run the test case against.
   */
  agent_uuids?: Array<string>;

  /**
   * The name of the run.
   */
  run_name?: string;

  test_case_uuid?: string;
}

export interface EvaluationRunRetrieveResultsParams {
  /**
   * Evaluation run UUID.
   */
  evaluation_run_uuid: string;
}

export declare namespace EvaluationRuns {
  export {
    type APIEvaluationMetric as APIEvaluationMetric,
    type APIEvaluationMetricResult as APIEvaluationMetricResult,
    type APIEvaluationPrompt as APIEvaluationPrompt,
    type APIEvaluationRun as APIEvaluationRun,
    type EvaluationRunCreateResponse as EvaluationRunCreateResponse,
    type EvaluationRunRetrieveResponse as EvaluationRunRetrieveResponse,
    type EvaluationRunListResultsResponse as EvaluationRunListResultsResponse,
    type EvaluationRunRetrieveResultsResponse as EvaluationRunRetrieveResultsResponse,
    type EvaluationRunCreateParams as EvaluationRunCreateParams,
    type EvaluationRunRetrieveResultsParams as EvaluationRunRetrieveResultsParams,
  };
}
