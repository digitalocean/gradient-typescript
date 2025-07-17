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
import update_agents_evaluation_test_cases from './agents/evaluation-test-cases/update-agents-evaluation-test-cases';
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
import list_regions from './regions/list-regions';
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
import create_gpu_droplets from './gpu-droplets/create-gpu-droplets';
import retrieve_gpu_droplets from './gpu-droplets/retrieve-gpu-droplets';
import list_gpu_droplets from './gpu-droplets/list-gpu-droplets';
import delete_gpu_droplets from './gpu-droplets/delete-gpu-droplets';
import delete_by_tag_gpu_droplets from './gpu-droplets/delete-by-tag-gpu-droplets';
import list_firewalls_gpu_droplets from './gpu-droplets/list-firewalls-gpu-droplets';
import list_kernels_gpu_droplets from './gpu-droplets/list-kernels-gpu-droplets';
import list_neighbors_gpu_droplets from './gpu-droplets/list-neighbors-gpu-droplets';
import list_snapshots_gpu_droplets from './gpu-droplets/list-snapshots-gpu-droplets';
import list_gpu_droplets_backups from './gpu-droplets/backups/list-gpu-droplets-backups';
import list_policies_gpu_droplets_backups from './gpu-droplets/backups/list-policies-gpu-droplets-backups';
import list_supported_policies_gpu_droplets_backups from './gpu-droplets/backups/list-supported-policies-gpu-droplets-backups';
import retrieve_policy_gpu_droplets_backups from './gpu-droplets/backups/retrieve-policy-gpu-droplets-backups';
import retrieve_gpu_droplets_actions from './gpu-droplets/actions/retrieve-gpu-droplets-actions';
import list_gpu_droplets_actions from './gpu-droplets/actions/list-gpu-droplets-actions';
import bulk_initiate_gpu_droplets_actions from './gpu-droplets/actions/bulk-initiate-gpu-droplets-actions';
import initiate_gpu_droplets_actions from './gpu-droplets/actions/initiate-gpu-droplets-actions';
import list_gpu_droplets_destroy_with_associated_resources from './gpu-droplets/destroy-with-associated-resources/list-gpu-droplets-destroy-with-associated-resources';
import check_status_gpu_droplets_destroy_with_associated_resources from './gpu-droplets/destroy-with-associated-resources/check-status-gpu-droplets-destroy-with-associated-resources';
import delete_dangerous_gpu_droplets_destroy_with_associated_resources from './gpu-droplets/destroy-with-associated-resources/delete-dangerous-gpu-droplets-destroy-with-associated-resources';
import delete_selective_gpu_droplets_destroy_with_associated_resources from './gpu-droplets/destroy-with-associated-resources/delete-selective-gpu-droplets-destroy-with-associated-resources';
import retry_gpu_droplets_destroy_with_associated_resources from './gpu-droplets/destroy-with-associated-resources/retry-gpu-droplets-destroy-with-associated-resources';
import create_gpu_droplets_autoscale from './gpu-droplets/autoscale/create-gpu-droplets-autoscale';
import retrieve_gpu_droplets_autoscale from './gpu-droplets/autoscale/retrieve-gpu-droplets-autoscale';
import update_gpu_droplets_autoscale from './gpu-droplets/autoscale/update-gpu-droplets-autoscale';
import list_gpu_droplets_autoscale from './gpu-droplets/autoscale/list-gpu-droplets-autoscale';
import delete_gpu_droplets_autoscale from './gpu-droplets/autoscale/delete-gpu-droplets-autoscale';
import delete_dangerous_gpu_droplets_autoscale from './gpu-droplets/autoscale/delete-dangerous-gpu-droplets-autoscale';
import list_history_gpu_droplets_autoscale from './gpu-droplets/autoscale/list-history-gpu-droplets-autoscale';
import list_members_gpu_droplets_autoscale from './gpu-droplets/autoscale/list-members-gpu-droplets-autoscale';
import create_gpu_droplets_firewalls from './gpu-droplets/firewalls/create-gpu-droplets-firewalls';
import retrieve_gpu_droplets_firewalls from './gpu-droplets/firewalls/retrieve-gpu-droplets-firewalls';
import update_gpu_droplets_firewalls from './gpu-droplets/firewalls/update-gpu-droplets-firewalls';
import list_gpu_droplets_firewalls from './gpu-droplets/firewalls/list-gpu-droplets-firewalls';
import delete_gpu_droplets_firewalls from './gpu-droplets/firewalls/delete-gpu-droplets-firewalls';
import add_firewalls_gpu_droplets_droplets from './gpu-droplets/firewalls/droplets/add-firewalls-gpu-droplets-droplets';
import remove_firewalls_gpu_droplets_droplets from './gpu-droplets/firewalls/droplets/remove-firewalls-gpu-droplets-droplets';
import add_firewalls_gpu_droplets_tags from './gpu-droplets/firewalls/tags/add-firewalls-gpu-droplets-tags';
import remove_firewalls_gpu_droplets_tags from './gpu-droplets/firewalls/tags/remove-firewalls-gpu-droplets-tags';
import add_firewalls_gpu_droplets_rules from './gpu-droplets/firewalls/rules/add-firewalls-gpu-droplets-rules';
import remove_firewalls_gpu_droplets_rules from './gpu-droplets/firewalls/rules/remove-firewalls-gpu-droplets-rules';
import create_gpu_droplets_floating_ips from './gpu-droplets/floating-ips/create-gpu-droplets-floating-ips';
import retrieve_gpu_droplets_floating_ips from './gpu-droplets/floating-ips/retrieve-gpu-droplets-floating-ips';
import list_gpu_droplets_floating_ips from './gpu-droplets/floating-ips/list-gpu-droplets-floating-ips';
import delete_gpu_droplets_floating_ips from './gpu-droplets/floating-ips/delete-gpu-droplets-floating-ips';
import create_floating_ips_gpu_droplets_actions from './gpu-droplets/floating-ips/actions/create-floating-ips-gpu-droplets-actions';
import retrieve_floating_ips_gpu_droplets_actions from './gpu-droplets/floating-ips/actions/retrieve-floating-ips-gpu-droplets-actions';
import list_floating_ips_gpu_droplets_actions from './gpu-droplets/floating-ips/actions/list-floating-ips-gpu-droplets-actions';
import create_gpu_droplets_images from './gpu-droplets/images/create-gpu-droplets-images';
import retrieve_gpu_droplets_images from './gpu-droplets/images/retrieve-gpu-droplets-images';
import update_gpu_droplets_images from './gpu-droplets/images/update-gpu-droplets-images';
import list_gpu_droplets_images from './gpu-droplets/images/list-gpu-droplets-images';
import delete_gpu_droplets_images from './gpu-droplets/images/delete-gpu-droplets-images';
import create_images_gpu_droplets_actions from './gpu-droplets/images/actions/create-images-gpu-droplets-actions';
import retrieve_images_gpu_droplets_actions from './gpu-droplets/images/actions/retrieve-images-gpu-droplets-actions';
import list_images_gpu_droplets_actions from './gpu-droplets/images/actions/list-images-gpu-droplets-actions';
import create_gpu_droplets_load_balancers from './gpu-droplets/load-balancers/create-gpu-droplets-load-balancers';
import retrieve_gpu_droplets_load_balancers from './gpu-droplets/load-balancers/retrieve-gpu-droplets-load-balancers';
import update_gpu_droplets_load_balancers from './gpu-droplets/load-balancers/update-gpu-droplets-load-balancers';
import list_gpu_droplets_load_balancers from './gpu-droplets/load-balancers/list-gpu-droplets-load-balancers';
import delete_gpu_droplets_load_balancers from './gpu-droplets/load-balancers/delete-gpu-droplets-load-balancers';
import delete_cache_gpu_droplets_load_balancers from './gpu-droplets/load-balancers/delete-cache-gpu-droplets-load-balancers';
import add_load_balancers_gpu_droplets_droplets from './gpu-droplets/load-balancers/droplets/add-load-balancers-gpu-droplets-droplets';
import remove_load_balancers_gpu_droplets_droplets from './gpu-droplets/load-balancers/droplets/remove-load-balancers-gpu-droplets-droplets';
import add_load_balancers_gpu_droplets_forwarding_rules from './gpu-droplets/load-balancers/forwarding-rules/add-load-balancers-gpu-droplets-forwarding-rules';
import remove_load_balancers_gpu_droplets_forwarding_rules from './gpu-droplets/load-balancers/forwarding-rules/remove-load-balancers-gpu-droplets-forwarding-rules';
import list_gpu_droplets_sizes from './gpu-droplets/sizes/list-gpu-droplets-sizes';
import retrieve_gpu_droplets_snapshots from './gpu-droplets/snapshots/retrieve-gpu-droplets-snapshots';
import list_gpu_droplets_snapshots from './gpu-droplets/snapshots/list-gpu-droplets-snapshots';
import delete_gpu_droplets_snapshots from './gpu-droplets/snapshots/delete-gpu-droplets-snapshots';
import create_gpu_droplets_volumes from './gpu-droplets/volumes/create-gpu-droplets-volumes';
import retrieve_gpu_droplets_volumes from './gpu-droplets/volumes/retrieve-gpu-droplets-volumes';
import list_gpu_droplets_volumes from './gpu-droplets/volumes/list-gpu-droplets-volumes';
import delete_gpu_droplets_volumes from './gpu-droplets/volumes/delete-gpu-droplets-volumes';
import delete_by_name_gpu_droplets_volumes from './gpu-droplets/volumes/delete-by-name-gpu-droplets-volumes';
import retrieve_volumes_gpu_droplets_actions from './gpu-droplets/volumes/actions/retrieve-volumes-gpu-droplets-actions';
import list_volumes_gpu_droplets_actions from './gpu-droplets/volumes/actions/list-volumes-gpu-droplets-actions';
import initiate_by_id_volumes_gpu_droplets_actions from './gpu-droplets/volumes/actions/initiate-by-id-volumes-gpu-droplets-actions';
import initiate_by_name_volumes_gpu_droplets_actions from './gpu-droplets/volumes/actions/initiate-by-name-volumes-gpu-droplets-actions';
import create_volumes_gpu_droplets_snapshots from './gpu-droplets/volumes/snapshots/create-volumes-gpu-droplets-snapshots';
import retrieve_volumes_gpu_droplets_snapshots from './gpu-droplets/volumes/snapshots/retrieve-volumes-gpu-droplets-snapshots';
import list_volumes_gpu_droplets_snapshots from './gpu-droplets/volumes/snapshots/list-volumes-gpu-droplets-snapshots';
import delete_volumes_gpu_droplets_snapshots from './gpu-droplets/volumes/snapshots/delete-volumes-gpu-droplets-snapshots';
import create_account_gpu_droplets_keys from './gpu-droplets/account/keys/create-account-gpu-droplets-keys';
import retrieve_account_gpu_droplets_keys from './gpu-droplets/account/keys/retrieve-account-gpu-droplets-keys';
import update_account_gpu_droplets_keys from './gpu-droplets/account/keys/update-account-gpu-droplets-keys';
import list_account_gpu_droplets_keys from './gpu-droplets/account/keys/list-account-gpu-droplets-keys';
import delete_account_gpu_droplets_keys from './gpu-droplets/account/keys/delete-account-gpu-droplets-keys';

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
addEndpoint(update_agents_evaluation_test_cases);
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
addEndpoint(list_regions);
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
addEndpoint(create_gpu_droplets);
addEndpoint(retrieve_gpu_droplets);
addEndpoint(list_gpu_droplets);
addEndpoint(delete_gpu_droplets);
addEndpoint(delete_by_tag_gpu_droplets);
addEndpoint(list_firewalls_gpu_droplets);
addEndpoint(list_kernels_gpu_droplets);
addEndpoint(list_neighbors_gpu_droplets);
addEndpoint(list_snapshots_gpu_droplets);
addEndpoint(list_gpu_droplets_backups);
addEndpoint(list_policies_gpu_droplets_backups);
addEndpoint(list_supported_policies_gpu_droplets_backups);
addEndpoint(retrieve_policy_gpu_droplets_backups);
addEndpoint(retrieve_gpu_droplets_actions);
addEndpoint(list_gpu_droplets_actions);
addEndpoint(bulk_initiate_gpu_droplets_actions);
addEndpoint(initiate_gpu_droplets_actions);
addEndpoint(list_gpu_droplets_destroy_with_associated_resources);
addEndpoint(check_status_gpu_droplets_destroy_with_associated_resources);
addEndpoint(delete_dangerous_gpu_droplets_destroy_with_associated_resources);
addEndpoint(delete_selective_gpu_droplets_destroy_with_associated_resources);
addEndpoint(retry_gpu_droplets_destroy_with_associated_resources);
addEndpoint(create_gpu_droplets_autoscale);
addEndpoint(retrieve_gpu_droplets_autoscale);
addEndpoint(update_gpu_droplets_autoscale);
addEndpoint(list_gpu_droplets_autoscale);
addEndpoint(delete_gpu_droplets_autoscale);
addEndpoint(delete_dangerous_gpu_droplets_autoscale);
addEndpoint(list_history_gpu_droplets_autoscale);
addEndpoint(list_members_gpu_droplets_autoscale);
addEndpoint(create_gpu_droplets_firewalls);
addEndpoint(retrieve_gpu_droplets_firewalls);
addEndpoint(update_gpu_droplets_firewalls);
addEndpoint(list_gpu_droplets_firewalls);
addEndpoint(delete_gpu_droplets_firewalls);
addEndpoint(add_firewalls_gpu_droplets_droplets);
addEndpoint(remove_firewalls_gpu_droplets_droplets);
addEndpoint(add_firewalls_gpu_droplets_tags);
addEndpoint(remove_firewalls_gpu_droplets_tags);
addEndpoint(add_firewalls_gpu_droplets_rules);
addEndpoint(remove_firewalls_gpu_droplets_rules);
addEndpoint(create_gpu_droplets_floating_ips);
addEndpoint(retrieve_gpu_droplets_floating_ips);
addEndpoint(list_gpu_droplets_floating_ips);
addEndpoint(delete_gpu_droplets_floating_ips);
addEndpoint(create_floating_ips_gpu_droplets_actions);
addEndpoint(retrieve_floating_ips_gpu_droplets_actions);
addEndpoint(list_floating_ips_gpu_droplets_actions);
addEndpoint(create_gpu_droplets_images);
addEndpoint(retrieve_gpu_droplets_images);
addEndpoint(update_gpu_droplets_images);
addEndpoint(list_gpu_droplets_images);
addEndpoint(delete_gpu_droplets_images);
addEndpoint(create_images_gpu_droplets_actions);
addEndpoint(retrieve_images_gpu_droplets_actions);
addEndpoint(list_images_gpu_droplets_actions);
addEndpoint(create_gpu_droplets_load_balancers);
addEndpoint(retrieve_gpu_droplets_load_balancers);
addEndpoint(update_gpu_droplets_load_balancers);
addEndpoint(list_gpu_droplets_load_balancers);
addEndpoint(delete_gpu_droplets_load_balancers);
addEndpoint(delete_cache_gpu_droplets_load_balancers);
addEndpoint(add_load_balancers_gpu_droplets_droplets);
addEndpoint(remove_load_balancers_gpu_droplets_droplets);
addEndpoint(add_load_balancers_gpu_droplets_forwarding_rules);
addEndpoint(remove_load_balancers_gpu_droplets_forwarding_rules);
addEndpoint(list_gpu_droplets_sizes);
addEndpoint(retrieve_gpu_droplets_snapshots);
addEndpoint(list_gpu_droplets_snapshots);
addEndpoint(delete_gpu_droplets_snapshots);
addEndpoint(create_gpu_droplets_volumes);
addEndpoint(retrieve_gpu_droplets_volumes);
addEndpoint(list_gpu_droplets_volumes);
addEndpoint(delete_gpu_droplets_volumes);
addEndpoint(delete_by_name_gpu_droplets_volumes);
addEndpoint(retrieve_volumes_gpu_droplets_actions);
addEndpoint(list_volumes_gpu_droplets_actions);
addEndpoint(initiate_by_id_volumes_gpu_droplets_actions);
addEndpoint(initiate_by_name_volumes_gpu_droplets_actions);
addEndpoint(create_volumes_gpu_droplets_snapshots);
addEndpoint(retrieve_volumes_gpu_droplets_snapshots);
addEndpoint(list_volumes_gpu_droplets_snapshots);
addEndpoint(delete_volumes_gpu_droplets_snapshots);
addEndpoint(create_account_gpu_droplets_keys);
addEndpoint(retrieve_account_gpu_droplets_keys);
addEndpoint(update_account_gpu_droplets_keys);
addEndpoint(list_account_gpu_droplets_keys);
addEndpoint(delete_account_gpu_droplets_keys);

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
