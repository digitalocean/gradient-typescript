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
   */
  create(body: AnthropicCreateParams, options?: RequestOptions): APIPromise<AnthropicCreateResponse> {
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
  retrieve(apiKeyUuid: string, options?: RequestOptions): APIPromise<AnthropicRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/anthropic/keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update an Anthropic API key, send a PUT request to
   * `/v2/gen-ai/anthropic/keys/{api_key_uuid}`.
   */
  update(
    apiKeyUuid: string,
    body: AnthropicUpdateParams,
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
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<AnthropicDeleteResponse> {
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
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

export interface AnthropicRetrieveResponse {
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * UpdateAnthropicAPIKeyOutput is used to return the updated Anthropic API key.
 */
export interface AnthropicUpdateResponse {
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

/**
 * ListAnthropicAPIKeysOutput is used to return the list of Anthropic API keys for
 * a specific agent.
 */
export interface AnthropicListResponse {
  api_key_infos?: Array<AgentsAPI.APIAnthropicAPIKeyInfo>;

  links?: Shared.APILinks;

  meta?: Shared.APIMeta;
}

/**
 * DeleteAnthropicAPIKeyOutput is used to return the deleted Anthropic API key.
 */
export interface AnthropicDeleteResponse {
  api_key_info?: AgentsAPI.APIAnthropicAPIKeyInfo;
}

export interface AnthropicListAgentsResponse {
  agents?: Array<AgentsAPI.APIAgent>;

  links?: Shared.APILinks;

  meta?: Shared.APIMeta;
}

export interface AnthropicCreateParams {
  api_key?: string;

  name?: string;
}

export interface AnthropicUpdateParams {
  api_key?: string;

  body_api_key_uuid?: string;

  name?: string;
}

export interface AnthropicListParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;
}

export interface AnthropicListAgentsParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
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
