// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as VersionsAPI from './versions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * To create an agent API key, send a POST request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys`.
   */
  create(
    agentUuid: string,
    body: APIKeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateResponse> {
    return this._client.post(path`/v2/gen-ai/agents/${agentUuid}/api_keys`, { body, ...options });
  }

  /**
   * To list all agent API keys, send a GET request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys`.
   */
  list(
    agentUuid: string,
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get(path`/v2/gen-ai/agents/${agentUuid}/api_keys`, { query, ...options });
  }
}

export interface APIKeyCreateResponse {
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyListResponse {
  api_key_infos?: Array<AgentsAPI.APIAgentAPIKeyInfo>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
}

export interface APIKeyCreateParams {
  body_agent_uuid?: string;

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
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyListParams as APIKeyListParams,
  };
}
