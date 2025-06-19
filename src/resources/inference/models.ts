// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Models extends APIResource {
  /**
   * Retrieves a model instance, providing basic information about the model such as
   * the owner and permissioning.
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
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/models', { defaultBaseURL: 'https://inference.do-ai.run/v1', ...options });
  }
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

export declare namespace Models {
  export { type ModelRetrieveResponse as ModelRetrieveResponse, type ModelListResponse as ModelListResponse };
}
