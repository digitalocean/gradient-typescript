// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class IndexingJobs extends APIResource {}

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

export declare namespace IndexingJobs {
  export { type APIIndexingJob as APIIndexingJob };
}
