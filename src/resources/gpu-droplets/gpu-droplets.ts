// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import * as AutoscaleAPI from './autoscale';
import { Autoscale } from './autoscale';
import * as BackupsAPI from './backups';
import { Backups } from './backups';
import * as DestroyWithAssociatedResourcesAPI from './destroy-with-associated-resources';
import { DestroyWithAssociatedResources } from './destroy-with-associated-resources';
import * as SizesAPI from './sizes';
import { Sizes } from './sizes';
import * as SnapshotsAPI from './snapshots';
import { Snapshots } from './snapshots';
import * as AccountAPI from './account/account';
import { Account } from './account/account';
import * as FirewallsAPI from './firewalls/firewalls';
import { Firewalls } from './firewalls/firewalls';
import * as FloatingIPsAPI from './floating-ips/floating-ips';
import { FloatingIPs } from './floating-ips/floating-ips';
import * as ImagesAPI from './images/images';
import { Images } from './images/images';
import * as LoadBalancersAPI from './load-balancers/load-balancers';
import { LoadBalancers } from './load-balancers/load-balancers';
import * as VolumesAPI from './volumes/volumes';
import { Volumes } from './volumes/volumes';

export class GPUDroplets extends APIResource {
  backups: BackupsAPI.Backups = new BackupsAPI.Backups(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  destroyWithAssociatedResources: DestroyWithAssociatedResourcesAPI.DestroyWithAssociatedResources =
    new DestroyWithAssociatedResourcesAPI.DestroyWithAssociatedResources(this._client);
  autoscale: AutoscaleAPI.Autoscale = new AutoscaleAPI.Autoscale(this._client);
  firewalls: FirewallsAPI.Firewalls = new FirewallsAPI.Firewalls(this._client);
  floatingIPs: FloatingIPsAPI.FloatingIPs = new FloatingIPsAPI.FloatingIPs(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  sizes: SizesAPI.Sizes = new SizesAPI.Sizes(this._client);
  snapshots: SnapshotsAPI.Snapshots = new SnapshotsAPI.Snapshots(this._client);
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
}

GPUDroplets.Backups = Backups;
GPUDroplets.Actions = Actions;
GPUDroplets.DestroyWithAssociatedResources = DestroyWithAssociatedResources;
GPUDroplets.Autoscale = Autoscale;
GPUDroplets.Firewalls = Firewalls;
GPUDroplets.FloatingIPs = FloatingIPs;
GPUDroplets.Images = Images;
GPUDroplets.LoadBalancers = LoadBalancers;
GPUDroplets.Sizes = Sizes;
GPUDroplets.Snapshots = Snapshots;
GPUDroplets.Volumes = Volumes;
GPUDroplets.Account = Account;

export declare namespace GPUDroplets {
  export { Backups as Backups };

  export { Actions as Actions };

  export { DestroyWithAssociatedResources as DestroyWithAssociatedResources };

  export { Autoscale as Autoscale };

  export { Firewalls as Firewalls };

  export { FloatingIPs as FloatingIPs };

  export { Images as Images };

  export { LoadBalancers as LoadBalancers };

  export { Sizes as Sizes };

  export { Snapshots as Snapshots };

  export { Volumes as Volumes };

  export { Account as Account };
}
