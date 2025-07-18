// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class KnowledgeBases extends APIResource {
  /**
   * To attach knowledge bases to an agent, send a POST request to
   * `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases`
   *
   * @example
   * ```ts
   * const apiLinkKnowledgeBaseOutput =
   *   await client.agents.knowledgeBases.attach(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  attach(agentUuid: string, options?: RequestOptions): APIPromise<APILinkKnowledgeBaseOutput> {
    return this._client.post(path`/v2/gen-ai/agents/${agentUuid}/knowledge_bases`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To attach a knowledge base to an agent, send a POST request to
   * `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}`
   *
   * @example
   * ```ts
   * const apiLinkKnowledgeBaseOutput =
   *   await client.agents.knowledgeBases.attachSingle(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *     {
   *       agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
   *     },
   *   );
   * ```
   */
  attachSingle(
    knowledgeBaseUuid: string,
    params: KnowledgeBaseAttachSingleParams,
    options?: RequestOptions,
  ): APIPromise<APILinkKnowledgeBaseOutput> {
    const { agent_uuid } = params;
    return this._client.post(path`/v2/gen-ai/agents/${agent_uuid}/knowledge_bases/${knowledgeBaseUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To detach a knowledge base from an agent, send a DELETE request to
   * `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}`.
   *
   * @example
   * ```ts
   * const response = await client.agents.knowledgeBases.detach(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   *   { agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"' },
   * );
   * ```
   */
  detach(
    knowledgeBaseUuid: string,
    params: KnowledgeBaseDetachParams,
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseDetachResponse> {
    const { agent_uuid } = params;
    return this._client.delete(path`/v2/gen-ai/agents/${agent_uuid}/knowledge_bases/${knowledgeBaseUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * Information about a linked knowledge base
 */
export interface APILinkKnowledgeBaseOutput {
  /**
   * An Agent
   */
  agent?: AgentsAPI.APIAgent;
}

/**
 * Informatinon about a unlinked knowledge base
 */
export interface KnowledgeBaseDetachResponse {
  /**
   * An Agent
   */
  agent?: AgentsAPI.APIAgent;
}

export interface KnowledgeBaseAttachSingleParams {
  /**
   * A unique identifier for an agent.
   */
  agent_uuid: string;
}

export interface KnowledgeBaseDetachParams {
  /**
   * Agent id
   */
  agent_uuid: string;
}

export declare namespace KnowledgeBases {
  export {
    type APILinkKnowledgeBaseOutput as APILinkKnowledgeBaseOutput,
    type KnowledgeBaseDetachResponse as KnowledgeBaseDetachResponse,
    type KnowledgeBaseAttachSingleParams as KnowledgeBaseAttachSingleParams,
    type KnowledgeBaseDetachParams as KnowledgeBaseDetachParams,
  };
}
