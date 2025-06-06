// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Token extends APIResource {
  /**
   * To issue an agent token, send a POST request to
   * `/v2/gen-ai/auth/agents/{agent_uuid}/token`.
   */
  create(
    agentUuid: string,
    body: TokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<TokenCreateResponse> {
    return this._client.post(path`/v2/genai/auth/agents/${agentUuid}/token`, { body, ...options });
  }
}

export interface TokenCreateResponse {
  access_token?: string;

  refresh_token?: string;
}

export interface TokenCreateParams {
  body_agent_uuid?: string;
}

export declare namespace Token {
  export { type TokenCreateResponse as TokenCreateResponse, type TokenCreateParams as TokenCreateParams };
}
