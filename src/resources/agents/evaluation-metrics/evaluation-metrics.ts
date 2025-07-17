// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EvaluationRunsAPI from '../evaluation-runs';
import * as ModelsAPI from './models';
import { ModelListParams, ModelListResponse, Models } from './models';
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
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);

  /**
   * To list all evaluation metrics, send a GET request to
   * `/v2/gen-ai/evaluation_metrics`.
   *
   * @example
   * ```ts
   * const evaluationMetrics =
   *   await client.agents.evaluationMetrics.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<EvaluationMetricListResponse> {
    return this._client.get('/v2/gen-ai/evaluation_metrics', {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all datacenter regions, send a GET request to `/v2/gen-ai/regions`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.evaluationMetrics.listRegions();
   * ```
   */
  listRegions(
    query: EvaluationMetricListRegionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvaluationMetricListRegionsResponse> {
    return this._client.get('/v2/gen-ai/regions', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface EvaluationMetricListResponse {
  metrics?: Array<EvaluationRunsAPI.APIEvaluationMetric>;
}

export interface EvaluationMetricListRegionsResponse {
  regions?: Array<EvaluationMetricListRegionsResponse.Region>;
}

export namespace EvaluationMetricListRegionsResponse {
  export interface Region {
    inference_url?: string;

    region?: string;

    serves_batch?: boolean;

    serves_inference?: boolean;

    stream_inference_url?: string;
  }
}

export interface EvaluationMetricListRegionsParams {
  /**
   * include datacenters that are capable of running batch jobs.
   */
  serves_batch?: boolean;

  /**
   * include datacenters that serve inference.
   */
  serves_inference?: boolean;
}

EvaluationMetrics.Workspaces = Workspaces;
EvaluationMetrics.Models = Models;

export declare namespace EvaluationMetrics {
  export {
    type EvaluationMetricListResponse as EvaluationMetricListResponse,
    type EvaluationMetricListRegionsResponse as EvaluationMetricListRegionsResponse,
    type EvaluationMetricListRegionsParams as EvaluationMetricListRegionsParams,
  };

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

  export {
    Models as Models,
    type ModelListResponse as ModelListResponse,
    type ModelListParams as ModelListParams,
  };
}
