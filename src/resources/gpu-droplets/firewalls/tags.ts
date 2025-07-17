// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * To assign a tag representing a group of Droplets to a firewall, send a POST
   * request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request, there
   * should be a `tags` attribute containing a list of tag names.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.firewalls.tags.add(
   *   'bb4b2611-3d72-467b-8602-280330ecd65c',
   *   { tags: ['frontend'] },
   * );
   * ```
   */
  add(firewallID: string, body: TagAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v2/firewalls/${firewallID}/tags`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * To remove a tag representing a group of Droplets from a firewall, send a DELETE
   * request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request, there
   * should be a `tags` attribute containing a list of tag names.
   *
   * No response body will be sent back, but the response code will indicate success.
   * Specifically, the response code will be a 204, which means that the action was
   * successful with no returned body data.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.firewalls.tags.remove(
   *   'bb4b2611-3d72-467b-8602-280330ecd65c',
   *   { tags: ['frontend'] },
   * );
   * ```
   */
  remove(firewallID: string, body: TagRemoveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/firewalls/${firewallID}/tags`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TagAddParams {
  /**
   * A flat array of tag names as strings to be applied to the resource. Tag names
   * must exist in order to be referenced in a request.
   *
   * Requires `tag:create` and `tag:read` scopes.
   */
  tags: Array<string> | null;
}

export interface TagRemoveParams {
  /**
   * A flat array of tag names as strings to be applied to the resource. Tag names
   * must exist in order to be referenced in a request.
   *
   * Requires `tag:create` and `tag:read` scopes.
   */
  tags: Array<string> | null;
}

export declare namespace Tags {
  export { type TagAddParams as TagAddParams, type TagRemoveParams as TagRemoveParams };
}
