// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ChildAgents extends APIResource {
  /**
   * To update an agent route for an agent, send a PUT request to
   * `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
   */
  update(
    childAgentUuid: string,
    params: ChildAgentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ChildAgentUpdateResponse> {
    const { path_parent_agent_uuid, ...body } = params;
    return this._client.put(
      path`/v2/gen-ai/agents/${path_parent_agent_uuid}/child_agents/${childAgentUuid}`,
      { body, defaultBaseURL: 'https://api.digitalocean.com', ...options },
    );
  }

  /**
   * To delete an agent route from a parent agent, send a DELETE request to
   * `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
   */
  delete(
    childAgentUuid: string,
    params: ChildAgentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ChildAgentDeleteResponse> {
    const { parent_agent_uuid } = params;
    return this._client.delete(path`/v2/gen-ai/agents/${parent_agent_uuid}/child_agents/${childAgentUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To add an agent route to an agent, send a POST request to
   * `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
   */
  add(
    childAgentUuid: string,
    params: ChildAgentAddParams,
    options?: RequestOptions,
  ): APIPromise<ChildAgentAddResponse> {
    const { path_parent_agent_uuid, ...body } = params;
    return this._client.post(
      path`/v2/gen-ai/agents/${path_parent_agent_uuid}/child_agents/${childAgentUuid}`,
      { body, defaultBaseURL: 'https://api.digitalocean.com', ...options },
    );
  }

  /**
   * To view agent routes for an agent, send a GET requtest to
   * `/v2/gen-ai/agents/{uuid}/child_agents`.
   */
  view(uuid: string, options?: RequestOptions): APIPromise<ChildAgentViewResponse> {
    return this._client.get(path`/v2/gen-ai/agents/${uuid}/child_agents`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface ChildAgentUpdateResponse {
  child_agent_uuid?: string;

  /**
   * A unique identifier for the parent agent.
   */
  parent_agent_uuid?: string;

  rollback?: boolean;

  uuid?: string;
}

export interface ChildAgentDeleteResponse {
  child_agent_uuid?: string;

  parent_agent_uuid?: string;
}

export interface ChildAgentAddResponse {
  child_agent_uuid?: string;

  /**
   * A unique identifier for the parent agent.
   */
  parent_agent_uuid?: string;
}

export interface ChildAgentViewResponse {
  children?: Array<AgentsAPI.APIAgent>;
}

export interface ChildAgentUpdateParams {
  /**
   * Path param: A unique identifier for the parent agent.
   */
  path_parent_agent_uuid: string;

  /**
   * Body param:
   */
  body_child_agent_uuid?: string;

  /**
   * Body param:
   */
  if_case?: string;

  /**
   * Body param: A unique identifier for the parent agent.
   */
  body_parent_agent_uuid?: string;

  /**
   * Body param:
   */
  route_name?: string;

  /**
   * Body param:
   */
  uuid?: string;
}

export interface ChildAgentDeleteParams {
  /**
   * pagent agent id
   */
  parent_agent_uuid: string;
}

export interface ChildAgentAddParams {
  /**
   * Path param: A unique identifier for the parent agent.
   */
  path_parent_agent_uuid: string;

  /**
   * Body param:
   */
  body_child_agent_uuid?: string;

  /**
   * Body param:
   */
  if_case?: string;

  /**
   * Body param: A unique identifier for the parent agent.
   */
  body_parent_agent_uuid?: string;

  /**
   * Body param:
   */
  route_name?: string;
}

export declare namespace ChildAgents {
  export {
    type ChildAgentUpdateResponse as ChildAgentUpdateResponse,
    type ChildAgentDeleteResponse as ChildAgentDeleteResponse,
    type ChildAgentAddResponse as ChildAgentAddResponse,
    type ChildAgentViewResponse as ChildAgentViewResponse,
    type ChildAgentUpdateParams as ChildAgentUpdateParams,
    type ChildAgentDeleteParams as ChildAgentDeleteParams,
    type ChildAgentAddParams as ChildAgentAddParams,
  };
}
