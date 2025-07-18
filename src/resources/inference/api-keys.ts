// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * To create a model API key, send a POST request to `/v2/gen-ai/models/api_keys`.
   *
   * @example
   * ```ts
   * const apiKey = await client.inference.apiKeys.create();
   * ```
   */
  create(
    body: APIKeyCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateResponse> {
    return this._client.post('/v2/gen-ai/models/api_keys', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update a model API key, send a PUT request to
   * `/v2/gen-ai/models/api_keys/{api_key_uuid}`.
   *
   * @example
   * ```ts
   * const apiKey = await client.inference.apiKeys.update(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  update(
    apiKeyUuid: string,
    body: APIKeyUpdateParams | null | undefined = {},
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
   *
   * @example
   * ```ts
   * const apiKeys = await client.inference.apiKeys.list();
   * ```
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
   *
   * @example
   * ```ts
   * const apiKey = await client.inference.apiKeys.delete(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const response =
   *   await client.inference.apiKeys.updateRegenerate(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  updateRegenerate(apiKeyUuid: string, options?: RequestOptions): APIPromise<APIKeyUpdateRegenerateResponse> {
    return this._client.put(path`/v2/gen-ai/models/api_keys/${apiKeyUuid}/regenerate`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * Model API Key Info
 */
export interface APIModelAPIKeyInfo {
  /**
   * Creation date
   */
  created_at?: string;

  /**
   * Created by
   */
  created_by?: string;

  /**
   * Deleted date
   */
  deleted_at?: string;

  /**
   * Name
   */
  name?: string;

  secret_key?: string;

  /**
   * Uuid
   */
  uuid?: string;
}

export interface APIKeyCreateResponse {
  /**
   * Model API Key Info
   */
  api_key_info?: APIModelAPIKeyInfo;
}

export interface APIKeyUpdateResponse {
  /**
   * Model API Key Info
   */
  api_key_info?: APIModelAPIKeyInfo;
}

export interface APIKeyListResponse {
  /**
   * Api key infos
   */
  api_key_infos?: Array<APIModelAPIKeyInfo>;

  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;
}

export interface APIKeyDeleteResponse {
  /**
   * Model API Key Info
   */
  api_key_info?: APIModelAPIKeyInfo;
}

export interface APIKeyUpdateRegenerateResponse {
  /**
   * Model API Key Info
   */
  api_key_info?: APIModelAPIKeyInfo;
}

export interface APIKeyCreateParams {
  /**
   * A human friendly name to identify the key
   */
  name?: string;
}

export interface APIKeyUpdateParams {
  /**
   * API key ID
   */
  body_api_key_uuid?: string;

  /**
   * Name
   */
  name?: string;
}

export interface APIKeyListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
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
