// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as SnapshotsAPI from './snapshots';
import { Snapshots } from './snapshots';

export class Volumes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
}

Volumes.Actions = Actions;
Volumes.Snapshots = Snapshots;

export declare namespace Volumes {
  export { Actions as Actions };

  export { Snapshots as Snapshots };
}
