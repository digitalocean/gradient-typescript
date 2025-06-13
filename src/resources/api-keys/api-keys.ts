// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys_';
import { APIKeys as APIKeysAPIAPIKeys, APIModelAPIKeyInfo } from './api-keys_';

export class APIKeys extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
}

export interface APIAgreement {
  description?: string;

  name?: string;

  url?: string;

  uuid?: string;
}

export interface APIModelVersion {
  major?: number;

  minor?: number;

  patch?: number;
}

APIKeys.APIKeys = APIKeysAPIAPIKeys;

export declare namespace APIKeys {
  export { type APIAgreement as APIAgreement, type APIModelVersion as APIModelVersion };

  export { APIKeysAPIAPIKeys as APIKeys, type APIModelAPIKeyInfo as APIModelAPIKeyInfo };
}
