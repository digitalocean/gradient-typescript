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
   *     'workspace_uuid',
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
   * To move all listed agetns a given workspace, send a PUT request to
   * `/v2/gen-ai/workspaces/{workspace_uuid}/agents`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.evaluationMetrics.workspaces.agents.move(
   *     'workspace_uuid',
   *   );
   * ```
   */
  move(
    workspaceUuid: string,
    body: AgentMoveParams,
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

  links?: Shared.APILinks;

  meta?: Shared.APIMeta;
}

export interface AgentMoveResponse {
  workspace?: AgentsAPI.APIWorkspace;
}

export interface AgentListParams {
  field_mask?: AgentListParams.FieldMask;

  /**
   * Only list agents that are deployed.
   */
  only_deployed?: boolean;

  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;
}

export namespace AgentListParams {
  export interface FieldMask {
    /**
     * The set of field mask paths.
     */
    paths?: Array<string>;
  }
}

export interface AgentMoveParams {
  agent_uuids?: Array<string>;

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
