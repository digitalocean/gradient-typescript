// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IndexingJobsAPI from './indexing-jobs';
import {
  APIIndexingJob,
  IndexingJobCreateParams,
  IndexingJobCreateResponse,
  IndexingJobListParams,
  IndexingJobListResponse,
  IndexingJobRetrieveDataSourcesResponse,
  IndexingJobRetrieveResponse,
  IndexingJobUpdateCancelParams,
  IndexingJobUpdateCancelResponse,
  IndexingJobs,
} from './indexing-jobs';
import * as AgentsAPI from './agents/agents';
import {
  APIDeploymentVisibility,
  APIModel,
  APIRetrievalMethod,
  AgentCreateParams,
  AgentCreateResponse,
  AgentDeleteResponse,
  AgentListParams,
  AgentListResponse,
  AgentRetrieveResponse,
  AgentUpdateParams,
  AgentUpdateResponse,
  AgentUpdateStatusParams,
  AgentUpdateStatusResponse,
  Agents,
} from './agents/agents';
import * as AuthAPI from './auth/auth';
import { Auth } from './auth/auth';
import * as KnowledgeBasesAPI from './knowledge-bases/knowledge-bases';
import {
  APIKnowledgeBase,
  KnowledgeBaseCreateParams,
  KnowledgeBaseCreateResponse,
  KnowledgeBaseDeleteResponse,
  KnowledgeBaseListParams,
  KnowledgeBaseListResponse,
  KnowledgeBaseRetrieveResponse,
  KnowledgeBaseUpdateParams,
  KnowledgeBaseUpdateResponse,
  KnowledgeBases,
} from './knowledge-bases/knowledge-bases';
import * as ModelsAPI from './models/models';
import { APIAgreement, APIModelVersion, ModelListParams, ModelListResponse, Models } from './models/models';
import * as ProvidersAPI from './providers/providers';
import { Providers } from './providers/providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Genai extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  indexingJobs: IndexingJobsAPI.IndexingJobs = new IndexingJobsAPI.IndexingJobs(this._client);
  knowledgeBases: KnowledgeBasesAPI.KnowledgeBases = new KnowledgeBasesAPI.KnowledgeBases(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);

  /**
   * To list all datacenter regions, send a GET request to `/v2/gen-ai/regions`.
   */
  retrieveRegions(
    query: GenaiRetrieveRegionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GenaiRetrieveRegionsResponse> {
    return this._client.get('/v2/genai/regions', { query, ...options });
  }
}

export interface GenaiRetrieveRegionsResponse {
  regions?: Array<GenaiRetrieveRegionsResponse.Region>;
}

export namespace GenaiRetrieveRegionsResponse {
  export interface Region {
    inference_url?: string;

    region?: string;

    serves_batch?: boolean;

    serves_inference?: boolean;

    stream_inference_url?: string;
  }
}

export interface GenaiRetrieveRegionsParams {
  /**
   * include datacenters that are capable of running batch jobs.
   */
  serves_batch?: boolean;

  /**
   * include datacenters that serve inference.
   */
  serves_inference?: boolean;
}

Genai.Agents = Agents;
Genai.Providers = Providers;
Genai.Auth = Auth;
Genai.IndexingJobs = IndexingJobs;
Genai.KnowledgeBases = KnowledgeBases;
Genai.Models = Models;

export declare namespace Genai {
  export {
    type GenaiRetrieveRegionsResponse as GenaiRetrieveRegionsResponse,
    type GenaiRetrieveRegionsParams as GenaiRetrieveRegionsParams,
  };

  export {
    Agents as Agents,
    type APIDeploymentVisibility as APIDeploymentVisibility,
    type APIModel as APIModel,
    type APIRetrievalMethod as APIRetrievalMethod,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentUpdateStatusResponse as AgentUpdateStatusResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentUpdateStatusParams as AgentUpdateStatusParams,
  };

  export { Providers as Providers };

  export { Auth as Auth };

  export {
    IndexingJobs as IndexingJobs,
    type APIIndexingJob as APIIndexingJob,
    type IndexingJobCreateResponse as IndexingJobCreateResponse,
    type IndexingJobRetrieveResponse as IndexingJobRetrieveResponse,
    type IndexingJobListResponse as IndexingJobListResponse,
    type IndexingJobRetrieveDataSourcesResponse as IndexingJobRetrieveDataSourcesResponse,
    type IndexingJobUpdateCancelResponse as IndexingJobUpdateCancelResponse,
    type IndexingJobCreateParams as IndexingJobCreateParams,
    type IndexingJobListParams as IndexingJobListParams,
    type IndexingJobUpdateCancelParams as IndexingJobUpdateCancelParams,
  };

  export {
    KnowledgeBases as KnowledgeBases,
    type APIKnowledgeBase as APIKnowledgeBase,
    type KnowledgeBaseCreateResponse as KnowledgeBaseCreateResponse,
    type KnowledgeBaseRetrieveResponse as KnowledgeBaseRetrieveResponse,
    type KnowledgeBaseUpdateResponse as KnowledgeBaseUpdateResponse,
    type KnowledgeBaseListResponse as KnowledgeBaseListResponse,
    type KnowledgeBaseDeleteResponse as KnowledgeBaseDeleteResponse,
    type KnowledgeBaseCreateParams as KnowledgeBaseCreateParams,
    type KnowledgeBaseUpdateParams as KnowledgeBaseUpdateParams,
    type KnowledgeBaseListParams as KnowledgeBaseListParams,
  };

  export {
    Models as Models,
    type APIAgreement as APIAgreement,
    type APIModelVersion as APIModelVersion,
    type ModelListResponse as ModelListResponse,
    type ModelListParams as ModelListParams,
  };
}
