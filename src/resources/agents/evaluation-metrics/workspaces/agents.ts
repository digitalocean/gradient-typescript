// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as AgentsAPI from '../../agents';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * To list all agents by a Workspace, send a GET request to
   * `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.
   *
   * @example
   * ```ts
   * const agents =
   *   await client.agents.evaluationMetrics.workspaces.agents.list(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  list(
    workspaceUuid: string,
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get(path`/v2/gen-ai/workspaces/${workspaceUuid}/agents`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To move all listed agents a given workspace, send a PUT request to
   * `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.evaluationMetrics.workspaces.agents.move(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  move(
    workspaceUuid: string,
    body: AgentMoveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentMoveResponse> {
    return this._client.put(path`/v2/gen-ai/workspaces/${workspaceUuid}/agents`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface AgentListResponse {
  agents?: Array<AgentsAPI.APIAgent>;

  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;
}

export interface AgentMoveResponse {
  workspace?: AgentsAPI.APIWorkspace;
}

export interface AgentListParams {
  /**
   * Only list agents that are deployed.
   */
  only_deployed?: boolean;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export interface AgentMoveParams {
  /**
   * Agent uuids
   */
  agent_uuids?: Array<string>;

  /**
   * Workspace uuid to move agents to
   */
  body_workspace_uuid?: string;
}

export declare namespace Agents {
  export {
    type AgentListResponse as AgentListResponse,
    type AgentMoveResponse as AgentMoveResponse,
    type AgentListParams as AgentListParams,
    type AgentMoveParams as AgentMoveParams,
  };
}
