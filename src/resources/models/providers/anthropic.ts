// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AgentsAPI from '../../agents/agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Anthropic extends APIResource {
  /**
   * To create an Anthropic API key, send a POST request to
   * `/v2/gen-ai/anthropic/keys`.
   *
   * @example
   * ```ts
   * const anthropic =
   *   await client.models.providers.anthropic.create();
   * ```
   */
  create(
    body: AnthropicCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnthropicCreateResponse> {
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
   * const anthropic =
   *   await client.models.providers.anthropic.retrieve(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  retrieve(apiKeyUuid: string, options?: RequestOptions): APIPromise<AnthropicRetrieveResponse> {
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
   * const anthropic =
   *   await client.models.providers.anthropic.update(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  update(
    apiKeyUuid: string,
    body: AnthropicUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnthropicUpdateResponse> {
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
   * const anthropics =
   *   await client.models.providers.anthropic.list();
   * ```
   */
  list(
    query: AnthropicListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnthropicListResponse> {
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
   * const anthropic =
   *   await client.models.providers.anthropic.delete(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<AnthropicDeleteResponse> {
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
   *   await client.models.providers.anthropic.listAgents(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  listAgents(
    uuid: string,
    query: AnthropicListAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnthropicListAgentsResponse> {
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
export interface AnthropicCreateResponse {
  /**
   * Anthropic API Key Info
   */
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

export interface AnthropicRetrieveResponse {
  /**
   * Anthropic API Key Info
   */
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * UpdateAnthropicAPIKeyOutput is used to return the updated Anthropic API key.
 */
export interface AnthropicUpdateResponse {
  /**
   * Anthropic API Key Info
   */
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * ListAnthropicAPIKeysOutput is used to return the list of Anthropic API keys for
 * a specific agent.
 */
export interface AnthropicListResponse {
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
export interface AnthropicDeleteResponse {
  /**
   * Anthropic API Key Info
   */
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * List of Agents that linked to a specific Anthropic Key
 */
export interface AnthropicListAgentsResponse {
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

export interface AnthropicCreateParams {
  /**
   * Anthropic API key
   */
  api_key?: string;

  /**
   * Name of the key
   */
  name?: string;
}

export interface AnthropicUpdateParams {
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

export interface AnthropicListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export interface AnthropicListAgentsParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export declare namespace Anthropic {
  export {
    type AnthropicCreateResponse as AnthropicCreateResponse,
    type AnthropicRetrieveResponse as AnthropicRetrieveResponse,
    type AnthropicUpdateResponse as AnthropicUpdateResponse,
    type AnthropicListResponse as AnthropicListResponse,
    type AnthropicDeleteResponse as AnthropicDeleteResponse,
    type AnthropicListAgentsResponse as AnthropicListAgentsResponse,
    type AnthropicCreateParams as AnthropicCreateParams,
    type AnthropicUpdateParams as AnthropicUpdateParams,
    type AnthropicListParams as AnthropicListParams,
    type AnthropicListAgentsParams as AnthropicListAgentsParams,
  };
}
