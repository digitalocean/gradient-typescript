// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AgentsAPI from '../../agents/agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OpenAI extends APIResource {
  /**
   * To create an OpenAI API key, send a POST request to `/v2/gen-ai/openai/keys`.
   *
   * @example
   * ```ts
   * const openai =
   *   await client.models.providers.openai.create();
   * ```
   */
  create(
    body: OpenAICreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OpenAICreateResponse> {
    return this._client.post('/v2/gen-ai/openai/keys', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve details of an OpenAI API key, send a GET request to
   * `/v2/gen-ai/openai/keys/{api_key_uuid}`.
   *
   * @example
   * ```ts
   * const openai =
   *   await client.models.providers.openai.retrieve(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  retrieve(apiKeyUuid: string, options?: RequestOptions): APIPromise<OpenAIRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/openai/keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update an OpenAI API key, send a PUT request to
   * `/v2/gen-ai/openai/keys/{api_key_uuid}`.
   *
   * @example
   * ```ts
   * const openai = await client.models.providers.openai.update(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  update(
    apiKeyUuid: string,
    body: OpenAIUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OpenAIUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/openai/keys/${apiKeyUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all OpenAI API keys, send a GET request to `/v2/gen-ai/openai/keys`.
   *
   * @example
   * ```ts
   * const openais = await client.models.providers.openai.list();
   * ```
   */
  list(
    query: OpenAIListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OpenAIListResponse> {
    return this._client.get('/v2/gen-ai/openai/keys', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete an OpenAI API key, send a DELETE request to
   * `/v2/gen-ai/openai/keys/{api_key_uuid}`.
   *
   * @example
   * ```ts
   * const openai = await client.models.providers.openai.delete(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<OpenAIDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/openai/keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * List Agents by OpenAI Key.
   *
   * @example
   * ```ts
   * const response =
   *   await client.models.providers.openai.retrieveAgents(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  retrieveAgents(
    uuid: string,
    query: OpenAIRetrieveAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OpenAIRetrieveAgentsResponse> {
    return this._client.get(path`/v2/gen-ai/openai/keys/${uuid}/agents`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * CreateOpenAIAPIKeyOutput is used to return the newly created OpenAI API key.
 */
export interface OpenAICreateResponse {
  /**
   * OpenAI API Key Info
   */
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

export interface OpenAIRetrieveResponse {
  /**
   * OpenAI API Key Info
   */
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

/**
 * UpdateOpenAIAPIKeyOutput is used to return the updated OpenAI API key.
 */
export interface OpenAIUpdateResponse {
  /**
   * OpenAI API Key Info
   */
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

/**
 * ListOpenAIAPIKeysOutput is used to return the list of OpenAI API keys for a
 * specific agent.
 */
export interface OpenAIListResponse {
  /**
   * Api key infos
   */
  api_key_infos?: Array<AgentsAPI.APIOpenAIAPIKeyInfo>;

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
 * DeleteOpenAIAPIKeyOutput is used to return the deleted OpenAI API key.
 */
export interface OpenAIDeleteResponse {
  /**
   * OpenAI API Key Info
   */
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

/**
 * List of Agents that are linked to a specific OpenAI Key
 */
export interface OpenAIRetrieveAgentsResponse {
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

export interface OpenAICreateParams {
  /**
   * OpenAI API key
   */
  api_key?: string;

  /**
   * Name of the key
   */
  name?: string;
}

export interface OpenAIUpdateParams {
  /**
   * OpenAI API key
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

export interface OpenAIListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export interface OpenAIRetrieveAgentsParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export declare namespace OpenAI {
  export {
    type OpenAICreateResponse as OpenAICreateResponse,
    type OpenAIRetrieveResponse as OpenAIRetrieveResponse,
    type OpenAIUpdateResponse as OpenAIUpdateResponse,
    type OpenAIListResponse as OpenAIListResponse,
    type OpenAIDeleteResponse as OpenAIDeleteResponse,
    type OpenAIRetrieveAgentsResponse as OpenAIRetrieveAgentsResponse,
    type OpenAICreateParams as OpenAICreateParams,
    type OpenAIUpdateParams as OpenAIUpdateParams,
    type OpenAIListParams as OpenAIListParams,
    type OpenAIRetrieveAgentsParams as OpenAIRetrieveAgentsParams,
  };
}
