// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import { Keys } from './keys';

export class OpenAI extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

OpenAI.Keys = Keys;

export declare namespace OpenAI {
  export { Keys as Keys };
}
