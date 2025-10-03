# Shared

Types:

- <code><a href="./src/resources/shared.ts">Action</a></code>
- <code><a href="./src/resources/shared.ts">ActionLink</a></code>
- <code><a href="./src/resources/shared.ts">APILinks</a></code>
- <code><a href="./src/resources/shared.ts">APIMeta</a></code>
- <code><a href="./src/resources/shared.ts">BackwardLinks</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionChunk</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionTokenLogprob</a></code>
- <code><a href="./src/resources/shared.ts">CompletionUsage</a></code>
- <code><a href="./src/resources/shared.ts">DiskInfo</a></code>
- <code><a href="./src/resources/shared.ts">Droplet</a></code>
- <code><a href="./src/resources/shared.ts">DropletNextBackupWindow</a></code>
- <code><a href="./src/resources/shared.ts">FirewallRuleTarget</a></code>
- <code><a href="./src/resources/shared.ts">ForwardLinks</a></code>
- <code><a href="./src/resources/shared.ts">GarbageCollection</a></code>
- <code><a href="./src/resources/shared.ts">GPUInfo</a></code>
- <code><a href="./src/resources/shared.ts">Image</a></code>
- <code><a href="./src/resources/shared.ts">ImageGenCompletedEvent</a></code>
- <code><a href="./src/resources/shared.ts">ImageGenPartialImageEvent</a></code>
- <code><a href="./src/resources/shared.ts">ImageGenStreamEvent</a></code>
- <code><a href="./src/resources/shared.ts">Kernel</a></code>
- <code><a href="./src/resources/shared.ts">MetaProperties</a></code>
- <code><a href="./src/resources/shared.ts">NetworkV4</a></code>
- <code><a href="./src/resources/shared.ts">NetworkV6</a></code>
- <code><a href="./src/resources/shared.ts">PageLinks</a></code>
- <code><a href="./src/resources/shared.ts">Region</a></code>
- <code><a href="./src/resources/shared.ts">Size</a></code>
- <code><a href="./src/resources/shared.ts">Snapshots</a></code>
- <code><a href="./src/resources/shared.ts">Subscription</a></code>
- <code><a href="./src/resources/shared.ts">SubscriptionTierBase</a></code>
- <code><a href="./src/resources/shared.ts">VpcPeering</a></code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">APIAgent</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIAgentAPIKeyInfo</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIAgentModel</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIAnthropicAPIKeyInfo</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIDeploymentVisibility</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIOpenAIAPIKeyInfo</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIRetrievalMethod</a></code>
- <code><a href="./src/resources/agents/agents.ts">APIWorkspace</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRetrieveUsageResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateStatusResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /v2/gen-ai/agents/{uuid}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(uuid) -> AgentRetrieveResponse</code>
- <code title="put /v2/gen-ai/agents/{uuid}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(pathUuid, { ...params }) -> AgentUpdateResponse</code>
- <code title="get /v2/gen-ai/agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v2/gen-ai/agents/{uuid}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(uuid) -> AgentDeleteResponse</code>
- <code title="get /v2/gen-ai/agents/{uuid}/usage">client.agents.<a href="./src/resources/agents/agents.ts">retrieveUsage</a>(uuid, { ...params }) -> AgentRetrieveUsageResponse</code>
- <code title="put /v2/gen-ai/agents/{uuid}/deployment_visibility">client.agents.<a href="./src/resources/agents/agents.ts">updateStatus</a>(pathUuid, { ...params }) -> AgentUpdateStatusResponse</code>

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

## Chat

### Completions

Types:

- <code><a href="./src/resources/agents/chat/completions.ts">CompletionCreateResponse</a></code>

Methods:

- <code title="post /chat/completions?agent=true">client.agents.chat.completions.<a href="./src/resources/agents/chat/completions.ts">create</a>({ ...params }) -> CompletionCreateResponse</code>

## EvaluationMetrics

Types:

- <code><a href="./src/resources/agents/evaluation-metrics/evaluation-metrics.ts">EvaluationMetricListResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/evaluation-metrics.ts">EvaluationMetricListRegionsResponse</a></code>

Methods:

- <code title="get /v2/gen-ai/evaluation_metrics">client.agents.evaluationMetrics.<a href="./src/resources/agents/evaluation-metrics/evaluation-metrics.ts">list</a>() -> EvaluationMetricListResponse</code>
- <code title="get /v2/gen-ai/regions">client.agents.evaluationMetrics.<a href="./src/resources/agents/evaluation-metrics/evaluation-metrics.ts">listRegions</a>({ ...params }) -> EvaluationMetricListRegionsResponse</code>

### Workspaces

Types:

- <code><a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">WorkspaceCreateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">WorkspaceRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">WorkspaceUpdateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">WorkspaceListResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">WorkspaceDeleteResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">WorkspaceListEvaluationTestCasesResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/workspaces">client.agents.evaluationMetrics.workspaces.<a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">create</a>({ ...params }) -> WorkspaceCreateResponse</code>
- <code title="get /v2/gen-ai/workspaces/{workspace_uuid}">client.agents.evaluationMetrics.workspaces.<a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">retrieve</a>(workspaceUuid) -> WorkspaceRetrieveResponse</code>
- <code title="put /v2/gen-ai/workspaces/{workspace_uuid}">client.agents.evaluationMetrics.workspaces.<a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">update</a>(workspaceUuid, { ...params }) -> WorkspaceUpdateResponse</code>
- <code title="get /v2/gen-ai/workspaces">client.agents.evaluationMetrics.workspaces.<a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">list</a>() -> WorkspaceListResponse</code>
- <code title="delete /v2/gen-ai/workspaces/{workspace_uuid}">client.agents.evaluationMetrics.workspaces.<a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">delete</a>(workspaceUuid) -> WorkspaceDeleteResponse</code>
- <code title="get /v2/gen-ai/workspaces/{workspace_uuid}/evaluation_test_cases">client.agents.evaluationMetrics.workspaces.<a href="./src/resources/agents/evaluation-metrics/workspaces/workspaces.ts">listEvaluationTestCases</a>(workspaceUuid) -> WorkspaceListEvaluationTestCasesResponse</code>

#### Agents

Types:

- <code><a href="./src/resources/agents/evaluation-metrics/workspaces/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/workspaces/agents.ts">AgentMoveResponse</a></code>

Methods:

- <code title="get /v2/gen-ai/workspaces/{workspace_uuid}/agents">client.agents.evaluationMetrics.workspaces.agents.<a href="./src/resources/agents/evaluation-metrics/workspaces/agents.ts">list</a>(workspaceUuid, { ...params }) -> AgentListResponse</code>
- <code title="put /v2/gen-ai/workspaces/{workspace_uuid}/agents">client.agents.evaluationMetrics.workspaces.agents.<a href="./src/resources/agents/evaluation-metrics/workspaces/agents.ts">move</a>(workspaceUuid, { ...params }) -> AgentMoveResponse</code>

### Models

Types:

- <code><a href="./src/resources/agents/evaluation-metrics/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v2/gen-ai/models">client.agents.evaluationMetrics.models.<a href="./src/resources/agents/evaluation-metrics/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

### Anthropic

#### Keys

Types:

- <code><a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">KeyRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">KeyListAgentsResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/anthropic/keys">client.agents.evaluationMetrics.anthropic.keys.<a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /v2/gen-ai/anthropic/keys/{api_key_uuid}">client.agents.evaluationMetrics.anthropic.keys.<a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">retrieve</a>(apiKeyUuid) -> KeyRetrieveResponse</code>
- <code title="put /v2/gen-ai/anthropic/keys/{api_key_uuid}">client.agents.evaluationMetrics.anthropic.keys.<a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">update</a>(apiKeyUuid, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /v2/gen-ai/anthropic/keys">client.agents.evaluationMetrics.anthropic.keys.<a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /v2/gen-ai/anthropic/keys/{api_key_uuid}">client.agents.evaluationMetrics.anthropic.keys.<a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">delete</a>(apiKeyUuid) -> KeyDeleteResponse</code>
- <code title="get /v2/gen-ai/anthropic/keys/{uuid}/agents">client.agents.evaluationMetrics.anthropic.keys.<a href="./src/resources/agents/evaluation-metrics/anthropic/keys.ts">listAgents</a>(uuid, { ...params }) -> KeyListAgentsResponse</code>

### OpenAI

#### Keys

Types:

- <code><a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">KeyRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">KeyListAgentsResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/openai/keys">client.agents.evaluationMetrics.openai.keys.<a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /v2/gen-ai/openai/keys/{api_key_uuid}">client.agents.evaluationMetrics.openai.keys.<a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">retrieve</a>(apiKeyUuid) -> KeyRetrieveResponse</code>
- <code title="put /v2/gen-ai/openai/keys/{api_key_uuid}">client.agents.evaluationMetrics.openai.keys.<a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">update</a>(apiKeyUuid, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /v2/gen-ai/openai/keys">client.agents.evaluationMetrics.openai.keys.<a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /v2/gen-ai/openai/keys/{api_key_uuid}">client.agents.evaluationMetrics.openai.keys.<a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">delete</a>(apiKeyUuid) -> KeyDeleteResponse</code>
- <code title="get /v2/gen-ai/openai/keys/{uuid}/agents">client.agents.evaluationMetrics.openai.keys.<a href="./src/resources/agents/evaluation-metrics/openai/keys.ts">listAgents</a>(uuid, { ...params }) -> KeyListAgentsResponse</code>

### Oauth2

Types:

- <code><a href="./src/resources/agents/evaluation-metrics/oauth2/oauth2.ts">Oauth2GenerateURLResponse</a></code>

Methods:

- <code title="get /v2/gen-ai/oauth2/url">client.agents.evaluationMetrics.oauth2.<a href="./src/resources/agents/evaluation-metrics/oauth2/oauth2.ts">generateURL</a>({ ...params }) -> Oauth2GenerateURLResponse</code>

#### Dropbox

Types:

- <code><a href="./src/resources/agents/evaluation-metrics/oauth2/dropbox.ts">DropboxCreateTokensResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/oauth2/dropbox/tokens">client.agents.evaluationMetrics.oauth2.dropbox.<a href="./src/resources/agents/evaluation-metrics/oauth2/dropbox.ts">createTokens</a>({ ...params }) -> DropboxCreateTokensResponse</code>

## EvaluationRuns

Types:

- <code><a href="./src/resources/agents/evaluation-runs.ts">APIEvaluationMetric</a></code>
- <code><a href="./src/resources/agents/evaluation-runs.ts">APIEvaluationMetricResult</a></code>
- <code><a href="./src/resources/agents/evaluation-runs.ts">APIEvaluationPrompt</a></code>
- <code><a href="./src/resources/agents/evaluation-runs.ts">APIEvaluationRun</a></code>
- <code><a href="./src/resources/agents/evaluation-runs.ts">EvaluationRunCreateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-runs.ts">EvaluationRunRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-runs.ts">EvaluationRunListResultsResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-runs.ts">EvaluationRunRetrieveResultsResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/evaluation_runs">client.agents.evaluationRuns.<a href="./src/resources/agents/evaluation-runs.ts">create</a>({ ...params }) -> EvaluationRunCreateResponse</code>
- <code title="get /v2/gen-ai/evaluation_runs/{evaluation_run_uuid}">client.agents.evaluationRuns.<a href="./src/resources/agents/evaluation-runs.ts">retrieve</a>(evaluationRunUuid) -> EvaluationRunRetrieveResponse</code>
- <code title="get /v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results">client.agents.evaluationRuns.<a href="./src/resources/agents/evaluation-runs.ts">listResults</a>(evaluationRunUuid, { ...params }) -> EvaluationRunListResultsResponse</code>
- <code title="get /v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results/{prompt_id}">client.agents.evaluationRuns.<a href="./src/resources/agents/evaluation-runs.ts">retrieveResults</a>(promptID, { ...params }) -> EvaluationRunRetrieveResultsResponse</code>

## EvaluationTestCases

Types:

- <code><a href="./src/resources/agents/evaluation-test-cases.ts">APIEvaluationTestCase</a></code>
- <code><a href="./src/resources/agents/evaluation-test-cases.ts">APIStarMetric</a></code>
- <code><a href="./src/resources/agents/evaluation-test-cases.ts">EvaluationTestCaseCreateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-test-cases.ts">EvaluationTestCaseRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-test-cases.ts">EvaluationTestCaseUpdateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-test-cases.ts">EvaluationTestCaseListResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-test-cases.ts">EvaluationTestCaseListEvaluationRunsResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/evaluation_test_cases">client.agents.evaluationTestCases.<a href="./src/resources/agents/evaluation-test-cases.ts">create</a>({ ...params }) -> EvaluationTestCaseCreateResponse</code>
- <code title="get /v2/gen-ai/evaluation_test_cases/{test_case_uuid}">client.agents.evaluationTestCases.<a href="./src/resources/agents/evaluation-test-cases.ts">retrieve</a>(testCaseUuid, { ...params }) -> EvaluationTestCaseRetrieveResponse</code>
- <code title="put /v2/gen-ai/evaluation_test_cases/{test_case_uuid}">client.agents.evaluationTestCases.<a href="./src/resources/agents/evaluation-test-cases.ts">update</a>(testCaseUuid, { ...params }) -> EvaluationTestCaseUpdateResponse</code>
- <code title="get /v2/gen-ai/evaluation_test_cases">client.agents.evaluationTestCases.<a href="./src/resources/agents/evaluation-test-cases.ts">list</a>() -> EvaluationTestCaseListResponse</code>
- <code title="get /v2/gen-ai/evaluation_test_cases/{evaluation_test_case_uuid}/evaluation_runs">client.agents.evaluationTestCases.<a href="./src/resources/agents/evaluation-test-cases.ts">listEvaluationRuns</a>(evaluationTestCaseUuid, { ...params }) -> EvaluationTestCaseListEvaluationRunsResponse</code>

## EvaluationDatasets

Types:

- <code><a href="./src/resources/agents/evaluation-datasets.ts">EvaluationDatasetCreateResponse</a></code>
- <code><a href="./src/resources/agents/evaluation-datasets.ts">EvaluationDatasetCreateFileUploadPresignedURLsResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/evaluation_datasets">client.agents.evaluationDatasets.<a href="./src/resources/agents/evaluation-datasets.ts">create</a>({ ...params }) -> EvaluationDatasetCreateResponse</code>
- <code title="post /v2/gen-ai/evaluation_datasets/file_upload_presigned_urls">client.agents.evaluationDatasets.<a href="./src/resources/agents/evaluation-datasets.ts">createFileUploadPresignedURLs</a>({ ...params }) -> EvaluationDatasetCreateFileUploadPresignedURLsResponse</code>

## Functions

Types:

- <code><a href="./src/resources/agents/functions.ts">FunctionCreateResponse</a></code>
- <code><a href="./src/resources/agents/functions.ts">FunctionUpdateResponse</a></code>
- <code><a href="./src/resources/agents/functions.ts">FunctionDeleteResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/agents/{agent_uuid}/functions">client.agents.functions.<a href="./src/resources/agents/functions.ts">create</a>(agentUuid, { ...params }) -> FunctionCreateResponse</code>
- <code title="put /v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}">client.agents.functions.<a href="./src/resources/agents/functions.ts">update</a>(functionUuid, { ...params }) -> FunctionUpdateResponse</code>
- <code title="delete /v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}">client.agents.functions.<a href="./src/resources/agents/functions.ts">delete</a>(functionUuid, { ...params }) -> FunctionDeleteResponse</code>

## Versions

Types:

- <code><a href="./src/resources/agents/versions.ts">VersionUpdateResponse</a></code>
- <code><a href="./src/resources/agents/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="put /v2/gen-ai/agents/{uuid}/versions">client.agents.versions.<a href="./src/resources/agents/versions.ts">update</a>(pathUuid, { ...params }) -> VersionUpdateResponse</code>
- <code title="get /v2/gen-ai/agents/{uuid}/versions">client.agents.versions.<a href="./src/resources/agents/versions.ts">list</a>(uuid, { ...params }) -> VersionListResponse</code>

## KnowledgeBases

Types:

- <code><a href="./src/resources/agents/knowledge-bases.ts">APILinkKnowledgeBaseOutput</a></code>
- <code><a href="./src/resources/agents/knowledge-bases.ts">KnowledgeBaseDetachResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/agents/{agent_uuid}/knowledge_bases">client.agents.knowledgeBases.<a href="./src/resources/agents/knowledge-bases.ts">attach</a>(agentUuid) -> APILinkKnowledgeBaseOutput</code>
- <code title="post /v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}">client.agents.knowledgeBases.<a href="./src/resources/agents/knowledge-bases.ts">attachSingle</a>(knowledgeBaseUuid, { ...params }) -> APILinkKnowledgeBaseOutput</code>
- <code title="delete /v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}">client.agents.knowledgeBases.<a href="./src/resources/agents/knowledge-bases.ts">detach</a>(knowledgeBaseUuid, { ...params }) -> KnowledgeBaseDetachResponse</code>

## Routes

Types:

- <code><a href="./src/resources/agents/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/agents/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/agents/routes.ts">RouteAddResponse</a></code>
- <code><a href="./src/resources/agents/routes.ts">RouteViewResponse</a></code>

Methods:

- <code title="put /v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}">client.agents.routes.<a href="./src/resources/agents/routes.ts">update</a>(childAgentUuid, { ...params }) -> RouteUpdateResponse</code>
- <code title="delete /v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}">client.agents.routes.<a href="./src/resources/agents/routes.ts">delete</a>(childAgentUuid, { ...params }) -> RouteDeleteResponse</code>
- <code title="post /v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}">client.agents.routes.<a href="./src/resources/agents/routes.ts">add</a>(childAgentUuid, { ...params }) -> RouteAddResponse</code>
- <code title="get /v2/gen-ai/agents/{uuid}/child_agents">client.agents.routes.<a href="./src/resources/agents/routes.ts">view</a>(uuid) -> RouteViewResponse</code>

# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">CompletionCreateResponse</a></code>

Methods:

- <code title="post /chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> CompletionCreateResponse</code>

# Images

## Generations

Types:

- <code><a href="./src/resources/images/generations.ts">GenerationCreateResponse</a></code>

Methods:

- <code title="post /images/generations">client.images.generations.<a href="./src/resources/images/generations.ts">create</a>({ ...params }) -> GenerationCreateResponse</code>

# GPUDroplets

Types:

- <code><a href="./src/resources/gpu-droplets/gpu-droplets.ts">DropletBackupPolicy</a></code>
- <code><a href="./src/resources/gpu-droplets/gpu-droplets.ts">GPUDropletCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/gpu-droplets.ts">GPUDropletRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/gpu-droplets.ts">GPUDropletListResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/gpu-droplets.ts">GPUDropletListFirewallsResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/gpu-droplets.ts">GPUDropletListKernelsResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/gpu-droplets.ts">GPUDropletListNeighborsResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/gpu-droplets.ts">GPUDropletListSnapshotsResponse</a></code>

Methods:

- <code title="post /v2/droplets">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">create</a>({ ...params }) -> GPUDropletCreateResponse</code>
- <code title="get /v2/droplets/{droplet_id}">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">retrieve</a>(dropletID) -> GPUDropletRetrieveResponse</code>
- <code title="get /v2/droplets">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">list</a>({ ...params }) -> GPUDropletListResponse</code>
- <code title="delete /v2/droplets/{droplet_id}">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">delete</a>(dropletID) -> void</code>
- <code title="delete /v2/droplets">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">deleteByTag</a>({ ...params }) -> void</code>
- <code title="get /v2/droplets/{droplet_id}/firewalls">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">listFirewalls</a>(dropletID, { ...params }) -> GPUDropletListFirewallsResponse</code>
- <code title="get /v2/droplets/{droplet_id}/kernels">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">listKernels</a>(dropletID, { ...params }) -> GPUDropletListKernelsResponse</code>
- <code title="get /v2/droplets/{droplet_id}/neighbors">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">listNeighbors</a>(dropletID) -> GPUDropletListNeighborsResponse</code>
- <code title="get /v2/droplets/{droplet_id}/snapshots">client.gpuDroplets.<a href="./src/resources/gpu-droplets/gpu-droplets.ts">listSnapshots</a>(dropletID, { ...params }) -> GPUDropletListSnapshotsResponse</code>

## Backups

Types:

- <code><a href="./src/resources/gpu-droplets/backups.ts">BackupListResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/backups.ts">BackupListPoliciesResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/backups.ts">BackupListSupportedPoliciesResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/backups.ts">BackupRetrievePolicyResponse</a></code>

Methods:

- <code title="get /v2/droplets/{droplet_id}/backups">client.gpuDroplets.backups.<a href="./src/resources/gpu-droplets/backups.ts">list</a>(dropletID, { ...params }) -> BackupListResponse</code>
- <code title="get /v2/droplets/backups/policies">client.gpuDroplets.backups.<a href="./src/resources/gpu-droplets/backups.ts">listPolicies</a>({ ...params }) -> BackupListPoliciesResponse</code>
- <code title="get /v2/droplets/backups/supported_policies">client.gpuDroplets.backups.<a href="./src/resources/gpu-droplets/backups.ts">listSupportedPolicies</a>() -> BackupListSupportedPoliciesResponse</code>
- <code title="get /v2/droplets/{droplet_id}/backups/policy">client.gpuDroplets.backups.<a href="./src/resources/gpu-droplets/backups.ts">retrievePolicy</a>(dropletID) -> BackupRetrievePolicyResponse</code>

## Actions

Types:

- <code><a href="./src/resources/gpu-droplets/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/actions.ts">ActionBulkInitiateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/actions.ts">ActionInitiateResponse</a></code>

Methods:

- <code title="get /v2/droplets/{droplet_id}/actions/{action_id}">client.gpuDroplets.actions.<a href="./src/resources/gpu-droplets/actions.ts">retrieve</a>(actionID, { ...params }) -> ActionRetrieveResponse</code>
- <code title="get /v2/droplets/{droplet_id}/actions">client.gpuDroplets.actions.<a href="./src/resources/gpu-droplets/actions.ts">list</a>(dropletID, { ...params }) -> ActionListResponse</code>
- <code title="post /v2/droplets/actions">client.gpuDroplets.actions.<a href="./src/resources/gpu-droplets/actions.ts">bulkInitiate</a>({ ...params }) -> ActionBulkInitiateResponse</code>
- <code title="post /v2/droplets/{droplet_id}/actions">client.gpuDroplets.actions.<a href="./src/resources/gpu-droplets/actions.ts">initiate</a>(dropletID, { ...params }) -> ActionInitiateResponse</code>

## DestroyWithAssociatedResources

Types:

- <code><a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">AssociatedResource</a></code>
- <code><a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">DestroyedAssociatedResource</a></code>
- <code><a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">DestroyWithAssociatedResourceListResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">DestroyWithAssociatedResourceCheckStatusResponse</a></code>

Methods:

- <code title="get /v2/droplets/{droplet_id}/destroy_with_associated_resources">client.gpuDroplets.destroyWithAssociatedResources.<a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">list</a>(dropletID) -> DestroyWithAssociatedResourceListResponse</code>
- <code title="get /v2/droplets/{droplet_id}/destroy_with_associated_resources/status">client.gpuDroplets.destroyWithAssociatedResources.<a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">checkStatus</a>(dropletID) -> DestroyWithAssociatedResourceCheckStatusResponse</code>
- <code title="delete /v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous">client.gpuDroplets.destroyWithAssociatedResources.<a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">deleteDangerous</a>(dropletID, { ...params }) -> void</code>
- <code title="delete /v2/droplets/{droplet_id}/destroy_with_associated_resources/selective">client.gpuDroplets.destroyWithAssociatedResources.<a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">deleteSelective</a>(dropletID, { ...params }) -> void</code>
- <code title="post /v2/droplets/{droplet_id}/destroy_with_associated_resources/retry">client.gpuDroplets.destroyWithAssociatedResources.<a href="./src/resources/gpu-droplets/destroy-with-associated-resources.ts">retry</a>(dropletID) -> void</code>

## Autoscale

Types:

- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscalePool</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscalePoolDropletTemplate</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscalePoolDynamicConfig</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscalePoolStaticConfig</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">CurrentUtilization</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscaleCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscaleRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscaleUpdateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscaleListResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscaleListHistoryResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/autoscale.ts">AutoscaleListMembersResponse</a></code>

Methods:

- <code title="post /v2/droplets/autoscale">client.gpuDroplets.autoscale.<a href="./src/resources/gpu-droplets/autoscale.ts">create</a>({ ...params }) -> AutoscaleCreateResponse</code>
- <code title="get /v2/droplets/autoscale/{autoscale_pool_id}">client.gpuDroplets.autoscale.<a href="./src/resources/gpu-droplets/autoscale.ts">retrieve</a>(autoscalePoolID) -> AutoscaleRetrieveResponse</code>
- <code title="put /v2/droplets/autoscale/{autoscale_pool_id}">client.gpuDroplets.autoscale.<a href="./src/resources/gpu-droplets/autoscale.ts">update</a>(autoscalePoolID, { ...params }) -> AutoscaleUpdateResponse</code>
- <code title="get /v2/droplets/autoscale">client.gpuDroplets.autoscale.<a href="./src/resources/gpu-droplets/autoscale.ts">list</a>({ ...params }) -> AutoscaleListResponse</code>
- <code title="delete /v2/droplets/autoscale/{autoscale_pool_id}">client.gpuDroplets.autoscale.<a href="./src/resources/gpu-droplets/autoscale.ts">delete</a>(autoscalePoolID) -> void</code>
- <code title="delete /v2/droplets/autoscale/{autoscale_pool_id}/dangerous">client.gpuDroplets.autoscale.<a href="./src/resources/gpu-droplets/autoscale.ts">deleteDangerous</a>(autoscalePoolID, { ...params }) -> void</code>
- <code title="get /v2/droplets/autoscale/{autoscale_pool_id}/history">client.gpuDroplets.autoscale.<a href="./src/resources/gpu-droplets/autoscale.ts">listHistory</a>(autoscalePoolID, { ...params }) -> AutoscaleListHistoryResponse</code>
- <code title="get /v2/droplets/autoscale/{autoscale_pool_id}/members">client.gpuDroplets.autoscale.<a href="./src/resources/gpu-droplets/autoscale.ts">listMembers</a>(autoscalePoolID, { ...params }) -> AutoscaleListMembersResponse</code>

## Firewalls

Types:

- <code><a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">Firewall</a></code>
- <code><a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">FirewallCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">FirewallRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">FirewallUpdateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">FirewallListResponse</a></code>

Methods:

- <code title="post /v2/firewalls">client.gpuDroplets.firewalls.<a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">create</a>({ ...params }) -> FirewallCreateResponse</code>
- <code title="get /v2/firewalls/{firewall_id}">client.gpuDroplets.firewalls.<a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">retrieve</a>(firewallID) -> FirewallRetrieveResponse</code>
- <code title="put /v2/firewalls/{firewall_id}">client.gpuDroplets.firewalls.<a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">update</a>(firewallID, { ...params }) -> FirewallUpdateResponse</code>
- <code title="get /v2/firewalls">client.gpuDroplets.firewalls.<a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">list</a>({ ...params }) -> FirewallListResponse</code>
- <code title="delete /v2/firewalls/{firewall_id}">client.gpuDroplets.firewalls.<a href="./src/resources/gpu-droplets/firewalls/firewalls.ts">delete</a>(firewallID) -> void</code>

### Droplets

Methods:

- <code title="post /v2/firewalls/{firewall_id}/droplets">client.gpuDroplets.firewalls.droplets.<a href="./src/resources/gpu-droplets/firewalls/droplets.ts">add</a>(firewallID, { ...params }) -> void</code>
- <code title="delete /v2/firewalls/{firewall_id}/droplets">client.gpuDroplets.firewalls.droplets.<a href="./src/resources/gpu-droplets/firewalls/droplets.ts">remove</a>(firewallID, { ...params }) -> void</code>

### Tags

Methods:

- <code title="post /v2/firewalls/{firewall_id}/tags">client.gpuDroplets.firewalls.tags.<a href="./src/resources/gpu-droplets/firewalls/tags.ts">add</a>(firewallID, { ...params }) -> void</code>
- <code title="delete /v2/firewalls/{firewall_id}/tags">client.gpuDroplets.firewalls.tags.<a href="./src/resources/gpu-droplets/firewalls/tags.ts">remove</a>(firewallID, { ...params }) -> void</code>

### Rules

Methods:

- <code title="post /v2/firewalls/{firewall_id}/rules">client.gpuDroplets.firewalls.rules.<a href="./src/resources/gpu-droplets/firewalls/rules.ts">add</a>(firewallID, { ...params }) -> void</code>
- <code title="delete /v2/firewalls/{firewall_id}/rules">client.gpuDroplets.firewalls.rules.<a href="./src/resources/gpu-droplets/firewalls/rules.ts">remove</a>(firewallID, { ...params }) -> void</code>

## FloatingIPs

Types:

- <code><a href="./src/resources/gpu-droplets/floating-ips/floating-ips.ts">FloatingIP</a></code>
- <code><a href="./src/resources/gpu-droplets/floating-ips/floating-ips.ts">FloatingIPCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/floating-ips/floating-ips.ts">FloatingIPRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/floating-ips/floating-ips.ts">FloatingIPListResponse</a></code>

Methods:

- <code title="post /v2/floating_ips">client.gpuDroplets.floatingIPs.<a href="./src/resources/gpu-droplets/floating-ips/floating-ips.ts">create</a>({ ...params }) -> FloatingIPCreateResponse</code>
- <code title="get /v2/floating_ips/{floating_ip}">client.gpuDroplets.floatingIPs.<a href="./src/resources/gpu-droplets/floating-ips/floating-ips.ts">retrieve</a>(floatingIP) -> FloatingIPRetrieveResponse</code>
- <code title="get /v2/floating_ips">client.gpuDroplets.floatingIPs.<a href="./src/resources/gpu-droplets/floating-ips/floating-ips.ts">list</a>({ ...params }) -> FloatingIPListResponse</code>
- <code title="delete /v2/floating_ips/{floating_ip}">client.gpuDroplets.floatingIPs.<a href="./src/resources/gpu-droplets/floating-ips/floating-ips.ts">delete</a>(floatingIP) -> void</code>

### Actions

Types:

- <code><a href="./src/resources/gpu-droplets/floating-ips/actions.ts">ActionCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/floating-ips/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/floating-ips/actions.ts">ActionListResponse</a></code>

Methods:

- <code title="post /v2/floating_ips/{floating_ip}/actions">client.gpuDroplets.floatingIPs.actions.<a href="./src/resources/gpu-droplets/floating-ips/actions.ts">create</a>(floatingIP, { ...params }) -> ActionCreateResponse</code>
- <code title="get /v2/floating_ips/{floating_ip}/actions/{action_id}">client.gpuDroplets.floatingIPs.actions.<a href="./src/resources/gpu-droplets/floating-ips/actions.ts">retrieve</a>(actionID, { ...params }) -> ActionRetrieveResponse</code>
- <code title="get /v2/floating_ips/{floating_ip}/actions">client.gpuDroplets.floatingIPs.actions.<a href="./src/resources/gpu-droplets/floating-ips/actions.ts">list</a>(floatingIP) -> ActionListResponse</code>

## Images

Types:

- <code><a href="./src/resources/gpu-droplets/images/images.ts">ImageCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/images/images.ts">ImageRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/images/images.ts">ImageUpdateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/images/images.ts">ImageListResponse</a></code>

Methods:

- <code title="post /v2/images">client.gpuDroplets.images.<a href="./src/resources/gpu-droplets/images/images.ts">create</a>({ ...params }) -> ImageCreateResponse</code>
- <code title="get /v2/images/{image_id}">client.gpuDroplets.images.<a href="./src/resources/gpu-droplets/images/images.ts">retrieve</a>(imageID) -> ImageRetrieveResponse</code>
- <code title="put /v2/images/{image_id}">client.gpuDroplets.images.<a href="./src/resources/gpu-droplets/images/images.ts">update</a>(imageID, { ...params }) -> ImageUpdateResponse</code>
- <code title="get /v2/images">client.gpuDroplets.images.<a href="./src/resources/gpu-droplets/images/images.ts">list</a>({ ...params }) -> ImageListResponse</code>
- <code title="delete /v2/images/{image_id}">client.gpuDroplets.images.<a href="./src/resources/gpu-droplets/images/images.ts">delete</a>(imageID) -> void</code>

### Actions

Types:

- <code><a href="./src/resources/gpu-droplets/images/actions.ts">ActionListResponse</a></code>

Methods:

- <code title="post /v2/images/{image_id}/actions">client.gpuDroplets.images.actions.<a href="./src/resources/gpu-droplets/images/actions.ts">create</a>(imageID, { ...params }) -> Action</code>
- <code title="get /v2/images/{image_id}/actions/{action_id}">client.gpuDroplets.images.actions.<a href="./src/resources/gpu-droplets/images/actions.ts">retrieve</a>(actionID, { ...params }) -> Action</code>
- <code title="get /v2/images/{image_id}/actions">client.gpuDroplets.images.actions.<a href="./src/resources/gpu-droplets/images/actions.ts">list</a>(imageID) -> ActionListResponse</code>

## LoadBalancers

Types:

- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">Domains</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">ForwardingRule</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">GlbSettings</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">HealthCheck</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">LbFirewall</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">LoadBalancer</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">StickySessions</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">LoadBalancerCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">LoadBalancerRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">LoadBalancerUpdateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">LoadBalancerListResponse</a></code>

Methods:

- <code title="post /v2/load_balancers">client.gpuDroplets.loadBalancers.<a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">create</a>({ ...params }) -> LoadBalancerCreateResponse</code>
- <code title="get /v2/load_balancers/{lb_id}">client.gpuDroplets.loadBalancers.<a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">retrieve</a>(lbID) -> LoadBalancerRetrieveResponse</code>
- <code title="put /v2/load_balancers/{lb_id}">client.gpuDroplets.loadBalancers.<a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">update</a>(lbID, { ...params }) -> LoadBalancerUpdateResponse</code>
- <code title="get /v2/load_balancers">client.gpuDroplets.loadBalancers.<a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">list</a>({ ...params }) -> LoadBalancerListResponse</code>
- <code title="delete /v2/load_balancers/{lb_id}">client.gpuDroplets.loadBalancers.<a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">delete</a>(lbID) -> void</code>
- <code title="delete /v2/load_balancers/{lb_id}/cache">client.gpuDroplets.loadBalancers.<a href="./src/resources/gpu-droplets/load-balancers/load-balancers.ts">deleteCache</a>(lbID) -> void</code>

### Droplets

Methods:

- <code title="post /v2/load_balancers/{lb_id}/droplets">client.gpuDroplets.loadBalancers.droplets.<a href="./src/resources/gpu-droplets/load-balancers/droplets.ts">add</a>(lbID, { ...params }) -> void</code>
- <code title="delete /v2/load_balancers/{lb_id}/droplets">client.gpuDroplets.loadBalancers.droplets.<a href="./src/resources/gpu-droplets/load-balancers/droplets.ts">remove</a>(lbID, { ...params }) -> void</code>

### ForwardingRules

Methods:

- <code title="post /v2/load_balancers/{lb_id}/forwarding_rules">client.gpuDroplets.loadBalancers.forwardingRules.<a href="./src/resources/gpu-droplets/load-balancers/forwarding-rules.ts">add</a>(lbID, { ...params }) -> void</code>
- <code title="delete /v2/load_balancers/{lb_id}/forwarding_rules">client.gpuDroplets.loadBalancers.forwardingRules.<a href="./src/resources/gpu-droplets/load-balancers/forwarding-rules.ts">remove</a>(lbID, { ...params }) -> void</code>

## Sizes

Types:

- <code><a href="./src/resources/gpu-droplets/sizes.ts">SizeListResponse</a></code>

Methods:

- <code title="get /v2/sizes">client.gpuDroplets.sizes.<a href="./src/resources/gpu-droplets/sizes.ts">list</a>({ ...params }) -> SizeListResponse</code>

## Snapshots

Types:

- <code><a href="./src/resources/gpu-droplets/snapshots.ts">SnapshotRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/snapshots.ts">SnapshotListResponse</a></code>

Methods:

- <code title="get /v2/snapshots/{snapshot_id}">client.gpuDroplets.snapshots.<a href="./src/resources/gpu-droplets/snapshots.ts">retrieve</a>(snapshotID) -> SnapshotRetrieveResponse</code>
- <code title="get /v2/snapshots">client.gpuDroplets.snapshots.<a href="./src/resources/gpu-droplets/snapshots.ts">list</a>({ ...params }) -> SnapshotListResponse</code>
- <code title="delete /v2/snapshots/{snapshot_id}">client.gpuDroplets.snapshots.<a href="./src/resources/gpu-droplets/snapshots.ts">delete</a>(snapshotID) -> void</code>

## Volumes

Types:

- <code><a href="./src/resources/gpu-droplets/volumes/volumes.ts">VolumeCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/volumes/volumes.ts">VolumeRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/volumes/volumes.ts">VolumeListResponse</a></code>

Methods:

- <code title="post /v2/volumes">client.gpuDroplets.volumes.<a href="./src/resources/gpu-droplets/volumes/volumes.ts">create</a>({ ...params }) -> VolumeCreateResponse</code>
- <code title="get /v2/volumes/{volume_id}">client.gpuDroplets.volumes.<a href="./src/resources/gpu-droplets/volumes/volumes.ts">retrieve</a>(volumeID) -> VolumeRetrieveResponse</code>
- <code title="get /v2/volumes">client.gpuDroplets.volumes.<a href="./src/resources/gpu-droplets/volumes/volumes.ts">list</a>({ ...params }) -> VolumeListResponse</code>
- <code title="delete /v2/volumes/{volume_id}">client.gpuDroplets.volumes.<a href="./src/resources/gpu-droplets/volumes/volumes.ts">delete</a>(volumeID) -> void</code>
- <code title="delete /v2/volumes">client.gpuDroplets.volumes.<a href="./src/resources/gpu-droplets/volumes/volumes.ts">deleteByName</a>({ ...params }) -> void</code>

### Actions

Types:

- <code><a href="./src/resources/gpu-droplets/volumes/actions.ts">VolumeAction</a></code>
- <code><a href="./src/resources/gpu-droplets/volumes/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/volumes/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/volumes/actions.ts">ActionInitiateByIDResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/volumes/actions.ts">ActionInitiateByNameResponse</a></code>

Methods:

- <code title="get /v2/volumes/{volume_id}/actions/{action_id}">client.gpuDroplets.volumes.actions.<a href="./src/resources/gpu-droplets/volumes/actions.ts">retrieve</a>(actionID, { ...params }) -> ActionRetrieveResponse</code>
- <code title="get /v2/volumes/{volume_id}/actions">client.gpuDroplets.volumes.actions.<a href="./src/resources/gpu-droplets/volumes/actions.ts">list</a>(volumeID, { ...params }) -> ActionListResponse</code>
- <code title="post /v2/volumes/{volume_id}/actions">client.gpuDroplets.volumes.actions.<a href="./src/resources/gpu-droplets/volumes/actions.ts">initiateByID</a>(volumeID, { ...params }) -> ActionInitiateByIDResponse</code>
- <code title="post /v2/volumes/actions">client.gpuDroplets.volumes.actions.<a href="./src/resources/gpu-droplets/volumes/actions.ts">initiateByName</a>({ ...params }) -> ActionInitiateByNameResponse</code>

### Snapshots

Types:

- <code><a href="./src/resources/gpu-droplets/volumes/snapshots.ts">SnapshotCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/volumes/snapshots.ts">SnapshotRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/volumes/snapshots.ts">SnapshotListResponse</a></code>

Methods:

- <code title="post /v2/volumes/{volume_id}/snapshots">client.gpuDroplets.volumes.snapshots.<a href="./src/resources/gpu-droplets/volumes/snapshots.ts">create</a>(volumeID, { ...params }) -> SnapshotCreateResponse</code>
- <code title="get /v2/volumes/snapshots/{snapshot_id}">client.gpuDroplets.volumes.snapshots.<a href="./src/resources/gpu-droplets/volumes/snapshots.ts">retrieve</a>(snapshotID) -> SnapshotRetrieveResponse</code>
- <code title="get /v2/volumes/{volume_id}/snapshots">client.gpuDroplets.volumes.snapshots.<a href="./src/resources/gpu-droplets/volumes/snapshots.ts">list</a>(volumeID, { ...params }) -> SnapshotListResponse</code>
- <code title="delete /v2/volumes/snapshots/{snapshot_id}">client.gpuDroplets.volumes.snapshots.<a href="./src/resources/gpu-droplets/volumes/snapshots.ts">delete</a>(snapshotID) -> void</code>

## Account

### Keys

Types:

- <code><a href="./src/resources/gpu-droplets/account/keys.ts">SSHKeys</a></code>
- <code><a href="./src/resources/gpu-droplets/account/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/account/keys.ts">KeyRetrieveResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/account/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/gpu-droplets/account/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="post /v2/account/keys">client.gpuDroplets.account.keys.<a href="./src/resources/gpu-droplets/account/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /v2/account/keys/{ssh_key_identifier}">client.gpuDroplets.account.keys.<a href="./src/resources/gpu-droplets/account/keys.ts">retrieve</a>(sshKeyIdentifier) -> KeyRetrieveResponse</code>
- <code title="put /v2/account/keys/{ssh_key_identifier}">client.gpuDroplets.account.keys.<a href="./src/resources/gpu-droplets/account/keys.ts">update</a>(sshKeyIdentifier, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /v2/account/keys">client.gpuDroplets.account.keys.<a href="./src/resources/gpu-droplets/account/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /v2/account/keys/{ssh_key_identifier}">client.gpuDroplets.account.keys.<a href="./src/resources/gpu-droplets/account/keys.ts">delete</a>(sshKeyIdentifier) -> void</code>

# Inference

## APIKeys

Types:

- <code><a href="./src/resources/inference/api-keys.ts">APIModelAPIKeyInfo</a></code>
- <code><a href="./src/resources/inference/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/inference/api-keys.ts">APIKeyUpdateResponse</a></code>
- <code><a href="./src/resources/inference/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/inference/api-keys.ts">APIKeyDeleteResponse</a></code>
- <code><a href="./src/resources/inference/api-keys.ts">APIKeyUpdateRegenerateResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/models/api_keys">client.inference.apiKeys.<a href="./src/resources/inference/api-keys.ts">create</a>({ ...params }) -> APIKeyCreateResponse</code>
- <code title="put /v2/gen-ai/models/api_keys/{api_key_uuid}">client.inference.apiKeys.<a href="./src/resources/inference/api-keys.ts">update</a>(apiKeyUuid, { ...params }) -> APIKeyUpdateResponse</code>
- <code title="get /v2/gen-ai/models/api_keys">client.inference.apiKeys.<a href="./src/resources/inference/api-keys.ts">list</a>({ ...params }) -> APIKeyListResponse</code>
- <code title="delete /v2/gen-ai/models/api_keys/{api_key_uuid}">client.inference.apiKeys.<a href="./src/resources/inference/api-keys.ts">delete</a>(apiKeyUuid) -> APIKeyDeleteResponse</code>
- <code title="put /v2/gen-ai/models/api_keys/{api_key_uuid}/regenerate">client.inference.apiKeys.<a href="./src/resources/inference/api-keys.ts">updateRegenerate</a>(apiKeyUuid) -> APIKeyUpdateRegenerateResponse</code>

# KnowledgeBases

Types:

- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">APIKnowledgeBase</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseCreateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseRetrieveResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseUpdateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseListResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/knowledge-bases.ts">KnowledgeBaseDeleteResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/knowledge_bases">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">create</a>({ ...params }) -> KnowledgeBaseCreateResponse</code>
- <code title="get /v2/gen-ai/knowledge_bases/{uuid}">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">retrieve</a>(uuid) -> KnowledgeBaseRetrieveResponse</code>
- <code title="put /v2/gen-ai/knowledge_bases/{uuid}">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">update</a>(pathUuid, { ...params }) -> KnowledgeBaseUpdateResponse</code>
- <code title="get /v2/gen-ai/knowledge_bases">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">list</a>({ ...params }) -> KnowledgeBaseListResponse</code>
- <code title="delete /v2/gen-ai/knowledge_bases/{uuid}">client.knowledgeBases.<a href="./src/resources/knowledge-bases/knowledge-bases.ts">delete</a>(uuid) -> KnowledgeBaseDeleteResponse</code>

## DataSources

Types:

- <code><a href="./src/resources/knowledge-bases/data-sources.ts">APIFileUploadDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">APIKnowledgeBaseDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">APISpacesDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">APIWebCrawlerDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">AwsDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">DataSourceCreateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">DataSourceListResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">DataSourceDeleteResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/data-sources.ts">DataSourceCreatePresignedURLsResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources">client.knowledgeBases.dataSources.<a href="./src/resources/knowledge-bases/data-sources.ts">create</a>(knowledgeBaseUuid, { ...params }) -> DataSourceCreateResponse</code>
- <code title="get /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources">client.knowledgeBases.dataSources.<a href="./src/resources/knowledge-bases/data-sources.ts">list</a>(knowledgeBaseUuid, { ...params }) -> DataSourceListResponse</code>
- <code title="delete /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}">client.knowledgeBases.dataSources.<a href="./src/resources/knowledge-bases/data-sources.ts">delete</a>(dataSourceUuid, { ...params }) -> DataSourceDeleteResponse</code>
- <code title="post /v2/gen-ai/knowledge_bases/data_sources/file_upload_presigned_urls">client.knowledgeBases.dataSources.<a href="./src/resources/knowledge-bases/data-sources.ts">createPresignedURLs</a>({ ...params }) -> DataSourceCreatePresignedURLsResponse</code>

## IndexingJobs

Types:

- <code><a href="./src/resources/knowledge-bases/indexing-jobs.ts">APIIndexedDataSource</a></code>
- <code><a href="./src/resources/knowledge-bases/indexing-jobs.ts">APIIndexingJob</a></code>
- <code><a href="./src/resources/knowledge-bases/indexing-jobs.ts">IndexingJobCreateResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/indexing-jobs.ts">IndexingJobRetrieveResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/indexing-jobs.ts">IndexingJobListResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/indexing-jobs.ts">IndexingJobRetrieveDataSourcesResponse</a></code>
- <code><a href="./src/resources/knowledge-bases/indexing-jobs.ts">IndexingJobUpdateCancelResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/indexing_jobs">client.knowledgeBases.indexingJobs.<a href="./src/resources/knowledge-bases/indexing-jobs.ts">create</a>({ ...params }) -> IndexingJobCreateResponse</code>
- <code title="get /v2/gen-ai/indexing_jobs/{uuid}">client.knowledgeBases.indexingJobs.<a href="./src/resources/knowledge-bases/indexing-jobs.ts">retrieve</a>(uuid) -> IndexingJobRetrieveResponse</code>
- <code title="get /v2/gen-ai/indexing_jobs">client.knowledgeBases.indexingJobs.<a href="./src/resources/knowledge-bases/indexing-jobs.ts">list</a>({ ...params }) -> IndexingJobListResponse</code>
- <code title="get /v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources">client.knowledgeBases.indexingJobs.<a href="./src/resources/knowledge-bases/indexing-jobs.ts">retrieveDataSources</a>(indexingJobUuid) -> IndexingJobRetrieveDataSourcesResponse</code>
- <code title="put /v2/gen-ai/indexing_jobs/{uuid}/cancel">client.knowledgeBases.indexingJobs.<a href="./src/resources/knowledge-bases/indexing-jobs.ts">updateCancel</a>(pathUuid, { ...params }) -> IndexingJobUpdateCancelResponse</code>

# Models

Types:

- <code><a href="./src/resources/models/models.ts">APIAgreement</a></code>
- <code><a href="./src/resources/models/models.ts">APIModel</a></code>
- <code><a href="./src/resources/models/models.ts">APIModelVersion</a></code>
- <code><a href="./src/resources/models/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v2/gen-ai/models">client.models.<a href="./src/resources/models/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

## Providers

### Anthropic

Types:

- <code><a href="./src/resources/models/providers/anthropic.ts">AnthropicCreateResponse</a></code>
- <code><a href="./src/resources/models/providers/anthropic.ts">AnthropicRetrieveResponse</a></code>
- <code><a href="./src/resources/models/providers/anthropic.ts">AnthropicUpdateResponse</a></code>
- <code><a href="./src/resources/models/providers/anthropic.ts">AnthropicListResponse</a></code>
- <code><a href="./src/resources/models/providers/anthropic.ts">AnthropicDeleteResponse</a></code>
- <code><a href="./src/resources/models/providers/anthropic.ts">AnthropicListAgentsResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/anthropic/keys">client.models.providers.anthropic.<a href="./src/resources/models/providers/anthropic.ts">create</a>({ ...params }) -> AnthropicCreateResponse</code>
- <code title="get /v2/gen-ai/anthropic/keys/{api_key_uuid}">client.models.providers.anthropic.<a href="./src/resources/models/providers/anthropic.ts">retrieve</a>(apiKeyUuid) -> AnthropicRetrieveResponse</code>
- <code title="put /v2/gen-ai/anthropic/keys/{api_key_uuid}">client.models.providers.anthropic.<a href="./src/resources/models/providers/anthropic.ts">update</a>(apiKeyUuid, { ...params }) -> AnthropicUpdateResponse</code>
- <code title="get /v2/gen-ai/anthropic/keys">client.models.providers.anthropic.<a href="./src/resources/models/providers/anthropic.ts">list</a>({ ...params }) -> AnthropicListResponse</code>
- <code title="delete /v2/gen-ai/anthropic/keys/{api_key_uuid}">client.models.providers.anthropic.<a href="./src/resources/models/providers/anthropic.ts">delete</a>(apiKeyUuid) -> AnthropicDeleteResponse</code>
- <code title="get /v2/gen-ai/anthropic/keys/{uuid}/agents">client.models.providers.anthropic.<a href="./src/resources/models/providers/anthropic.ts">listAgents</a>(uuid, { ...params }) -> AnthropicListAgentsResponse</code>

### OpenAI

Types:

- <code><a href="./src/resources/models/providers/openai.ts">OpenAICreateResponse</a></code>
- <code><a href="./src/resources/models/providers/openai.ts">OpenAIRetrieveResponse</a></code>
- <code><a href="./src/resources/models/providers/openai.ts">OpenAIUpdateResponse</a></code>
- <code><a href="./src/resources/models/providers/openai.ts">OpenAIListResponse</a></code>
- <code><a href="./src/resources/models/providers/openai.ts">OpenAIDeleteResponse</a></code>
- <code><a href="./src/resources/models/providers/openai.ts">OpenAIRetrieveAgentsResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/openai/keys">client.models.providers.openai.<a href="./src/resources/models/providers/openai.ts">create</a>({ ...params }) -> OpenAICreateResponse</code>
- <code title="get /v2/gen-ai/openai/keys/{api_key_uuid}">client.models.providers.openai.<a href="./src/resources/models/providers/openai.ts">retrieve</a>(apiKeyUuid) -> OpenAIRetrieveResponse</code>
- <code title="put /v2/gen-ai/openai/keys/{api_key_uuid}">client.models.providers.openai.<a href="./src/resources/models/providers/openai.ts">update</a>(apiKeyUuid, { ...params }) -> OpenAIUpdateResponse</code>
- <code title="get /v2/gen-ai/openai/keys">client.models.providers.openai.<a href="./src/resources/models/providers/openai.ts">list</a>({ ...params }) -> OpenAIListResponse</code>
- <code title="delete /v2/gen-ai/openai/keys/{api_key_uuid}">client.models.providers.openai.<a href="./src/resources/models/providers/openai.ts">delete</a>(apiKeyUuid) -> OpenAIDeleteResponse</code>
- <code title="get /v2/gen-ai/openai/keys/{uuid}/agents">client.models.providers.openai.<a href="./src/resources/models/providers/openai.ts">retrieveAgents</a>(uuid, { ...params }) -> OpenAIRetrieveAgentsResponse</code>

# Regions

Types:

- <code><a href="./src/resources/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /v2/regions">client.regions.<a href="./src/resources/regions.ts">list</a>({ ...params }) -> RegionListResponse</code>

# Databases

## SchemaRegistry

### Config

Types:

- <code><a href="./src/resources/databases/schema-registry/config.ts">ConfigRetrieveResponse</a></code>
- <code><a href="./src/resources/databases/schema-registry/config.ts">ConfigUpdateResponse</a></code>
- <code><a href="./src/resources/databases/schema-registry/config.ts">ConfigRetrieveSubjectResponse</a></code>
- <code><a href="./src/resources/databases/schema-registry/config.ts">ConfigUpdateSubjectResponse</a></code>

Methods:

- <code title="get /v2/databases/{database_cluster_uuid}/schema-registry/config">client.databases.schemaRegistry.config.<a href="./src/resources/databases/schema-registry/config.ts">retrieve</a>(databaseClusterUuid) -> ConfigRetrieveResponse</code>
- <code title="put /v2/databases/{database_cluster_uuid}/schema-registry/config">client.databases.schemaRegistry.config.<a href="./src/resources/databases/schema-registry/config.ts">update</a>(databaseClusterUuid, { ...params }) -> ConfigUpdateResponse</code>
- <code title="get /v2/databases/{database_cluster_uuid}/schema-registry/config/{subject_name}">client.databases.schemaRegistry.config.<a href="./src/resources/databases/schema-registry/config.ts">retrieveSubject</a>(subjectName, { ...params }) -> ConfigRetrieveSubjectResponse</code>
- <code title="put /v2/databases/{database_cluster_uuid}/schema-registry/config/{subject_name}">client.databases.schemaRegistry.config.<a href="./src/resources/databases/schema-registry/config.ts">updateSubject</a>(subjectName, { ...params }) -> ConfigUpdateSubjectResponse</code>
