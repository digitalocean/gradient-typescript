// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DropletsAPI from './droplets';
import { Droplets } from './droplets';
import * as ForwardingRulesAPI from './forwarding-rules';
import { ForwardingRules } from './forwarding-rules';

export class LoadBalancers extends APIResource {
  droplets: DropletsAPI.Droplets = new DropletsAPI.Droplets(this._client);
  forwardingRules: ForwardingRulesAPI.ForwardingRules = new ForwardingRulesAPI.ForwardingRules(this._client);
}

LoadBalancers.Droplets = Droplets;
LoadBalancers.ForwardingRules = ForwardingRules;

export declare namespace LoadBalancers {
  export { Droplets as Droplets };

  export { ForwardingRules as ForwardingRules };
}
