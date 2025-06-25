// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Results extends APIResource {
  /**
   * To retrieve results of an evaluation run, send a GET request to
   * `/v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results`.
   */
  retrieve(evaluationRunUuid: string, options?: RequestOptions): APIPromise<ResultRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/evaluation_runs/${evaluationRunUuid}/results`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve results of an evaluation run, send a GET request to
   * `/v2/genai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}`.
   */
  retrievePrompt(
    promptID: number,
    params: ResultRetrievePromptParams,
    options?: RequestOptions,
  ): APIPromise<ResultRetrievePromptResponse> {
    const { evaluation_run_uuid } = params;
    return this._client.get(path`/v2/gen-ai/evaluation_runs/${evaluation_run_uuid}/results/${promptID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
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

export interface APIEvaluationRun {
  /**
   * Agent UUID.
   */
  agent_uuid?: string;

  agent_version_hash?: string;

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

export interface APIPrompt {
  /**
   * The ground truth for the prompt.
   */
  ground_truth?: string;

  input?: string;

  output?: string;

  /**
   * The list of prompt chunks.
   */
  prompt_chunks?: Array<APIPrompt.PromptChunk>;

  prompt_id?: number;

  /**
   * The metric results for the prompt.
   */
  prompt_level_metric_results?: Array<APIEvaluationMetricResult>;
}

export namespace APIPrompt {
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

/**
 * Gets the full results of an evaluation run with all prompts.
 */
export interface ResultRetrieveResponse {
  evaluation_run?: APIEvaluationRun;

  /**
   * The prompt level results.
   */
  prompts?: Array<APIPrompt>;
}

export interface ResultRetrievePromptResponse {
  prompt?: APIPrompt;
}

export interface ResultRetrievePromptParams {
  /**
   * Evaluation run UUID.
   */
  evaluation_run_uuid: string;
}

export declare namespace Results {
  export {
    type APIEvaluationMetricResult as APIEvaluationMetricResult,
    type APIEvaluationRun as APIEvaluationRun,
    type APIPrompt as APIPrompt,
    type ResultRetrieveResponse as ResultRetrieveResponse,
    type ResultRetrievePromptResponse as ResultRetrievePromptResponse,
    type ResultRetrievePromptParams as ResultRetrievePromptParams,
  };
}
