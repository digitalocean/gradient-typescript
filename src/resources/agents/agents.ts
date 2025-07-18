// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
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
  EvaluationRunListResultsParams,
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
import * as ModelsAPI from '../models/models';
import * as ChatAPI from './chat/chat';
import { Chat } from './chat/chat';
import * as EvaluationMetricsAPI from './evaluation-metrics/evaluation-metrics';
import {
  EvaluationMetricListRegionsParams,
  EvaluationMetricListRegionsResponse,
  EvaluationMetricListResponse,
  EvaluationMetrics,
} from './evaluation-metrics/evaluation-metrics';
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
  create(
    body: AgentCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentCreateResponse> {
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
   * const agent = await client.agents.retrieve(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
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
   * const agent = await client.agents.update(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  update(
    pathUuid: string,
    body: AgentUpdateParams | null | undefined = {},
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
   * const agent = await client.agents.delete(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
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
   * const response = await client.agents.updateStatus(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  updateStatus(
    pathUuid: string,
    body: AgentUpdateStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentUpdateStatusResponse> {
    return this._client.put(path`/v2/gen-ai/agents/${pathUuid}/deployment_visibility`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * An Agent
 */
export interface APIAgent {
  /**
   * Anthropic API Key Info
   */
  anthropic_api_key?: APIAnthropicAPIKeyInfo;

  /**
   * Api key infos
   */
  api_key_infos?: Array<APIAgentAPIKeyInfo>;

  /**
   * Api keys
   */
  api_keys?: Array<APIAgent.APIKey>;

  /**
   * A Chatbot
   */
  chatbot?: APIAgent.Chatbot;

  /**
   * Chatbot identifiers
   */
  chatbot_identifiers?: Array<APIAgent.ChatbotIdentifier>;

  /**
   * Child agents
   */
  child_agents?: Array<APIAgent>;

  /**
   * Whether conversation logs are enabled for the agent
   */
  conversation_logs_enabled?: boolean;

  /**
   * Creation date / time
   */
  created_at?: string;

  /**
   * Description of deployment
   */
  deployment?: APIAgent.Deployment;

  /**
   * Description of agent
   */
  description?: string;

  functions?: Array<APIAgent.Function>;

  /**
   * The guardrails the agent is attached to
   */
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

  /**
   * Knowledge bases
   */
  knowledge_bases?: Array<KnowledgeBasesKnowledgeBasesAPI.APIKnowledgeBase>;

  logging_config?: APIAgent.LoggingConfig;

  max_tokens?: number;

  /**
   * Description of a Model
   */
  model?: APIAgentModel;

  /**
   * Agent name
   */
  name?: string;

  /**
   * OpenAI API Key Info
   */
  openai_api_key?: APIOpenAIAPIKeyInfo;

  /**
   * Parent agents
   */
  parent_agents?: Array<APIAgent>;

  project_id?: string;

  /**
   * Whether the agent should provide in-response citations
   */
  provide_citations?: boolean;

  /**
   * Region code
   */
  region?: string;

  /**
   * - RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown
   * - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite
   * - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back
   * - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries
   * - RETRIEVAL_METHOD_NONE: The retrieval method is none
   */
  retrieval_method?: APIRetrievalMethod;

  /**
   * Creation of route date / time
   */
  route_created_at?: string;

  route_created_by?: string;

  /**
   * Route name
   */
  route_name?: string;

  route_uuid?: string;

  /**
   * Agent tag to organize related resources
   */
  tags?: Array<string>;

  temperature?: number;

  /**
   * Represents an AgentTemplate entity
   */
  template?: APIAgent.Template;

  top_p?: number;

  /**
   * Last modified
   */
  updated_at?: string;

  /**
   * Access your agent under this url
   */
  url?: string;

  /**
   * Id of user that created the agent
   */
  user_id?: string;

  /**
   * Unique agent id
   */
  uuid?: string;

  /**
   * The latest version of the agent
   */
  version_hash?: string;

  workspace?: APIWorkspace;
}

export namespace APIAgent {
  /**
   * Agent API Key
   */
  export interface APIKey {
    /**
     * Api key
     */
    api_key?: string;
  }

  /**
   * A Chatbot
   */
  export interface Chatbot {
    button_background_color?: string;

    logo?: string;

    /**
     * Name of chatbot
     */
    name?: string;

    primary_color?: string;

    secondary_color?: string;

    starting_message?: string;
  }

  /**
   * Agent Chatbot Identifier
   */
  export interface ChatbotIdentifier {
    /**
     * Agent chatbot identifier
     */
    agent_chatbot_identifier?: string;
  }

  /**
   * Description of deployment
   */
  export interface Deployment {
    /**
     * Creation date / time
     */
    created_at?: string;

    /**
     * Name
     */
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

    /**
     * Last modified
     */
    updated_at?: string;

    /**
     * Access your deployed agent here
     */
    url?: string;

    /**
     * Unique id
     */
    uuid?: string;

    /**
     * - VISIBILITY_UNKNOWN: The status of the deployment is unknown
     * - VISIBILITY_DISABLED: The deployment is disabled and will no longer service
     *   requests
     * - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state
     * - VISIBILITY_PUBLIC: The deployment is public and will service requests from the
     *   public internet
     * - VISIBILITY_PRIVATE: The deployment is private and will only service requests
     *   from other agents, or through API keys
     */
    visibility?: AgentsAPI.APIDeploymentVisibility;
  }

  /**
   * Description missing
   */
  export interface Function {
    /**
     * Api key
     */
    api_key?: string;

    /**
     * Creation date / time
     */
    created_at?: string;

    /**
     * Created by user id from DO
     */
    created_by?: string;

    /**
     * Agent description
     */
    description?: string;

    faas_name?: string;

    faas_namespace?: string;

    input_schema?: unknown;

    /**
     * Name
     */
    name?: string;

    output_schema?: unknown;

    /**
     * Last modified
     */
    updated_at?: string;

    /**
     * Download your agent here
     */
    url?: string;

    /**
     * Unique id
     */
    uuid?: string;
  }

  /**
   * A Agent Guardrail
   */
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

  export interface LoggingConfig {
    /**
     * Galileo project identifier
     */
    galileo_project_id?: string;

    /**
     * Name of the Galileo project
     */
    galileo_project_name?: string;

    /**
     * Identifier for the log stream
     */
    log_stream_id?: string;

    /**
     * Name of the log stream
     */
    log_stream_name?: string;
  }

  /**
   * Represents an AgentTemplate entity
   */
  export interface Template {
    /**
     * The agent template's creation date
     */
    created_at?: string;

    /**
     * Deprecated - Use summary instead
     */
    description?: string;

    /**
     * List of guardrails associated with the agent template
     */
    guardrails?: Array<Template.Guardrail>;

    /**
     * Instructions for the agent template
     */
    instruction?: string;

    /**
     * The 'k' value for the agent template
     */
    k?: number;

    /**
     * List of knowledge bases associated with the agent template
     */
    knowledge_bases?: Array<KnowledgeBasesKnowledgeBasesAPI.APIKnowledgeBase>;

    /**
     * The long description of the agent template
     */
    long_description?: string;

    /**
     * The max_tokens setting for the agent template
     */
    max_tokens?: number;

    /**
     * Description of a Model
     */
    model?: AgentsAPI.APIAgentModel;

    /**
     * Name of the agent template
     */
    name?: string;

    /**
     * The short description of the agent template
     */
    short_description?: string;

    /**
     * The summary of the agent template
     */
    summary?: string;

    /**
     * List of tags associated with the agent template
     */
    tags?: Array<string>;

    /**
     * The temperature setting for the agent template
     */
    temperature?: number;

    /**
     * - AGENT_TEMPLATE_TYPE_STANDARD: The standard agent template
     * - AGENT_TEMPLATE_TYPE_ONE_CLICK: The one click agent template
     */
    template_type?: 'AGENT_TEMPLATE_TYPE_STANDARD' | 'AGENT_TEMPLATE_TYPE_ONE_CLICK';

    /**
     * The top_p setting for the agent template
     */
    top_p?: number;

    /**
     * The agent template's last updated date
     */
    updated_at?: string;

    /**
     * Unique id
     */
    uuid?: string;
  }

  export namespace Template {
    export interface Guardrail {
      /**
       * Priority of the guardrail
       */
      priority?: number;

      /**
       * Uuid of the guardrail
       */
      uuid?: string;
    }
  }
}

/**
 * Agent API Key Info
 */
export interface APIAgentAPIKeyInfo {
  /**
   * Creation date
   */
  created_at?: string;

  /**
   * Created by
   */
  created_by?: string;

  /**
   * Deleted date
   */
  deleted_at?: string;

  /**
   * Name
   */
  name?: string;

  secret_key?: string;

  /**
   * Uuid
   */
  uuid?: string;
}

/**
 * Description of a Model
 */
export interface APIAgentModel {
  /**
   * Agreement Description
   */
  agreement?: ModelsAPI.APIAgreement;

  /**
   * Creation date / time
   */
  created_at?: string;

  /**
   * Internally used name
   */
  inference_name?: string;

  /**
   * Internally used version
   */
  inference_version?: string;

  /**
   * True if it is a foundational model provided by do
   */
  is_foundational?: boolean;

  /**
   * Additional meta data
   */
  metadata?: unknown;

  /**
   * Name of the model
   */
  name?: string;

  /**
   * Unique id of the model, this model is based on
   */
  parent_uuid?: string;

  provider?: 'MODEL_PROVIDER_DIGITALOCEAN' | 'MODEL_PROVIDER_ANTHROPIC' | 'MODEL_PROVIDER_OPENAI';

  /**
   * Last modified
   */
  updated_at?: string;

  /**
   * Model has been fully uploaded
   */
  upload_complete?: boolean;

  /**
   * Download url
   */
  url?: string;

  /**
   * Usecases of the model
   */
  usecases?: Array<
    | 'MODEL_USECASE_UNKNOWN'
    | 'MODEL_USECASE_AGENT'
    | 'MODEL_USECASE_FINETUNED'
    | 'MODEL_USECASE_KNOWLEDGEBASE'
    | 'MODEL_USECASE_GUARDRAIL'
    | 'MODEL_USECASE_REASONING'
    | 'MODEL_USECASE_SERVERLESS'
  >;

  /**
   * Unique id
   */
  uuid?: string;

  /**
   * Version Information about a Model
   */
  version?: ModelsAPI.APIModelVersion;
}

/**
 * Anthropic API Key Info
 */
export interface APIAnthropicAPIKeyInfo {
  /**
   * Key creation date
   */
  created_at?: string;

  /**
   * Created by user id from DO
   */
  created_by?: string;

  /**
   * Key deleted date
   */
  deleted_at?: string;

  /**
   * Name
   */
  name?: string;

  /**
   * Key last updated date
   */
  updated_at?: string;

  /**
   * Uuid
   */
  uuid?: string;
}

/**
 * - VISIBILITY_UNKNOWN: The status of the deployment is unknown
 * - VISIBILITY_DISABLED: The deployment is disabled and will no longer service
 *   requests
 * - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state
 * - VISIBILITY_PUBLIC: The deployment is public and will service requests from the
 *   public internet
 * - VISIBILITY_PRIVATE: The deployment is private and will only service requests
 *   from other agents, or through API keys
 */
export type APIDeploymentVisibility =
  | 'VISIBILITY_UNKNOWN'
  | 'VISIBILITY_DISABLED'
  | 'VISIBILITY_PLAYGROUND'
  | 'VISIBILITY_PUBLIC'
  | 'VISIBILITY_PRIVATE';

/**
 * OpenAI API Key Info
 */
export interface APIOpenAIAPIKeyInfo {
  /**
   * Key creation date
   */
  created_at?: string;

  /**
   * Created by user id from DO
   */
  created_by?: string;

  /**
   * Key deleted date
   */
  deleted_at?: string;

  /**
   * Models supported by the openAI api key
   */
  models?: Array<APIAgentModel>;

  /**
   * Name
   */
  name?: string;

  /**
   * Key last updated date
   */
  updated_at?: string;

  /**
   * Uuid
   */
  uuid?: string;
}

/**
 * - RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown
 * - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite
 * - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back
 * - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries
 * - RETRIEVAL_METHOD_NONE: The retrieval method is none
 */
export type APIRetrievalMethod =
  | 'RETRIEVAL_METHOD_UNKNOWN'
  | 'RETRIEVAL_METHOD_REWRITE'
  | 'RETRIEVAL_METHOD_STEP_BACK'
  | 'RETRIEVAL_METHOD_SUB_QUERIES'
  | 'RETRIEVAL_METHOD_NONE';

export interface APIWorkspace {
  /**
   * Agents
   */
  agents?: Array<APIAgent>;

  /**
   * Creation date
   */
  created_at?: string;

  /**
   * The id of user who created this workspace
   */
  created_by?: string;

  /**
   * The email of the user who created this workspace
   */
  created_by_email?: string;

  /**
   * Deleted date
   */
  deleted_at?: string;

  /**
   * Description of the workspace
   */
  description?: string;

  /**
   * Evaluations
   */
  evaluation_test_cases?: Array<EvaluationTestCasesAPI.APIEvaluationTestCase>;

  /**
   * Name of the workspace
   */
  name?: string;

  /**
   * Update date
   */
  updated_at?: string;

  /**
   * Unique id
   */
  uuid?: string;
}

/**
 * Information about a newly created Agent
 */
export interface AgentCreateResponse {
  /**
   * An Agent
   */
  agent?: APIAgent;
}

/**
 * One Agent
 */
export interface AgentRetrieveResponse {
  /**
   * An Agent
   */
  agent?: APIAgent;
}

/**
 * Information about an updated agent
 */
export interface AgentUpdateResponse {
  /**
   * An Agent
   */
  agent?: APIAgent;
}

/**
 * List of Agents
 */
export interface AgentListResponse {
  /**
   * Agents
   */
  agents?: Array<AgentListResponse.Agent>;

  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;
}

export namespace AgentListResponse {
  /**
   * A GenAI Agent's configuration
   */
  export interface Agent {
    /**
     * A Chatbot
     */
    chatbot?: Agent.Chatbot;

    /**
     * Chatbot identifiers
     */
    chatbot_identifiers?: Array<Agent.ChatbotIdentifier>;

    /**
     * Creation date / time
     */
    created_at?: string;

    /**
     * Description of deployment
     */
    deployment?: Agent.Deployment;

    /**
     * Description of agent
     */
    description?: string;

    /**
     * Instructions to the agent on how to use the route
     */
    if_case?: string;

    /**
     * Agent instruction. Instructions help your agent to perform its job effectively.
     * See
     * [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions)
     * for best practices.
     */
    instruction?: string;

    /**
     * How many results should be considered from an attached knowledge base
     */
    k?: number;

    /**
     * Specifies the maximum number of tokens the model can process in a single input
     * or output, set as a number between 1 and 512. This determines the length of each
     * response.
     */
    max_tokens?: number;

    /**
     * Description of a Model
     */
    model?: AgentsAPI.APIAgentModel;

    /**
     * Agent name
     */
    name?: string;

    /**
     * The DigitalOcean project ID associated with the agent
     */
    project_id?: string;

    /**
     * Whether the agent should provide in-response citations
     */
    provide_citations?: boolean;

    /**
     * Region code
     */
    region?: string;

    /**
     * - RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown
     * - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite
     * - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back
     * - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries
     * - RETRIEVAL_METHOD_NONE: The retrieval method is none
     */
    retrieval_method?: AgentsAPI.APIRetrievalMethod;

    /**
     * Creation of route date / time
     */
    route_created_at?: string;

    /**
     * Id of user that created the route
     */
    route_created_by?: string;

    /**
     * Route name
     */
    route_name?: string;

    /**
     * Route uuid
     */
    route_uuid?: string;

    /**
     * A set of abitrary tags to organize your agent
     */
    tags?: Array<string>;

    /**
     * Controls the model’s creativity, specified as a number between 0 and 1. Lower
     * values produce more predictable and conservative responses, while higher values
     * encourage creativity and variation.
     */
    temperature?: number;

    /**
     * Represents an AgentTemplate entity
     */
    template?: Agent.Template;

    /**
     * Defines the cumulative probability threshold for word selection, specified as a
     * number between 0 and 1. Higher values allow for more diverse outputs, while
     * lower values ensure focused and coherent responses.
     */
    top_p?: number;

    /**
     * Last modified
     */
    updated_at?: string;

    /**
     * Access your agent under this url
     */
    url?: string;

    /**
     * Id of user that created the agent
     */
    user_id?: string;

    /**
     * Unique agent id
     */
    uuid?: string;

    /**
     * The latest version of the agent
     */
    version_hash?: string;
  }

  export namespace Agent {
    /**
     * A Chatbot
     */
    export interface Chatbot {
      button_background_color?: string;

      logo?: string;

      /**
       * Name of chatbot
       */
      name?: string;

      primary_color?: string;

      secondary_color?: string;

      starting_message?: string;
    }

    /**
     * Agent Chatbot Identifier
     */
    export interface ChatbotIdentifier {
      /**
       * Agent chatbot identifier
       */
      agent_chatbot_identifier?: string;
    }

    /**
     * Description of deployment
     */
    export interface Deployment {
      /**
       * Creation date / time
       */
      created_at?: string;

      /**
       * Name
       */
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

      /**
       * Last modified
       */
      updated_at?: string;

      /**
       * Access your deployed agent here
       */
      url?: string;

      /**
       * Unique id
       */
      uuid?: string;

      /**
       * - VISIBILITY_UNKNOWN: The status of the deployment is unknown
       * - VISIBILITY_DISABLED: The deployment is disabled and will no longer service
       *   requests
       * - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state
       * - VISIBILITY_PUBLIC: The deployment is public and will service requests from the
       *   public internet
       * - VISIBILITY_PRIVATE: The deployment is private and will only service requests
       *   from other agents, or through API keys
       */
      visibility?: AgentsAPI.APIDeploymentVisibility;
    }

    /**
     * Represents an AgentTemplate entity
     */
    export interface Template {
      /**
       * The agent template's creation date
       */
      created_at?: string;

      /**
       * Deprecated - Use summary instead
       */
      description?: string;

      /**
       * List of guardrails associated with the agent template
       */
      guardrails?: Array<Template.Guardrail>;

      /**
       * Instructions for the agent template
       */
      instruction?: string;

      /**
       * The 'k' value for the agent template
       */
      k?: number;

      /**
       * List of knowledge bases associated with the agent template
       */
      knowledge_bases?: Array<KnowledgeBasesKnowledgeBasesAPI.APIKnowledgeBase>;

      /**
       * The long description of the agent template
       */
      long_description?: string;

      /**
       * The max_tokens setting for the agent template
       */
      max_tokens?: number;

      /**
       * Description of a Model
       */
      model?: AgentsAPI.APIAgentModel;

      /**
       * Name of the agent template
       */
      name?: string;

      /**
       * The short description of the agent template
       */
      short_description?: string;

      /**
       * The summary of the agent template
       */
      summary?: string;

      /**
       * List of tags associated with the agent template
       */
      tags?: Array<string>;

      /**
       * The temperature setting for the agent template
       */
      temperature?: number;

      /**
       * - AGENT_TEMPLATE_TYPE_STANDARD: The standard agent template
       * - AGENT_TEMPLATE_TYPE_ONE_CLICK: The one click agent template
       */
      template_type?: 'AGENT_TEMPLATE_TYPE_STANDARD' | 'AGENT_TEMPLATE_TYPE_ONE_CLICK';

      /**
       * The top_p setting for the agent template
       */
      top_p?: number;

      /**
       * The agent template's last updated date
       */
      updated_at?: string;

      /**
       * Unique id
       */
      uuid?: string;
    }

    export namespace Template {
      export interface Guardrail {
        /**
         * Priority of the guardrail
         */
        priority?: number;

        /**
         * Uuid of the guardrail
         */
        uuid?: string;
      }
    }
  }
}

/**
 * Info about a deleted agent
 */
export interface AgentDeleteResponse {
  /**
   * An Agent
   */
  agent?: APIAgent;
}

/**
 * UpdateAgentDeploymentVisbilityOutput description
 */
export interface AgentUpdateStatusResponse {
  /**
   * An Agent
   */
  agent?: APIAgent;
}

export interface AgentCreateParams {
  /**
   * Optional Anthropic API key ID to use with Anthropic models
   */
  anthropic_key_uuid?: string;

  /**
   * A text description of the agent, not used in inference
   */
  description?: string;

  /**
   * Agent instruction. Instructions help your agent to perform its job effectively.
   * See
   * [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions)
   * for best practices.
   */
  instruction?: string;

  /**
   * Ids of the knowledge base(s) to attach to the agent
   */
  knowledge_base_uuid?: Array<string>;

  /**
   * Identifier for the foundation model.
   */
  model_uuid?: string;

  /**
   * Agent name
   */
  name?: string;

  /**
   * Optional OpenAI API key ID to use with OpenAI models
   */
  open_ai_key_uuid?: string;

  /**
   * The id of the DigitalOcean project this agent will belong to
   */
  project_id?: string;

  /**
   * The DigitalOcean region to deploy your agent in
   */
  region?: string;

  /**
   * Agent tag to organize related resources
   */
  tags?: Array<string>;
}

export interface AgentUpdateParams {
  /**
   * Optional anthropic key uuid for use with anthropic models
   */
  anthropic_key_uuid?: string;

  /**
   * Optional update of conversation logs enabled
   */
  conversation_logs_enabled?: boolean;

  /**
   * Agent description
   */
  description?: string;

  /**
   * Agent instruction. Instructions help your agent to perform its job effectively.
   * See
   * [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions)
   * for best practices.
   */
  instruction?: string;

  /**
   * How many results should be considered from an attached knowledge base
   */
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

  /**
   * Agent name
   */
  name?: string;

  /**
   * Optional OpenAI key uuid for use with OpenAI models
   */
  open_ai_key_uuid?: string;

  /**
   * The id of the DigitalOcean project this agent will belong to
   */
  project_id?: string;

  provide_citations?: boolean;

  /**
   * - RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown
   * - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite
   * - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back
   * - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries
   * - RETRIEVAL_METHOD_NONE: The retrieval method is none
   */
  retrieval_method?: APIRetrievalMethod;

  /**
   * A set of abitrary tags to organize your agent
   */
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

  /**
   * Unique agent id
   */
  body_uuid?: string;
}

export interface AgentListParams {
  /**
   * Only list agents that are deployed.
   */
  only_deployed?: boolean;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export interface AgentUpdateStatusParams {
  /**
   * Unique id
   */
  body_uuid?: string;

  /**
   * - VISIBILITY_UNKNOWN: The status of the deployment is unknown
   * - VISIBILITY_DISABLED: The deployment is disabled and will no longer service
   *   requests
   * - VISIBILITY_PLAYGROUND: Deprecated: No longer a valid state
   * - VISIBILITY_PUBLIC: The deployment is public and will service requests from the
   *   public internet
   * - VISIBILITY_PRIVATE: The deployment is private and will only service requests
   *   from other agents, or through API keys
   */
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
    type EvaluationMetricListRegionsResponse as EvaluationMetricListRegionsResponse,
    type EvaluationMetricListRegionsParams as EvaluationMetricListRegionsParams,
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
    type EvaluationRunListResultsParams as EvaluationRunListResultsParams,
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
