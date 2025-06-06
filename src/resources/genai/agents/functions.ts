// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Functions extends APIResource {
  /**
   * To create a function route for an agent, send a POST request to
   * `/v2/gen-ai/agents/{agent_uuid}/functions`.
   */
  create(
    agentUuid: string,
    body: FunctionCreateParams,
    options?: RequestOptions,
  ): APIPromise<FunctionCreateResponse> {
    return this._client.post(path`/v2/genai/agents/${agentUuid}/functions`, { body, ...options });
  }

  /**
   * To update the function route, send a PUT request to
   * `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`.
   */
  update(
    functionUuid: string,
    params: FunctionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FunctionUpdateResponse> {
    const { path_agent_uuid, ...body } = params;
    return this._client.put(path`/v2/genai/agents/${path_agent_uuid}/functions/${functionUuid}`, {
      body,
      ...options,
    });
  }

  /**
   * To delete a function route from an agent, send a DELETE request to
   * `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`.
   */
  delete(
    functionUuid: string,
    params: FunctionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FunctionDeleteResponse> {
    const { agent_uuid } = params;
    return this._client.delete(path`/v2/genai/agents/${agent_uuid}/functions/${functionUuid}`, options);
  }
}

export interface FunctionCreateResponse {
  agent?: AgentsAPI.APIAgent;
}

export interface FunctionUpdateResponse {
  agent?: AgentsAPI.APIAgent;
}

export interface FunctionDeleteResponse {
  agent?: AgentsAPI.APIAgent;
}

export interface FunctionCreateParams {
  body_agent_uuid?: string;

  description?: string;

  faas_name?: string;

  faas_namespace?: string;

  function_name?: string;

  input_schema?: unknown;

  output_schema?: unknown;
}

export interface FunctionUpdateParams {
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
  description?: string;

  /**
   * Body param:
   */
  faas_name?: string;

  /**
   * Body param:
   */
  faas_namespace?: string;

  /**
   * Body param:
   */
  function_name?: string;

  /**
   * Body param:
   */
  body_function_uuid?: string;

  /**
   * Body param:
   */
  input_schema?: unknown;

  /**
   * Body param:
   */
  output_schema?: unknown;
}

export interface FunctionDeleteParams {
  /**
   * The id of the agent the function route belongs to.
   */
  agent_uuid: string;
}

export declare namespace Functions {
  export {
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionUpdateResponse as FunctionUpdateResponse,
    type FunctionDeleteResponse as FunctionDeleteResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionDeleteParams as FunctionDeleteParams,
  };
}
