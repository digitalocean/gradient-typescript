// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';

export class FloatingIPs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

FloatingIPs.Actions = Actions;

export declare namespace FloatingIPs {
  export { Actions as Actions };
}
