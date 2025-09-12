// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DropboxAPI from './dropbox';
import { Dropbox, DropboxCreateTokensParams, DropboxCreateTokensResponse } from './dropbox';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Oauth2 extends APIResource {
  dropbox: DropboxAPI.Dropbox = new DropboxAPI.Dropbox(this._client);

  /**
   * To generate an Oauth2-URL for use with your localhost, send a GET request to
   * `/v2/gen-ai/oauth2/url`. Pass 'http://localhost:3000 as redirect_url
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.evaluationMetrics.oauth2.generateURL();
   * ```
   */
  generateURL(
    query: Oauth2GenerateURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Oauth2GenerateURLResponse> {
    return this._client.get('/v2/gen-ai/oauth2/url', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * The url for the oauth2 flow
 */
export interface Oauth2GenerateURLResponse {
  /**
   * The oauth2 url
   */
  url?: string;
}

export interface Oauth2GenerateURLParams {
  /**
   * The redirect url.
   */
  redirect_url?: string;

  /**
   * Type "google" / "dropbox".
   */
  type?: string;
}

Oauth2.Dropbox = Dropbox;

export declare namespace Oauth2 {
  export {
    type Oauth2GenerateURLResponse as Oauth2GenerateURLResponse,
    type Oauth2GenerateURLParams as Oauth2GenerateURLParams,
  };

  export {
    Dropbox as Dropbox,
    type DropboxCreateTokensResponse as DropboxCreateTokensResponse,
    type DropboxCreateTokensParams as DropboxCreateTokensParams,
  };
}
