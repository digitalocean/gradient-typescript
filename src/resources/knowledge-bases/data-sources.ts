// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VersionsAPI from '../agents/versions';
import * as IndexingJobsAPI from './indexing-jobs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DataSources extends APIResource {
  /**
   * To add a data source to a knowledge base, send a POST request to
   * `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`.
   */
  create(
    knowledgeBaseUuid: string,
    body: DataSourceCreateParams,
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
  original_file_name?: string;

  size_in_bytes?: string;

  stored_object_key?: string;
}

export interface APIKnowledgeBaseDataSource {
  aws_data_source?: APIKnowledgeBaseDataSource.AwsDataSource;

  bucket_name?: string;

  created_at?: string;

  /**
   * File to upload as data source for knowledge base.
   */
  file_upload_data_source?: APIFileUploadDataSource;

  item_path?: string;

  last_indexing_job?: IndexingJobsAPI.APIIndexingJob;

  region?: string;

  spaces_data_source?: APISpacesDataSource;

  updated_at?: string;

  uuid?: string;

  web_crawler_data_source?: APIWebCrawlerDataSource;
}

export namespace APIKnowledgeBaseDataSource {
  export interface AwsDataSource {
    bucket_name?: string;

    item_path?: string;

    region?: string;
  }
}

export interface APISpacesDataSource {
  bucket_name?: string;

  item_path?: string;

  region?: string;
}

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

export interface AwsDataSource {
  bucket_name?: string;

  item_path?: string;

  key_id?: string;

  region?: string;

  secret_key?: string;
}

export interface DataSourceCreateResponse {
  knowledge_base_data_source?: APIKnowledgeBaseDataSource;
}

export interface DataSourceListResponse {
  knowledge_base_data_sources?: Array<APIKnowledgeBaseDataSource>;

  links?: VersionsAPI.APILinks;

  meta?: VersionsAPI.APIMeta;
}

export interface DataSourceDeleteResponse {
  data_source_uuid?: string;

  knowledge_base_uuid?: string;
}

export interface DataSourceCreateParams {
  aws_data_source?: AwsDataSource;

  body_knowledge_base_uuid?: string;

  spaces_data_source?: APISpacesDataSource;

  web_crawler_data_source?: APIWebCrawlerDataSource;
}

export interface DataSourceListParams {
  /**
   * page number.
   */
  page?: number;

  /**
   * items per page.
   */
  per_page?: number;
}

export interface DataSourceDeleteParams {
  /**
   * knowledge base id
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
