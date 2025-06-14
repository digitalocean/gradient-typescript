// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import * as VersionsAPI from '../agents/versions';
import * as APIKeysAPIKeysAPI from './api-keys_';
import {
  APIKeyCreateParams,
  APIKeyCreateResponse,
  APIKeyDeleteResponse,
  APIKeyUpdateParams,
  APIKeyUpdateRegenerateResponse,
  APIKeyUpdateResponse,
  APIKeys as APIKeysAPIAPIKeys,
  APIModelAPIKeyInfo,
} from './api-keys_';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class APIKeys extends APIResource {
  apiKeys: APIKeysAPIKeysAPI.APIKeys = new APIKeysAPIKeysAPI.APIKeys(this._client);

  /**
   * To list all models, send a GET request to `/v2/gen-ai/models`.
   */
  list(
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get('/v2/gen-ai/models', { query, ...options });
  }
}

export interface APIAgreement {
  description?: string;

  name?: string;

  url?: string;

  uuid?: string;
}

export interface APIModelVersion {
  major?: number;

  minor?: number;

  patch?: number;
}

export interface APIKeyListResponse {
  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;

  models?: Array<APIKeyListResponse.Model>;
}

export namespace APIKeyListResponse {
  export interface Model {
    agreement?: APIKeysAPI.APIAgreement;

    created_at?: string;

    is_foundational?: boolean;

    name?: string;

    parent_uuid?: string;

    updated_at?: string;

    upload_complete?: boolean;

    url?: string;

    uuid?: string;

    version?: APIKeysAPI.APIModelVersion;
  }
}

export interface APIKeyListParams {
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

APIKeys.APIKeys = APIKeysAPIAPIKeys;

export declare namespace APIKeys {
  export {
    type APIAgreement as APIAgreement,
    type APIModelVersion as APIModelVersion,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyListParams as APIKeyListParams,
  };

  export {
    APIKeysAPIAPIKeys as APIKeys,
    type APIModelAPIKeyInfo as APIModelAPIKeyInfo,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyUpdateRegenerateResponse as APIKeyUpdateRegenerateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
  };
}
