// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RegionsAPI from './regions';

export class EvaluationTestCases extends APIResource {}

export interface APIEvaluationTestCase {
  archived_at?: string;

  created_at?: string;

  created_by_user_email?: string;

  created_by_user_id?: string;

  dataset_name?: string;

  dataset_uuid?: string;

  description?: string;

  latest_version_number_of_runs?: number;

  metrics?: Array<RegionsAPI.APIEvaluationMetric>;

  name?: string;

  star_metric?: APIStarMetric;

  test_case_uuid?: string;

  total_runs?: number;

  updated_at?: string;

  updated_by_user_email?: string;

  updated_by_user_id?: string;

  version?: number;
}

export interface APIStarMetric {
  metric_uuid?: string;

  name?: string;

  /**
   * The success threshold for the star metric. This is a percentage value between 0
   * and 100.
   */
  success_threshold_pct?: number;
}

export declare namespace EvaluationTestCases {
  export { type APIEvaluationTestCase as APIEvaluationTestCase, type APIStarMetric as APIStarMetric };
}
