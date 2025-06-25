// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VersionsAPI from '../agents/versions';
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
   */
  create(body: KnowledgeBaseCreateParams, options?: RequestOptions): APIPromise<KnowledgeBaseCreateResponse> {
    return this._client.post('/v2/gen-ai/knowledge_bases', {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrive information about an existing knowledge base, send a GET request to
   * `/v2/gen-ai/knowledge_bases/{uuid}`.
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
   */
  update(
    pathUuid: string,
    body: KnowledgeBaseUpdateParams,
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
   */
  delete(uuid: string, options?: RequestOptions): APIPromise<KnowledgeBaseDeleteResponse> {
    return this._client.delete(path`/v2/gen-ai/knowledge_bases/${uuid}`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }
}

export interface APIKnowledgeBase {
  added_to_agent_at?: string;

  created_at?: string;

  database_id?: string;

  embedding_model_uuid?: string;

  is_public?: boolean;

  last_indexing_job?: IndexingJobsAPI.APIIndexingJob;

  name?: string;

  project_id?: string;

  region?: string;

  tags?: Array<string>;

  updated_at?: string;

  user_id?: string;

  uuid?: string;
}

export interface KnowledgeBaseCreateResponse {
  knowledge_base?: APIKnowledgeBase;
}

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

  knowledge_base?: APIKnowledgeBase;
}

export interface KnowledgeBaseUpdateResponse {
  knowledge_base?: APIKnowledgeBase;
}

export interface KnowledgeBaseListResponse {
  knowledge_bases?: Array<APIKnowledgeBase>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
}

export interface KnowledgeBaseDeleteResponse {
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

  vpc_uuid?: string;
}

export namespace KnowledgeBaseCreateParams {
  export interface Datasource {
    aws_data_source?: DataSourcesAPI.AwsDataSource;

    bucket_name?: string;

    bucket_region?: string;

    /**
     * File to upload as data source for knowledge base.
     */
    file_upload_data_source?: DataSourcesAPI.APIFileUploadDataSource;

    item_path?: string;

    spaces_data_source?: DataSourcesAPI.APISpacesDataSource;

    web_crawler_data_source?: DataSourcesAPI.APIWebCrawlerDataSource;
  }
}

export interface KnowledgeBaseUpdateParams {
  /**
   * the id of the DigitalOcean database this knowledge base will use, optiona.
   */
  database_id?: string;

  /**
   * Identifier for the foundation model.
   */
  embedding_model_uuid?: string;

  name?: string;

  project_id?: string;

  /**
   * Tags to organize your knowledge base.
   */
  tags?: Array<string>;

  body_uuid?: string;
}

export interface KnowledgeBaseListParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
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
