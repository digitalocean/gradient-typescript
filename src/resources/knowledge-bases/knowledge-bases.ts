// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IndexingJobsAPI from '../indexing-jobs';
import * as VersionsAPI from '../agents/versions';
import * as DataSourcesAPI from './data-sources';
import {
  APIFileUploadDataSource,
  APIKnowledgeBaseDataSource,
  APISpacesDataSource,
  APIWebCrawlerDataSource,
  DataSourceCreateParams,
  DataSourceCreateResponse,
  DataSourceListParams,
  DataSourceListResponse,
  DataSources,
} from './data-sources';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class KnowledgeBases extends APIResource {
  dataSources: DataSourcesAPI.DataSources = new DataSourcesAPI.DataSources(this._client);

  /**
   * To create a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases`.
   */
  create(body: KnowledgeBaseCreateParams, options?: RequestOptions): APIPromise<KnowledgeBaseCreateResponse> {
    return this._client.post('/v2/gen-ai/knowledge_bases', { body, ...options });
  }

  /**
   * To list all knowledge bases, send a GET request to `/v2/gen-ai/knowledge_bases`.
   */
  list(
    query: KnowledgeBaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KnowledgeBaseListResponse> {
    return this._client.get('/v2/gen-ai/knowledge_bases', { query, ...options });
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

export interface KnowledgeBaseListResponse {
  knowledge_bases?: Array<APIKnowledgeBase>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
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

export declare namespace KnowledgeBases {
  export {
    type APIKnowledgeBase as APIKnowledgeBase,
    type KnowledgeBaseCreateResponse as KnowledgeBaseCreateResponse,
    type KnowledgeBaseListResponse as KnowledgeBaseListResponse,
    type KnowledgeBaseCreateParams as KnowledgeBaseCreateParams,
    type KnowledgeBaseListParams as KnowledgeBaseListParams,
  };

  export {
    DataSources as DataSources,
    type APIFileUploadDataSource as APIFileUploadDataSource,
    type APIKnowledgeBaseDataSource as APIKnowledgeBaseDataSource,
    type APISpacesDataSource as APISpacesDataSource,
    type APIWebCrawlerDataSource as APIWebCrawlerDataSource,
    type DataSourceCreateResponse as DataSourceCreateResponse,
    type DataSourceListResponse as DataSourceListResponse,
    type DataSourceCreateParams as DataSourceCreateParams,
    type DataSourceListParams as DataSourceListParams,
  };
}
