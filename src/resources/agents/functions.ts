// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
    return this._client.post(path`/v2/gen-ai/agents/${agentUuid}/functions`, { body, ...options });
  }
}

export interface FunctionCreateResponse {
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

export declare namespace Functions {
  export {
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionCreateParams as FunctionCreateParams,
  };
}
