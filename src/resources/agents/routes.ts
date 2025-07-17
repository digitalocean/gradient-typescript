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
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   {
   *     path_parent_agent_uuid:
   *       '"123e4567-e89b-12d3-a456-426614174000"',
   *   },
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
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   {
   *     parent_agent_uuid:
   *       '"123e4567-e89b-12d3-a456-426614174000"',
   *   },
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
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   {
   *     path_parent_agent_uuid:
   *       '"123e4567-e89b-12d3-a456-426614174000"',
   *   },
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
   * const response = await client.agents.routes.view(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  view(uuid: string, options?: RequestOptions): APIPromise<RouteViewResponse> {
    return this._client.get(path`/v2/gen-ai/agents/${uuid}/child_agents`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * Information about an updated linkage
 */
export interface RouteUpdateResponse {
  /**
   * Routed agent id
   */
  child_agent_uuid?: string;

  /**
   * A unique identifier for the parent agent.
   */
  parent_agent_uuid?: string;

  rollback?: boolean;

  /**
   * Unique id of linkage
   */
  uuid?: string;
}

/**
 * Information about a removed linkage
 */
export interface RouteDeleteResponse {
  /**
   * Routed agent id
   */
  child_agent_uuid?: string;

  /**
   * Pagent agent id
   */
  parent_agent_uuid?: string;
}

/**
 * Information about a newly linked agent
 */
export interface RouteAddResponse {
  /**
   * Routed agent id
   */
  child_agent_uuid?: string;

  /**
   * A unique identifier for the parent agent.
   */
  parent_agent_uuid?: string;
}

/**
 * Child list for an agent
 */
export interface RouteViewResponse {
  /**
   * Child agents
   */
  children?: Array<AgentsAPI.APIAgent>;
}

export interface RouteUpdateParams {
  /**
   * Path param: A unique identifier for the parent agent.
   */
  path_parent_agent_uuid: string;

  /**
   * Body param: Routed agent id
   */
  body_child_agent_uuid?: string;

  /**
   * Body param: Describes the case in which the child agent should be used
   */
  if_case?: string;

  /**
   * Body param: A unique identifier for the parent agent.
   */
  body_parent_agent_uuid?: string;

  /**
   * Body param: Route name
   */
  route_name?: string;

  /**
   * Body param: Unique id of linkage
   */
  uuid?: string;
}

export interface RouteDeleteParams {
  /**
   * Pagent agent id
   */
  parent_agent_uuid: string;
}

export interface RouteAddParams {
  /**
   * Path param: A unique identifier for the parent agent.
   */
  path_parent_agent_uuid: string;

  /**
   * Body param: Routed agent id
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
   * Body param: Name of route
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
