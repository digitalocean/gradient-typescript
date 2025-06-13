// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class APIKeys extends APIResource {}

export interface APIModelAPIKeyInfo {
  created_at?: string;

  created_by?: string;

  deleted_at?: string;

  name?: string;

  secret_key?: string;

  uuid?: string;
}

export declare namespace APIKeys {
  export { type APIModelAPIKeyInfo as APIModelAPIKeyInfo };
}
