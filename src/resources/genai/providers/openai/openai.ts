// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as KeysAPI from './keys';
import {
  APIOpenAIAPIKeyInfo,
  KeyCreateParams,
  KeyCreateResponse,
  KeyDeleteResponse,
  KeyListParams,
  KeyListResponse,
  KeyRetrieveAgentsParams,
  KeyRetrieveAgentsResponse,
  KeyRetrieveResponse,
  KeyUpdateParams,
  KeyUpdateResponse,
  Keys,
} from './keys';

export class OpenAI extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

OpenAI.Keys = Keys;

export declare namespace OpenAI {
  export {
    Keys as Keys,
    type APIOpenAIAPIKeyInfo as APIOpenAIAPIKeyInfo,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyRetrieveResponse as KeyRetrieveResponse,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyDeleteResponse as KeyDeleteResponse,
    type KeyRetrieveAgentsResponse as KeyRetrieveAgentsResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
    type KeyRetrieveAgentsParams as KeyRetrieveAgentsParams,
  };
}
