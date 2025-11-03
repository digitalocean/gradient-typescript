// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ScheduledIndexing extends APIResource {
  /**
   * To create scheduled indexing for a knowledge base, send a POST request to
   * `/v2/gen-ai/scheduled-indexing`.
   *
   * @example
   * ```ts
   * const scheduledIndexing =
   *   await client.agents.evaluationMetrics.scheduledIndexing.create();
   * ```
   */
  create(
    body: ScheduledIndexingCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduledIndexingCreateResponse> {
    return this._client.post('/v2/gen-ai/scheduled-indexing', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * Get Scheduled Indexing for knowledge base using knoweldge base uuid, send a GET
   * request to `/v2/gen-ai/scheduled-indexing/knowledge-base/{knowledge_base_uuid}`.
   *
   * @example
   * ```ts
   * const scheduledIndexing =
   *   await client.agents.evaluationMetrics.scheduledIndexing.retrieve(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  retrieve(
    knowledgeBaseUuid: string,
    options?: RequestOptions,
  ): APIPromise<ScheduledIndexingRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/scheduled-indexing/knowledge-base/${knowledgeBaseUuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * Delete Scheduled Indexing for knowledge base, send a DELETE request to
   * `/v2/gen-ai/scheduled-indexing/{uuid}`.
   *
   * @example
   * ```ts
   * const scheduledIndexing =
   *   await client.agents.evaluationMetrics.scheduledIndexing.delete(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  delete(uuid: string, options?: RequestOptions): APIPromise<ScheduledIndexingDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/scheduled-indexing/${uuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface ScheduledIndexingCreateResponse {
  /**
   * Metadata for scheduled indexing entries
   */
  indexing_info?: ScheduledIndexingCreateResponse.IndexingInfo;
}

export namespace ScheduledIndexingCreateResponse {
  /**
   * Metadata for scheduled indexing entries
   */
  export interface IndexingInfo {
    /**
     * Created at timestamp
     */
    created_at?: string;

    /**
     * Days for execution (day is represented same as in a cron expression, e.g. Monday
     * begins with 1 )
     */
    days?: Array<number>;

    /**
     * Deleted at timestamp (if soft deleted)
     */
    deleted_at?: string;

    /**
     * Whether the schedule is currently active
     */
    is_active?: boolean;

    /**
     * Knowledge base uuid associated with this schedule
     */
    knowledge_base_uuid?: string;

    /**
     * Last time the schedule was executed
     */
    last_ran_at?: string;

    /**
     * Next scheduled run
     */
    next_run_at?: string;

    /**
     * Scheduled time of execution (HH:MM:SS format)
     */
    time?: string;

    /**
     * Updated at timestamp
     */
    updated_at?: string;

    /**
     * Unique identifier for the scheduled indexing entry
     */
    uuid?: string;
  }
}

export interface ScheduledIndexingRetrieveResponse {
  /**
   * Metadata for scheduled indexing entries
   */
  indexing_info?: ScheduledIndexingRetrieveResponse.IndexingInfo;
}

export namespace ScheduledIndexingRetrieveResponse {
  /**
   * Metadata for scheduled indexing entries
   */
  export interface IndexingInfo {
    /**
     * Created at timestamp
     */
    created_at?: string;

    /**
     * Days for execution (day is represented same as in a cron expression, e.g. Monday
     * begins with 1 )
     */
    days?: Array<number>;

    /**
     * Deleted at timestamp (if soft deleted)
     */
    deleted_at?: string;

    /**
     * Whether the schedule is currently active
     */
    is_active?: boolean;

    /**
     * Knowledge base uuid associated with this schedule
     */
    knowledge_base_uuid?: string;

    /**
     * Last time the schedule was executed
     */
    last_ran_at?: string;

    /**
     * Next scheduled run
     */
    next_run_at?: string;

    /**
     * Scheduled time of execution (HH:MM:SS format)
     */
    time?: string;

    /**
     * Updated at timestamp
     */
    updated_at?: string;

    /**
     * Unique identifier for the scheduled indexing entry
     */
    uuid?: string;
  }
}

export interface ScheduledIndexingDeleteResponse {
  /**
   * Metadata for scheduled indexing entries
   */
  indexing_info?: ScheduledIndexingDeleteResponse.IndexingInfo;
}

export namespace ScheduledIndexingDeleteResponse {
  /**
   * Metadata for scheduled indexing entries
   */
  export interface IndexingInfo {
    /**
     * Created at timestamp
     */
    created_at?: string;

    /**
     * Days for execution (day is represented same as in a cron expression, e.g. Monday
     * begins with 1 )
     */
    days?: Array<number>;

    /**
     * Deleted at timestamp (if soft deleted)
     */
    deleted_at?: string;

    /**
     * Whether the schedule is currently active
     */
    is_active?: boolean;

    /**
     * Knowledge base uuid associated with this schedule
     */
    knowledge_base_uuid?: string;

    /**
     * Last time the schedule was executed
     */
    last_ran_at?: string;

    /**
     * Next scheduled run
     */
    next_run_at?: string;

    /**
     * Scheduled time of execution (HH:MM:SS format)
     */
    time?: string;

    /**
     * Updated at timestamp
     */
    updated_at?: string;

    /**
     * Unique identifier for the scheduled indexing entry
     */
    uuid?: string;
  }
}

export interface ScheduledIndexingCreateParams {
  /**
   * Days for execution (day is represented same as in a cron expression, e.g. Monday
   * begins with 1 )
   */
  days?: Array<number>;

  /**
   * Knowledge base uuid for which the schedule is created
   */
  knowledge_base_uuid?: string;

  /**
   * Time of execution (HH:MM) UTC
   */
  time?: string;
}

export declare namespace ScheduledIndexing {
  export {
    type ScheduledIndexingCreateResponse as ScheduledIndexingCreateResponse,
    type ScheduledIndexingRetrieveResponse as ScheduledIndexingRetrieveResponse,
    type ScheduledIndexingDeleteResponse as ScheduledIndexingDeleteResponse,
    type ScheduledIndexingCreateParams as ScheduledIndexingCreateParams,
  };
}
