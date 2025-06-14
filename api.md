# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">APIAgent</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIAgentAPIKeyInfo</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIAnthropicAPIKeyInfo</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIDeploymentVisibility</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIModel</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIOpenAIAPIKeyInfo</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIRetrievalMethod</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /v2/gen-ai/agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/agents/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/agents/api-keys.ts">APIKeyUpdateResponse</a></code>
- <code><a href="./src/resources/agents/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/agents/api-keys.ts">APIKeyDeleteResponse</a></code>
- <code><a href="./src/resources/agents/api-keys.ts">APIKeyRegenerateResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/agents/{agent_uuid}/api_keys">client.agents.apiKeys.<a href="./src/resources/agents/api-keys.ts">create</a>(agentUuid, { ...params }) -> APIKeyCreateResponse</code>
- <code title="put /v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}">client.agents.apiKeys.<a href="./src/resources/agents/api-keys.ts">update</a>(apiKeyUuid, { ...params }) -> APIKeyUpdateResponse</code>
- <code title="get /v2/gen-ai/agents/{agent_uuid}/api_keys">client.agents.apiKeys.<a href="./src/resources/agents/api-keys.ts">list</a>(agentUuid, { ...params }) -> APIKeyListResponse</code>
- <code title="delete /v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}">client.agents.apiKeys.<a href="./src/resources/agents/api-keys.ts">delete</a>(apiKeyUuid, { ...params }) -> APIKeyDeleteResponse</code>
- <code title="put /v2/gen-ai/agents/{agent_uuid}/api_keys/{api_key_uuid}/regenerate">client.agents.apiKeys.<a href="./src/resources/agents/api-keys.ts">regenerate</a>(apiKeyUuid, { ...params }) -> APIKeyRegenerateResponse</code>

## Functions

Types:

- <code><a href="./src/resources/agents/functions.ts">FunctionCreateResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/agents/{agent_uuid}/functions">client.agents.functions.<a href="./src/resources/agents/functions.ts">create</a>(agentUuid, { ...params }) -> FunctionCreateResponse</code>

## Versions

Types:

- <code><a href="./src/resources/agents/versions.ts">APILinks</a></code>
- <code><a href="./src/resources/agents/versions.ts">APIMeta</a></code>
- <code><a href="./src/resources/agents/versions.ts">VersionUpdateResponse</a></code>
- <code><a href="./src/resources/agents/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="put /v2/gen-ai/agents/{uuid}/versions">client.agents.versions.<a href="./src/resources/agents/versions.ts">update</a>(pathUuid, { ...params }) -> VersionUpdateResponse</code>
- <code title="get /v2/gen-ai/agents/{uuid}/versions">client.agents.versions.<a href="./src/resources/agents/versions.ts">list</a>(uuid, { ...params }) -> VersionListResponse</code>

## KnowledgeBases

Types:

- <code><a href="./src/resources/agents/knowledge-bases.ts">APILinkKnowledgeBaseOutput</a></code>

## ChildAgents

# Providers

## Anthropic

### Keys

## OpenAI

### Keys

# Auth

## Agents

### Token

# Regions

# IndexingJobs

Types:

- <code><a href="./src/resources/indexing-jobs.ts">APIIndexingJob</a></code>

# KnowledgeBases

Types:

- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">APIKnowledgeBase</a></code>

## DataSources

Types:

- <code><a href="./src/resources/knowledge-bases/data-sources.ts">APIFileUploadDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">APIKnowledgeBaseDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">APISpacesDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">APIWebCrawlerDataSource</a></code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys/api-keys.ts">APIAgreement</a></code>
- <code><a href="./src/resources/api-keys/api-keys.ts">APIModelVersion</a></code>

## APIKeys

Types:

- <code><a href="./src/resources/api-keys/api-keys_.ts">APIModelAPIKeyInfo</a></code>

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
