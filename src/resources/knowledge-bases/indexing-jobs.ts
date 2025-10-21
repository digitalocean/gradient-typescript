// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';
import { sleep } from '../../internal/utils/sleep';

/**
 * Error thrown when an indexing job polling operation is aborted
 */
export class IndexingJobAbortedError extends Error {
  constructor() {
    super('Indexing job polling was aborted');
    this.name = 'IndexingJobAbortedError';
  }
}

/**
 * Error thrown when an indexing job is not found
 */
export class IndexingJobNotFoundError extends Error {
  constructor() {
    super('Indexing job not found');
    this.name = 'IndexingJobNotFoundError';
  }
}

/**
 * Error thrown when an indexing job fails
 */
export class IndexingJobFailedError extends Error {
  constructor(public readonly phase: string) {
    super(`Indexing job failed with phase: ${phase}`);
    this.name = 'IndexingJobFailedError';
  }
}

/**
 * Error thrown when an indexing job is cancelled
 */
export class IndexingJobCancelledError extends Error {
  constructor() {
    super('Indexing job was cancelled');
    this.name = 'IndexingJobCancelledError';
  }
}

/**
 * Error thrown when an indexing job polling times out
 */
export class IndexingJobTimeoutError extends Error {
  constructor(public readonly timeoutMs: number) {
    super(`Indexing job polling timed out after ${timeoutMs}ms`);
    this.name = 'IndexingJobTimeoutError';
  }
}

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
   * Polls for indexing job completion with configurable interval and timeout.
   * Uses exponential backoff to gradually increase polling intervals, reducing API load for long-running jobs.
   * Returns the final job state when completed, failed, or cancelled.
   *
   * **Exponential Backoff Behavior:**
   * - First 2 polls use the initial interval
   * - Starting from the 3rd poll, the interval doubles after each poll
   * - The interval is capped at the `maxInterval` value
   * - Example with default values (interval: 5000ms, maxInterval: 30000ms):
   *   - Poll 1: 5000ms wait
   *   - Poll 2: 5000ms wait
   *   - Poll 3: 10000ms wait (5000 * 2)
   *   - Poll 4: 20000ms wait (10000 * 2)
   *   - Poll 5: 30000ms wait (20000 * 1.5, capped at maxInterval)
   *   - Poll 6+: 30000ms wait (continues at maxInterval)
   *
   * @param uuid - The indexing job UUID to poll
   * @param options - Polling configuration options
   * @returns Promise that resolves with the final job state
   * @throws {IndexingJobAbortedError} When the operation is aborted via AbortSignal
   * @throws {IndexingJobNotFoundError} When the job is not found
   * @throws {IndexingJobFailedError} When the job fails with phase FAILED or ERROR
   * @throws {IndexingJobCancelledError} When the job is cancelled
   * @throws {IndexingJobTimeoutError} When polling times out
   *
   * @example
   * ```ts
   * const job = await client.knowledgeBases.indexingJobs.waitForCompletion(
   *   '123e4567-e89b-12d3-a456-426614174000',
   *   { interval: 5000, timeout: 300000 }
   * );
   * console.log('Job completed with phase:', job.job?.phase);
   * ```
   *
   * @example
   * ```ts
   * const controller = new AbortController();
   * const job = await client.knowledgeBases.indexingJobs.waitForCompletion(
   *   '123e4567-e89b-12d3-a456-426614174000',
   *   { requestOptions: { signal: controller.signal } }
   * );
   * // Cancel polling after 30 seconds
   * setTimeout(() => controller.abort(), 30000);
   * ```
   *
   * @example
   * ```ts
   * // Custom exponential backoff configuration
   * const job = await client.knowledgeBases.indexingJobs.waitForCompletion(uuid, {
   *   interval: 2000,      // Start with 2 second intervals
   *   maxInterval: 60000, // Cap at 1 minute intervals
   *   timeout: 1800000    // 30 minute timeout
   * });
   * ```
   *
   * @example
   * ```ts
   * try {
   *   const job = await client.knowledgeBases.indexingJobs.waitForCompletion(uuid);
   *   console.log('Job completed successfully');
   * } catch (error) {
   *   if (error instanceof IndexingJobFailedError) {
   *     console.log('Job failed with phase:', error.phase);
   *   } else if (error instanceof IndexingJobTimeoutError) {
   *     console.log('Job timed out after:', error.timeoutMs, 'ms');
   *   } else if (error instanceof IndexingJobAbortedError) {
   *     console.log('Job polling was aborted');
   *   }
   * }
   * ```
   */
  async waitForCompletion(
    uuid: string,
    options: {
      /**
       * Initial polling interval in milliseconds (default: 5000ms).
       * This interval will be used for the first few polls, then exponential backoff applies.
       */
      interval?: number;
      /**
       * Maximum time to wait in milliseconds (default: 600000ms = 10 minutes)
       */
      timeout?: number;
      /**
       * Maximum polling interval in milliseconds (default: 30000ms = 30 seconds).
       * Exponential backoff will not exceed this value.
       */
      maxInterval?: number;
      /**
       * Request options to pass to each poll request
       */
      requestOptions?: RequestOptions;
    } = {},
  ): Promise<IndexingJobRetrieveResponse> {
    const { 
      interval = 5000, 
      timeout = 600000, 
      maxInterval = 30000,
      requestOptions 
    } = options;
    const startTime = Date.now();
    let currentInterval = interval;
    let pollCount = 0;

    while (true) {
      // Check if operation was aborted
      if (requestOptions?.signal?.aborted) {
        throw new IndexingJobAbortedError();
      }

      const response = await this.retrieve(uuid, requestOptions);
      const job = response.job;

      if (!job) {
        throw new IndexingJobNotFoundError();
      }

      // Check if job is in a terminal state
      if (job.phase === 'BATCH_JOB_PHASE_SUCCEEDED') {
        return response;
      }

      if (job.phase === 'BATCH_JOB_PHASE_FAILED' || job.phase === 'BATCH_JOB_PHASE_ERROR') {
        throw new IndexingJobFailedError(job.phase);
      }

      if (job.phase === 'BATCH_JOB_PHASE_CANCELLED') {
        throw new IndexingJobCancelledError();
      }

      // Check timeout
      if (Date.now() - startTime > timeout) {
        throw new IndexingJobTimeoutError(timeout);
      }

      // Wait before next poll with exponential backoff
      await sleep(currentInterval);
      
      // Apply exponential backoff: double the interval after each poll, up to maxInterval
      pollCount++;
      if (pollCount > 2) { // Start exponential backoff after 2 polls
        currentInterval = Math.min(currentInterval * 2, maxInterval);
      }
    }
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
    IndexingJobAbortedError,
    IndexingJobNotFoundError,
    IndexingJobFailedError,
    IndexingJobCancelledError,
    IndexingJobTimeoutError,
  };
}
