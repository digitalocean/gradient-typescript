// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TokenAPI from './token';
import { Token } from './token';

export class Agents extends APIResource {
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
}

Agents.Token = Token;

export declare namespace Agents {
  export { Token as Token };
}
