// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProvidersAPI from './providers/providers';
import { Providers } from './providers/providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Models extends APIResource {
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);

  /**
   * Retrieves a model instance, providing basic information about the model such as
   * the owner and permissioning.
   *
   * @example
   * ```ts
   * const model = await client.models.retrieve(
   *   'llama3-8b-instruct',
   * );
   * ```
   */
  retrieve(model: string, options?: RequestOptions): APIPromise<ModelRetrieveResponse> {
    return this._client.get(path`/models/${model}`, {
      defaultBaseURL: 'https://inference.do-ai.run/v1',
      ...options,
    });
  }

  /**
   * Lists the currently available models, and provides basic information about each
   * one such as the owner and availability.
   *
   * @example
   * ```ts
   * const models = await client.models.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/models', { defaultBaseURL: 'https://inference.do-ai.run/v1', ...options });
  }
}

/**
 * Agreement Description
 */
export interface APIAgreement {
  description?: string;

  name?: string;

  url?: string;

  uuid?: string;
}

/**
 * A machine learning model stored on the GenAI platform
 */
export interface APIModel {
  /**
   * Agreement Description
   */
  agreement?: APIAgreement;

  /**
   * Creation date / time
   */
  created_at?: string;

  /**
   * True if it is a foundational model provided by do
   */
  is_foundational?: boolean;

  /**
   * Name of the model
   */
  name?: string;

  /**
   * Unique id of the model, this model is based on
   */
  parent_uuid?: string;

  /**
   * Last modified
   */
  updated_at?: string;

  /**
   * Model has been fully uploaded
   */
  upload_complete?: boolean;

  /**
   * Download url
   */
  url?: string;

  /**
   * Unique id
   */
  uuid?: string;

  /**
   * Version Information about a Model
   */
  version?: APIModelVersion;
}

/**
 * Version Information about a Model
 */
export interface APIModelVersion {
  /**
   * Major version number
   */
  major?: number;

  /**
   * Minor version number
   */
  minor?: number;

  /**
   * Patch version number
   */
  patch?: number;
}

/**
 * Describes a model offering that can be used with the API.
 */
export interface ModelRetrieveResponse {
  /**
   * The model identifier, which can be referenced in the API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) when the model was created.
   */
  created: number;

  /**
   * The object type, which is always "model".
   */
  object: 'model';

  /**
   * The organization that owns the model.
   */
  owned_by: string;
}

export interface ModelListResponse {
  data: Array<ModelListResponse.Data>;

  object: 'list';
}

export namespace ModelListResponse {
  /**
   * Describes a model offering that can be used with the API.
   */
  export interface Data {
    /**
     * The model identifier, which can be referenced in the API endpoints.
     */
    id: string;

    /**
     * The Unix timestamp (in seconds) when the model was created.
     */
    created: number;

    /**
     * The object type, which is always "model".
     */
    object: 'model';

    /**
     * The organization that owns the model.
     */
    owned_by: string;
  }
}

Models.Providers = Providers;

export declare namespace Models {
  export {
    type APIAgreement as APIAgreement,
    type APIModel as APIModel,
    type APIModelVersion as APIModelVersion,
    type ModelRetrieveResponse as ModelRetrieveResponse,
    type ModelListResponse as ModelListResponse,
  };

  export { Providers as Providers };
}
