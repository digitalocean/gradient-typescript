// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as IndexingJobsAPI from './indexing-jobs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DataSources extends APIResource {
  /**
   * To add a data source to a knowledge base, send a POST request to
   * `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`.
   *
   * @example
   * ```ts
   * const dataSource =
   *   await client.knowledgeBases.dataSources.create(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  create(
    knowledgeBaseUuid: string,
    body: DataSourceCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataSourceCreateResponse> {
    return this._client.post(path`/v2/gen-ai/knowledge_bases/${knowledgeBaseUuid}/data_sources`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To list all data sources for a knowledge base, send a GET request to
   * `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`.
   *
   * @example
   * ```ts
   * const dataSources =
   *   await client.knowledgeBases.dataSources.list(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *   );
   * ```
   */
  list(
    knowledgeBaseUuid: string,
    query: DataSourceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataSourceListResponse> {
    return this._client.get(path`/v2/gen-ai/knowledge_bases/${knowledgeBaseUuid}/data_sources`, {
      query,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To delete a data source from a knowledge base, send a DELETE request to
   * `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}`.
   *
   * @example
   * ```ts
   * const dataSource =
   *   await client.knowledgeBases.dataSources.delete(
   *     '"123e4567-e89b-12d3-a456-426614174000"',
   *     {
   *       knowledge_base_uuid:
   *         '"123e4567-e89b-12d3-a456-426614174000"',
   *     },
   *   );
   * ```
   */
  delete(
    dataSourceUuid: string,
    params: DataSourceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DataSourceDeleteResponse> {
    const { knowledge_base_uuid } = params;
    return this._client.delete(
      path`/v2/gen-ai/knowledge_bases/${knowledge_base_uuid}/data_sources/${dataSourceUuid}`,
      { defaultBaseURL: 'https://api.digitalocean.com', ...options },
    );
  }
}

/**
 * File to upload as data source for knowledge base.
 */
export interface APIFileUploadDataSource {
  /**
   * The original file name
   */
  original_file_name?: string;

  /**
   * The size of the file in bytes
   */
  size_in_bytes?: string;

  /**
   * The object key the file was stored as
   */
  stored_object_key?: string;
}

/**
 * Data Source configuration for Knowledge Bases
 */
export interface APIKnowledgeBaseDataSource {
  /**
   * AWS S3 Data Source for Display
   */
  aws_data_source?: APIKnowledgeBaseDataSource.AwsDataSource;

  /**
   * Name of storage bucket - Deprecated, moved to data_source_details
   */
  bucket_name?: string;

  /**
   * Creation date / time
   */
  created_at?: string;

  /**
   * File to upload as data source for knowledge base.
   */
  file_upload_data_source?: APIFileUploadDataSource;

  /**
   * Path of folder or object in bucket - Deprecated, moved to data_source_details
   */
  item_path?: string;

  last_datasource_indexing_job?: IndexingJobsAPI.APIIndexedDataSource;

  /**
   * IndexingJob description
   */
  last_indexing_job?: IndexingJobsAPI.APIIndexingJob;

  /**
   * Region code - Deprecated, moved to data_source_details
   */
  region?: string;

  /**
   * Spaces Bucket Data Source
   */
  spaces_data_source?: APISpacesDataSource;

  /**
   * Last modified
   */
  updated_at?: string;

  /**
   * Unique id of knowledge base
   */
  uuid?: string;

  /**
   * WebCrawlerDataSource
   */
  web_crawler_data_source?: APIWebCrawlerDataSource;
}

export namespace APIKnowledgeBaseDataSource {
  /**
   * AWS S3 Data Source for Display
   */
  export interface AwsDataSource {
    /**
     * Spaces bucket name
     */
    bucket_name?: string;

    item_path?: string;

    /**
     * Region of bucket
     */
    region?: string;
  }
}

/**
 * Spaces Bucket Data Source
 */
export interface APISpacesDataSource {
  /**
   * Spaces bucket name
   */
  bucket_name?: string;

  item_path?: string;

  /**
   * Region of bucket
   */
  region?: string;
}

/**
 * WebCrawlerDataSource
 */
export interface APIWebCrawlerDataSource {
  /**
   * The base url to crawl.
   */
  base_url?: string;

  /**
   * Options for specifying how URLs found on pages should be handled.
   *
   * - UNKNOWN: Default unknown value
   * - SCOPED: Only include the base URL.
   * - PATH: Crawl the base URL and linked pages within the URL path.
   * - DOMAIN: Crawl the base URL and linked pages within the same domain.
   * - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.
   */
  crawling_option?: 'UNKNOWN' | 'SCOPED' | 'PATH' | 'DOMAIN' | 'SUBDOMAINS';

  /**
   * Whether to ingest and index media (images, etc.) on web pages.
   */
  embed_media?: boolean;
}

/**
 * AWS S3 Data Source
 */
export interface AwsDataSource {
  /**
   * Spaces bucket name
   */
  bucket_name?: string;

  item_path?: string;

  /**
   * The AWS Key ID
   */
  key_id?: string;

  /**
   * Region of bucket
   */
  region?: string;

  /**
   * The AWS Secret Key
   */
  secret_key?: string;
}

/**
 * Information about a newly created knowldege base data source
 */
export interface DataSourceCreateResponse {
  /**
   * Data Source configuration for Knowledge Bases
   */
  knowledge_base_data_source?: APIKnowledgeBaseDataSource;
}

/**
 * A list of knowledge base data sources
 */
export interface DataSourceListResponse {
  /**
   * The data sources
   */
  knowledge_base_data_sources?: Array<APIKnowledgeBaseDataSource>;

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
 * Information about a newly deleted knowledge base data source
 */
export interface DataSourceDeleteResponse {
  /**
   * Data source id
   */
  data_source_uuid?: string;

  /**
   * Knowledge base id
   */
  knowledge_base_uuid?: string;
}

export interface DataSourceCreateParams {
  /**
   * AWS S3 Data Source
   */
  aws_data_source?: AwsDataSource;

  /**
   * Knowledge base id
   */
  body_knowledge_base_uuid?: string;

  /**
   * Spaces Bucket Data Source
   */
  spaces_data_source?: APISpacesDataSource;

  /**
   * WebCrawlerDataSource
   */
  web_crawler_data_source?: APIWebCrawlerDataSource;
}

export interface DataSourceListParams {
  /**
   * Page number.
   */
  page?: number;

  /**
   * Items per page.
   */
  per_page?: number;
}

export interface DataSourceDeleteParams {
  /**
   * Knowledge base id
   */
  knowledge_base_uuid: string;
}

export declare namespace DataSources {
  export {
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
}
