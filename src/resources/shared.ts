// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as AgentsAPI from './genai/agents/agents';
import * as APIKeysAPI from './genai/agents/api-keys';
import * as KnowledgeBasesAPI from './genai/knowledge-bases/knowledge-bases';
import * as KeysAPI from './genai/providers/anthropic/keys';
import * as OpenAIKeysAPI from './genai/providers/openai/keys';

export interface APIAgent {
  anthropic_api_key?: KeysAPI.APIAnthropicAPIKeyInfo;

  api_key_infos?: Array<APIKeysAPI.APIAgentAPIKeyInfo>;

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

  knowledge_bases?: Array<KnowledgeBasesAPI.APIKnowledgeBase>;

  max_tokens?: number;

  model?: AgentsAPI.APIModel;

  name?: string;

  openai_api_key?: OpenAIKeysAPI.APIOpenAIAPIKeyInfo;

  parent_agents?: Array<APIAgent>;

  project_id?: string;

  provide_citations?: boolean;

  region?: string;

  retrieval_method?: AgentsAPI.APIRetrievalMethod;

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

    knowledge_bases?: Array<KnowledgeBasesAPI.APIKnowledgeBase>;

    long_description?: string;

    max_tokens?: number;

    model?: AgentsAPI.APIModel;

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
