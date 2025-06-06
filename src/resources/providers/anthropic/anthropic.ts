// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import {
  APIAnthropicAPIKeyInfo,
  KeyCreateParams,
  KeyCreateResponse,
  KeyDeleteResponse,
  KeyListAgentsParams,
  KeyListAgentsResponse,
  KeyListParams,
  KeyListResponse,
  KeyRetrieveResponse,
  KeyUpdateParams,
  KeyUpdateResponse,
  Keys,
} from './keys';

export class Anthropic extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

Anthropic.Keys = Keys;

export declare namespace Anthropic {
  export {
    Keys as Keys,
    type APIAnthropicAPIKeyInfo as APIAnthropicAPIKeyInfo,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyRetrieveResponse as KeyRetrieveResponse,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyDeleteResponse as KeyDeleteResponse,
    type KeyListAgentsResponse as KeyListAgentsResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
    type KeyListAgentsParams as KeyListAgentsParams,
  };
}
