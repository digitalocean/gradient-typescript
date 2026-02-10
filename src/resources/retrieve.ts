// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Retrieve extends APIResource {
  /**
   * Retrieve relevant documents from a knowledge base using semantic search.
   *
   * This endpoint:
   *
   * 1. Authenticates the request using the provided bearer token
   * 2. Generates embeddings for the query using the knowledge base's configured
   *    model
   * 3. Performs vector similarity search in the knowledge base
   * 4. Returns the most relevant document chunks
   *
   * The search supports hybrid search combining:
   *
   * - Vector similarity (semantic search)
   * - Keyword matching (BM25)
   * - Custom metadata filters
   *
   * @example
   * ```ts
   * const response = await client.retrieve.documents(
   *   '550e8400-e29b-41d4-a716-446655440000',
   *   {
   *     num_results: 5,
   *     query:
   *       'What are the best practices for deploying machine learning models?',
   *   },
   * );
   * ```
   */
  documents(
    knowledgeBaseID: string,
    body: RetrieveDocumentsParams,
    options?: RequestOptions,
  ): APIPromise<RetrieveDocumentsResponse> {
    return this._client.post(path`/${knowledgeBaseID}/retrieve`, {
      body,
      defaultBaseURL: 'https://kbaas.do-ai.run/v1',
      ...options,
    });
  }
}

export interface RetrieveDocumentsResponse {
  /**
   * Array of retrieved document chunks
   */
  results: Array<RetrieveDocumentsResponse.Result>;

  /**
   * Number of results returned
   */
  total_results: number;
}

export namespace RetrieveDocumentsResponse {
  export interface Result {
    /**
     * Metadata associated with the document
     */
    metadata: { [key: string]: unknown };

    /**
     * The text content of the document chunk
     */
    text_content: string;
  }
}

export interface RetrieveDocumentsParams {
  /**
   * Number of results to return
   */
  num_results: number;

  /**
   * The search query text
   */
  query: string;

  /**
   * Weight for hybrid search (0-1):
   *
   * - 0 = pure keyword search (BM25)
   * - 1 = pure vector search (default)
   * - 0.5 = balanced hybrid search
   */
  alpha?: number;

  /**
   * Metadata filters to apply to the search
   */
  filters?: RetrieveDocumentsParams.Filters;
}

export namespace RetrieveDocumentsParams {
  /**
   * Metadata filters to apply to the search
   */
  export interface Filters {
    /**
     * All conditions must match (AND)
     */
    must?: Array<Filters.Must>;

    /**
     * No conditions should match (NOT)
     */
    must_not?: Array<Filters.MustNot>;

    /**
     * At least one condition must match (OR)
     */
    should?: Array<Filters.Should>;
  }

  export namespace Filters {
    export interface Must {
      /**
       * Metadata field name
       */
      field: string;

      /**
       * Comparison operator
       */
      operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'not_in' | 'contains';

      /**
       * Value to compare against (type depends on field)
       */
      value: string | number | boolean | Array<string>;
    }

    export interface MustNot {
      /**
       * Metadata field name
       */
      field: string;

      /**
       * Comparison operator
       */
      operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'not_in' | 'contains';

      /**
       * Value to compare against (type depends on field)
       */
      value: string | number | boolean | Array<string>;
    }

    export interface Should {
      /**
       * Metadata field name
       */
      field: string;

      /**
       * Comparison operator
       */
      operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'not_in' | 'contains';

      /**
       * Value to compare against (type depends on field)
       */
      value: string | number | boolean | Array<string>;
    }
  }
}

export declare namespace Retrieve {
  export {
    type RetrieveDocumentsResponse as RetrieveDocumentsResponse,
    type RetrieveDocumentsParams as RetrieveDocumentsParams,
  };
}
