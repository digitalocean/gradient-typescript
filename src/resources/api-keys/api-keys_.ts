// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VersionsAPI from '../agents/versions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * To create a model API key, send a POST request to `/v2/gen-ai/models/api_keys`.
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKeyCreateResponse> {
    return this._client.post('/v2/gen-ai/models/api_keys', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update a model API key, send a PUT request to
   * `/v2/gen-ai/models/api_keys/{api_key_uuid}`.
   */
  update(
    apiKeyUuid: string,
    body: APIKeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/models/api_keys/${apiKeyUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all model API keys, send a GET request to `/v2/gen-ai/models/api_keys`.
   */
  list(
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get('/v2/gen-ai/models/api_keys', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete an API key for a model, send a DELETE request to
   * `/v2/gen-ai/models/api_keys/{api_key_uuid}`.
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<APIKeyDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/models/api_keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To regenerate a model API key, send a PUT request to
   * `/v2/gen-ai/models/api_keys/{api_key_uuid}/regenerate`.
   */
  updateRegenerate(apiKeyUuid: string, options?: RequestOptions): APIPromise<APIKeyUpdateRegenerateResponse> {
    return this._client.put(path`/v2/gen-ai/models/api_keys/${apiKeyUuid}/regenerate`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface APIModelAPIKeyInfo {
  created_at?: string;

  created_by?: string;

  deleted_at?: string;

  name?: string;

  secret_key?: string;

  uuid?: string;
}

export interface APIKeyCreateResponse {
  api_key_info?: APIModelAPIKeyInfo;
}

export interface APIKeyUpdateResponse {
  api_key_info?: APIModelAPIKeyInfo;
}

export interface APIKeyListResponse {
  api_key_infos?: Array<APIModelAPIKeyInfo>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
}

export interface APIKeyDeleteResponse {
  api_key_info?: APIModelAPIKeyInfo;
}

export interface APIKeyUpdateRegenerateResponse {
  api_key_info?: APIModelAPIKeyInfo;
}

export interface APIKeyCreateParams {
  name?: string;
}

export interface APIKeyUpdateParams {
  body_api_key_uuid?: string;

  name?: string;
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
}

export declare namespace APIKeys {
  export {
    type APIModelAPIKeyInfo as APIModelAPIKeyInfo,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyUpdateRegenerateResponse as APIKeyUpdateRegenerateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
  };
}
