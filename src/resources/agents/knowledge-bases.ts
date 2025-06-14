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
   */
  attach(agentUuid: string, options?: RequestOptions): APIPromise<APILinkKnowledgeBaseOutput> {
    return this._client.post(path`/v2/gen-ai/agents/${agentUuid}/knowledge_bases`, options);
  }
}

export interface APILinkKnowledgeBaseOutput {
  agent?: AgentsAPI.APIAgent;
}

export declare namespace KnowledgeBases {
  export { type APILinkKnowledgeBaseOutput as APILinkKnowledgeBaseOutput };
}
