// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * To create an agent API key, send a POST request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys`.
   *
   * @example
   * ```ts
   * const apiKey = await client.agents.apiKeys.create(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  create(
    agentUuid: string,
    body: APIKeyCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateResponse> {
    return this._client.post(path`/v2/gen-ai/agents/${agentUuid}/api_keys`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update an agent API key, send a PUT request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`.
   *
   * @example
   * ```ts
   * const apiKey = await client.agents.apiKeys.update(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   {
   *     path_agent_uuid:
   *       '"123e4567-e89b-12d3-a456-426614174000"',
   *   },
   * );
   * ```
   */
  update(
    apiKeyUuid: string,
    params: APIKeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyUpdateResponse> {
    const { path_agent_uuid, ...body } = params;
    return this._client.put(path`/v2/gen-ai/agents/${path_agent_uuid}/api_keys/${apiKeyUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all agent API keys, send a GET request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys`.
   *
   * @example
   * ```ts
   * const apiKeys = await client.agents.apiKeys.list(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  list(
    agentUuid: string,
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get(path`/v2/gen-ai/agents/${agentUuid}/api_keys`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete an API key for an agent, send a DELETE request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}`.
   *
   * @example
   * ```ts
   * const apiKey = await client.agents.apiKeys.delete(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   { agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"' },
   * );
   * ```
   */
  delete(
    apiKeyUuid: string,
    params: APIKeyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyDeleteResponse> {
    const { agent_uuid } = params;
    return this._client.delete(path`/v2/gen-ai/agents/${agent_uuid}/api_keys/${apiKeyUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To regenerate an agent API key, send a PUT request to
   * `/v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}/regenerate`.
   *
   * @example
   * ```ts
   * const response = await client.agents.apiKeys.regenerate(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   { agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"' },
   * );
   * ```
   */
  regenerate(
    apiKeyUuid: string,
    params: APIKeyRegenerateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyRegenerateResponse> {
    const { agent_uuid } = params;
    return this._client.put(path`/v2/gen-ai/agents/${agent_uuid}/api_keys/${apiKeyUuid}/regenerate`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface APIKeyCreateResponse {
  /**
   * Agent API Key Info
   */
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyUpdateResponse {
  /**
   * Agent API Key Info
   */
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyListResponse {
  /**
   * Api key infos
   */
  api_key_infos?: Array<AgentsAPI.APIAgentAPIKeyInfo>;

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
   * Agent API Key Info
   */
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyRegenerateResponse {
  /**
   * Agent API Key Info
   */
  api_key_info?: AgentsAPI.APIAgentAPIKeyInfo;
}

export interface APIKeyCreateParams {
  /**
   * Agent id
   */
  body_agent_uuid?: string;

  /**
   * A human friendly name to identify the key
   */
  name?: string;
}

export interface APIKeyUpdateParams {
  /**
   * Path param: Agent id
   */
  path_agent_uuid: string;

  /**
   * Body param: Agent id
   */
  body_agent_uuid?: string;

  /**
   * Body param: API key ID
   */
  body_api_key_uuid?: string;

  /**
   * Body param: Name
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

export interface APIKeyDeleteParams {
  /**
   * A unique identifier for your agent.
   */
  agent_uuid: string;
}

export interface APIKeyRegenerateParams {
  /**
   * Agent id
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
