// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnthropicAPI from './anthropic';
import {
  Anthropic,
  AnthropicCreateParams,
  AnthropicCreateResponse,
  AnthropicDeleteResponse,
  AnthropicListAgentsParams,
  AnthropicListAgentsResponse,
  AnthropicListParams,
  AnthropicListResponse,
  AnthropicRetrieveResponse,
  AnthropicUpdateParams,
  AnthropicUpdateResponse,
} from './anthropic';
import * as OpenAIAPI from './openai';
import {
  OpenAI,
  OpenAICreateParams,
  OpenAICreateResponse,
  OpenAIDeleteResponse,
  OpenAIListParams,
  OpenAIListResponse,
  OpenAIRetrieveAgentsParams,
  OpenAIRetrieveAgentsResponse,
  OpenAIRetrieveResponse,
  OpenAIUpdateParams,
  OpenAIUpdateResponse,
} from './openai';

export class Providers extends APIResource {
  anthropic: AnthropicAPI.Anthropic = new AnthropicAPI.Anthropic(this._client);
  openai: OpenAIAPI.OpenAI = new OpenAIAPI.OpenAI(this._client);
}

Providers.Anthropic = Anthropic;
Providers.OpenAI = OpenAI;

export declare namespace Providers {
  export {
    Anthropic as Anthropic,
    type AnthropicCreateResponse as AnthropicCreateResponse,
    type AnthropicRetrieveResponse as AnthropicRetrieveResponse,
    type AnthropicUpdateResponse as AnthropicUpdateResponse,
    type AnthropicListResponse as AnthropicListResponse,
    type AnthropicDeleteResponse as AnthropicDeleteResponse,
    type AnthropicListAgentsResponse as AnthropicListAgentsResponse,
    type AnthropicCreateParams as AnthropicCreateParams,
    type AnthropicUpdateParams as AnthropicUpdateParams,
    type AnthropicListParams as AnthropicListParams,
    type AnthropicListAgentsParams as AnthropicListAgentsParams,
  };

  export {
    OpenAI as OpenAI,
    type OpenAICreateResponse as OpenAICreateResponse,
    type OpenAIRetrieveResponse as OpenAIRetrieveResponse,
    type OpenAIUpdateResponse as OpenAIUpdateResponse,
    type OpenAIListResponse as OpenAIListResponse,
    type OpenAIDeleteResponse as OpenAIDeleteResponse,
    type OpenAIRetrieveAgentsResponse as OpenAIRetrieveAgentsResponse,
    type OpenAICreateParams as OpenAICreateParams,
    type OpenAIUpdateParams as OpenAIUpdateParams,
    type OpenAIListParams as OpenAIListParams,
    type OpenAIRetrieveAgentsParams as OpenAIRetrieveAgentsParams,
  };
}
