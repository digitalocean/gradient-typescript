// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ActionsAPI from './actions';
import { ActionCreateParams, ActionListResponse, ActionRetrieveParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Images extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * To create a new custom image, send a POST request to /v2/images. The body must
   * contain a url attribute pointing to a Linux virtual machine image to be imported
   * into DigitalOcean. The image must be in the raw, qcow2, vhdx, vdi, or vmdk
   * format. It may be compressed using gzip or bzip2 and must be smaller than 100 GB
   * after being decompressed.
   *
   * @example
   * ```ts
   * const image = await client.gpuDroplets.images.create();
   * ```
   */
  create(body: ImageCreateParams, options?: RequestOptions): APIPromise<ImageCreateResponse> {
    return this._client.post('/v2/images', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve information about an image, send a `GET` request to
   * `/v2/images/$IDENTIFIER`.
   *
   * @example
   * ```ts
   * const image = await client.gpuDroplets.images.retrieve(0);
   * ```
   */
  retrieve(imageID: number | string, options?: RequestOptions): APIPromise<ImageRetrieveResponse> {
    return this._client.get(path`/v2/images/${imageID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update an image, send a `PUT` request to `/v2/images/$IMAGE_ID`. Set the
   * `name` attribute to the new value you would like to use. For custom images, the
   * `description` and `distribution` attributes may also be updated.
   *
   * @example
   * ```ts
   * const image = await client.gpuDroplets.images.update(
   *   62137902,
   * );
   * ```
   */
  update(
    imageID: number,
    body: ImageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ImageUpdateResponse> {
    return this._client.put(path`/v2/images/${imageID}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all of the images available on your account, send a GET request to
   * /v2/images.
   *
   * ## Filtering Results
   *
   * ---
   *
   * It's possible to request filtered results by including certain query parameters.
   *
   * **Image Type**
   *
   * Either 1-Click Application or OS Distribution images can be filtered by using
   * the `type` query parameter.
   *
   * > Important: The `type` query parameter does not directly relate to the `type`
   * > attribute.
   *
   * To retrieve only **_distribution_** images, include the `type` query parameter
   * set to distribution, `/v2/images?type=distribution`.
   *
   * To retrieve only **_application_** images, include the `type` query parameter
   * set to application, `/v2/images?type=application`.
   *
   * **User Images**
   *
   * To retrieve only the private images of a user, include the `private` query
   * parameter set to true, `/v2/images?private=true`.
   *
   * **Tags**
   *
   * To list all images assigned to a specific tag, include the `tag_name` query
   * parameter set to the name of the tag in your GET request. For example,
   * `/v2/images?tag_name=$TAG_NAME`.
   *
   * @example
   * ```ts
   * const images = await client.gpuDroplets.images.list();
   * ```
   */
  list(
    query: ImageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImageListResponse> {
    return this._client.get('/v2/images', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a snapshot or custom image, send a `DELETE` request to
   * `/v2/images/$IMAGE_ID`.
   *
   * @example
   * ```ts
   * await client.gpuDroplets.images.delete(62137902);
   * ```
   */
  delete(imageID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/images/${imageID}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ImageCreateResponse {
  image?: Shared.Image;
}

export interface ImageRetrieveResponse {
  image: Shared.Image;
}

export interface ImageUpdateResponse {
  image: Shared.Image;
}

export interface ImageListResponse {
  images: Array<Shared.Image>;

  /**
   * Information about the response itself.
   */
  meta: Shared.MetaProperties;

  links?: Shared.PageLinks;
}

export interface ImageCreateParams {
  /**
   * An optional free-form text field to describe an image.
   */
  description?: string;

  /**
   * The name of a custom image's distribution. Currently, the valid values are
   * `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,
   * `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and
   * `Unknown`. Any other value will be accepted but ignored, and `Unknown` will be
   * used in its place.
   */
  distribution?:
    | 'Arch Linux'
    | 'CentOS'
    | 'CoreOS'
    | 'Debian'
    | 'Fedora'
    | 'Fedora Atomic'
    | 'FreeBSD'
    | 'Gentoo'
    | 'openSUSE'
    | 'RancherOS'
    | 'Rocky Linux'
    | 'Ubuntu'
    | 'Unknown';

  /**
   * The display name that has been given to an image. This is what is shown in the
   * control panel and is generally a descriptive title for the image in question.
   */
  name?: string;

  /**
   * The slug identifier for the region where the resource will initially be
   * available.
   */
  region?:
    | 'ams1'
    | 'ams2'
    | 'ams3'
    | 'blr1'
    | 'fra1'
    | 'lon1'
    | 'nyc1'
    | 'nyc2'
    | 'nyc3'
    | 'sfo1'
    | 'sfo2'
    | 'sfo3'
    | 'sgp1'
    | 'tor1'
    | 'syd1';

  /**
   * A flat array of tag names as strings to be applied to the resource. Tag names
   * may be for either existing or new tags.
   *
   * Requires `tag:create` scope.
   */
  tags?: Array<string> | null;

  /**
   * A URL from which the custom Linux virtual machine image may be retrieved. The
   * image it points to must be in the raw, qcow2, vhdx, vdi, or vmdk format. It may
   * be compressed using gzip or bzip2 and must be smaller than 100 GB after being
   * decompressed.
   */
  url?: string;
}

export interface ImageUpdateParams {
  /**
   * An optional free-form text field to describe an image.
   */
  description?: string;

  /**
   * The name of a custom image's distribution. Currently, the valid values are
   * `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,
   * `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and
   * `Unknown`. Any other value will be accepted but ignored, and `Unknown` will be
   * used in its place.
   */
  distribution?:
    | 'Arch Linux'
    | 'CentOS'
    | 'CoreOS'
    | 'Debian'
    | 'Fedora'
    | 'Fedora Atomic'
    | 'FreeBSD'
    | 'Gentoo'
    | 'openSUSE'
    | 'RancherOS'
    | 'Rocky Linux'
    | 'Ubuntu'
    | 'Unknown';

  /**
   * The display name that has been given to an image. This is what is shown in the
   * control panel and is generally a descriptive title for the image in question.
   */
  name?: string;
}

export interface ImageListParams {
  /**
   * Which 'page' of paginated results to return.
   */
  page?: number;

  /**
   * Number of items returned per page
   */
  per_page?: number;

  /**
   * Used to filter only user images.
   */
  private?: boolean;

  /**
   * Used to filter images by a specific tag.
   */
  tag_name?: string;

  /**
   * Filters results based on image type which can be either `application` or
   * `distribution`.
   */
  type?: 'application' | 'distribution';
}

Images.Actions = Actions;

export declare namespace Images {
  export {
    type ImageCreateResponse as ImageCreateResponse,
    type ImageRetrieveResponse as ImageRetrieveResponse,
    type ImageUpdateResponse as ImageUpdateResponse,
    type ImageListResponse as ImageListResponse,
    type ImageCreateParams as ImageCreateParams,
    type ImageUpdateParams as ImageUpdateParams,
    type ImageListParams as ImageListParams,
  };

  export {
    Actions as Actions,
    type ActionListResponse as ActionListResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionRetrieveParams as ActionRetrieveParams,
  };
}
