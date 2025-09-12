// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Dropbox extends APIResource {
  /**
   * To obtain the refresh token, needed for creation of data sources, send a GET
   * request to `/v2/gen-ai/oauth2/dropbox/tokens`. Pass the code you obtrained from
   * the oauth flow in the field 'code'
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.evaluationMetrics.oauth2.dropbox.createTokens();
   * ```
   */
  createTokens(
    body: DropboxCreateTokensParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DropboxCreateTokensResponse> {
    return this._client.post('/v2/gen-ai/oauth2/dropbox/tokens', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * The dropbox oauth2 token and refresh token
 */
export interface DropboxCreateTokensResponse {
  /**
   * The access token
   */
  token?: string;

  /**
   * The refresh token
   */
  refresh_token?: string;
}

export interface DropboxCreateTokensParams {
  /**
   * The oauth2 code from google
   */
  code?: string;

  /**
   * Redirect url
   */
  redirect_url?: string;
}

export declare namespace Dropbox {
  export {
    type DropboxCreateTokensResponse as DropboxCreateTokensResponse,
    type DropboxCreateTokensParams as DropboxCreateTokensParams,
  };
}
