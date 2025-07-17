// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import { Keys } from './keys';

export class Account extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

Account.Keys = Keys;

export declare namespace Account {
  export { Keys as Keys };
}
