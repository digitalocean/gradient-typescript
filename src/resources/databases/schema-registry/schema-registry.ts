// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigAPI from './config';
import {
  Config,
  ConfigRetrieveResponse,
  ConfigRetrieveSubjectParams,
  ConfigRetrieveSubjectResponse,
  ConfigUpdateParams,
  ConfigUpdateResponse,
  ConfigUpdateSubjectParams,
  ConfigUpdateSubjectResponse,
} from './config';

export class SchemaRegistry extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
}

SchemaRegistry.Config = Config;

export declare namespace SchemaRegistry {
  export {
    Config as Config,
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigRetrieveSubjectResponse as ConfigRetrieveSubjectResponse,
    type ConfigUpdateSubjectResponse as ConfigUpdateSubjectResponse,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigRetrieveSubjectParams as ConfigRetrieveSubjectParams,
    type ConfigUpdateSubjectParams as ConfigUpdateSubjectParams,
  };
}
