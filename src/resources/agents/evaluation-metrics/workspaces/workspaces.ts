// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AgentsAPI from '../../agents';
import * as EvaluationTestCasesAPI from '../../evaluation-test-cases';
import * as WorkspacesAgentsAPI from './agents';
import { AgentListParams, AgentListResponse, AgentMoveParams, AgentMoveResponse, Agents } from './agents';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Workspaces extends APIResource {
  agents: WorkspacesAgentsAPI.Agents = new WorkspacesAgentsAPI.Agents(this._client);

  /**
   * To create a new workspace, send a POST request to `/v2/gen-ai/workspaces`. The
   * response body contains a JSON object with the newly created workspace object.
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.agents.evaluationMetrics.workspaces.create();
   * ```
   */
  create(body: WorkspaceCreateParams, options?: RequestOptions): APIPromise<WorkspaceCreateResponse> {
    return this._client.post('/v2/gen-ai/workspaces', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve details of a workspace, GET request to
   * `/v2/gen-ai/workspaces/{workspace_uuid}`. The response body is a JSON object
   * containing the workspace.
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.agents.evaluationMetrics.workspaces.retrieve(
   *     'workspace_uuid',
   *   );
   * ```
   */
  retrieve(workspaceUuid: string, options?: RequestOptions): APIPromise<WorkspaceRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/workspaces/${workspaceUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update a workspace, send a PUT request to
   * `/v2/gen-ai/workspaces/{workspace_uuid}`. The response body is a JSON object
   * containing the workspace.
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.agents.evaluationMetrics.workspaces.update(
   *     'workspace_uuid',
   *   );
   * ```
   */
  update(
    workspaceUuid: string,
    body: WorkspaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkspaceUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/workspaces/${workspaceUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all workspaces, send a GET request to `/v2/gen-ai/workspaces`.
   *
   * @example
   * ```ts
   * const workspaces =
   *   await client.agents.evaluationMetrics.workspaces.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WorkspaceListResponse> {
    return this._client.get('/v2/gen-ai/workspaces', {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a workspace, send a DELETE request to
   * `/v2/gen-ai/workspace/{workspace_uuid}`.
   *
   * @example
   * ```ts
   * const workspace =
   *   await client.agents.evaluationMetrics.workspaces.delete(
   *     'workspace_uuid',
   *   );
   * ```
   */
  delete(workspaceUuid: string, options?: RequestOptions): APIPromise<WorkspaceDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/workspaces/${workspaceUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all evaluation test cases by a workspace, send a GET request to
   * `/v2/gen-ai/workspaces/{workspace_uuid}/evaluation_test_cases`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.evaluationMetrics.workspaces.listEvaluationTestCases(
   *     'workspace_uuid',
   *   );
   * ```
   */
  listEvaluationTestCases(
    workspaceUuid: string,
    options?: RequestOptions,
  ): APIPromise<WorkspaceListEvaluationTestCasesResponse> {
    return this._client.get(path`/v2/gen-ai/workspaces/${workspaceUuid}/evaluation_test_cases`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface WorkspaceCreateResponse {
  workspace?: AgentsAPI.APIWorkspace;
}

export interface WorkspaceRetrieveResponse {
  workspace?: AgentsAPI.APIWorkspace;
}

export interface WorkspaceUpdateResponse {
  workspace?: AgentsAPI.APIWorkspace;
}

export interface WorkspaceListResponse {
  workspaces?: Array<AgentsAPI.APIWorkspace>;
}

export interface WorkspaceDeleteResponse {
  workspace_uuid?: string;
}

export interface WorkspaceListEvaluationTestCasesResponse {
  evaluation_test_cases?: Array<EvaluationTestCasesAPI.APIEvaluationTestCase>;
}

export interface WorkspaceCreateParams {
  agent_uuids?: Array<string>;

  description?: string;

  name?: string;
}

export interface WorkspaceUpdateParams {
  description?: string;

  name?: string;

  /**
   * Workspace UUID.
   */
  body_workspace_uuid?: string;
}

Workspaces.Agents = Agents;

export declare namespace Workspaces {
  export {
    type WorkspaceCreateResponse as WorkspaceCreateResponse,
    type WorkspaceRetrieveResponse as WorkspaceRetrieveResponse,
    type WorkspaceUpdateResponse as WorkspaceUpdateResponse,
    type WorkspaceListResponse as WorkspaceListResponse,
    type WorkspaceDeleteResponse as WorkspaceDeleteResponse,
    type WorkspaceListEvaluationTestCasesResponse as WorkspaceListEvaluationTestCasesResponse,
    type WorkspaceCreateParams as WorkspaceCreateParams,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
  };

  export {
    Agents as Agents,
    type AgentListResponse as AgentListResponse,
    type AgentMoveResponse as AgentMoveResponse,
    type AgentListParams as AgentListParams,
    type AgentMoveParams as AgentMoveParams,
  };
}
