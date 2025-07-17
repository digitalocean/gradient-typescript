// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DropletsAPI from './droplets';
import { Droplets } from './droplets';
import * as RulesAPI from './rules';
import { Rules } from './rules';
import * as TagsAPI from './tags';
import { Tags } from './tags';

export class Firewalls extends APIResource {
  droplets: DropletsAPI.Droplets = new DropletsAPI.Droplets(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

Firewalls.Droplets = Droplets;
Firewalls.Tags = Tags;
Firewalls.Rules = Rules;

export declare namespace Firewalls {
  export { Droplets as Droplets };

  export { Tags as Tags };

  export { Rules as Rules };
}
