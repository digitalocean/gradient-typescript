// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as AgentsAPI from '../../agents';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * To create an Anthropic API key, send a POST request to
   * `/v2/gen-ai/anthropic/keys`.
   *
   * @example
   * ```ts
   * const key =
   *   await client.agents.evaluationMetrics.anthropic.keys.create();
   * ```
   */
  create(
    body: KeyCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KeyCreateResponse> {
    return this._client.post('/v2/gen-ai/anthropic/keys', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve details of an Anthropic API key, send a GET request to
   * `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
   *
   * @example
   * ```ts
   * const key =
   *   await client.agents.evaluationMetrics.anthropic.keys.retrieve(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const key =
   *   await client.agents.evaluationMetrics.anthropic.keys.update(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  update(
    apiKeyUuid: string,
    body: KeyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KeyUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/anthropic/keys/${apiKeyUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all Anthropic API keys, send a GET request to
   * `/v2/gen-ai/anthropic/keys`.
   *
   * @example
   * ```ts
   * const keys =
   *   await client.agents.evaluationMetrics.anthropic.keys.list();
   * ```
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
   *
   * @example
   * ```ts
   * const key =
   *   await client.agents.evaluationMetrics.anthropic.keys.delete(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<KeyDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/anthropic/keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * List Agents by Anthropic Key.
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.evaluationMetrics.anthropic.keys.listAgents(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
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
  /**
   * Anthropic API Key Info
   */
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

export interface KeyRetrieveResponse {
  /**
   * Anthropic API Key Info
   */
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * UpdateAnthropicAPIKeyOutput is used to return the updated Anthropic API key.
 */
export interface KeyUpdateResponse {
  /**
   * Anthropic API Key Info
   */
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * ListAnthropicAPIKeysOutput is used to return the list of Anthropic API keys for
 * a specific agent.
 */
export interface KeyListResponse {
  /**
   * Api key infos
   */
  api_key_infos?: Array<AgentsAPI.APIAnthropicAPIKeyInfo>;

  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;
}

/**
 * DeleteAnthropicAPIKeyOutput is used to return the deleted Anthropic API key.
 */
export interface KeyDeleteResponse {
  /**
   * Anthropic API Key Info
   */
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * List of Agents that linked to a specific Anthropic Key
 */
export interface KeyListAgentsResponse {
  agents?: Array<AgentsAPI.APIAgent>;

  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;
}

export interface KeyCreateParams {
  /**
   * Anthropic API key
   */
  api_key?: string;

  /**
   * Name of the key
   */
  name?: string;
}

export interface KeyUpdateParams {
  /**
   * Anthropic API key
   */
  api_key?: string;

  /**
   * API key ID
   */
  body_api_key_uuid?: string;

  /**
   * Name of the key
   */
  name?: string;
}

export interface KeyListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export interface KeyListAgentsParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
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
