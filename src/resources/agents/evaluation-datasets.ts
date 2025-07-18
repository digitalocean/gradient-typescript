// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataSourcesAPI from '../knowledge-bases/data-sources';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class EvaluationDatasets extends APIResource {
  /**
   * To create an evaluation dataset, send a POST request to
   * `/v2/gen-ai/evaluation_datasets`.
   *
   * @example
   * ```ts
   * const evaluationDataset =
   *   await client.agents.evaluationDatasets.create();
   * ```
   */
  create(
    body: EvaluationDatasetCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvaluationDatasetCreateResponse> {
    return this._client.post('/v2/gen-ai/evaluation_datasets', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To create presigned URLs for evaluation dataset file upload, send a POST request
   * to `/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.agents.evaluationDatasets.createFileUploadPresignedURLs();
   * ```
   */
  createFileUploadPresignedURLs(
    body: EvaluationDatasetCreateFileUploadPresignedURLsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvaluationDatasetCreateFileUploadPresignedURLsResponse> {
    return this._client.post('/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * Output for creating an agent evaluation dataset
 */
export interface EvaluationDatasetCreateResponse {
  /**
   * Evaluation dataset uuid.
   */
  evaluation_dataset_uuid?: string;
}

/**
 * Response with pre-signed urls to upload files.
 */
export interface EvaluationDatasetCreateFileUploadPresignedURLsResponse {
  /**
   * The ID generated for the request for Presigned URLs.
   */
  request_id?: string;

  /**
   * A list of generated presigned URLs and object keys, one per file.
   */
  uploads?: Array<EvaluationDatasetCreateFileUploadPresignedURLsResponse.Upload>;
}

export namespace EvaluationDatasetCreateFileUploadPresignedURLsResponse {
  /**
   * Detailed info about each presigned URL returned to the client.
   */
  export interface Upload {
    /**
     * The time the url expires at.
     */
    expires_at?: string;

    /**
     * The unique object key to store the file as.
     */
    object_key?: string;

    /**
     * The original file name.
     */
    original_file_name?: string;

    /**
     * The actual presigned URL the client can use to upload the file directly.
     */
    presigned_url?: string;
  }
}

export interface EvaluationDatasetCreateParams {
  /**
   * File to upload as data source for knowledge base.
   */
  file_upload_dataset?: DataSourcesAPI.APIFileUploadDataSource;

  /**
   * The name of the agent evaluation dataset.
   */
  name?: string;
}

export interface EvaluationDatasetCreateFileUploadPresignedURLsParams {
  /**
   * A list of files to generate presigned URLs for.
   */
  files?: Array<EvaluationDatasetCreateFileUploadPresignedURLsParams.File>;
}

export namespace EvaluationDatasetCreateFileUploadPresignedURLsParams {
  /**
   * A single file’s metadata in the request.
   */
  export interface File {
    /**
     * Local filename
     */
    file_name?: string;

    /**
     * The size of the file in bytes.
     */
    file_size?: string;
  }
}

export declare namespace EvaluationDatasets {
  export {
    type EvaluationDatasetCreateResponse as EvaluationDatasetCreateResponse,
    type EvaluationDatasetCreateFileUploadPresignedURLsResponse as EvaluationDatasetCreateFileUploadPresignedURLsResponse,
    type EvaluationDatasetCreateParams as EvaluationDatasetCreateParams,
    type EvaluationDatasetCreateFileUploadPresignedURLsParams as EvaluationDatasetCreateFileUploadPresignedURLsParams,
  };
}
