// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SchemaRegistryAPI from './schema-registry/schema-registry';
import { SchemaRegistry } from './schema-registry/schema-registry';

export class Databases extends APIResource {
  schemaRegistry: SchemaRegistryAPI.SchemaRegistry = new SchemaRegistryAPI.SchemaRegistry(this._client);
}

Databases.SchemaRegistry = SchemaRegistry;

export declare namespace Databases {
  export { SchemaRegistry as SchemaRegistry };
}
