// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DataSourcesAPI from './data-sources';
import {
  APIFileUploadDataSource,
  APIKnowledgeBaseDataSource,
  APISpacesDataSource,
  APIWebCrawlerDataSource,
  AwsDataSource,
  DataSourceCreateParams,
  DataSourceCreateResponse,
  DataSourceDeleteParams,
  DataSourceDeleteResponse,
  DataSourceListParams,
  DataSourceListResponse,
  DataSources,
} from './data-sources';
import * as IndexingJobsAPI from './indexing-jobs';
import {
  APIIndexedDataSource,
  APIIndexingJob,
  IndexingJobCreateParams,
  IndexingJobCreateResponse,
  IndexingJobListParams,
  IndexingJobListResponse,
  IndexingJobRetrieveDataSourcesResponse,
  IndexingJobRetrieveResponse,
  IndexingJobUpdateCancelParams,
  IndexingJobUpdateCancelResponse,
  IndexingJobs,
} from './indexing-jobs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class KnowledgeBases extends APIResource {
  dataSources: DataSourcesAPI.DataSources = new DataSourcesAPI.DataSources(this._client);
  indexingJobs: IndexingJobsAPI.IndexingJobs = new IndexingJobsAPI.IndexingJobs(this._client);

  /**
   * To create a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases`.
   *
   * @example
   * ```ts
   * const knowledgeBase = await client.knowledgeBases.create();
   * ```
   */
  create(
    body: KnowledgeBaseCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseCreateResponse> {
    return this._client.post('/v2/gen-ai/knowledge_bases', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrive information about an existing knowledge base, send a GET request to
   * `/v2/gen-ai/knowledge_bases/{uuid}`.
   *
   * @example
   * ```ts
   * const knowledgeBase = await client.knowledgeBases.retrieve(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  retrieve(uuid: string, options?: RequestOptions): APIPromise<KnowledgeBaseRetrieveResponse> {
    return this._client.get(path`/v2/gen-ai/knowledge_bases/${uuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update a knowledge base, send a PUT request to
   * `/v2/gen-ai/knowledge_bases/{uuid}`.
   *
   * @example
   * ```ts
   * const knowledgeBase = await client.knowledgeBases.update(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  update(
    pathUuid: string,
    body: KnowledgeBaseUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseUpdateResponse> {
    return this._client.put(path`/v2/gen-ai/knowledge_bases/${pathUuid}`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all knowledge bases, send a GET request to `/v2/gen-ai/knowledge_bases`.
   *
   * @example
   * ```ts
   * const knowledgeBases = await client.knowledgeBases.list();
   * ```
   */
  list(
    query: KnowledgeBaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseListResponse> {
    return this._client.get('/v2/gen-ai/knowledge_bases', {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a knowledge base, send a DELETE request to
   * `/v2/gen-ai/knowledge_bases/{uuid}`.
   *
   * @example
   * ```ts
   * const knowledgeBase = await client.knowledgeBases.delete(
   *   '"123e4567-e89b-12d3-a456-426614174000"',
   * );
   * ```
   */
  delete(uuid: string, options?: RequestOptions): APIPromise<KnowledgeBaseDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/knowledge_bases/${uuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

/**
 * Knowledgebase Description
 */
export interface APIKnowledgeBase {
  /**
   * Time when the knowledge base was added to the agent
   */
  added_to_agent_at?: string;

  /**
   * Creation date / time
   */
  created_at?: string;

  database_id?: string;

  embedding_model_uuid?: string;

  /**
   * Whether the knowledge base is public or not
   */
  is_public?: boolean;

  /**
   * IndexingJob description
   */
  last_indexing_job?: IndexingJobsAPI.APIIndexingJob;

  /**
   * Name of knowledge base
   */
  name?: string;

  project_id?: string;

  /**
   * Region code
   */
  region?: string;

  /**
   * Tags to organize related resources
   */
  tags?: Array<string>;

  /**
   * Last modified
   */
  updated_at?: string;

  /**
   * Id of user that created the knowledge base
   */
  user_id?: string;

  /**
   * Unique id for knowledge base
   */
  uuid?: string;
}

/**
 * Information about a newly created knowledge base
 */
export interface KnowledgeBaseCreateResponse {
  /**
   * Knowledgebase Description
   */
  knowledge_base?: APIKnowledgeBase;
}

/**
 * The knowledge base
 */
export interface KnowledgeBaseRetrieveResponse {
  database_status?:
    | 'CREATING'
    | 'ONLINE'
    | 'POWEROFF'
    | 'REBUILDING'
    | 'REBALANCING'
    | 'DECOMMISSIONED'
    | 'FORKING'
    | 'MIGRATING'
    | 'RESIZING'
    | 'RESTORING'
    | 'POWERING_ON'
    | 'UNHEALTHY';

  /**
   * Knowledgebase Description
   */
  knowledge_base?: APIKnowledgeBase;
}

/**
 * Information about an updated knowledge base
 */
export interface KnowledgeBaseUpdateResponse {
  /**
   * Knowledgebase Description
   */
  knowledge_base?: APIKnowledgeBase;
}

/**
 * List of knowledge bases
 */
export interface KnowledgeBaseListResponse {
  /**
   * The knowledge bases
   */
  knowledge_bases?: Array<APIKnowledgeBase>;

  /**
   * Links to other pages
   */
  links?: Shared.APILinks;

  /**
   * Meta information about the data set
   */
  meta?: Shared.APIMeta;
}

/**
 * Information about a deleted knowledge base
 */
export interface KnowledgeBaseDeleteResponse {
  /**
   * The id of the deleted knowledge base
   */
  uuid?: string;
}

export interface KnowledgeBaseCreateParams {
  /**
   * Identifier of the DigitalOcean OpenSearch database this knowledge base will use,
   * optional. If not provided, we create a new database for the knowledge base in
   * the same region as the knowledge base.
   */
  database_id?: string;

  /**
   * The data sources to use for this knowledge base. See
   * [Organize Data Sources](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#spaces-buckets)
   * for more information on data sources best practices.
   */
  datasources?: Array<KnowledgeBaseCreateParams.Datasource>;

  /**
   * Identifier for the
   * [embedding model](https://docs.digitalocean.com/products/genai-platform/details/models/#embedding-models).
   */
  embedding_model_uuid?: string;

  /**
   * Name of the knowledge base.
   */
  name?: string;

  /**
   * Identifier of the DigitalOcean project this knowledge base will belong to.
   */
  project_id?: string;

  /**
   * The datacenter region to deploy the knowledge base in.
   */
  region?: string;

  /**
   * Tags to organize your knowledge base.
   */
  tags?: Array<string>;

  /**
   * The VPC to deploy the knowledge base database in
   */
  vpc_uuid?: string;
}

export namespace KnowledgeBaseCreateParams {
  export interface Datasource {
    /**
     * AWS S3 Data Source
     */
    aws_data_source?: DataSourcesAPI.AwsDataSource;

    /**
     * Deprecated, moved to data_source_details
     */
    bucket_name?: string;

    /**
     * Deprecated, moved to data_source_details
     */
    bucket_region?: string;

    /**
     * Dropbox Data Source
     */
    dropbox_data_source?: Datasource.DropboxDataSource;

    /**
     * File to upload as data source for knowledge base.
     */
    file_upload_data_source?: DataSourcesAPI.APIFileUploadDataSource;

    item_path?: string;

    /**
     * Spaces Bucket Data Source
     */
    spaces_data_source?: DataSourcesAPI.APISpacesDataSource;

    /**
     * WebCrawlerDataSource
     */
    web_crawler_data_source?: DataSourcesAPI.APIWebCrawlerDataSource;
  }

  export namespace Datasource {
    /**
     * Dropbox Data Source
     */
    export interface DropboxDataSource {
      folder?: string;

      /**
       * Refresh token. you can obrain a refresh token by following the oauth2 flow. see
       * /v2/gen-ai/oauth2/dropbox/tokens for reference.
       */
      refresh_token?: string;
    }
  }
}

export interface KnowledgeBaseUpdateParams {
  /**
   * The id of the DigitalOcean database this knowledge base will use, optiona.
   */
  database_id?: string;

  /**
   * Identifier for the foundation model.
   */
  embedding_model_uuid?: string;

  /**
   * Knowledge base name
   */
  name?: string;

  /**
   * The id of the DigitalOcean project this knowledge base will belong to
   */
  project_id?: string;

  /**
   * Tags to organize your knowledge base.
   */
  tags?: Array<string>;

  /**
   * Knowledge base id
   */
  body_uuid?: string;
}

export interface KnowledgeBaseListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

KnowledgeBases.DataSources = DataSources;
KnowledgeBases.IndexingJobs = IndexingJobs;

export declare namespace KnowledgeBases {
  export {
    type APIKnowledgeBase as APIKnowledgeBase,
    type KnowledgeBaseCreateResponse as KnowledgeBaseCreateResponse,
    type KnowledgeBaseRetrieveResponse as KnowledgeBaseRetrieveResponse,
    type KnowledgeBaseUpdateResponse as KnowledgeBaseUpdateResponse,
    type KnowledgeBaseListResponse as KnowledgeBaseListResponse,
    type KnowledgeBaseDeleteResponse as KnowledgeBaseDeleteResponse,
    type KnowledgeBaseCreateParams as KnowledgeBaseCreateParams,
    type KnowledgeBaseUpdateParams as KnowledgeBaseUpdateParams,
    type KnowledgeBaseListParams as KnowledgeBaseListParams,
  };

  export {
    DataSources as DataSources,
    type APIFileUploadDataSource as APIFileUploadDataSource,
    type APIKnowledgeBaseDataSource as APIKnowledgeBaseDataSource,
    type APISpacesDataSource as APISpacesDataSource,
    type APIWebCrawlerDataSource as APIWebCrawlerDataSource,
    type AwsDataSource as AwsDataSource,
    type DataSourceCreateResponse as DataSourceCreateResponse,
    type DataSourceListResponse as DataSourceListResponse,
    type DataSourceDeleteResponse as DataSourceDeleteResponse,
    type DataSourceCreateParams as DataSourceCreateParams,
    type DataSourceListParams as DataSourceListParams,
    type DataSourceDeleteParams as DataSourceDeleteParams,
  };

  export {
    IndexingJobs as IndexingJobs,
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
