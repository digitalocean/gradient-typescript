# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIAgent</a></code>

# Genai

Types:

- <code><a href="./src/resources/genai/genai.ts">GenaiRetrieveRegionsResponse</a></code>

Methods:

- <code title="get /v2/genai/regions">client.genai.<a href="./src/resources/genai/genai.ts">retrieveRegions</a>({ ...params }) -> GenaiRetrieveRegionsResponse</code>

## Agents

Types:

- <code><a href="./src/resources/genai/agents/agents.ts">APIDeploymentVisibility</a></code>
- <code><a href="./src/resources/genai/agents/agents.ts">APIModel</a></code>
- <code><a href="./src/resources/genai/agents/agents.ts">APIRetrievalMethod</a></code>
- <code><a href="./src/resources/genai/agents/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/genai/agents/agents.ts">AgentRetrieveResponse</a></code>
- <code><a href="./src/resources/genai/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/genai/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/genai/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/genai/agents/agents.ts">AgentUpdateStatusResponse</a></code>

Methods:

- <code title="post /v2/genai/agents">client.genai.agents.<a href="./src/resources/genai/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /v2/genai/agents/{uuid}">client.genai.agents.<a href="./src/resources/genai/agents/agents.ts">retrieve</a>(uuid) -> AgentRetrieveResponse</code>
- <code title="put /v2/genai/agents/{uuid}">client.genai.agents.<a href="./src/resources/genai/agents/agents.ts">update</a>(pathUuid, { ...params }) -> AgentUpdateResponse</code>
- <code title="get /v2/genai/agents">client.genai.agents.<a href="./src/resources/genai/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v2/genai/agents/{uuid}">client.genai.agents.<a href="./src/resources/genai/agents/agents.ts">delete</a>(uuid) -> AgentDeleteResponse</code>
- <code title="put /v2/genai/agents/{uuid}/deployment_visibility">client.genai.agents.<a href="./src/resources/genai/agents/agents.ts">updateStatus</a>(pathUuid, { ...params }) -> AgentUpdateStatusResponse</code>

### APIKeys

Types:

- <code><a href="./src/resources/genai/agents/api-keys.ts">APIAgentAPIKeyInfo</a></code>
- <code><a href="./src/resources/genai/agents/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/genai/agents/api-keys.ts">APIKeyUpdateResponse</a></code>
- <code><a href="./src/resources/genai/agents/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/genai/agents/api-keys.ts">APIKeyDeleteResponse</a></code>
- <code><a href="./src/resources/genai/agents/api-keys.ts">APIKeyRegenerateResponse</a></code>

Methods:

- <code title="post /v2/genai/agents/{agent_uuid}/api_keys">client.genai.agents.apiKeys.<a href="./src/resources/genai/agents/api-keys.ts">create</a>(agentUuid, { ...params }) -> APIKeyCreateResponse</code>
- <code title="put /v2/genai/agents/{agent_uuid}/api_keys/{api_key_uuid}">client.genai.agents.apiKeys.<a href="./src/resources/genai/agents/api-keys.ts">update</a>(apiKeyUuid, { ...params }) -> APIKeyUpdateResponse</code>
- <code title="get /v2/genai/agents/{agent_uuid}/api_keys">client.genai.agents.apiKeys.<a href="./src/resources/genai/agents/api-keys.ts">list</a>(agentUuid, { ...params }) -> APIKeyListResponse</code>
- <code title="delete /v2/genai/agents/{agent_uuid}/api_keys/{api_key_uuid}">client.genai.agents.apiKeys.<a href="./src/resources/genai/agents/api-keys.ts">delete</a>(apiKeyUuid, { ...params }) -> APIKeyDeleteResponse</code>
- <code title="put /v2/genai/agents/{agent_uuid}/api_keys/{api_key_uuid}/regenerate">client.genai.agents.apiKeys.<a href="./src/resources/genai/agents/api-keys.ts">regenerate</a>(apiKeyUuid, { ...params }) -> APIKeyRegenerateResponse</code>

### Functions

Types:

- <code><a href="./src/resources/genai/agents/functions.ts">FunctionCreateResponse</a></code>
- <code><a href="./src/resources/genai/agents/functions.ts">FunctionUpdateResponse</a></code>
- <code><a href="./src/resources/genai/agents/functions.ts">FunctionDeleteResponse</a></code>

Methods:

- <code title="post /v2/genai/agents/{agent_uuid}/functions">client.genai.agents.functions.<a href="./src/resources/genai/agents/functions.ts">create</a>(agentUuid, { ...params }) -> FunctionCreateResponse</code>
- <code title="put /v2/genai/agents/{agent_uuid}/functions/{function_uuid}">client.genai.agents.functions.<a href="./src/resources/genai/agents/functions.ts">update</a>(functionUuid, { ...params }) -> FunctionUpdateResponse</code>
- <code title="delete /v2/genai/agents/{agent_uuid}/functions/{function_uuid}">client.genai.agents.functions.<a href="./src/resources/genai/agents/functions.ts">delete</a>(functionUuid, { ...params }) -> FunctionDeleteResponse</code>

### Versions

Types:

- <code><a href="./src/resources/genai/agents/versions.ts">APILinks</a></code>
- <code><a href="./src/resources/genai/agents/versions.ts">APIMeta</a></code>
- <code><a href="./src/resources/genai/agents/versions.ts">VersionUpdateResponse</a></code>
- <code><a href="./src/resources/genai/agents/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="put /v2/gen-ai/agents/{uuid}/versions">client.genai.agents.versions.<a href="./src/resources/genai/agents/versions.ts">update</a>(pathUuid, { ...params }) -> VersionUpdateResponse</code>
- <code title="get /v2/gen-ai/agents/{uuid}/versions">client.genai.agents.versions.<a href="./src/resources/genai/agents/versions.ts">list</a>(uuid, { ...params }) -> VersionListResponse</code>

### KnowledgeBases

Types:

- <code><a href="./src/resources/genai/agents/knowledge-bases.ts">APILinkKnowledgeBaseOutput</a></code>
- <code><a href="./src/resources/genai/agents/knowledge-bases.ts">KnowledgeBaseDetachResponse</a></code>

Methods:

- <code title="post /v2/genai/agents/{agent_uuid}/knowledge_bases">client.genai.agents.knowledgeBases.<a href="./src/resources/genai/agents/knowledge-bases.ts">attach</a>(agentUuid) -> APILinkKnowledgeBaseOutput</code>
- <code title="post /v2/genai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}">client.genai.agents.knowledgeBases.<a href="./src/resources/genai/agents/knowledge-bases.ts">attachSingle</a>(knowledgeBaseUuid, { ...params }) -> APILinkKnowledgeBaseOutput</code>
- <code title="delete /v2/genai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}">client.genai.agents.knowledgeBases.<a href="./src/resources/genai/agents/knowledge-bases.ts">detach</a>(knowledgeBaseUuid, { ...params }) -> KnowledgeBaseDetachResponse</code>

### ChildAgents

Types:

- <code><a href="./src/resources/genai/agents/child-agents.ts">ChildAgentUpdateResponse</a></code>
- <code><a href="./src/resources/genai/agents/child-agents.ts">ChildAgentDeleteResponse</a></code>
- <code><a href="./src/resources/genai/agents/child-agents.ts">ChildAgentAddResponse</a></code>
- <code><a href="./src/resources/genai/agents/child-agents.ts">ChildAgentViewResponse</a></code>

Methods:

- <code title="put /v2/genai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}">client.genai.agents.childAgents.<a href="./src/resources/genai/agents/child-agents.ts">update</a>(childAgentUuid, { ...params }) -> ChildAgentUpdateResponse</code>
- <code title="delete /v2/genai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}">client.genai.agents.childAgents.<a href="./src/resources/genai/agents/child-agents.ts">delete</a>(childAgentUuid, { ...params }) -> ChildAgentDeleteResponse</code>
- <code title="post /v2/genai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}">client.genai.agents.childAgents.<a href="./src/resources/genai/agents/child-agents.ts">add</a>(childAgentUuid, { ...params }) -> ChildAgentAddResponse</code>
- <code title="get /v2/genai/agents/{uuid}/child_agents">client.genai.agents.childAgents.<a href="./src/resources/genai/agents/child-agents.ts">view</a>(uuid) -> ChildAgentViewResponse</code>

## Providers

### Anthropic

#### Keys

Types:

- <code><a href="./src/resources/genai/providers/anthropic/keys.ts">APIAnthropicAPIKeyInfo</a></code>
- <code><a href="./src/resources/genai/providers/anthropic/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/genai/providers/anthropic/keys.ts">KeyRetrieveResponse</a></code>
- <code><a href="./src/resources/genai/providers/anthropic/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/genai/providers/anthropic/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/genai/providers/anthropic/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/genai/providers/anthropic/keys.ts">KeyListAgentsResponse</a></code>

Methods:

- <code title="post /v2/genai/anthropic/keys">client.genai.providers.anthropic.keys.<a href="./src/resources/genai/providers/anthropic/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /v2/genai/anthropic/keys/{api_key_uuid}">client.genai.providers.anthropic.keys.<a href="./src/resources/genai/providers/anthropic/keys.ts">retrieve</a>(apiKeyUuid) -> KeyRetrieveResponse</code>
- <code title="put /v2/genai/anthropic/keys/{api_key_uuid}">client.genai.providers.anthropic.keys.<a href="./src/resources/genai/providers/anthropic/keys.ts">update</a>(apiKeyUuid, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /v2/genai/anthropic/keys">client.genai.providers.anthropic.keys.<a href="./src/resources/genai/providers/anthropic/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /v2/genai/anthropic/keys/{api_key_uuid}">client.genai.providers.anthropic.keys.<a href="./src/resources/genai/providers/anthropic/keys.ts">delete</a>(apiKeyUuid) -> KeyDeleteResponse</code>
- <code title="get /v2/genai/anthropic/keys/{uuid}/agents">client.genai.providers.anthropic.keys.<a href="./src/resources/genai/providers/anthropic/keys.ts">listAgents</a>(uuid, { ...params }) -> KeyListAgentsResponse</code>

### OpenAI

#### Keys

Types:

- <code><a href="./src/resources/genai/providers/openai/keys.ts">APIOpenAIAPIKeyInfo</a></code>
- <code><a href="./src/resources/genai/providers/openai/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/genai/providers/openai/keys.ts">KeyRetrieveResponse</a></code>
- <code><a href="./src/resources/genai/providers/openai/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/genai/providers/openai/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/genai/providers/openai/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/genai/providers/openai/keys.ts">KeyRetrieveAgentsResponse</a></code>

Methods:

- <code title="post /v2/genai/openai/keys">client.genai.providers.openai.keys.<a href="./src/resources/genai/providers/openai/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /v2/genai/openai/keys/{api_key_uuid}">client.genai.providers.openai.keys.<a href="./src/resources/genai/providers/openai/keys.ts">retrieve</a>(apiKeyUuid) -> KeyRetrieveResponse</code>
- <code title="put /v2/genai/openai/keys/{api_key_uuid}">client.genai.providers.openai.keys.<a href="./src/resources/genai/providers/openai/keys.ts">update</a>(apiKeyUuid, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /v2/genai/openai/keys">client.genai.providers.openai.keys.<a href="./src/resources/genai/providers/openai/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /v2/genai/openai/keys/{api_key_uuid}">client.genai.providers.openai.keys.<a href="./src/resources/genai/providers/openai/keys.ts">delete</a>(apiKeyUuid) -> KeyDeleteResponse</code>
- <code title="get /v2/genai/openai/keys/{uuid}/agents">client.genai.providers.openai.keys.<a href="./src/resources/genai/providers/openai/keys.ts">retrieveAgents</a>(uuid, { ...params }) -> KeyRetrieveAgentsResponse</code>

## Auth

### Agents

#### Token

Types:

- <code><a href="./src/resources/genai/auth/agents/token.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /v2/genai/auth/agents/{agent_uuid}/token">client.genai.auth.agents.token.<a href="./src/resources/genai/auth/agents/token.ts">create</a>(agentUuid, { ...params }) -> TokenCreateResponse</code>

## IndexingJobs

Types:

- <code><a href="./src/resources/genai/indexing-jobs.ts">APIIndexingJob</a></code>
- <code><a href="./src/resources/genai/indexing-jobs.ts">IndexingJobCreateResponse</a></code>
- <code><a href="./src/resources/genai/indexing-jobs.ts">IndexingJobRetrieveResponse</a></code>
- <code><a href="./src/resources/genai/indexing-jobs.ts">IndexingJobListResponse</a></code>
- <code><a href="./src/resources/genai/indexing-jobs.ts">IndexingJobRetrieveDataSourcesResponse</a></code>
- <code><a href="./src/resources/genai/indexing-jobs.ts">IndexingJobUpdateCancelResponse</a></code>

Methods:

- <code title="post /v2/genai/indexing_jobs">client.genai.indexingJobs.<a href="./src/resources/genai/indexing-jobs.ts">create</a>({ ...params }) -> IndexingJobCreateResponse</code>
- <code title="get /v2/genai/indexing_jobs/{uuid}">client.genai.indexingJobs.<a href="./src/resources/genai/indexing-jobs.ts">retrieve</a>(uuid) -> IndexingJobRetrieveResponse</code>
- <code title="get /v2/genai/indexing_jobs">client.genai.indexingJobs.<a href="./src/resources/genai/indexing-jobs.ts">list</a>({ ...params }) -> IndexingJobListResponse</code>
- <code title="get /v2/genai/indexing_jobs/{indexing_job_uuid}/data_sources">client.genai.indexingJobs.<a href="./src/resources/genai/indexing-jobs.ts">retrieveDataSources</a>(indexingJobUuid) -> IndexingJobRetrieveDataSourcesResponse</code>
- <code title="put /v2/genai/indexing_jobs/{uuid}/cancel">client.genai.indexingJobs.<a href="./src/resources/genai/indexing-jobs.ts">updateCancel</a>(pathUuid, { ...params }) -> IndexingJobUpdateCancelResponse</code>

## KnowledgeBases

Types:

- <code><a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">APIKnowledgeBase</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">KnowledgeBaseCreateResponse</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">KnowledgeBaseRetrieveResponse</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">KnowledgeBaseUpdateResponse</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">KnowledgeBaseListResponse</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">KnowledgeBaseDeleteResponse</a></code>

Methods:

- <code title="post /v2/genai/knowledge_bases">client.genai.knowledgeBases.<a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">create</a>({ ...params }) -> KnowledgeBaseCreateResponse</code>
- <code title="get /v2/genai/knowledge_bases/{uuid}">client.genai.knowledgeBases.<a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">retrieve</a>(uuid) -> KnowledgeBaseRetrieveResponse</code>
- <code title="put /v2/genai/knowledge_bases/{uuid}">client.genai.knowledgeBases.<a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">update</a>(pathUuid, { ...params }) -> KnowledgeBaseUpdateResponse</code>
- <code title="get /v2/genai/knowledge_bases">client.genai.knowledgeBases.<a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">list</a>({ ...params }) -> KnowledgeBaseListResponse</code>
- <code title="delete /v2/genai/knowledge_bases/{uuid}">client.genai.knowledgeBases.<a href="./src/resources/genai/knowledge-bases/knowledge-bases.ts">delete</a>(uuid) -> KnowledgeBaseDeleteResponse</code>

### DataSources

Types:

- <code><a href="./src/resources/genai/knowledge-bases/data-sources.ts">APIFileUploadDataSource</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/data-sources.ts">APIKnowledgeBaseDataSource</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/data-sources.ts">APISpacesDataSource</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/data-sources.ts">APIWebCrawlerDataSource</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/data-sources.ts">DataSourceCreateResponse</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/data-sources.ts">DataSourceListResponse</a></code>
- <code><a href="./src/resources/genai/knowledge-bases/data-sources.ts">DataSourceDeleteResponse</a></code>

Methods:

- <code title="post /v2/genai/knowledge_bases/{knowledge_base_uuid}/data_sources">client.genai.knowledgeBases.dataSources.<a href="./src/resources/genai/knowledge-bases/data-sources.ts">create</a>(knowledgeBaseUuid, { ...params }) -> DataSourceCreateResponse</code>
- <code title="get /v2/genai/knowledge_bases/{knowledge_base_uuid}/data_sources">client.genai.knowledgeBases.dataSources.<a href="./src/resources/genai/knowledge-bases/data-sources.ts">list</a>(knowledgeBaseUuid, { ...params }) -> DataSourceListResponse</code>
- <code title="delete /v2/genai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}">client.genai.knowledgeBases.dataSources.<a href="./src/resources/genai/knowledge-bases/data-sources.ts">delete</a>(dataSourceUuid, { ...params }) -> DataSourceDeleteResponse</code>

## Models

Types:

- <code><a href="./src/resources/genai/models/models.ts">APIAgreement</a></code>
- <code><a href="./src/resources/genai/models/models.ts">APIModelVersion</a></code>
- <code><a href="./src/resources/genai/models/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v2/genai/models">client.genai.models.<a href="./src/resources/genai/models/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

### APIKeys

Types:

- <code><a href="./src/resources/genai/models/api-keys.ts">APIModelAPIKeyInfo</a></code>
- <code><a href="./src/resources/genai/models/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/genai/models/api-keys.ts">APIKeyUpdateResponse</a></code>
- <code><a href="./src/resources/genai/models/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/genai/models/api-keys.ts">APIKeyDeleteResponse</a></code>
- <code><a href="./src/resources/genai/models/api-keys.ts">APIKeyUpdateRegenerateResponse</a></code>

Methods:

- <code title="post /v2/genai/models/api_keys">client.genai.models.apiKeys.<a href="./src/resources/genai/models/api-keys.ts">create</a>({ ...params }) -> APIKeyCreateResponse</code>
- <code title="put /v2/genai/models/api_keys/{api_key_uuid}">client.genai.models.apiKeys.<a href="./src/resources/genai/models/api-keys.ts">update</a>(apiKeyUuid, { ...params }) -> APIKeyUpdateResponse</code>
- <code title="get /v2/genai/models/api_keys">client.genai.models.apiKeys.<a href="./src/resources/genai/models/api-keys.ts">list</a>({ ...params }) -> APIKeyListResponse</code>
- <code title="delete /v2/genai/models/api_keys/{api_key_uuid}">client.genai.models.apiKeys.<a href="./src/resources/genai/models/api-keys.ts">delete</a>(apiKeyUuid) -> APIKeyDeleteResponse</code>
- <code title="put /v2/genai/models/api_keys/{api_key_uuid}/regenerate">client.genai.models.apiKeys.<a href="./src/resources/genai/models/api-keys.ts">updateRegenerate</a>(apiKeyUuid) -> APIKeyUpdateRegenerateResponse</code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCompletionRequestMessageContentPartText</a></code>
- <code><a href="./src/resources/chat.ts">ChatCompletionTokenLogprob</a></code>
- <code><a href="./src/resources/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> ChatCreateCompletionResponse</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingCreateResponse</a></code>

Methods:

- <code title="post /embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> EmbeddingCreateResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /models/{model}">client.models.<a href="./src/resources/models.ts">retrieve</a>(model) -> Model</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
