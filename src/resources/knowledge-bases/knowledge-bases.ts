// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IndexingJobsAPI from '../indexing-jobs';
import * as DataSourcesAPI from './data-sources';
import {
  APIFileUploadDataSource,
  APIKnowledgeBaseDataSource,
  APISpacesDataSource,
  APIWebCrawlerDataSource,
  DataSources,
} from './data-sources';

export class KnowledgeBases extends APIResource {
  dataSources: DataSourcesAPI.DataSources = new DataSourcesAPI.DataSources(this._client);
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

KnowledgeBases.DataSources = DataSources;

export declare namespace KnowledgeBases {
  export { type APIKnowledgeBase as APIKnowledgeBase };

  export {
    DataSources as DataSources,
    type APIFileUploadDataSource as APIFileUploadDataSource,
    type APIKnowledgeBaseDataSource as APIKnowledgeBaseDataSource,
    type APISpacesDataSource as APISpacesDataSource,
    type APIWebCrawlerDataSource as APIWebCrawlerDataSource,
  };
}
