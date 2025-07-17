// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ModelsAPI from '../../models/models';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Models extends APIResource {
  /**
   * To list all models, send a GET request to `/v2/gen-ai/models`.
   *
   * @example
   * ```ts
   * const models =
   *   await client.agents.evaluationMetrics.models.list();
   * ```
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListResponse> {
    return this._client.get('/v2/gen-ai/models', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface ModelListResponse {
  links?: Shared.APILinks;

  meta?: Shared.APIMeta;

  models?: Array<ModelsAPI.APIModel>;
}

export interface ModelListParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;

  /**
   * only include models that are publicly available.
   */
  public_only?: boolean;

  /**
   * include only models defined for the listed usecases.
   *
   * - MODEL_USECASE_UNKNOWN: The use case of the model is unknown
   * - MODEL_USECASE_AGENT: The model maybe used in an agent
   * - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning
   * - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases
   *   (embedding models)
   * - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails
   * - MODEL_USECASE_REASONING: The model usecase for reasoning
   * - MODEL_USECASE_SERVERLESS: The model usecase for serverless inference
   */
  usecases?: Array<
    | 'MODEL_USECASE_UNKNOWN'
    | 'MODEL_USECASE_AGENT'
    | 'MODEL_USECASE_FINETUNED'
    | 'MODEL_USECASE_KNOWLEDGEBASE'
    | 'MODEL_USECASE_GUARDRAIL'
    | 'MODEL_USECASE_REASONING'
    | 'MODEL_USECASE_SERVERLESS'
  >;
}

export declare namespace Models {
  export { type ModelListResponse as ModelListResponse, type ModelListParams as ModelListParams };
}
