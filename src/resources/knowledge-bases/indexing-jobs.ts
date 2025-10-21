// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class IndexingJobs extends APIResource {
  /**
   * To start an indexing job for a knowledge base, send a POST request to
   * `/v2/gen-ai/indexing_jobs`.
   *
   * @example
   * ```ts
   * const indexingJob =
   *   await client.knowledgeBases.indexingJobs.create();
   * ```
   */
  create(
    body: IndexingJobCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndexingJobCreateResponse> {
    return this._client.post('/v2/gen-ai/indexing_jobs', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To get status of an indexing Job for a knowledge base, send a GET request to
   * `/v2/gen-ai/indexing_jobs/{uuid}`.
   *
   * @example
   * ```ts
   * const indexingJob =
   *   await client.knowledgeBases.indexingJobs.retrieve(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const indexingJobs =
   *   await client.knowledgeBases.indexingJobs.list();
   * ```
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
   *
   * @example
   * ```ts
   * const response =
   *   await client.knowledgeBases.indexingJobs.retrieveDataSources(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const response =
   *   await client.knowledgeBases.indexingJobs.updateCancel(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  updateCancel(
    pathUuid: string,
    body: IndexingJobUpdateCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndexingJobUpdateCancelResponse> {
    return this._client.put(path`/v2/gen-ai/indexing_jobs/${pathUuid}/cancel`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * Poll the indexing job until it reaches a terminal state.
   *
   * By default this polls every 2000ms and times out after 10 minutes.
   * It will resolve with the final retrieve response when the job succeeds,
   * and reject if the job fails, is cancelled, or an error phase is reached.
   *
   * @example
   * ```ts
   * await client.knowledgeBases.indexingJobs.waitForCompletion('uuid');
   * ```
   */
  async waitForCompletion(
    uuid: string,
    opts: { interval?: number; timeout?: number } | undefined = {},
  ): Promise<IndexingJobRetrieveResponse> {
    const interval = opts?.interval ?? 2000;
    const timeout = opts?.timeout ?? 1000 * 60 * 10; // 10 minutes

    const start = Date.now();

    const check = async (): Promise<IndexingJobRetrieveResponse> => {
      const res = await this.retrieve(uuid);
      const phase = res.job?.phase;

      if (phase === 'BATCH_JOB_PHASE_SUCCEEDED') {
        return res;
      }

      if (
        phase === 'BATCH_JOB_PHASE_FAILED' ||
        phase === 'BATCH_JOB_PHASE_ERROR' ||
        phase === 'BATCH_JOB_PHASE_CANCELLED'
      ) {
        throw new Error(`indexing job entered terminal failure phase: ${phase}`);
      }

      if (Date.now() - start > timeout) {
        throw new Error('timeout waiting for indexing job to complete');
      }

      await new Promise((r) => setTimeout(r, interval));
      return check();
    };

    return check();
  }
}

export interface APIIndexedDataSource {
  /**
   * Timestamp when data source completed indexing
   */
  completed_at?: string;

  /**
   * Uuid of the indexed data source
   */
  data_source_uuid?: string;

  /**
   * A detailed error description
   */
  error_details?: string;

  /**
   * A string code provinding a hint which part of the system experienced an error
   */
  error_msg?: string;

  /**
   * Total count of files that have failed
   */
  failed_item_count?: string;

  /**
   * Total count of files that have been indexed
   */
  indexed_file_count?: string;

  /**
   * Total count of files that have been indexed
   */
  indexed_item_count?: string;

  /**
   * Total count of files that have been removed
   */
  removed_item_count?: string;

  /**
   * Total count of files that have been skipped
   */
  skipped_item_count?: string;

  /**
   * Timestamp when data source started indexing
   */
  started_at?: string;

  status?:
    | 'DATA_SOURCE_STATUS_UNKNOWN'
    | 'DATA_SOURCE_STATUS_IN_PROGRESS'
    | 'DATA_SOURCE_STATUS_UPDATED'
    | 'DATA_SOURCE_STATUS_PARTIALLY_UPDATED'
    | 'DATA_SOURCE_STATUS_NOT_UPDATED'
    | 'DATA_SOURCE_STATUS_FAILED';

  /**
   * Total size of files in data source in bytes
   */
  total_bytes?: string;

  /**
   * Total size of files in data source in bytes that have been indexed
   */
  total_bytes_indexed?: string;

  /**
   * Total file count in the data source
   */
  total_file_count?: string;
}

/**
 * IndexingJob description
 */
export interface APIIndexingJob {
  /**
   * Number of datasources indexed completed
   */
  completed_datasources?: number;

  /**
   * Creation date / time
   */
  created_at?: string;

  data_source_uuids?: Array<string>;

  finished_at?: string;

  /**
   * Knowledge base id
   */
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

  status?:
    | 'INDEX_JOB_STATUS_UNKNOWN'
    | 'INDEX_JOB_STATUS_PARTIAL'
    | 'INDEX_JOB_STATUS_IN_PROGRESS'
    | 'INDEX_JOB_STATUS_COMPLETED'
    | 'INDEX_JOB_STATUS_FAILED'
    | 'INDEX_JOB_STATUS_NO_CHANGES'
    | 'INDEX_JOB_STATUS_PENDING';

  /**
   * Number of tokens
   */
  tokens?: number;

  /**
   * Number of datasources being indexed
   */
  total_datasources?: number;

  /**
   * Total Items Failed
   */
  total_items_failed?: string;

  /**
   * Total Items Indexed
   */
  total_items_indexed?: string;

  /**
   * Total Items Skipped
   */
  total_items_skipped?: string;

  /**
   * Last modified
   */
  updated_at?: string;

  /**
   * Unique id
   */
  uuid?: string;
}

/**
 * StartKnowledgeBaseIndexingJobOutput description
 */
export interface IndexingJobCreateResponse {
  /**
   * IndexingJob description
   */
  job?: APIIndexingJob;
}

/**
 * GetKnowledgeBaseIndexingJobOutput description
 */
export interface IndexingJobRetrieveResponse {
  /**
   * IndexingJob description
   */
  job?: APIIndexingJob;
}

/**
 * Indexing jobs
 */
export interface IndexingJobListResponse {
  /**
   * The indexing jobs
   */
  jobs?: Array<APIIndexingJob>;

  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;
}

export interface IndexingJobRetrieveDataSourcesResponse {
  indexed_data_sources?: Array<APIIndexedDataSource>;
}

/**
 * CancelKnowledgeBaseIndexingJobOutput description
 */
export interface IndexingJobUpdateCancelResponse {
  /**
   * IndexingJob description
   */
  job?: APIIndexingJob;
}

export interface IndexingJobCreateParams {
  /**
   * List of data source ids to index, if none are provided, all data sources will be
   * indexed
   */
  data_source_uuids?: Array<string>;

  /**
   * Knowledge base id
   */
  knowledge_base_uuid?: string;
}

export interface IndexingJobListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
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
    type APIIndexedDataSource as APIIndexedDataSource,
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
