// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GenerationsAPI from './generations';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { RequestOptions } from '../../internal/request-options';

export class Generations extends APIResource {
  /**
   * Creates a high-quality image from a text prompt using GPT-IMAGE-1, the latest
   * image generation model with automatic prompt optimization and enhanced visual
   * capabilities.
   *
   * @example
   * ```ts
   * const generation = await client.images.generations.create({
   *   prompt:
   *     'A cute baby sea otter floating on its back in calm blue water',
   * });
   * ```
   */
  create(
    body: GenerationCreateParamsNonStreaming,
    options?: RequestOptions,
  ): APIPromise<GenerationCreateResponse>;
  create(
    body: GenerationCreateParamsStreaming,
    options?: RequestOptions,
  ): APIPromise<Stream<Shared.ImageGenStreamEvent>>;
  create(
    body: GenerationCreateParamsBase,
    options?: RequestOptions,
  ): APIPromise<Stream<Shared.ImageGenStreamEvent> | GenerationCreateResponse>;
  create(
    body: GenerationCreateParams,
    options?: RequestOptions,
  ): APIPromise<GenerationCreateResponse> | APIPromise<Stream<Shared.ImageGenStreamEvent>> {
    return this._client.post('/images/generations', {
      body,
      defaultBaseURL: '{inferenceEndpoint}/v1',
      ...options,
      stream: body.stream ?? false,
    }) as APIPromise<GenerationCreateResponse> | APIPromise<Stream<Shared.ImageGenStreamEvent>>;
  }
}

/**
 * The response from the image generation endpoint
 */
export interface GenerationCreateResponse {
  /**
   * The Unix timestamp (in seconds) of when the images were created
   */
  created: number;

  /**
   * The list of generated images
   */
  data: Array<GenerationCreateResponse.Data>;

  /**
   * The background setting used for the image generation
   */
  background?: string | null;

  /**
   * The output format of the generated image
   */
  output_format?: string | null;

  /**
   * The quality setting used for the image generation
   */
  quality?: string | null;

  /**
   * The size of the generated image
   */
  size?: string | null;

  /**
   * Usage statistics for the image generation request
   */
  usage?: GenerationCreateResponse.Usage | null;
}

export namespace GenerationCreateResponse {
  /**
   * Represents the content of a generated image from GPT-IMAGE-1
   */
  export interface Data {
    /**
     * The base64-encoded JSON of the generated image. GPT-IMAGE-1 returns images in
     * b64_json format only.
     */
    b64_json: string;

    /**
     * The optimized prompt that was used to generate the image. GPT-IMAGE-1
     * automatically optimizes prompts for best results.
     */
    revised_prompt?: string;
  }

  /**
   * Usage statistics for the image generation request
   */
  export interface Usage {
    /**
     * Number of tokens in the input prompt
     */
    input_tokens: number;

    /**
     * Total number of tokens used (input + output)
     */
    total_tokens: number;

    /**
     * Detailed breakdown of input tokens
     */
    input_tokens_details?: Usage.InputTokensDetails | null;

    /**
     * Number of tokens in the generated output
     */
    output_tokens?: number;
  }

  export namespace Usage {
    /**
     * Detailed breakdown of input tokens
     */
    export interface InputTokensDetails {
      /**
       * Number of text tokens in the input
       */
      text_tokens?: number;
    }
  }
}

export type GenerationCreateParams = GenerationCreateParamsNonStreaming | GenerationCreateParamsStreaming;

export interface GenerationCreateParamsBase {
  /**
   * A text description of the desired image(s). GPT-IMAGE-1 supports up to 32,000
   * characters and provides automatic prompt optimization for best results.
   */
  prompt: string;

  /**
   * The background setting for the image generation. GPT-IMAGE-1 supports:
   * transparent, opaque, auto.
   */
  background?: string | null;

  /**
   * The model to use for image generation. GPT-IMAGE-1 is the latest model offering
   * the best quality with automatic optimization and enhanced capabilities.
   */
  model?: string;

  /**
   * The moderation setting for the image generation. GPT-IMAGE-1 supports: low,
   * auto.
   */
  moderation?: string | null;

  /**
   * The number of images to generate. GPT-IMAGE-1 only supports n=1.
   */
  n?: number | null;

  /**
   * The output compression for the image generation. GPT-IMAGE-1 supports: 0-100.
   */
  output_compression?: number | null;

  /**
   * The output format for the image generation. GPT-IMAGE-1 supports: png, webp,
   * jpeg.
   */
  output_format?: string | null;

  /**
   * The number of partial image chunks to return during streaming generation. This
   * parameter is optional with a default of 0. When stream=true, this must be
   * greater than 0 to receive progressive updates of the image as it's being
   * generated. Higher values provide more frequent updates but may increase response
   * overhead.
   */
  partial_images?: number | null;

  /**
   * The quality of the image that will be generated. GPT-IMAGE-1 supports: auto
   * (automatically select best quality), high, medium, low.
   */
  quality?: string | null;

  /**
   * The size of the generated images. GPT-IMAGE-1 supports: auto (automatically
   * select best size), 1536x1024 (landscape), 1024x1536 (portrait).
   */
  size?: string | null;

  /**
   * If set to true, partial image data will be streamed as the image is being
   * generated. When streaming, the response will be sent as server-sent events with
   * partial image chunks. When stream is true, partial_images must be greater
   * than 0.
   */
  stream?: boolean | null;

  /**
   * A unique identifier representing your end-user, which can help DigitalOcean to
   * monitor and detect abuse.
   */
  user?: string | null;
}

export namespace GenerationCreateParams {
  export type GenerationCreateParamsNonStreaming = GenerationsAPI.GenerationCreateParamsNonStreaming;
  export type GenerationCreateParamsStreaming = GenerationsAPI.GenerationCreateParamsStreaming;
}

export interface GenerationCreateParamsNonStreaming extends GenerationCreateParamsBase {
  /**
   * If set to true, partial image data will be streamed as the image is being
   * generated. When streaming, the response will be sent as server-sent events with
   * partial image chunks. When stream is true, partial_images must be greater
   * than 0.
   */
  stream?: false | null;
}

export interface GenerationCreateParamsStreaming extends GenerationCreateParamsBase {
  /**
   * If set to true, partial image data will be streamed as the image is being
   * generated. When streaming, the response will be sent as server-sent events with
   * partial image chunks. When stream is true, partial_images must be greater
   * than 0.
   */
  stream: true;
}

export declare namespace Generations {
  export {
    type GenerationCreateResponse as GenerationCreateResponse,
    type GenerationCreateParams as GenerationCreateParams,
    type GenerationCreateParamsNonStreaming as GenerationCreateParamsNonStreaming,
    type GenerationCreateParamsStreaming as GenerationCreateParamsStreaming,
  };
}
