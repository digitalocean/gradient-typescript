// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnthropicAPI from './anthropic/anthropic';
import { Anthropic } from './anthropic/anthropic';
import * as OpenAIAPI from './openai/openai';
import { OpenAI } from './openai/openai';

export class ModelProviders extends APIResource {
  anthropic: AnthropicAPI.Anthropic = new AnthropicAPI.Anthropic(this._client);
  openai: OpenAIAPI.OpenAI = new OpenAIAPI.OpenAI(this._client);
}

ModelProviders.Anthropic = Anthropic;
ModelProviders.OpenAI = OpenAI;

export declare namespace ModelProviders {
  export { Anthropic as Anthropic };

  export { OpenAI as OpenAI };
}
