// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ResponsesAPI from './responses';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Stream } from '../core/streaming';
import { RequestOptions } from '../internal/request-options';

/**
 * Generate text-to-text responses from text prompts.
 */
export class Responses extends APIResource {
  /**
   * Generate text responses from text prompts. This endpoint supports both streaming
   * and non-streaming responses for VLLM models only.
   *
   * @example
   * ```ts
   * const createResponseResponse =
   *   await client.responses.create({
   *     input:
   *       'Tell me a three-sentence bedtime story about a unicorn.',
   *     model: 'llama3-8b-instruct',
   *   });
   * ```
   */
  create(body: ResponseCreateParamsNonStreaming, options?: RequestOptions): APIPromise<Shared.CreateResponseResponse>
  create(body: ResponseCreateParamsStreaming, options?: RequestOptions): APIPromise<Stream<Shared.CreateResponseStreamResponse>>
  create(body: ResponseCreateParamsBase, options?: RequestOptions): APIPromise<Stream<Shared.CreateResponseStreamResponse> | Shared.CreateResponseResponse>
  create(body: ResponseCreateParams, options?: RequestOptions): APIPromise<Shared.CreateResponseResponse> | APIPromise<Stream<Shared.CreateResponseStreamResponse>> {
    return this._client.post('/responses', { body, defaultBaseURL: 'https://inference.do-ai.run/v1', ...options, stream: body.stream ?? false }) as APIPromise<Shared.CreateResponseResponse> | APIPromise<Stream<Shared.CreateResponseStreamResponse>>;
  }
}

export type ResponseCreateParams = ResponseCreateParamsNonStreaming | ResponseCreateParamsStreaming

export interface ResponseCreateParamsBase {
  /**
   * The input text prompt or conversation history. Can be a string or an array of
   * message objects for conversation context.
   */
  input: string | Array<ResponseCreateParams.UnionMember0 | ResponseCreateParams.UnionMember1>;

  /**
   * Model ID used to generate the response. Must be a VLLM model.
   */
  model: string;

  /**
   * System-level instructions for the model. This sets the behavior and context for
   * the response generation.
   */
  instructions?: string | null;

  /**
   * Maximum number of tokens to generate in the response. If not specified, the
   * model will use a default value.
   */
  max_output_tokens?: number | null;

  /**
   * The maximum number of tokens that can be generated in the completion. Alias for
   * max_output_tokens for compatibility.
   */
  max_tokens?: number | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard.
   *
   * Keys are strings with a maximum length of 64 characters. Values are strings with
   * a maximum length of 512 characters.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Specifies the output types the model should generate. For text-to-text, this
   * should be ["text"].
   */
  modalities?: Array<'text'> | null;

  /**
   * Whether to enable parallel tool calls. When true, the model can make multiple
   * tool calls in parallel.
   */
  parallel_tool_calls?: boolean | null;

  /**
   * Up to 4 sequences where the API will stop generating further tokens. The
   * returned text will not contain the stop sequence.
   */
  stop?: string | null | Array<string>;

  /**
   * If set to true, the model response data will be streamed to the client as it is
   * generated using server-sent events.
   */
  stream?: boolean | null;

  /**
   * Options for streaming response. Only set this when you set `stream: true`.
   */
  stream_options?: ResponseCreateParams.StreamOptions | null;

  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
   * make the output more random, while lower values like 0.2 will make it more
   * focused and deterministic. We generally recommend altering this or `top_p` but
   * not both.
   */
  temperature?: number | null;

  /**
   * Controls which (if any) tool is called by the model. `none` means the model will
   * not call any tool and instead generates a message. `auto` means the model can
   * pick between generating a message or calling one or more tools. `required` means
   * the model must call one or more tools. Specifying a particular tool via
   * `{"type": "function", "function": {"name": "my_function"}}` forces the model to
   * call that tool.
   *
   * `none` is the default when no tools are present. `auto` is the default if tools
   * are present.
   */
  tool_choice?: 'none' | 'auto' | 'required' | ResponseCreateParams.ChatCompletionNamedToolChoice;

  /**
   * A list of tools the model may call. Currently, only functions are supported as a
   * tool. Uses Responses API format (with `name`, `description`, `parameters` at top
   * level).
   */
  tools?: Array<ResponseCreateParams.Tool>;

  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the
   * model considers the results of the tokens with top_p probability mass. So 0.1
   * means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or `temperature` but not both.
   */
  top_p?: number | null;

  /**
   * A unique identifier representing your end-user, which can help DigitalOcean to
   * monitor and detect abuse.
   */
  user?: string;

[k: string]: unknown
}

export namespace ResponseCreateParams {
  export interface UnionMember0 {
    /**
     * The type of input item (must be function_call, function_call_output, or
     * reasoning)
     */
    type: 'function_call' | 'function_call_output' | 'reasoning';

    /**
     * The unique ID of the reasoning item (optional for reasoning)
     */
    id?: string;

    /**
     * JSON string of function arguments (required for function_call)
     */
    arguments?: string;

    /**
     * The call ID (required for function_call and function_call_output)
     */
    call_id?: string;

    /**
     * Array of reasoning content parts (optional for reasoning, can be null)
     */
    content?: Array<UnionMember0.Content> | null;

    /**
     * Encrypted content (optional)
     */
    encrypted_content?: string | null;

    /**
     * The function name (required for function_call)
     */
    name?: string;

    /**
     * JSON string of function output (required for function_call_output)
     */
    output?: string;

    /**
     * Status of the item (optional, can be null)
     */
    status?: string | null;

    /**
     * Summary of the reasoning (optional for reasoning)
     */
    summary?: Array<unknown>;

  [k: string]: unknown
  }

  export namespace UnionMember0 {
    export interface Content {
      /**
       * The reasoning text content
       */
      text?: string;

      /**
       * The type of content
       */
      type?: 'reasoning_text';

    [k: string]: unknown
    }
  }

  export interface UnionMember1 {
    /**
     * The content of the message (string or content parts array)
     */
    content: string | Array<UnionMember1.UnionMember0 | { [key: string]: unknown }>;

    /**
     * The role of the message author
     */
    role?: 'user' | 'assistant' | 'system' | 'tool' | 'developer';

    /**
     * Tool call ID that this message is responding to (required for tool role)
     */
    tool_call_id?: string;

    /**
     * Tool calls made by the assistant (for assistant role messages)
     */
    tool_calls?: Array<UnionMember1.ToolCall>;

    /**
     * Optional type identifier for message items (used by some clients like Codex)
     */
    type?: 'message';

  [k: string]: unknown
  }

  export namespace UnionMember1 {
    export interface UnionMember0 {
      /**
       * The text content
       */
      text: string;

      /**
       * The type of content part
       */
      type: 'input_text';
    }

    export interface ToolCall {
      /**
       * The ID of the tool call.
       */
      id: string;

      /**
       * The function that the model called.
       */
      function: ToolCall.Function;

      /**
       * The type of the tool. Currently, only `function` is supported.
       */
      type: 'function';
    }

    export namespace ToolCall {
      /**
       * The function that the model called.
       */
      export interface Function {
        /**
         * The arguments to call the function with, as generated by the model in JSON
         * format. Note that the model does not always generate valid JSON, and may
         * hallucinate parameters not defined by your function schema. Validate the
         * arguments in your code before calling your function.
         */
        arguments: string;

        /**
         * The name of the function to call.
         */
        name: string;
      }
    }
  }

  /**
   * Options for streaming response. Only set this when you set `stream: true`.
   */
  export interface StreamOptions {
    /**
     * If set, an additional chunk will be streamed before the `data: [DONE]` message.
     * The `usage` field on this chunk shows the token usage statistics for the entire
     * request, and the `choices` field will always be an empty array.
     *
     * All other chunks will also include a `usage` field, but with a null value.
     * **NOTE:** If the stream is interrupted, you may not receive the final usage
     * chunk which contains the total token usage for the request.
     */
    include_usage?: boolean;
  }

  /**
   * Specifies a tool the model should use. Use to force the model to call a specific
   * function.
   */
  export interface ChatCompletionNamedToolChoice {
    function: ChatCompletionNamedToolChoice.Function;

    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    type: 'function';
  }

  export namespace ChatCompletionNamedToolChoice {
    export interface Function {
      /**
       * The name of the function to call.
       */
      name: string;
    }
  }

  /**
   * Tool definition for Responses API (flat format). This format is used by VLLM's
   * Responses API where name, description, and parameters are at the top level of
   * the tool object.
   */
  export interface Tool {
    /**
     * The type of the tool. Supported values are `function` (custom tools),
     * `web_search`, and `web_search_2025_08_26` (built-in web search).
     */
    type: 'function' | 'web_search' | 'web_search_2025_08_26';

    /**
     * A description of what the function does, used by the model to choose when and
     * how to call the function.
     */
    description?: string;

    /**
     * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
     * underscores and dashes, with a maximum length of 64.
     */
    name?: string;

    /**
     * The parameters the functions accepts, described as a JSON Schema object. See the
     * [guide](/docs/guides/function-calling) for examples, and the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
     * documentation about the format.
     *
     * Omitting `parameters` defines a function with an empty parameter list.
     */
    parameters?: { [key: string]: unknown };
  }

  export type ResponseCreateParamsNonStreaming = ResponsesAPI.ResponseCreateParamsNonStreaming
  export type ResponseCreateParamsStreaming = ResponsesAPI.ResponseCreateParamsStreaming
}

export interface ResponseCreateParamsNonStreaming extends ResponseCreateParamsBase {
  /**
   * If set to true, the model response data will be streamed to the client as it is
   * generated using server-sent events.
   */
  stream?: false | null;

[k: string]: unknown
}

export interface ResponseCreateParamsStreaming extends ResponseCreateParamsBase {
  /**
   * If set to true, the model response data will be streamed to the client as it is
   * generated using server-sent events.
   */
  stream: true;

[k: string]: unknown
}

export declare namespace Responses {
  export {
    type ResponseCreateParams as ResponseCreateParams,
    type ResponseCreateParamsNonStreaming as ResponseCreateParamsNonStreaming,
    type ResponseCreateParamsStreaming as ResponseCreateParamsStreaming
  };
}
