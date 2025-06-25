// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AgentsAPI from '../../agents/agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * To create an Anthropic API key, send a POST request to
   * `/v2/gen-ai/anthropic/keys`.
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post('/v2/gen-ai/anthropic/keys', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve details of an Anthropic API key, send a GET request to
   * `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
   */
  retrieve(apiKeyUuid: string, options?: RequestOptions): APIPromise<KeyRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/anthropic/keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update an Anthropic API key, send a PUT request to
   * `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
   */
  update(apiKeyUuid: string, body: KeyUpdateParams, options?: RequestOptions): APIPromise<KeyUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/anthropic/keys/${apiKeyUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all Anthropic API keys, send a GET request to
   * `/v2/gen-ai/anthropic/keys`.
   */
  list(query: KeyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<KeyListResponse> {
    return this._client.get('/v2/gen-ai/anthropic/keys', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete an Anthropic API key, send a DELETE request to
   * `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<KeyDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/anthropic/keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * List Agents by Anthropic Key.
   */
  listAgents(
    uuid: string,
    query: KeyListAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KeyListAgentsResponse> {
    return this._client.get(path`/v2/gen-ai/anthropic/keys/${uuid}/agents`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * CreateAnthropicAPIKeyOutput is used to return the newly created Anthropic API
 * key.
 */
export interface KeyCreateResponse {
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

export interface KeyRetrieveResponse {
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * UpdateAnthropicAPIKeyOutput is used to return the updated Anthropic API key.
 */
export interface KeyUpdateResponse {
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * ListAnthropicAPIKeysOutput is used to return the list of Anthropic API keys for
 * a specific agent.
 */
export interface KeyListResponse {
  api_key_infos?: Array<AgentsAPI.APIAnthropicAPIKeyInfo>;

  links?: Shared.APILinks;

  meta?: Shared.APIMeta;
}

/**
 * DeleteAnthropicAPIKeyOutput is used to return the deleted Anthropic API key.
 */
export interface KeyDeleteResponse {
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

export interface KeyListAgentsResponse {
  agents?: Array<AgentsAPI.APIAgent>;

  links?: Shared.APILinks;

  meta?: Shared.APIMeta;
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

export interface KeyListAgentsParams {
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
    type KeyListAgentsResponse as KeyListAgentsResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
    type KeyListAgentsParams as KeyListAgentsParams,
  };
}
