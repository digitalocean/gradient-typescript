// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_agents from './agents/create-agents';
import retrieve_agents from './agents/retrieve-agents';
import update_agents from './agents/update-agents';
import list_agents from './agents/list-agents';
import delete_agents from './agents/delete-agents';
import update_status_agents from './agents/update-status-agents';
import create_agents_api_keys from './agents/api-keys/create-agents-api-keys';
import update_agents_api_keys from './agents/api-keys/update-agents-api-keys';
import list_agents_api_keys from './agents/api-keys/list-agents-api-keys';
import delete_agents_api_keys from './agents/api-keys/delete-agents-api-keys';
import regenerate_agents_api_keys from './agents/api-keys/regenerate-agents-api-keys';
import create_chat_agents_completions from './agents/chat/completions/create-chat-agents-completions';
import list_agents_evaluation_metrics from './agents/evaluation-metrics/list-agents-evaluation-metrics';
import list_regions_agents_evaluation_metrics from './agents/evaluation-metrics/list-regions-agents-evaluation-metrics';
import create_evaluation_metrics_agents_workspaces from './agents/evaluation-metrics/workspaces/create-evaluation-metrics-agents-workspaces';
import retrieve_evaluation_metrics_agents_workspaces from './agents/evaluation-metrics/workspaces/retrieve-evaluation-metrics-agents-workspaces';
import update_evaluation_metrics_agents_workspaces from './agents/evaluation-metrics/workspaces/update-evaluation-metrics-agents-workspaces';
import list_evaluation_metrics_agents_workspaces from './agents/evaluation-metrics/workspaces/list-evaluation-metrics-agents-workspaces';
import delete_evaluation_metrics_agents_workspaces from './agents/evaluation-metrics/workspaces/delete-evaluation-metrics-agents-workspaces';
import list_evaluation_test_cases_evaluation_metrics_agents_workspaces from './agents/evaluation-metrics/workspaces/list-evaluation-test-cases-evaluation-metrics-agents-workspaces';
import list_workspaces_evaluation_metrics_agents_agents from './agents/evaluation-metrics/workspaces/agents/list-workspaces-evaluation-metrics-agents-agents';
import move_workspaces_evaluation_metrics_agents_agents from './agents/evaluation-metrics/workspaces/agents/move-workspaces-evaluation-metrics-agents-agents';
import list_evaluation_metrics_agents_models from './agents/evaluation-metrics/models/list-evaluation-metrics-agents-models';
import create_agents_evaluation_runs from './agents/evaluation-runs/create-agents-evaluation-runs';
import retrieve_agents_evaluation_runs from './agents/evaluation-runs/retrieve-agents-evaluation-runs';
import list_results_agents_evaluation_runs from './agents/evaluation-runs/list-results-agents-evaluation-runs';
import retrieve_results_agents_evaluation_runs from './agents/evaluation-runs/retrieve-results-agents-evaluation-runs';
import create_agents_evaluation_test_cases from './agents/evaluation-test-cases/create-agents-evaluation-test-cases';
import retrieve_agents_evaluation_test_cases from './agents/evaluation-test-cases/retrieve-agents-evaluation-test-cases';
import list_agents_evaluation_test_cases from './agents/evaluation-test-cases/list-agents-evaluation-test-cases';
import list_evaluation_runs_agents_evaluation_test_cases from './agents/evaluation-test-cases/list-evaluation-runs-agents-evaluation-test-cases';
import create_agents_evaluation_datasets from './agents/evaluation-datasets/create-agents-evaluation-datasets';
import create_file_upload_presigned_urls_agents_evaluation_datasets from './agents/evaluation-datasets/create-file-upload-presigned-urls-agents-evaluation-datasets';
import create_agents_functions from './agents/functions/create-agents-functions';
import update_agents_functions from './agents/functions/update-agents-functions';
import delete_agents_functions from './agents/functions/delete-agents-functions';
import update_agents_versions from './agents/versions/update-agents-versions';
import list_agents_versions from './agents/versions/list-agents-versions';
import attach_agents_knowledge_bases from './agents/knowledge-bases/attach-agents-knowledge-bases';
import attach_single_agents_knowledge_bases from './agents/knowledge-bases/attach-single-agents-knowledge-bases';
import detach_agents_knowledge_bases from './agents/knowledge-bases/detach-agents-knowledge-bases';
import update_agents_routes from './agents/routes/update-agents-routes';
import delete_agents_routes from './agents/routes/delete-agents-routes';
import add_agents_routes from './agents/routes/add-agents-routes';
import view_agents_routes from './agents/routes/view-agents-routes';
import create_chat_completions from './chat/completions/create-chat-completions';
import create_knowledge_bases from './knowledge-bases/create-knowledge-bases';
import retrieve_knowledge_bases from './knowledge-bases/retrieve-knowledge-bases';
import update_knowledge_bases from './knowledge-bases/update-knowledge-bases';
import list_knowledge_bases from './knowledge-bases/list-knowledge-bases';
import delete_knowledge_bases from './knowledge-bases/delete-knowledge-bases';
import create_knowledge_bases_data_sources from './knowledge-bases/data-sources/create-knowledge-bases-data-sources';
import list_knowledge_bases_data_sources from './knowledge-bases/data-sources/list-knowledge-bases-data-sources';
import delete_knowledge_bases_data_sources from './knowledge-bases/data-sources/delete-knowledge-bases-data-sources';
import create_knowledge_bases_indexing_jobs from './knowledge-bases/indexing-jobs/create-knowledge-bases-indexing-jobs';
import retrieve_knowledge_bases_indexing_jobs from './knowledge-bases/indexing-jobs/retrieve-knowledge-bases-indexing-jobs';
import list_knowledge_bases_indexing_jobs from './knowledge-bases/indexing-jobs/list-knowledge-bases-indexing-jobs';
import retrieve_data_sources_knowledge_bases_indexing_jobs from './knowledge-bases/indexing-jobs/retrieve-data-sources-knowledge-bases-indexing-jobs';
import update_cancel_knowledge_bases_indexing_jobs from './knowledge-bases/indexing-jobs/update-cancel-knowledge-bases-indexing-jobs';
import create_inference_api_keys from './inference/api-keys/create-inference-api-keys';
import update_inference_api_keys from './inference/api-keys/update-inference-api-keys';
import list_inference_api_keys from './inference/api-keys/list-inference-api-keys';
import delete_inference_api_keys from './inference/api-keys/delete-inference-api-keys';
import update_regenerate_inference_api_keys from './inference/api-keys/update-regenerate-inference-api-keys';
import retrieve_models from './models/retrieve-models';
import list_models from './models/list-models';
import create_providers_models_anthropic from './models/providers/anthropic/create-providers-models-anthropic';
import retrieve_providers_models_anthropic from './models/providers/anthropic/retrieve-providers-models-anthropic';
import update_providers_models_anthropic from './models/providers/anthropic/update-providers-models-anthropic';
import list_providers_models_anthropic from './models/providers/anthropic/list-providers-models-anthropic';
import delete_providers_models_anthropic from './models/providers/anthropic/delete-providers-models-anthropic';
import list_agents_providers_models_anthropic from './models/providers/anthropic/list-agents-providers-models-anthropic';
import create_providers_models_openai from './models/providers/openai/create-providers-models-openai';
import retrieve_providers_models_openai from './models/providers/openai/retrieve-providers-models-openai';
import update_providers_models_openai from './models/providers/openai/update-providers-models-openai';
import list_providers_models_openai from './models/providers/openai/list-providers-models-openai';
import delete_providers_models_openai from './models/providers/openai/delete-providers-models-openai';
import retrieve_agents_providers_models_openai from './models/providers/openai/retrieve-agents-providers-models-openai';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_agents);
addEndpoint(retrieve_agents);
addEndpoint(update_agents);
addEndpoint(list_agents);
addEndpoint(delete_agents);
addEndpoint(update_status_agents);
addEndpoint(create_agents_api_keys);
addEndpoint(update_agents_api_keys);
addEndpoint(list_agents_api_keys);
addEndpoint(delete_agents_api_keys);
addEndpoint(regenerate_agents_api_keys);
addEndpoint(create_chat_agents_completions);
addEndpoint(list_agents_evaluation_metrics);
addEndpoint(list_regions_agents_evaluation_metrics);
addEndpoint(create_evaluation_metrics_agents_workspaces);
addEndpoint(retrieve_evaluation_metrics_agents_workspaces);
addEndpoint(update_evaluation_metrics_agents_workspaces);
addEndpoint(list_evaluation_metrics_agents_workspaces);
addEndpoint(delete_evaluation_metrics_agents_workspaces);
addEndpoint(list_evaluation_test_cases_evaluation_metrics_agents_workspaces);
addEndpoint(list_workspaces_evaluation_metrics_agents_agents);
addEndpoint(move_workspaces_evaluation_metrics_agents_agents);
addEndpoint(list_evaluation_metrics_agents_models);
addEndpoint(create_agents_evaluation_runs);
addEndpoint(retrieve_agents_evaluation_runs);
addEndpoint(list_results_agents_evaluation_runs);
addEndpoint(retrieve_results_agents_evaluation_runs);
addEndpoint(create_agents_evaluation_test_cases);
addEndpoint(retrieve_agents_evaluation_test_cases);
addEndpoint(list_agents_evaluation_test_cases);
addEndpoint(list_evaluation_runs_agents_evaluation_test_cases);
addEndpoint(create_agents_evaluation_datasets);
addEndpoint(create_file_upload_presigned_urls_agents_evaluation_datasets);
addEndpoint(create_agents_functions);
addEndpoint(update_agents_functions);
addEndpoint(delete_agents_functions);
addEndpoint(update_agents_versions);
addEndpoint(list_agents_versions);
addEndpoint(attach_agents_knowledge_bases);
addEndpoint(attach_single_agents_knowledge_bases);
addEndpoint(detach_agents_knowledge_bases);
addEndpoint(update_agents_routes);
addEndpoint(delete_agents_routes);
addEndpoint(add_agents_routes);
addEndpoint(view_agents_routes);
addEndpoint(create_chat_completions);
addEndpoint(create_knowledge_bases);
addEndpoint(retrieve_knowledge_bases);
addEndpoint(update_knowledge_bases);
addEndpoint(list_knowledge_bases);
addEndpoint(delete_knowledge_bases);
addEndpoint(create_knowledge_bases_data_sources);
addEndpoint(list_knowledge_bases_data_sources);
addEndpoint(delete_knowledge_bases_data_sources);
addEndpoint(create_knowledge_bases_indexing_jobs);
addEndpoint(retrieve_knowledge_bases_indexing_jobs);
addEndpoint(list_knowledge_bases_indexing_jobs);
addEndpoint(retrieve_data_sources_knowledge_bases_indexing_jobs);
addEndpoint(update_cancel_knowledge_bases_indexing_jobs);
addEndpoint(create_inference_api_keys);
addEndpoint(update_inference_api_keys);
addEndpoint(list_inference_api_keys);
addEndpoint(delete_inference_api_keys);
addEndpoint(update_regenerate_inference_api_keys);
addEndpoint(retrieve_models);
addEndpoint(list_models);
addEndpoint(create_providers_models_anthropic);
addEndpoint(retrieve_providers_models_anthropic);
addEndpoint(update_providers_models_anthropic);
addEndpoint(list_providers_models_anthropic);
addEndpoint(delete_providers_models_anthropic);
addEndpoint(list_agents_providers_models_anthropic);
addEndpoint(create_providers_models_openai);
addEndpoint(retrieve_providers_models_openai);
addEndpoint(update_providers_models_openai);
addEndpoint(list_providers_models_openai);
addEndpoint(delete_providers_models_openai);
addEndpoint(retrieve_agents_providers_models_openai);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
