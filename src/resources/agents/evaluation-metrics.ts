// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvaluationRunsAPI from './evaluation-runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class EvaluationMetrics extends APIResource {
  /**
   * To list all evaluation metrics, send a GET request to
   * `/v2/gen-ai/evaluation_metrics`.
   */
  list(options?: RequestOptions): APIPromise<EvaluationMetricListResponse> {
    return this._client.get('/v2/gen-ai/evaluation_metrics', {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface EvaluationMetricListResponse {
  metrics?: Array<EvaluationRunsAPI.APIEvaluationMetric>;
}

export declare namespace EvaluationMetrics {
  export { type EvaluationMetricListResponse as EvaluationMetricListResponse };
}
