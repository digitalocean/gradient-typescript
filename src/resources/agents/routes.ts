// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Routes extends APIResource {
  /**
   * To update an agent route for an agent, send a PUT request to
   * `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
   *
   * @example
   * ```ts
   * const route = await client.agents.routes.update(
   *   'child_agent_uuid',
   *   { path_parent_agent_uuid: 'parent_agent_uuid' },
   * );
   * ```
   */
  update(
    childAgentUuid: string,
    params: RouteUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RouteUpdateResponse> {
    const { path_parent_agent_uuid, ...body } = params;
    return this._client.put(
      path`/v2/gen-ai/agents/${path_parent_agent_uuid}/child_agents/${childAgentUuid}`,
      { body, defaultBaseURL: 'https://api.digitalocean.com', ...options },
    );
  }

  /**
   * To delete an agent route from a parent agent, send a DELETE request to
   * `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
   *
   * @example
   * ```ts
   * const route = await client.agents.routes.delete(
   *   'child_agent_uuid',
   *   { parent_agent_uuid: 'parent_agent_uuid' },
   * );
   * ```
   */
  delete(
    childAgentUuid: string,
    params: RouteDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RouteDeleteResponse> {
    const { parent_agent_uuid } = params;
    return this._client.delete(path`/v2/gen-ai/agents/${parent_agent_uuid}/child_agents/${childAgentUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To add an agent route to an agent, send a POST request to
   * `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`.
   *
   * @example
   * ```ts
   * const response = await client.agents.routes.add(
   *   'child_agent_uuid',
   *   { path_parent_agent_uuid: 'parent_agent_uuid' },
   * );
   * ```
   */
  add(
    childAgentUuid: string,
    params: RouteAddParams,
    options?: RequestOptions,
  ): APIPromise<RouteAddResponse> {
    const { path_parent_agent_uuid, ...body } = params;
    return this._client.post(
      path`/v2/gen-ai/agents/${path_parent_agent_uuid}/child_agents/${childAgentUuid}`,
      { body, defaultBaseURL: 'https://api.digitalocean.com', ...options },
    );
  }

  /**
   * To view agent routes for an agent, send a GET requtest to
   * `/v2/gen-ai/agents/{uuid}/child_agents`.
   *
   * @example
   * ```ts
   * const response = await client.agents.routes.view('uuid');
   * ```
   */
  view(uuid: string, options?: RequestOptions): APIPromise<RouteViewResponse> {
    return this._client.get(path`/v2/gen-ai/agents/${uuid}/child_agents`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface RouteUpdateResponse {
  child_agent_uuid?: string;

  /**
   * A unique identifier for the parent agent.
   */
  parent_agent_uuid?: string;

  rollback?: boolean;

  uuid?: string;
}

export interface RouteDeleteResponse {
  child_agent_uuid?: string;

  parent_agent_uuid?: string;
}

export interface RouteAddResponse {
  child_agent_uuid?: string;

  /**
   * A unique identifier for the parent agent.
   */
  parent_agent_uuid?: string;
}

export interface RouteViewResponse {
  children?: Array<AgentsAPI.APIAgent>;
}

export interface RouteUpdateParams {
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

export interface RouteDeleteParams {
  /**
   * pagent agent id
   */
  parent_agent_uuid: string;
}

export interface RouteAddParams {
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

export declare namespace Routes {
  export {
    type RouteUpdateResponse as RouteUpdateResponse,
    type RouteDeleteResponse as RouteDeleteResponse,
    type RouteAddResponse as RouteAddResponse,
    type RouteViewResponse as RouteViewResponse,
    type RouteUpdateParams as RouteUpdateParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteAddParams as RouteAddParams,
  };
}
