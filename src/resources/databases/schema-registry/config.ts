// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * DigitalOcean's [managed database service](https://docs.digitalocean.com/products/databases)
 * simplifies the creation and management of highly available database clusters. Currently, it
 * offers support for [PostgreSQL](http://docs.digitalocean.com/products/databases/postgresql/),
 * [Caching](https://docs.digitalocean.com/products/databases/redis/),
 * [Valkey](https://docs.digitalocean.com/products/databases/valkey/),
 * [MySQL](https://docs.digitalocean.com/products/databases/mysql/),
 * [MongoDB](https://docs.digitalocean.com/products/databases/mongodb/), and
 * [OpenSearch](https://docs.digitalocean.com/products/databases/opensearch/).
 *
 * By sending requests to the `/v2/databases` endpoint, you can list, create, or delete
 * database clusters as well as scale the size of a cluster, add or remove read-only replicas,
 * and manage other configuration details.
 *
 * Database clusters may be deployed in a multi-node, high-availability configuration.
 * If your machine type is above the basic nodes, your node plan is above the smallest option,
 * or you are running MongoDB, you may additionally include up to two standby nodes in your cluster.
 *
 * The size of individual nodes in a database cluster is represented by a human-readable slug,
 * which is used in some of the following requests. Each slug denotes the node's identifier,
 * CPU count, and amount of RAM, in that order.
 *
 * For a list of currently available database slugs and options, use the `/v2/databases/options` endpoint or use the
 * `doctl databases options` [command](https://docs.digitalocean.com/reference/doctl/reference/databases/options).
 */
export class Config extends APIResource {
  /**
   * To retrieve the Schema Registry configuration for a Kafka cluster, send a GET
   * request to `/v2/databases/$DATABASE_ID/schema-registry/config`. The response is
   * a JSON object with a `compatibility_level` key, which is set to an object
   * containing any database configuration parameters.
   *
   * @example
   * ```ts
   * const config =
   *   await client.databases.schemaRegistry.config.retrieve(
   *     '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
   *   );
   * ```
   */
  retrieve(databaseClusterUuid: string, options?: RequestOptions): APIPromise<ConfigRetrieveResponse> {
    return this._client.get(path`/v2/databases/${databaseClusterUuid}/schema-registry/config`, {
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To update the Schema Registry configuration for a Kafka cluster, send a PUT
   * request to `/v2/databases/$DATABASE_ID/schema-registry/config`. The response is
   * a JSON object with a `compatibility_level` key, which is set to an object
   * containing any database configuration parameters.
   *
   * @example
   * ```ts
   * const config =
   *   await client.databases.schemaRegistry.config.update(
   *     '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
   *     { compatibility_level: 'BACKWARD' },
   *   );
   * ```
   */
  update(
    databaseClusterUuid: string,
    body: ConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConfigUpdateResponse> {
    return this._client.put(path`/v2/databases/${databaseClusterUuid}/schema-registry/config`, {
      body,
      defaultBaseURL: 'https://api.digitalocean.com',
      ...options,
    });
  }

  /**
   * To retrieve the Schema Registry configuration for a Subject of a Kafka cluster,
   * send a GET request to
   * `/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`. The response
   * is a JSON object with a `compatibility_level` key, which is set to an object
   * containing any database configuration parameters.
   *
   * @example
   * ```ts
   * const response =
   *   await client.databases.schemaRegistry.config.retrieveSubject(
   *     'customer-schema',
   *     {
   *       database_cluster_uuid:
   *         '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
   *     },
   *   );
   * ```
   */
  retrieveSubject(
    subjectName: string,
    params: ConfigRetrieveSubjectParams,
    options?: RequestOptions,
  ): APIPromise<ConfigRetrieveSubjectResponse> {
    const { database_cluster_uuid } = params;
    return this._client.get(
      path`/v2/databases/${database_cluster_uuid}/schema-registry/config/${subjectName}`,
      { defaultBaseURL: 'https://api.digitalocean.com', ...options },
    );
  }

  /**
   * To update the Schema Registry configuration for a Subject of a Kafka cluster,
   * send a PUT request to
   * `/v2/databases/$DATABASE_ID/schema-registry/config/$SUBJECT_NAME`. The response
   * is a JSON object with a `compatibility_level` key, which is set to an object
   * containing any database configuration parameters.
   *
   * @example
   * ```ts
   * const response =
   *   await client.databases.schemaRegistry.config.updateSubject(
   *     'customer-schema',
   *     {
   *       database_cluster_uuid:
   *         '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
   *       compatibility_level: 'BACKWARD',
   *     },
   *   );
   * ```
   */
  updateSubject(
    subjectName: string,
    params: ConfigUpdateSubjectParams,
    options?: RequestOptions,
  ): APIPromise<ConfigUpdateSubjectResponse> {
    const { database_cluster_uuid, ...body } = params;
    return this._client.put(
      path`/v2/databases/${database_cluster_uuid}/schema-registry/config/${subjectName}`,
      { body, defaultBaseURL: 'https://api.digitalocean.com', ...options },
    );
  }
}

export interface ConfigRetrieveResponse {
  /**
   * The compatibility level of the schema registry.
   */
  compatibility_level:
    | 'NONE'
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE';
}

export interface ConfigUpdateResponse {
  /**
   * The compatibility level of the schema registry.
   */
  compatibility_level:
    | 'NONE'
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE';
}

export interface ConfigRetrieveSubjectResponse {
  /**
   * The compatibility level of the schema registry.
   */
  compatibility_level:
    | 'NONE'
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE';

  /**
   * The name of the schema subject.
   */
  subject_name: string;
}

export interface ConfigUpdateSubjectResponse {
  /**
   * The compatibility level of the schema registry.
   */
  compatibility_level:
    | 'NONE'
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE';

  /**
   * The name of the schema subject.
   */
  subject_name: string;
}

export interface ConfigUpdateParams {
  /**
   * The compatibility level of the schema registry.
   */
  compatibility_level:
    | 'NONE'
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE';
}

export interface ConfigRetrieveSubjectParams {
  /**
   * A unique identifier for a database cluster.
   */
  database_cluster_uuid: string;
}

export interface ConfigUpdateSubjectParams {
  /**
   * Path param: A unique identifier for a database cluster.
   */
  database_cluster_uuid: string;

  /**
   * Body param: The compatibility level of the schema registry.
   */
  compatibility_level:
    | 'NONE'
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE';
}

export declare namespace Config {
  export {
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigRetrieveSubjectResponse as ConfigRetrieveSubjectResponse,
    type ConfigUpdateSubjectResponse as ConfigUpdateSubjectResponse,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigRetrieveSubjectParams as ConfigRetrieveSubjectParams,
    type ConfigUpdateSubjectParams as ConfigUpdateSubjectParams,
  };
}
