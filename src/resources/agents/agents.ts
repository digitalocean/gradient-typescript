// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as ModelsAPI from '../models';
import * as Shared from '../shared';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyCreateParams,
  APIKeyCreateResponse,
  APIKeyDeleteParams,
  APIKeyDeleteResponse,
  APIKeyListParams,
  APIKeyListResponse,
  APIKeyRegenerateParams,
  APIKeyRegenerateResponse,
  APIKeyUpdateParams,
  APIKeyUpdateResponse,
  APIKeys,
} from './api-keys';
import * as EvaluationDatasetsAPI from './evaluation-datasets';
import {
  EvaluationDatasetCreateFileUploadPresignedURLsParams,
  EvaluationDatasetCreateFileUploadPresignedURLsResponse,
  EvaluationDatasetCreateParams,
  EvaluationDatasetCreateResponse,
  EvaluationDatasets,
} from './evaluation-datasets';
import * as EvaluationRunsAPI from './evaluation-runs';
import {
  APIEvaluationMetric,
  APIEvaluationMetricResult,
  APIEvaluationPrompt,
  APIEvaluationRun,
  EvaluationRunCreateParams,
  EvaluationRunCreateResponse,
  EvaluationRunListResultsResponse,
  EvaluationRunRetrieveResponse,
  EvaluationRunRetrieveResultsParams,
  EvaluationRunRetrieveResultsResponse,
  EvaluationRuns,
} from './evaluation-runs';
import * as EvaluationTestCasesAPI from './evaluation-test-cases';
import {
  APIEvaluationTestCase,
  APIStarMetric,
  EvaluationTestCaseCreateParams,
  EvaluationTestCaseCreateResponse,
  EvaluationTestCaseListEvaluationRunsParams,
  EvaluationTestCaseListEvaluationRunsResponse,
  EvaluationTestCaseListResponse,
  EvaluationTestCaseRetrieveParams,
  EvaluationTestCaseRetrieveResponse,
  EvaluationTestCaseUpdateParams,
  EvaluationTestCaseUpdateResponse,
  EvaluationTestCases,
} from './evaluation-test-cases';
import * as FunctionsAPI from './functions';
import {
  FunctionCreateParams,
  FunctionCreateResponse,
  FunctionDeleteParams,
  FunctionDeleteResponse,
  FunctionUpdateParams,
  FunctionUpdateResponse,
  Functions,
} from './functions';
import * as KnowledgeBasesAPI from './knowledge-bases';
import {
  APILinkKnowledgeBaseOutput,
  KnowledgeBaseAttachSingleParams,
  KnowledgeBaseDetachParams,
  KnowledgeBaseDetachResponse,
  KnowledgeBases,
} from './knowledge-bases';
import * as RoutesAPI from './routes';
import {
  RouteAddParams,
  RouteAddResponse,
  RouteDeleteParams,
  RouteDeleteResponse,
  RouteUpdateParams,
  RouteUpdateResponse,
  RouteViewResponse,
  Routes,
} from './routes';
import * as VersionsAPI from './versions';
import {
  VersionListParams,
  VersionListResponse,
  VersionUpdateParams,
  VersionUpdateResponse,
  Versions,
} from './versions';
import * as KnowledgeBasesKnowledgeBasesAPI from '../knowledge-bases/knowledge-bases';
import * as ChatAPI from './chat/chat';
import { Chat } from './chat/chat';
import * as EvaluationMetricsAPI from './evaluation-metrics/evaluation-metrics';
import { EvaluationMetricListResponse, EvaluationMetrics } from './evaluation-metrics/evaluation-metrics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  evaluationMetrics: EvaluationMetricsAPI.EvaluationMetrics = new EvaluationMetricsAPI.EvaluationMetrics(
    this._client,
  );
  evaluationRuns: EvaluationRunsAPI.EvaluationRuns = new EvaluationRunsAPI.EvaluationRuns(this._client);
  evaluationTestCases: EvaluationTestCasesAPI.EvaluationTestCases =
    new EvaluationTestCasesAPI.EvaluationTestCases(this._client);
  evaluationDatasets: EvaluationDatasetsAPI.EvaluationDatasets = new EvaluationDatasetsAPI.EvaluationDatasets(
    this._client,
  );
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  knowledgeBases: KnowledgeBasesAPI.KnowledgeBases = new KnowledgeBasesAPI.KnowledgeBases(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);

  /**
   * To create a new agent, send a POST request to `/v2/gen-ai/agents`. The response
   * body contains a JSON object with the newly created agent object.
   *
   * @example
   * ```ts
   * const agent = await client.agents.create();
   * ```
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentCreateResponse> {
    return this._client.post('/v2/gen-ai/agents', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve details of an agent, GET request to `/v2/gen-ai/agents/{uuid}`. The
   * response body is a JSON object containing the agent.
   *
   * @example
   * ```ts
   * const agent = await client.agents.retrieve('uuid');
   * ```
   */
  retrieve(uuid: string, options?: RequestOptions): APIPromise<AgentRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/agents/${uuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update an agent, send a PUT request to `/v2/gen-ai/agents/{uuid}`. The
   * response body is a JSON object containing the agent.
   *
   * @example
   * ```ts
   * const agent = await client.agents.update('uuid');
   * ```
   */
  update(
    pathUuid: string,
    body: AgentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/agents/${pathUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all agents, send a GET request to `/v2/gen-ai/agents`.
   *
   * @example
   * ```ts
   * const agents = await client.agents.list();
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v2/gen-ai/agents', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete an agent, send a DELETE request to `/v2/gen-ai/agents/{uuid}`.
   *
   * @example
   * ```ts
   * const agent = await client.agents.delete('uuid');
   * ```
   */
  delete(uuid: string, options?: RequestOptions): APIPromise<AgentDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/agents/${uuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * Check whether an agent is public or private. To update the agent status, send a
   * PUT request to `/v2/gen-ai/agents/{uuid}/deployment_visibility`.
   *
   * @example
   * ```ts
   * const response = await client.agents.updateStatus('uuid');
   * ```
   */
  updateStatus(
    pathUuid: string,
    body: AgentUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<AgentUpdateStatusResponse> {
    return this._client.put(path`/v2/gen-ai/agents/${pathUuid}/deployment_visibility`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface APIAgent {
  anthropic_api_key?: APIAnthropicAPIKeyInfo;

  api_key_infos?: Array<APIAgentAPIKeyInfo>;

  api_keys?: Array<APIAgent.APIKey>;

  chatbot?: APIAgent.Chatbot;

  chatbot_identifiers?: Array<APIAgent.ChatbotIdentifier>;

  child_agents?: Array<APIAgent>;

  created_at?: string;

  deployment?: APIAgent.Deployment;

  description?: string;

  functions?: Array<APIAgent.Function>;

  guardrails?: Array<APIAgent.Guardrail>;

  if_case?: string;

  /**
   * Agent instruction. Instructions help your agent to perform its job effectively.
   * See
   * [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions)
   * for best practices.
   */
  instruction?: string;

  k?: number;

  knowledge_bases?: Array<KnowledgeBasesKnowledgeBasesAPI.APIKnowledgeBase>;

  max_tokens?: number;

  model?: APIAgentModel;

  name?: string;

  openai_api_key?: APIOpenAIAPIKeyInfo;

  parent_agents?: Array<APIAgent>;

  project_id?: string;

  provide_citations?: boolean;

  region?: string;

  retrieval_method?: APIRetrievalMethod;

  route_created_at?: string;

  route_created_by?: string;

  route_name?: string;

  route_uuid?: string;

  tags?: Array<string>;

  temperature?: number;

  template?: APIAgent.Template;

  top_p?: number;

  updated_at?: string;

  url?: string;

  user_id?: string;

  uuid?: string;

  workspace?: APIWorkspace;
}

export namespace APIAgent {
  export interface APIKey {
    api_key?: string;
  }

  export interface Chatbot {
    button_background_color?: string;

    logo?: string;

    name?: string;

    primary_color?: string;

    secondary_color?: string;

    starting_message?: string;
  }

  export interface ChatbotIdentifier {
    agent_chatbot_identifier?: string;
  }

  export interface Deployment {
    created_at?: string;

    name?: string;

    status?:
      | 'STATUS_UNKNOWN'
      | 'STATUS_WAITING_FOR_DEPLOYMENT'
      | 'STATUS_DEPLOYING'
      | 'STATUS_RUNNING'
      | 'STATUS_FAILED'
      | 'STATUS_WAITING_FOR_UNDEPLOYMENT'
      | 'STATUS_UNDEPLOYING'
      | 'STATUS_UNDEPLOYMENT_FAILED'
      | 'STATUS_DELETED';

    updated_at?: string;

    url?: string;

    uuid?: string;

    visibility?: AgentsAPI.APIDeploymentVisibility;
  }

  export interface Function {
    api_key?: string;

    created_at?: string;

    created_by?: string;

    description?: string;

    faas_name?: string;

    faas_namespace?: string;

    input_schema?: unknown;

    name?: string;

    output_schema?: unknown;

    updated_at?: string;

    url?: string;

    uuid?: string;
  }

  export interface Guardrail {
    agent_uuid?: string;

    created_at?: string;

    default_response?: string;

    description?: string;

    guardrail_uuid?: string;

    is_attached?: boolean;

    is_default?: boolean;

    metadata?: unknown;

    name?: string;

    priority?: number;

    type?:
      | 'GUARDRAIL_TYPE_UNKNOWN'
      | 'GUARDRAIL_TYPE_JAILBREAK'
      | 'GUARDRAIL_TYPE_SENSITIVE_DATA'
      | 'GUARDRAIL_TYPE_CONTENT_MODERATION';

    updated_at?: string;

    uuid?: string;
  }

  export interface Template {
    created_at?: string;

    description?: string;

    guardrails?: Array<Template.Guardrail>;

    instruction?: string;

    k?: number;

    knowledge_bases?: Array<KnowledgeBasesKnowledgeBasesAPI.APIKnowledgeBase>;

    long_description?: string;

    max_tokens?: number;

    model?: AgentsAPI.APIAgentModel;

    name?: string;

    short_description?: string;

    summary?: string;

    tags?: Array<string>;

    temperature?: number;

    template_type?: 'AGENT_TEMPLATE_TYPE_STANDARD' | 'AGENT_TEMPLATE_TYPE_ONE_CLICK';

    top_p?: number;

    updated_at?: string;

    uuid?: string;
  }

  export namespace Template {
    export interface Guardrail {
      priority?: number;

      uuid?: string;
    }
  }
}

export interface APIAgentAPIKeyInfo {
  created_at?: string;

  created_by?: string;

  deleted_at?: string;

  name?: string;

  secret_key?: string;

  uuid?: string;
}

export interface APIAgentModel {
  agreement?: ModelsAPI.APIAgreement;

  created_at?: string;

  inference_name?: string;

  inference_version?: string;

  is_foundational?: boolean;

  metadata?: unknown;

  name?: string;

  parent_uuid?: string;

  provider?: 'MODEL_PROVIDER_DIGITALOCEAN' | 'MODEL_PROVIDER_ANTHROPIC' | 'MODEL_PROVIDER_OPENAI';

  updated_at?: string;

  upload_complete?: boolean;

  url?: string;

  usecases?: Array<
    | 'MODEL_USECASE_UNKNOWN'
    | 'MODEL_USECASE_AGENT'
    | 'MODEL_USECASE_FINETUNED'
    | 'MODEL_USECASE_KNOWLEDGEBASE'
    | 'MODEL_USECASE_GUARDRAIL'
    | 'MODEL_USECASE_REASONING'
    | 'MODEL_USECASE_SERVERLESS'
  >;

  uuid?: string;

  version?: ModelsAPI.APIModelVersion;
}

export interface APIAnthropicAPIKeyInfo {
  created_at?: string;

  created_by?: string;

  deleted_at?: string;

  name?: string;

  updated_at?: string;

  uuid?: string;
}

export type APIDeploymentVisibility =
  | 'VISIBILITY_UNKNOWN'
  | 'VISIBILITY_DISABLED'
  | 'VISIBILITY_PLAYGROUND'
  | 'VISIBILITY_PUBLIC'
  | 'VISIBILITY_PRIVATE';

export interface APIOpenAIAPIKeyInfo {
  created_at?: string;

  created_by?: string;

  deleted_at?: string;

  models?: Array<APIAgentModel>;

  name?: string;

  updated_at?: string;

  uuid?: string;
}

export type APIRetrievalMethod =
  | 'RETRIEVAL_METHOD_UNKNOWN'
  | 'RETRIEVAL_METHOD_REWRITE'
  | 'RETRIEVAL_METHOD_STEP_BACK'
  | 'RETRIEVAL_METHOD_SUB_QUERIES'
  | 'RETRIEVAL_METHOD_NONE';

export interface APIWorkspace {
  agents?: Array<APIAgent>;

  created_at?: string;

  created_by?: string;

  created_by_email?: string;

  deleted_at?: string;

  description?: string;

  evaluation_test_cases?: Array<EvaluationTestCasesAPI.APIEvaluationTestCase>;

  name?: string;

  updated_at?: string;

  uuid?: string;
}

export interface AgentCreateResponse {
  agent?: APIAgent;
}

export interface AgentRetrieveResponse {
  agent?: APIAgent;
}

export interface AgentUpdateResponse {
  agent?: APIAgent;
}

export interface AgentListResponse {
  agents?: Array<AgentListResponse.Agent>;

  links?: Shared.APILinks;

  meta?: Shared.APIMeta;
}

export namespace AgentListResponse {
  export interface Agent {
    chatbot?: Agent.Chatbot;

    chatbot_identifiers?: Array<Agent.ChatbotIdentifier>;

    created_at?: string;

    deployment?: Agent.Deployment;

    description?: string;

    if_case?: string;

    /**
     * Agent instruction. Instructions help your agent to perform its job effectively.
     * See
     * [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions)
     * for best practices.
     */
    instruction?: string;

    k?: number;

    /**
     * Specifies the maximum number of tokens the model can process in a single input
     * or output, set as a number between 1 and 512. This determines the length of each
     * response.
     */
    max_tokens?: number;

    model?: AgentsAPI.APIAgentModel;

    name?: string;

    project_id?: string;

    provide_citations?: boolean;

    region?: string;

    retrieval_method?: AgentsAPI.APIRetrievalMethod;

    route_created_at?: string;

    route_created_by?: string;

    route_name?: string;

    route_uuid?: string;

    tags?: Array<string>;

    /**
     * Controls the model’s creativity, specified as a number between 0 and 1. Lower
     * values produce more predictable and conservative responses, while higher values
     * encourage creativity and variation.
     */
    temperature?: number;

    template?: Agent.Template;

    /**
     * Defines the cumulative probability threshold for word selection, specified as a
     * number between 0 and 1. Higher values allow for more diverse outputs, while
     * lower values ensure focused and coherent responses.
     */
    top_p?: number;

    updated_at?: string;

    url?: string;

    user_id?: string;

    uuid?: string;
  }

  export namespace Agent {
    export interface Chatbot {
      button_background_color?: string;

      logo?: string;

      name?: string;

      primary_color?: string;

      secondary_color?: string;

      starting_message?: string;
    }

    export interface ChatbotIdentifier {
      agent_chatbot_identifier?: string;
    }

    export interface Deployment {
      created_at?: string;

      name?: string;

      status?:
        | 'STATUS_UNKNOWN'
        | 'STATUS_WAITING_FOR_DEPLOYMENT'
        | 'STATUS_DEPLOYING'
        | 'STATUS_RUNNING'
        | 'STATUS_FAILED'
        | 'STATUS_WAITING_FOR_UNDEPLOYMENT'
        | 'STATUS_UNDEPLOYING'
        | 'STATUS_UNDEPLOYMENT_FAILED'
        | 'STATUS_DELETED';

      updated_at?: string;

      url?: string;

      uuid?: string;

      visibility?: AgentsAPI.APIDeploymentVisibility;
    }

    export interface Template {
      created_at?: string;

      description?: string;

      guardrails?: Array<Template.Guardrail>;

      instruction?: string;

      k?: number;

      knowledge_bases?: Array<KnowledgeBasesKnowledgeBasesAPI.APIKnowledgeBase>;

      long_description?: string;

      max_tokens?: number;

      model?: AgentsAPI.APIAgentModel;

      name?: string;

      short_description?: string;

      summary?: string;

      tags?: Array<string>;

      temperature?: number;

      template_type?: 'AGENT_TEMPLATE_TYPE_STANDARD' | 'AGENT_TEMPLATE_TYPE_ONE_CLICK';

      top_p?: number;

      updated_at?: string;

      uuid?: string;
    }

    export namespace Template {
      export interface Guardrail {
        priority?: number;

        uuid?: string;
      }
    }
  }
}

export interface AgentDeleteResponse {
  agent?: APIAgent;
}

export interface AgentUpdateStatusResponse {
  agent?: APIAgent;
}

export interface AgentCreateParams {
  anthropic_key_uuid?: string;

  description?: string;

  /**
   * Agent instruction. Instructions help your agent to perform its job effectively.
   * See
   * [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions)
   * for best practices.
   */
  instruction?: string;

  knowledge_base_uuid?: Array<string>;

  /**
   * Identifier for the foundation model.
   */
  model_uuid?: string;

  name?: string;

  open_ai_key_uuid?: string;

  project_id?: string;

  region?: string;

  tags?: Array<string>;
}

export interface AgentUpdateParams {
  anthropic_key_uuid?: string;

  description?: string;

  /**
   * Agent instruction. Instructions help your agent to perform its job effectively.
   * See
   * [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions)
   * for best practices.
   */
  instruction?: string;

  k?: number;

  /**
   * Specifies the maximum number of tokens the model can process in a single input
   * or output, set as a number between 1 and 512. This determines the length of each
   * response.
   */
  max_tokens?: number;

  /**
   * Identifier for the foundation model.
   */
  model_uuid?: string;

  name?: string;

  open_ai_key_uuid?: string;

  project_id?: string;

  provide_citations?: boolean;

  retrieval_method?: APIRetrievalMethod;

  tags?: Array<string>;

  /**
   * Controls the model’s creativity, specified as a number between 0 and 1. Lower
   * values produce more predictable and conservative responses, while higher values
   * encourage creativity and variation.
   */
  temperature?: number;

  /**
   * Defines the cumulative probability threshold for word selection, specified as a
   * number between 0 and 1. Higher values allow for more diverse outputs, while
   * lower values ensure focused and coherent responses.
   */
  top_p?: number;

  body_uuid?: string;
}

export interface AgentListParams {
  /**
   * only list agents that are deployed.
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

export interface AgentUpdateStatusParams {
  body_uuid?: string;

  visibility?: APIDeploymentVisibility;
}

Agents.APIKeys = APIKeys;
Agents.Chat = Chat;
Agents.EvaluationMetrics = EvaluationMetrics;
Agents.EvaluationRuns = EvaluationRuns;
Agents.EvaluationTestCases = EvaluationTestCases;
Agents.EvaluationDatasets = EvaluationDatasets;
Agents.Functions = Functions;
Agents.Versions = Versions;
Agents.KnowledgeBases = KnowledgeBases;
Agents.Routes = Routes;

export declare namespace Agents {
  export {
    type APIAgent as APIAgent,
    type APIAgentAPIKeyInfo as APIAgentAPIKeyInfo,
    type APIAgentModel as APIAgentModel,
    type APIAnthropicAPIKeyInfo as APIAnthropicAPIKeyInfo,
    type APIDeploymentVisibility as APIDeploymentVisibility,
    type APIOpenAIAPIKeyInfo as APIOpenAIAPIKeyInfo,
    type APIRetrievalMethod as APIRetrievalMethod,
    type APIWorkspace as APIWorkspace,
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

  export {
    APIKeys as APIKeys,
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyUpdateResponse as APIKeyUpdateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyRegenerateResponse as APIKeyRegenerateResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
    type APIKeyRegenerateParams as APIKeyRegenerateParams,
  };

  export { Chat as Chat };

  export {
    EvaluationMetrics as EvaluationMetrics,
    type EvaluationMetricListResponse as EvaluationMetricListResponse,
  };

  export {
    EvaluationRuns as EvaluationRuns,
    type APIEvaluationMetric as APIEvaluationMetric,
    type APIEvaluationMetricResult as APIEvaluationMetricResult,
    type APIEvaluationPrompt as APIEvaluationPrompt,
    type APIEvaluationRun as APIEvaluationRun,
    type EvaluationRunCreateResponse as EvaluationRunCreateResponse,
    type EvaluationRunRetrieveResponse as EvaluationRunRetrieveResponse,
    type EvaluationRunListResultsResponse as EvaluationRunListResultsResponse,
    type EvaluationRunRetrieveResultsResponse as EvaluationRunRetrieveResultsResponse,
    type EvaluationRunCreateParams as EvaluationRunCreateParams,
    type EvaluationRunRetrieveResultsParams as EvaluationRunRetrieveResultsParams,
  };

  export {
    EvaluationTestCases as EvaluationTestCases,
    type APIEvaluationTestCase as APIEvaluationTestCase,
    type APIStarMetric as APIStarMetric,
    type EvaluationTestCaseCreateResponse as EvaluationTestCaseCreateResponse,
    type EvaluationTestCaseRetrieveResponse as EvaluationTestCaseRetrieveResponse,
    type EvaluationTestCaseUpdateResponse as EvaluationTestCaseUpdateResponse,
    type EvaluationTestCaseListResponse as EvaluationTestCaseListResponse,
    type EvaluationTestCaseListEvaluationRunsResponse as EvaluationTestCaseListEvaluationRunsResponse,
    type EvaluationTestCaseCreateParams as EvaluationTestCaseCreateParams,
    type EvaluationTestCaseRetrieveParams as EvaluationTestCaseRetrieveParams,
    type EvaluationTestCaseUpdateParams as EvaluationTestCaseUpdateParams,
    type EvaluationTestCaseListEvaluationRunsParams as EvaluationTestCaseListEvaluationRunsParams,
  };

  export {
    EvaluationDatasets as EvaluationDatasets,
    type EvaluationDatasetCreateResponse as EvaluationDatasetCreateResponse,
    type EvaluationDatasetCreateFileUploadPresignedURLsResponse as EvaluationDatasetCreateFileUploadPresignedURLsResponse,
    type EvaluationDatasetCreateParams as EvaluationDatasetCreateParams,
    type EvaluationDatasetCreateFileUploadPresignedURLsParams as EvaluationDatasetCreateFileUploadPresignedURLsParams,
  };

  export {
    Functions as Functions,
    type FunctionCreateResponse as FunctionCreateResponse,
    type FunctionUpdateResponse as FunctionUpdateResponse,
    type FunctionDeleteResponse as FunctionDeleteResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionDeleteParams as FunctionDeleteParams,
  };

  export {
    Versions as Versions,
    type VersionUpdateResponse as VersionUpdateResponse,
    type VersionListResponse as VersionListResponse,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
  };

  export {
    KnowledgeBases as KnowledgeBases,
    type APILinkKnowledgeBaseOutput as APILinkKnowledgeBaseOutput,
    type KnowledgeBaseDetachResponse as KnowledgeBaseDetachResponse,
    type KnowledgeBaseAttachSingleParams as KnowledgeBaseAttachSingleParams,
    type KnowledgeBaseDetachParams as KnowledgeBaseDetachParams,
  };

  export {
    Routes as Routes,
    type RouteUpdateResponse as RouteUpdateResponse,
    type RouteDeleteResponse as RouteDeleteResponse,
    type RouteAddResponse as RouteAddResponse,
    type RouteViewResponse as RouteViewResponse,
    type RouteUpdateParams as RouteUpdateParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteAddParams as RouteAddParams,
  };
}
