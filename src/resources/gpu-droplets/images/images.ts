// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';

export class Images extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

Images.Actions = Actions;

export declare namespace Images {
  export { Actions as Actions };
}
