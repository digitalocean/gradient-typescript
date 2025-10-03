// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * To add a new SSH public key to your DigitalOcean account, send a POST request to
   * `/v2/account/keys`. Set the `name` attribute to the name you wish to use and the
   * `public_key` attribute to the full public key you are adding.
   *
   * @example
   * ```ts
   * const key = await client.gpuDroplets.account.keys.create({
   *   name: 'My SSH Public Key',
   *   public_key:
   *     'ssh-rsa AEXAMPLEaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example',
   * });
   * ```
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post('/v2/account/keys', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To get information about a key, send a GET request to `/v2/account/keys/$KEY_ID`
   * or `/v2/account/keys/$KEY_FINGERPRINT`. The response will be a JSON object with
   * the key `ssh_key` and value an ssh_key object which contains the standard
   * ssh_key attributes.
   *
   * @example
   * ```ts
   * const key = await client.gpuDroplets.account.keys.retrieve(
   *   512189,
   * );
   * ```
   */
  retrieve(sshKeyIdentifier: number | string, options?: RequestOptions): APIPromise<KeyRetrieveResponse> {
    return this._client.get(path`/v2/account/keys/${sshKeyIdentifier}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update the name of an SSH key, send a PUT request to either
   * `/v2/account/keys/$SSH_KEY_ID` or `/v2/account/keys/$SSH_KEY_FINGERPRINT`. Set
   * the `name` attribute to the new name you want to use.
   *
   * @example
   * ```ts
   * const key = await client.gpuDroplets.account.keys.update(
   *   512189,
   * );
   * ```
   */
  update(
    sshKeyIdentifier: number | string,
    body: KeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<KeyUpdateResponse> {
    return this._client.put(path`/v2/account/keys/${sshKeyIdentifier}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all of the keys in your account, send a GET request to
   * `/v2/account/keys`. The response will be a JSON object with a key set to
   * `ssh_keys`. The value of this will be an array of ssh_key objects, each of which
   * contains the standard ssh_key attributes.
   *
   * @example
   * ```ts
   * const keys = await client.gpuDroplets.account.keys.list();
   * ```
   */
  list(query: KeyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<KeyListResponse> {
    return this._client.get('/v2/account/keys', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To destroy a public SSH key that you have in your account, send a DELETE request
   * to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`. A 204
   * status will be returned, indicating that the action was successful and that the
   * response body is empty.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.account.keys.delete(512189);
   * ```
   */
  delete(sshKeyIdentifier: number | string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/account/keys/${sshKeyIdentifier}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SSHKeys {
  /**
   * A human-readable display name for this key, used to easily identify the SSH keys
   * when they are displayed.
   */
  name: string;

  /**
   * The entire public key string that was uploaded. Embedded into the root user's
   * `authorized_keys` file if you include this key during Droplet creation.
   */
  public_key: string;

  /**
   * A unique identification number for this key. Can be used to embed a specific SSH
   * key into a Droplet.
   */
  id?: number;

  /**
   * A unique identifier that differentiates this key from other keys using a format
   * that SSH recognizes. The fingerprint is created when the key is added to your
   * account.
   */
  fingerprint?: string;
}

export interface KeyCreateResponse {
  ssh_key?: SSHKeys;
}

export interface KeyRetrieveResponse {
  ssh_key?: SSHKeys;
}

export interface KeyUpdateResponse {
  ssh_key?: SSHKeys;
}

export interface KeyListResponse {
  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  links?: Shared.PageLinks;

  ssh_keys?: Array<SSHKeys>;
}

export interface KeyCreateParams {
  /**
   * A human-readable display name for this key, used to easily identify the SSH keys
   * when they are displayed.
   */
  name: string;

  /**
   * The entire public key string that was uploaded. Embedded into the root user's
   * `authorized_keys` file if you include this key during Droplet creation.
   */
  public_key: string;
}

export interface KeyUpdateParams {
  /**
   * A human-readable display name for this key, used to easily identify the SSH keys
   * when they are displayed.
   */
  name?: string;
}

export interface KeyListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;
}

export declare namespace Keys {
  export {
    type SSHKeys as SSHKeys,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyRetrieveResponse as KeyRetrieveResponse,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
  };
}
