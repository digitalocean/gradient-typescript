// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResultsAPI from './results';
import { APIEvaluationMetricResult, APIEvaluationRun, APIPrompt, Results } from './results';

export class EvaluationRuns extends APIResource {
  results: ResultsAPI.Results = new ResultsAPI.Results(this._client);
}

EvaluationRuns.Results = Results;

export declare namespace EvaluationRuns {
  export {
    Results as Results,
    type APIEvaluationMetricResult as APIEvaluationMetricResult,
    type APIEvaluationRun as APIEvaluationRun,
    type APIPrompt as APIPrompt,
  };
}
