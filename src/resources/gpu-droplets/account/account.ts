// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import {
  KeyCreateParams,
  KeyCreateResponse,
  KeyListParams,
  KeyListResponse,
  KeyRetrieveResponse,
  KeyUpdateParams,
  KeyUpdateResponse,
  Keys,
  SSHKeys,
} from './keys';

export class Account extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

Account.Keys = Keys;

export declare namespace Account {
  export {
    Keys as Keys,
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
