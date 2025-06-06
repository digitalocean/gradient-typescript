// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents/agents';
import { Agents } from './agents/agents';

export class Auth extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
}

Auth.Agents = Agents;

export declare namespace Auth {
  export { Agents as Agents };
}
