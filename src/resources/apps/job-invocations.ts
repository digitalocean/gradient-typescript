// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * App Platform is a Platform-as-a-Service (PaaS) offering from DigitalOcean that allows
 * developers to publish code directly to DigitalOcean servers without worrying about the
 * underlying infrastructure.
 *
 * Most API operations are centered around a few core object types. Following are the
 * definitions of these types. These definitions will be omitted from the operation-specific
 * documentation.
 *
 * For documentation on app specifications (`AppSpec` objects), please refer to the
 * [product documentation](https://docs.digitalocean.com/products/app-platform/reference/app-spec/)).
 */
export class JobInvocations extends APIResource {
  /**
   * Cancel a specific job invocation for an app.
   *
   * @example
   * ```ts
   * const response = await client.apps.jobInvocations.cancel(
   *   '123e4567-e89b-12d3-a456-426',
   *   { app_id: '4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf' },
   * );
   * ```
   */
  cancel(jobInvocationID: string, params: JobInvocationCancelParams, options?: RequestOptions): APIPromise<JobInvocationCancelResponse> {
    const { app_id, job_name } = params
    return this._client.post(path`/v2/apps/${app_id}/job-invocations/${jobInvocationID}/cancel`, { query: { job_name }, defaultBaseURL: 'https://api.digitalocean.com', ...options });
  }
}

export interface JobInvocationCancelResponse {
  id?: string;

  completed_at?: string;

  created_at?: string;

  deployment_id?: string;

  job_name?: string;

  /**
   * The phase of the job invocation
   */
  phase?: 'UNKNOWN' | 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELED' | 'SKIPPED';

  started_at?: string;

  trigger?: JobInvocationCancelResponse.Trigger;
}

export namespace JobInvocationCancelResponse {
  export interface Trigger {
    /**
     * Details about the manual trigger, if applicable
     */
    manual?: Trigger.Manual;

    /**
     * The schedule for the job
     */
    scheduled?: Trigger.Scheduled;

    /**
     * The type of trigger that initiated the job invocation.
     */
    type?: 'MANUAL' | 'SCHEDULE' | 'UNKNOWN';
  }

  export namespace Trigger {
    /**
     * Details about the manual trigger, if applicable
     */
    export interface Manual {
      /**
       * The user who triggered the job
       */
      user?: Manual.User;
    }

    export namespace Manual {
      /**
       * The user who triggered the job
       */
      export interface User {
        email?: string;

        full_name?: string;

        uuid?: string;
      }
    }

    /**
     * The schedule for the job
     */
    export interface Scheduled {
      schedule?: Scheduled.Schedule;
    }

    export namespace Scheduled {
      export interface Schedule {
        /**
         * The cron expression defining the schedule
         */
        cron?: string;

        /**
         * The time zone for the schedule
         */
        time_zone?: string;
      }
    }
  }
}

export interface JobInvocationCancelParams {
  /**
   * Path param: The app ID
   */
  app_id: string;

  /**
   * Query param: The job name to list job invocations for.
   */
  job_name?: string;
}

export declare namespace JobInvocations {
  export {
    type JobInvocationCancelResponse as JobInvocationCancelResponse,
    type JobInvocationCancelParams as JobInvocationCancelParams
  };
}
