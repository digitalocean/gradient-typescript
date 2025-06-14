// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../../agents/agents';
import * as VersionsAPI from '../../agents/versions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * To create an OpenAI API key, send a POST request to `/v2/gen-ai/openai/keys`.
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post('/v2/gen-ai/openai/keys', { body, ...options });
  }

  /**
   * To retrieve details of an OpenAI API key, send a GET request to
   * `/v2/gen-ai/openai/keys/{api_key_uuid}`.
   */
  retrieve(apiKeyUuid: string, options?: RequestOptions): APIPromise<KeyRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/openai/keys/${apiKeyUuid}`, options);
  }

  /**
   * To update an OpenAI API key, send a PUT request to
   * `/v2/gen-ai/openai/keys/{api_key_uuid}`.
   */
  update(apiKeyUuid: string, body: KeyUpdateParams, options?: RequestOptions): APIPromise<KeyUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/openai/keys/${apiKeyUuid}`, { body, ...options });
  }

  /**
   * To list all OpenAI API keys, send a GET request to `/v2/gen-ai/openai/keys`.
   */
  list(query: KeyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<KeyListResponse> {
    return this._client.get('/v2/gen-ai/openai/keys', { query, ...options });
  }

  /**
   * To delete an OpenAI API key, send a DELETE request to
   * `/v2/gen-ai/openai/keys/{api_key_uuid}`.
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<KeyDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/openai/keys/${apiKeyUuid}`, options);
  }

  /**
   * List Agents by OpenAI Key.
   */
  retrieveAgents(
    uuid: string,
    query: KeyRetrieveAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KeyRetrieveAgentsResponse> {
    return this._client.get(path`/v2/gen-ai/openai/keys/${uuid}/agents`, { query, ...options });
  }
}

/**
 * CreateOpenAIAPIKeyOutput is used to return the newly created OpenAI API key.
 */
export interface KeyCreateResponse {
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

export interface KeyRetrieveResponse {
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

/**
 * UpdateOpenAIAPIKeyOutput is used to return the updated OpenAI API key.
 */
export interface KeyUpdateResponse {
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

/**
 * ListOpenAIAPIKeysOutput is used to return the list of OpenAI API keys for a
 * specific agent.
 */
export interface KeyListResponse {
  api_key_infos?: Array<AgentsAPI.APIOpenAIAPIKeyInfo>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
}

/**
 * DeleteOpenAIAPIKeyOutput is used to return the deleted OpenAI API key.
 */
export interface KeyDeleteResponse {
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

export interface KeyRetrieveAgentsResponse {
  agents?: Array<AgentsAPI.APIAgent>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
}

export interface KeyCreateParams {
  api_key?: string;

  name?: string;
}

export interface KeyUpdateParams {
  api_key?: string;

  body_api_key_uuid?: string;

  name?: string;
}

export interface KeyListParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;
}

export interface KeyRetrieveAgentsParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;
}

export declare namespace Keys {
  export {
    type KeyCreateResponse as KeyCreateResponse,
    type KeyRetrieveResponse as KeyRetrieveResponse,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyDeleteResponse as KeyDeleteResponse,
    type KeyRetrieveAgentsResponse as KeyRetrieveAgentsResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
    type KeyRetrieveAgentsParams as KeyRetrieveAgentsParams,
  };
}
