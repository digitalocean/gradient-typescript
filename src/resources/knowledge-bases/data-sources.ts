// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IndexingJobsAPI from '../indexing-jobs';

export class DataSources extends APIResource {}

/**
 * File to upload as data source for knowledge base.
 */
export interface APIFileUploadDataSource {
  original_file_name?: string;

  size_in_bytes?: string;

  stored_object_key?: string;
}

export interface APIKnowledgeBaseDataSource {
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

export declare namespace DataSources {
  export {
    type APIFileUploadDataSource as APIFileUploadDataSource,
    type APIKnowledgeBaseDataSource as APIKnowledgeBaseDataSource,
    type APISpacesDataSource as APISpacesDataSource,
    type APIWebCrawlerDataSource as APIWebCrawlerDataSource,
  };
}
