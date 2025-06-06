// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * To update to a specific agent version, send a PUT request to
   * `/v2/gen-ai/agents/{uuid}/versions`.
   */
  update(
    pathUuid: string,
    body: VersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VersionUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/agents/${pathUuid}/versions`, { body, ...options });
  }

  /**
   * To list all agent versions, send a GET request to
   * `/v2/gen-ai/agents/{uuid}/versions`.
   */
  list(
    uuid: string,
    query: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    return this._client.get(path`/v2/gen-ai/agents/${uuid}/versions`, { query, ...options });
  }
}

export interface APILinks {
  pages?: APILinks.Pages;
}

export namespace APILinks {
  export interface Pages {
    first?: string;

    last?: string;

    next?: string;

    previous?: string;
  }
}

export interface APIMeta {
  page?: number;

  pages?: number;

  total?: number;
}

export interface VersionUpdateResponse {
  /**
   * An alternative way to provide auth information. for internal use only.
   */
  audit_header?: VersionUpdateResponse.AuditHeader;

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

export interface VersionListResponse {
  agent_versions?: Array<VersionListResponse.AgentVersion>;

  links?: APILinks;

  meta?: APIMeta;
}

export namespace VersionListResponse {
  export interface AgentVersion {
    id?: string;

    agent_uuid?: string;

    attached_child_agents?: Array<AgentVersion.AttachedChildAgent>;

    attached_functions?: Array<AgentVersion.AttachedFunction>;

    attached_guardrails?: Array<AgentVersion.AttachedGuardrail>;

    attached_knowledgebases?: Array<AgentVersion.AttachedKnowledgebase>;

    can_rollback?: boolean;

    created_at?: string;

    created_by_email?: string;

    currently_applied?: boolean;

    description?: string;

    instruction?: string;

    k?: number;

    max_tokens?: number;

    model_name?: string;

    name?: string;

    provide_citations?: boolean;

    retrieval_method?: AgentsAPI.APIRetrievalMethod;

    tags?: Array<string>;

    temperature?: number;

    top_p?: number;

    trigger_action?: string;

    version_hash?: string;
  }

  export namespace AgentVersion {
    export interface AttachedChildAgent {
      agent_name?: string;

      child_agent_uuid?: string;

      if_case?: string;

      is_deleted?: boolean;

      route_name?: string;
    }

    export interface AttachedFunction {
      description?: string;

      faas_name?: string;

      faas_namespace?: string;

      is_deleted?: boolean;

      name?: string;
    }

    export interface AttachedGuardrail {
      is_deleted?: boolean;

      name?: string;

      priority?: number;

      uuid?: string;
    }

    export interface AttachedKnowledgebase {
      is_deleted?: boolean;

      name?: string;

      uuid?: string;
    }
  }
}

export interface VersionUpdateParams {
  body_uuid?: string;

  version_hash?: string;
}

export interface VersionListParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;
}

export declare namespace Versions {
  export {
    type APILinks as APILinks,
    type APIMeta as APIMeta,
    type VersionUpdateResponse as VersionUpdateResponse,
    type VersionListResponse as VersionListResponse,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
  };
}
