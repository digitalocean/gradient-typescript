// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * To update to a specific agent version, send a PUT request to
   * `/v2/gen-ai/agents/{uuid}/versions`.
   *
   * @example
   * ```ts
   * const version = await client.agents.versions.update(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  update(
    pathUuid: string,
    body: VersionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/agents/${pathUuid}/versions`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all agent versions, send a GET request to
   * `/v2/gen-ai/agents/{uuid}/versions`.
   *
   * @example
   * ```ts
   * const versions = await client.agents.versions.list(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  list(
    uuid: string,
    query: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    return this._client.get(path`/v2/gen-ai/agents/${uuid}/versions`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface VersionUpdateResponse {
  /**
   * An alternative way to provide auth information. for internal use only.
   */
  audit_header?: VersionUpdateResponse.AuditHeader;

  /**
   * Unique identifier
   */
  version_hash?: string;
}

export namespace VersionUpdateResponse {
  /**
   * An alternative way to provide auth information. for internal use only.
   */
  export interface AuditHeader {
    actor_id?: string;

    actor_ip?: string;

    actor_uuid?: string;

    context_urn?: string;

    origin_application?: string;

    user_id?: string;

    user_uuid?: string;
  }
}

/**
 * List of agent versions
 */
export interface VersionListResponse {
  /**
   * Agents
   */
  agent_versions?: Array<VersionListResponse.AgentVersion>;

  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;
}

export namespace VersionListResponse {
  /**
   * Represents an AgentVersion entity
   */
  export interface AgentVersion {
    /**
     * Unique identifier
     */
    id?: string;

    /**
     * Uuid of the agent this version belongs to
     */
    agent_uuid?: string;

    /**
     * List of child agent relationships
     */
    attached_child_agents?: Array<AgentVersion.AttachedChildAgent>;

    /**
     * List of function versions
     */
    attached_functions?: Array<AgentVersion.AttachedFunction>;

    /**
     * List of guardrail version
     */
    attached_guardrails?: Array<AgentVersion.AttachedGuardrail>;

    /**
     * List of knowledge base agent versions
     */
    attached_knowledgebases?: Array<AgentVersion.AttachedKnowledgebase>;

    /**
     * Whether the version is able to be rolled back to
     */
    can_rollback?: boolean;

    /**
     * Creation date
     */
    created_at?: string;

    /**
     * User who created this version
     */
    created_by_email?: string;

    /**
     * Whether this is the currently applied configuration
     */
    currently_applied?: boolean;

    /**
     * Description of the agent
     */
    description?: string;

    /**
     * Instruction for the agent
     */
    instruction?: string;

    /**
     * K value for the agent's configuration
     */
    k?: number;

    /**
     * Max tokens setting for the agent
     */
    max_tokens?: number;

    /**
     * Name of model associated to the agent version
     */
    model_name?: string;

    /**
     * Name of the agent
     */
    name?: string;

    /**
     * Whether the agent should provide in-response citations
     */
    provide_citations?: boolean;

    /**
     * - RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown
     * - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite
     * - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back
     * - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries
     * - RETRIEVAL_METHOD_NONE: The retrieval method is none
     */
    retrieval_method?: AgentsAPI.APIRetrievalMethod;

    /**
     * Tags associated with the agent
     */
    tags?: Array<string>;

    /**
     * Temperature setting for the agent
     */
    temperature?: number;

    /**
     * Top_p setting for the agent
     */
    top_p?: number;

    /**
     * Action triggering the configuration update
     */
    trigger_action?: string;

    /**
     * Version hash
     */
    version_hash?: string;
  }

  export namespace AgentVersion {
    export interface AttachedChildAgent {
      /**
       * Name of the child agent
       */
      agent_name?: string;

      /**
       * Child agent unique identifier
       */
      child_agent_uuid?: string;

      /**
       * If case
       */
      if_case?: string;

      /**
       * Child agent is deleted
       */
      is_deleted?: boolean;

      /**
       * Route name
       */
      route_name?: string;
    }

    /**
     * Function represents a function configuration for an agent
     */
    export interface AttachedFunction {
      /**
       * Description of the function
       */
      description?: string;

      /**
       * FaaS name of the function
       */
      faas_name?: string;

      /**
       * FaaS namespace of the function
       */
      faas_namespace?: string;

      /**
       * Whether the function is deleted
       */
      is_deleted?: boolean;

      /**
       * Name of the function
       */
      name?: string;
    }

    /**
     * Agent Guardrail version
     */
    export interface AttachedGuardrail {
      /**
       * Whether the guardrail is deleted
       */
      is_deleted?: boolean;

      /**
       * Guardrail Name
       */
      name?: string;

      /**
       * Guardrail Priority
       */
      priority?: number;

      /**
       * Guardrail UUID
       */
      uuid?: string;
    }

    export interface AttachedKnowledgebase {
      /**
       * Deletet at date / time
       */
      is_deleted?: boolean;

      /**
       * Name of the knowledge base
       */
      name?: string;

      /**
       * Unique id of the knowledge base
       */
      uuid?: string;
    }
  }
}

export interface VersionUpdateParams {
  /**
   * Agent unique identifier
   */
  body_uuid?: string;

  /**
   * Unique identifier
   */
  version_hash?: string;
}

export interface VersionListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export declare namespace Versions {
  export {
    type VersionUpdateResponse as VersionUpdateResponse,
    type VersionListResponse as VersionListResponse,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
  };
}
