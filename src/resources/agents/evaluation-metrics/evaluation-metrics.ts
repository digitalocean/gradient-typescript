// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EvaluationRunsAPI from '../evaluation-runs';
import * as WorkspacesAPI from './workspaces/workspaces';
import {
  WorkspaceCreateParams,
  WorkspaceCreateResponse,
  WorkspaceDeleteResponse,
  WorkspaceListEvaluationTestCasesResponse,
  WorkspaceListResponse,
  WorkspaceRetrieveResponse,
  WorkspaceUpdateParams,
  WorkspaceUpdateResponse,
  Workspaces,
} from './workspaces/workspaces';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class EvaluationMetrics extends APIResource {
  workspaces: WorkspacesAPI.Workspaces = new WorkspacesAPI.Workspaces(this._client);

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

EvaluationMetrics.Workspaces = Workspaces;

export declare namespace EvaluationMetrics {
  export { type EvaluationMetricListResponse as EvaluationMetricListResponse };

  export {
    Workspaces as Workspaces,
    type WorkspaceCreateResponse as WorkspaceCreateResponse,
    type WorkspaceRetrieveResponse as WorkspaceRetrieveResponse,
    type WorkspaceUpdateResponse as WorkspaceUpdateResponse,
    type WorkspaceListResponse as WorkspaceListResponse,
    type WorkspaceDeleteResponse as WorkspaceDeleteResponse,
    type WorkspaceListEvaluationTestCasesResponse as WorkspaceListEvaluationTestCasesResponse,
    type WorkspaceCreateParams as WorkspaceCreateParams,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
  };
}
