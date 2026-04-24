// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobInvocationsAPI from './job-invocations';
import { JobInvocationCancelParams, JobInvocationCancelResponse, JobInvocations } from './job-invocations';

export class Apps extends APIResource {
  jobInvocations: JobInvocationsAPI.JobInvocations = new JobInvocationsAPI.JobInvocations(this._client);
}

Apps.JobInvocations = JobInvocations;

export declare namespace Apps {
  export {
    JobInvocations as JobInvocations,
    type JobInvocationCancelResponse as JobInvocationCancelResponse,
    type JobInvocationCancelParams as JobInvocationCancelParams
  };
}
