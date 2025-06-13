// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import { Keys } from './keys';

export class Anthropic extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

Anthropic.Keys = Keys;

export declare namespace Anthropic {
  export { Keys as Keys };
}
