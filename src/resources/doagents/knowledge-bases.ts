// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DoagentsAPI from './doagents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class KnowledgeBases extends APIResource {
  /**
   * To attach knowledge bases to an agent, send a POST request to
   * `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases`
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

export interface APILinkKnowledgeBaseOutput {
  agent?: DoagentsAPI.APIAgent;
}

export interface KnowledgeBaseDetachResponse {
  agent?: DoagentsAPI.APIAgent;
}

export interface KnowledgeBaseAttachSingleParams {
  /**
   * A unique identifier for an agent.
   */
  agent_uuid: string;
}

export interface KnowledgeBaseDetachParams {
  /**
   * agent id
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
