// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VersionsAPI from './agents/versions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * To list all models, send a GET request to `/v2/gen-ai/models`.
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

export interface APIModel {
  agreement?: APIModel.Agreement;

  created_at?: string;

  is_foundational?: boolean;

  name?: string;

  parent_uuid?: string;

  updated_at?: string;

  upload_complete?: boolean;

  url?: string;

  uuid?: string;

  version?: APIModel.Version;
}

export namespace APIModel {
  export interface Agreement {
    description?: string;

    name?: string;

    url?: string;

    uuid?: string;
  }

  export interface Version {
    major?: number;

    minor?: number;

    patch?: number;
  }
}

export interface ModelListResponse {
  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;

  models?: Array<APIModel>;
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
  export {
    type APIModel as APIModel,
    type ModelListResponse as ModelListResponse,
    type ModelListParams as ModelListParams,
  };
}
