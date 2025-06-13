// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';

export class KnowledgeBases extends APIResource {}

export interface APILinkKnowledgeBaseOutput {
  agent?: AgentsAPI.APIAgent;
}

export declare namespace KnowledgeBases {
  export { type APILinkKnowledgeBaseOutput as APILinkKnowledgeBaseOutput };
}
