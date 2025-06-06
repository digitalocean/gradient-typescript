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
    return this._client.post(path`/v2/genai/agents/${agentUuid}/api_keys`, { body, ...options });
  }

  /**
   * To update an agent API key, send a PUT request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`.
   */
  update(
    apiKeyUuid: string,
    params: APIKeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyUpdateResponse> {
    const { path_agent_uuid, ...body } = params;
    return this._client.put(path`/v2/genai/agents/${path_agent_uuid}/api_keys/${apiKeyUuid}`, {
      body,
      ...options,
    });
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
    return this._client.get(path`/v2/genai/agents/${agentUuid}/api_keys`, { query, ...options });
  }

  /**
   * To delete an API key for an agent, send a DELETE request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`.
   */
  delete(
    apiKeyUuid: string,
    params: APIKeyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyDeleteResponse> {
    const { agent_uuid } = params;
    return this._client.delete(path`/v2/genai/agents/${agent_uuid}/api_keys/${apiKeyUuid}`, options);
  }

  /**
   * To regenerate an agent API key, send a PUT request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}/regenerate`.
   */
  regenerate(
    apiKeyUuid: string,
    params: APIKeyRegenerateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyRegenerateResponse> {
    const { agent_uuid } = params;
    return this._client.put(path`/v2/genai/agents/${agent_uuid}/api_keys/${apiKeyUuid}/regenerate`, options);
  }
}

export interface APIKeyCreateResponse {
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyUpdateResponse {
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyListResponse {
  api_key_infos?: Array<AgentsAPI.APIAgentAPIKeyInfo>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
}

export interface APIKeyDeleteResponse {
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyRegenerateResponse {
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyCreateParams {
  body_agent_uuid?: string;

  name?: string;
}

export interface APIKeyUpdateParams {
  /**
   * Path param: agent id
   */
  path_agent_uuid: string;

  /**
   * Body param:
   */
  body_agent_uuid?: string;

  /**
   * Body param:
   */
  body_api_key_uuid?: string;

  /**
   * Body param:
   */
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

export interface APIKeyDeleteParams {
  /**
   * A unique identifier for your agent.
   */
  agent_uuid: string;
}

export interface APIKeyRegenerateParams {
  /**
   * agent id
   */
  agent_uuid: string;
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyRegenerateResponse as APIKeyRegenerateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
    type APIKeyRegenerateParams as APIKeyRegenerateParams,
  };
}
