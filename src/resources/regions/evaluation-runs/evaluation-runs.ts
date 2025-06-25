// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResultsAPI from './results';
import {
  APIEvaluationMetricResult,
  APIEvaluationRun,
  APIPrompt,
  ResultRetrievePromptParams,
  ResultRetrievePromptResponse,
  ResultRetrieveResponse,
  Results,
} from './results';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class EvaluationRuns extends APIResource {
  results: ResultsAPI.Results = new ResultsAPI.Results(this._client);

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
}

export interface EvaluationRunCreateResponse {
  evaluation_run_uuid?: string;
}

export interface EvaluationRunRetrieveResponse {
  evaluation_run?: ResultsAPI.APIEvaluationRun;
}

export interface EvaluationRunCreateParams {
  /**
   * Agent UUID to run the test case against.
   */
  agent_uuid?: string;

  /**
   * The name of the run.
   */
  run_name?: string;

  test_case_uuid?: string;
}

EvaluationRuns.Results = Results;

export declare namespace EvaluationRuns {
  export {
    type EvaluationRunCreateResponse as EvaluationRunCreateResponse,
    type EvaluationRunRetrieveResponse as EvaluationRunRetrieveResponse,
    type EvaluationRunCreateParams as EvaluationRunCreateParams,
  };

  export {
    Results as Results,
    type APIEvaluationMetricResult as APIEvaluationMetricResult,
    type APIEvaluationRun as APIEvaluationRun,
    type APIPrompt as APIPrompt,
    type ResultRetrieveResponse as ResultRetrieveResponse,
    type ResultRetrievePromptResponse as ResultRetrievePromptResponse,
    type ResultRetrievePromptParams as ResultRetrievePromptParams,
  };
}
