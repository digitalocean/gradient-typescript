// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VersionsAPI from './doagents/versions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IndexingJobs extends APIResource {
  /**
   * To start an indexing job for a knowledge base, send a POST request to
   * `/v2/gen-ai/indexing_jobs`.
   */
  create(body: IndexingJobCreateParams, options?: RequestOptions): APIPromise<IndexingJobCreateResponse> {
    return this._client.post('/v2/gen-ai/indexing_jobs', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To get status of an indexing Job for a knowledge base, send a GET request to
   * `/v2/gen-ai/indexing_jobs/{uuid}`.
   */
  retrieve(uuid: string, options?: RequestOptions): APIPromise<IndexingJobRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/indexing_jobs/${uuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all indexing jobs for a knowledge base, send a GET request to
   * `/v2/gen-ai/indexing_jobs`.
   */
  list(
    query: IndexingJobListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndexingJobListResponse> {
    return this._client.get('/v2/gen-ai/indexing_jobs', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all datasources for an indexing job, send a GET request to
   * `/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources`.
   */
  retrieveDataSources(
    indexingJobUuid: string,
    options?: RequestOptions,
  ): APIPromise<IndexingJobRetrieveDataSourcesResponse> {
    return this._client.get(path`/v2/gen-ai/indexing_jobs/${indexingJobUuid}/data_sources`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To cancel an indexing job for a knowledge base, send a PUT request to
   * `/v2/gen-ai/indexing_jobs/{uuid}/cancel`.
   */
  updateCancel(
    pathUuid: string,
    body: IndexingJobUpdateCancelParams,
    options?: RequestOptions,
  ): APIPromise<IndexingJobUpdateCancelResponse> {
    return this._client.put(path`/v2/gen-ai/indexing_jobs/${pathUuid}/cancel`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface APIIndexingJob {
  completed_datasources?: number;

  created_at?: string;

  data_source_uuids?: Array<string>;

  finished_at?: string;

  knowledge_base_uuid?: string;

  phase?:
    | 'BATCH_JOB_PHASE_UNKNOWN'
    | 'BATCH_JOB_PHASE_PENDING'
    | 'BATCH_JOB_PHASE_RUNNING'
    | 'BATCH_JOB_PHASE_SUCCEEDED'
    | 'BATCH_JOB_PHASE_FAILED'
    | 'BATCH_JOB_PHASE_ERROR'
    | 'BATCH_JOB_PHASE_CANCELLED';

  started_at?: string;

  tokens?: number;

  total_datasources?: number;

  updated_at?: string;

  uuid?: string;
}

export interface IndexingJobCreateResponse {
  job?: APIIndexingJob;
}

export interface IndexingJobRetrieveResponse {
  job?: APIIndexingJob;
}

export interface IndexingJobListResponse {
  jobs?: Array<APIIndexingJob>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
}

export interface IndexingJobRetrieveDataSourcesResponse {
  indexed_data_sources?: Array<IndexingJobRetrieveDataSourcesResponse.IndexedDataSource>;
}

export namespace IndexingJobRetrieveDataSourcesResponse {
  export interface IndexedDataSource {
    completed_at?: string;

    data_source_uuid?: string;

    error_details?: string;

    error_msg?: string;

    failed_item_count?: string;

    indexed_file_count?: string;

    indexed_item_count?: string;

    removed_item_count?: string;

    skipped_item_count?: string;

    started_at?: string;

    status?:
      | 'DATA_SOURCE_STATUS_UNKNOWN'
      | 'DATA_SOURCE_STATUS_IN_PROGRESS'
      | 'DATA_SOURCE_STATUS_UPDATED'
      | 'DATA_SOURCE_STATUS_PARTIALLY_UPDATED'
      | 'DATA_SOURCE_STATUS_NOT_UPDATED'
      | 'DATA_SOURCE_STATUS_FAILED';

    total_bytes?: string;

    total_bytes_indexed?: string;

    total_file_count?: string;
  }
}

export interface IndexingJobUpdateCancelResponse {
  job?: APIIndexingJob;
}

export interface IndexingJobCreateParams {
  data_source_uuids?: Array<string>;

  knowledge_base_uuid?: string;
}

export interface IndexingJobListParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;
}

export interface IndexingJobUpdateCancelParams {
  /**
   * A unique identifier for an indexing job.
   */
  body_uuid?: string;
}

export declare namespace IndexingJobs {
  export {
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
}
