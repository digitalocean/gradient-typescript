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
   */
  create(body: OpenAICreateParams, options?: RequestOptions): APIPromise<OpenAICreateResponse> {
    return this._client.post('/v2/gen-ai/openai/keys', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve details of an OpenAI API key, send a GET request to
   * `/v2/gen-ai/openai/keys/{api_key_uuid}`.
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
   */
  update(
    apiKeyUuid: string,
    body: OpenAIUpdateParams,
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
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<OpenAIDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/openai/keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * List Agents by OpenAI Key.
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
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

export interface OpenAIRetrieveResponse {
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

/**
 * UpdateOpenAIAPIKeyOutput is used to return the updated OpenAI API key.
 */
export interface OpenAIUpdateResponse {
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

/**
 * ListOpenAIAPIKeysOutput is used to return the list of OpenAI API keys for a
 * specific agent.
 */
export interface OpenAIListResponse {
  api_key_infos?: Array<AgentsAPI.APIOpenAIAPIKeyInfo>;

  links?: Shared.APILinks;

  meta?: Shared.APIMeta;
}

/**
 * DeleteOpenAIAPIKeyOutput is used to return the deleted OpenAI API key.
 */
export interface OpenAIDeleteResponse {
  api_key_info?: AgentsAPI.APIOpenAIAPIKeyInfo;
}

export interface OpenAIRetrieveAgentsResponse {
  agents?: Array<AgentsAPI.APIAgent>;

  links?: Shared.APILinks;

  meta?: Shared.APIMeta;
}

export interface OpenAICreateParams {
  api_key?: string;

  name?: string;
}

export interface OpenAIUpdateParams {
  api_key?: string;

  body_api_key_uuid?: string;

  name?: string;
}

export interface OpenAIListParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;
}

export interface OpenAIRetrieveAgentsParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
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
