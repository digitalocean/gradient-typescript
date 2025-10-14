// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Functions extends APIResource {
  /**
   * To create a function route for an agent, send a POST request to
   * `/v2/gen-ai/agents/{agent_uuid}/functions`.
   *
   * @example
   * ```ts
   * const _function = await client.agents.functions.create(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  create(
    agentUuid: string,
    body: FunctionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FunctionCreateResponse> {
    return this._client.post(path`/v2/gen-ai/agents/${agentUuid}/functions`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update the function route, send a PUT request to
   * `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`.
   *
   * @example
   * ```ts
   * const _function = await client.agents.functions.update(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   {
   *     path_agent_uuid:
   *       '"123e4567-e89b-12d3-a456-426614174000"',
   *   },
   * );
   * ```
   */
  update(
    functionUuid: string,
    params: FunctionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FunctionUpdateResponse> {
    const { path_agent_uuid, ...body } = params;
    return this._client.put(path`/v2/gen-ai/agents/${path_agent_uuid}/functions/${functionUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a function route from an agent, send a DELETE request to
   * `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`.
   *
   * @example
   * ```ts
   * const _function = await client.agents.functions.delete(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   { agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"' },
   * );
   * ```
   */
  delete(
    functionUuid: string,
    params: FunctionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FunctionDeleteResponse> {
    const { agent_uuid } = params;
    return this._client.delete(path`/v2/gen-ai/agents/${agent_uuid}/functions/${functionUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * Information about a newly function linked agent
 */
export interface FunctionCreateResponse {
  /**
   * An Agent
   */
  agent?: AgentsAPI.APIAgent;
}

/**
 * The updated agent
 */
export interface FunctionUpdateResponse {
  /**
   * An Agent
   */
  agent?: AgentsAPI.APIAgent;
}

/**
 * Information about a newly unlinked agent
 */
export interface FunctionDeleteResponse {
  /**
   * An Agent
   */
  agent?: AgentsAPI.APIAgent;
}

export interface FunctionCreateParams {
  /**
   * Agent id
   */
  body_agent_uuid?: string;

  /**
   * Function description
   */
  description?: string;

  /**
   * The name of the function in the DigitalOcean functions platform
   */
  faas_name?: string;

  /**
   * The namespace of the function in the DigitalOcean functions platform
   */
  faas_namespace?: string;

  /**
   * Function name
   */
  function_name?: string;

  /**
   * Describe the input schema for the function so the agent may call it
   */
  input_schema?: unknown;

  /**
   * Describe the output schema for the function so the agent handle its response
   */
  output_schema?: unknown;
}

export interface FunctionUpdateParams {
  /**
   * Path param: Agent id
   */
  path_agent_uuid: string;

  /**
   * Body param: Agent id
   */
  body_agent_uuid?: string;

  /**
   * Body param: Funciton description
   */
  description?: string;

  /**
   * Body param: The name of the function in the DigitalOcean functions platform
   */
  faas_name?: string;

  /**
   * Body param: The namespace of the function in the DigitalOcean functions platform
   */
  faas_namespace?: string;

  /**
   * Body param: Function name
   */
  function_name?: string;

  /**
   * Body param: Function id
   */
  body_function_uuid?: string;

  /**
   * Body param: Describe the input schema for the function so the agent may call it
   */
  input_schema?: unknown;

  /**
   * Body param: Describe the output schema for the function so the agent handle its
   * response
   */
  output_schema?: unknown;
}

export interface FunctionDeleteParams {
  /**
   * The id of the agent the function route belongs to.
   */
  agent_uuid: string;
}

export declare namespace Functions {
  export {
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionUpdateResponse as FunctionUpdateResponse,
    type FunctionDeleteResponse as FunctionDeleteResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionDeleteParams as FunctionDeleteParams,
  };
}



import Gradient from "@digitalocean/gradient";

/**
 * Waits for an agent deployment to become ready (STATUS_RUNNING).
 * Polls in a loop, throws on timeout or error status.
 * 
 * @param client Gradient SDK client instance.
 * @param agentUuid Agent UUID string.
 * @param pollIntervalMs Time (ms) between status checks (default 2000).
 * @param maxWaitMs Max time (ms) to wait before giving up (default 60000).
 * @returns The agent object when ready.
 * @throws Error if deployment failed, deleted, or timed out.
 */
export async function waitForAgentDeploymentReady(
  client: Gradient,
  agentUuid: string,
  pollIntervalMs = 2000,
  maxWaitMs = 60000
): Promise<any> {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const result = await client.agents.retrieve(agentUuid);
    const status = result?.agent?.deployment?.status;
    if (status === "STATUS_RUNNING") return result.agent;
    if (status === "STATUS_FAILED" || status === "STATUS_DELETED") {
      throw new Error(`Agent deployment failed or was deleted (status: ${status})`);
    }
    await new Promise(res => setTimeout(res, pollIntervalMs));
  }
  throw new Error("Timeout waiting for agent deployment readiness.");
}
