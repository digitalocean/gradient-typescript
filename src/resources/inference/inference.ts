// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyCreateParams,
  APIKeyCreateResponse,
  APIKeyDeleteResponse,
  APIKeyListParams,
  APIKeyListResponse,
  APIKeyUpdateParams,
  APIKeyUpdateRegenerateResponse,
  APIKeyUpdateResponse,
  APIKeys,
  APIModelAPIKeyInfo,
} from './api-keys';
import * as ModelsAPI from './models';
import { Model, ModelListResponse, Models } from './models';

export class Inference extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
}

Inference.APIKeys = APIKeys;
Inference.Models = Models;

export declare namespace Inference {
  export {
    APIKeys as APIKeys,
    type APIModelAPIKeyInfo as APIModelAPIKeyInfo,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyUpdateRegenerateResponse as APIKeyUpdateRegenerateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
  };

  export { Models as Models, type Model as Model, type ModelListResponse as ModelListResponse };
}
