// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ProvidersAPI from './providers/providers';
import { Providers } from './providers/providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Models extends APIResource {
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);

  /**
   * To list all models, send a GET request to `/v2/gen-ai/models`.
   *
   * @example
   * ```ts
   * const models = await client.models.list();
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

/**
 * Agreement Description
 */
export interface APIAgreement {
  description?: string;

  name?: string;

  url?: string;

  uuid?: string;
}

/**
 * A machine learning model stored on the GenAI platform
 */
export interface APIModel {
  /**
   * Agreement Description
   */
  agreement?: APIAgreement;

  /**
   * Creation date / time
   */
  created_at?: string;

  /**
   * True if it is a foundational model provided by do
   */
  is_foundational?: boolean;

  /**
   * Name of the model
   */
  name?: string;

  /**
   * Unique id of the model, this model is based on
   */
  parent_uuid?: string;

  /**
   * Last modified
   */
  updated_at?: string;

  /**
   * Model has been fully uploaded
   */
  upload_complete?: boolean;

  /**
   * Download url
   */
  url?: string;

  /**
   * Unique id
   */
  uuid?: string;

  /**
   * Version Information about a Model
   */
  version?: APIModelVersion;
}

/**
 * Version Information about a Model
 */
export interface APIModelVersion {
  /**
   * Major version number
   */
  major?: number;

  /**
   * Minor version number
   */
  minor?: number;

  /**
   * Patch version number
   */
  patch?: number;
}

/**
 * A list of models
 */
export interface ModelListResponse {
  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;

  /**
   * The models
   */
  models?: Array<APIModel>;
}

export interface ModelListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;

  /**
   * Only include models that are publicly available.
   */
  public_only?: boolean;

  /**
   * Include only models defined for the listed usecases.
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

Models.Providers = Providers;

export declare namespace Models {
  export {
    type APIAgreement as APIAgreement,
    type APIModel as APIModel,
    type APIModelVersion as APIModelVersion,
    type ModelListResponse as ModelListResponse,
    type ModelListParams as ModelListParams,
  };

  export { Providers as Providers };
}
