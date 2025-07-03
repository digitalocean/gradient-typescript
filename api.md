# Shared

Types:

- <code><a href="./src/resources/shared.ts">APILinks</a></code>
- <code><a href="./src/resources/shared.ts">APIMeta</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionChunk</a></code>
- <code><a href="./src/resources/shared.ts">ChatCompletionTokenLogprob</a></code>

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
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateStatusResponse</a></code>

Methods:

- <code title="post /v2/gen-ai/agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /v2/gen-ai/agents/{uuid}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(uuid) -> AgentRetrieveResponse</code>
- <code title="put /v2/gen-ai/agents/{uuid}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(pathUuid, { ...params }) -> AgentUpdateResponse</code>
- <code title="get /v2/gen-ai/agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v2/gen-ai/agents/{uuid}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(uuid) -> AgentDeleteResponse</code>
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

Methods:

- <code title="get /v2/gen-ai/evaluation_metrics">client.agents.evaluationMetrics.<a href="./src/resources/agents/evaluation-metrics/evaluation-metrics.ts">list</a>() -> EvaluationMetricListResponse</code>

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
- <code title="get /v2/gen-ai/evaluation_runs/{evaluation_run_uuid}/results">client.agents.evaluationRuns.<a href="./src/resources/agents/evaluation-runs.ts">listResults</a>(evaluationRunUuid) -> EvaluationRunListResultsResponse</code>
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
- <code title="post /v2/gen-ai/evaluation_test_cases/{test_case_uuid}">client.agents.evaluationTestCases.<a href="./src/resources/agents/evaluation-test-cases.ts">update</a>(testCaseUuid, { ...params }) -> EvaluationTestCaseUpdateResponse</code>
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

# Regions

Types:

- <code><a href="./src/resources/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /v2/gen-ai/regions">client.regions.<a href="./src/resources/regions.ts">list</a>({ ...params }) -> RegionListResponse</code>

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

Methods:

- <code title="post /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources">client.knowledgeBases.dataSources.<a href="./src/resources/knowledge-bases/data-sources.ts">create</a>(knowledgeBaseUuid, { ...params }) -> DataSourceCreateResponse</code>
- <code title="get /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources">client.knowledgeBases.dataSources.<a href="./src/resources/knowledge-bases/data-sources.ts">list</a>(knowledgeBaseUuid, { ...params }) -> DataSourceListResponse</code>
- <code title="delete /v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}">client.knowledgeBases.dataSources.<a href="./src/resources/knowledge-bases/data-sources.ts">delete</a>(dataSourceUuid, { ...params }) -> DataSourceDeleteResponse</code>

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
