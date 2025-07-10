// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'chat.completions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/chat/completions',
  operationId: 'createChatCompletion',
};

export const tool: Tool = {
  name: 'create_chat_completions',
  description: 'Creates a model response for the given chat conversation.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          messages: {
            type: 'array',
            description: 'A list of messages comprising the conversation so far.\n',
            items: {
              anyOf: [
                {
                  type: 'object',
                  title: 'System message',
                  description:
                    'System-provided instructions that the model should follow, regardless of\nmessages sent by the user.\n',
                  properties: {
                    content: {
                      anyOf: [
                        {
                          type: 'string',
                          title: 'Text content',
                          description: 'The contents of the system message.',
                        },
                        {
                          type: 'array',
                          title: 'Array of content parts',
                          description:
                            'An array of content parts with a defined type. For system messages, only type `text` is supported.',
                          items: {
                            type: 'string',
                          },
                        },
                      ],
                      description: 'The contents of the system message.',
                    },
                    role: {
                      type: 'string',
                      description: 'The role of the messages author, in this case `system`.',
                      enum: ['system'],
                    },
                  },
                  required: ['content', 'role'],
                },
                {
                  type: 'object',
                  title: 'Developer message',
                  description:
                    'Developer-provided instructions that the model should follow, regardless of\nmessages sent by the user.\n',
                  properties: {
                    content: {
                      anyOf: [
                        {
                          type: 'string',
                          title: 'Text content',
                          description: 'The contents of the developer message.',
                        },
                        {
                          type: 'array',
                          title: 'Array of content parts',
                          description:
                            'An array of content parts with a defined type. For developer messages, only type `text` is supported.',
                          items: {
                            type: 'string',
                          },
                        },
                      ],
                      description: 'The contents of the developer message.',
                    },
                    role: {
                      type: 'string',
                      description: 'The role of the messages author, in this case `developer`.',
                      enum: ['developer'],
                    },
                  },
                  required: ['content', 'role'],
                },
                {
                  type: 'object',
                  title: 'User message',
                  description:
                    'Messages sent by an end user, containing prompts or additional context\ninformation.\n',
                  properties: {
                    content: {
                      anyOf: [
                        {
                          type: 'string',
                          title: 'Text content',
                          description: 'The text contents of the message.',
                        },
                        {
                          type: 'array',
                          title: 'Array of content parts',
                          description:
                            'An array of content parts with a defined type. Supported options differ based on the model being used to generate the response.',
                          items: {
                            type: 'string',
                          },
                        },
                      ],
                      description: 'The contents of the user message.\n',
                    },
                    role: {
                      type: 'string',
                      description: 'The role of the messages author, in this case `user`.',
                      enum: ['user'],
                    },
                  },
                  required: ['content', 'role'],
                },
                {
                  type: 'object',
                  title: 'Assistant message',
                  description: 'Messages sent by the model in response to user messages.\n',
                  properties: {
                    role: {
                      type: 'string',
                      description: 'The role of the messages author, in this case `assistant`.',
                      enum: ['assistant'],
                    },
                    content: {
                      anyOf: [
                        {
                          type: 'string',
                          title: 'Text content',
                          description: 'The contents of the assistant message.',
                        },
                        {
                          type: 'array',
                          title: 'Array of content parts',
                          description:
                            'An array of content parts with a defined type. Can be one or more of type `text`, or exactly one of type `refusal`.',
                          items: {
                            type: 'string',
                          },
                        },
                      ],
                      description: 'The contents of the assistant message.\n',
                    },
                  },
                  required: ['role'],
                },
              ],
              description:
                'System-provided instructions that the model should follow, regardless of\nmessages sent by the user.\n',
            },
          },
          model: {
            type: 'string',
            description: 'Model ID used to generate the response.\n',
          },
          frequency_penalty: {
            type: 'number',
            description:
              "Number between -2.0 and 2.0. Positive values penalize new tokens based on\ntheir existing frequency in the text so far, decreasing the model's\nlikelihood to repeat the same line verbatim.\n",
          },
          logit_bias: {
            type: 'object',
            description:
              'Modify the likelihood of specified tokens appearing in the completion.\n\nAccepts a JSON object that maps tokens (specified by their token ID in the\ntokenizer) to an associated bias value from -100 to 100. Mathematically,\nthe bias is added to the logits generated by the model prior to sampling.\nThe exact effect will vary per model, but values between -1 and 1 should\ndecrease or increase likelihood of selection; values like -100 or 100\nshould result in a ban or exclusive selection of the relevant token.\n',
          },
          logprobs: {
            type: 'boolean',
            description:
              'Whether to return log probabilities of the output tokens or not. If true,\nreturns the log probabilities of each output token returned in the\n`content` of `message`.\n',
          },
          max_completion_tokens: {
            type: 'integer',
            description:
              'The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run.\n',
          },
          max_tokens: {
            type: 'integer',
            description:
              "The maximum number of tokens that can be generated in the completion.\n\nThe token count of your prompt plus `max_tokens` cannot exceed the model's context length.\n",
          },
          metadata: {
            type: 'object',
            description:
              'Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n',
          },
          n: {
            type: 'integer',
            description:
              'How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs.',
          },
          presence_penalty: {
            type: 'number',
            description:
              "Number between -2.0 and 2.0. Positive values penalize new tokens based on\nwhether they appear in the text so far, increasing the model's likelihood\nto talk about new topics.\n",
          },
          stop: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
            description:
              'Up to 4 sequences where the API will stop generating further tokens. The\nreturned text will not contain the stop sequence.\n',
          },
          stream: {
            type: 'string',
            description:
              'If set to true, the model response data will be streamed to the client\nas it is generated using server-sent events.',
            enum: [false],
          },
          stream_options: {
            type: 'object',
            description: 'Options for streaming response. Only set this when you set `stream: true`.\n',
            properties: {
              include_usage: {
                type: 'boolean',
                description:
                  'If set, an additional chunk will be streamed before the `data: [DONE]`\nmessage. The `usage` field on this chunk shows the token usage statistics\nfor the entire request, and the `choices` field will always be an empty\narray. \n\nAll other chunks will also include a `usage` field, but with a null\nvalue. **NOTE:** If the stream is interrupted, you may not receive the\nfinal usage chunk which contains the total token usage for the request.\n',
              },
            },
            required: [],
          },
          temperature: {
            type: 'number',
            description:
              'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\nWe generally recommend altering this or `top_p` but not both.\n',
          },
          top_logprobs: {
            type: 'integer',
            description:
              'An integer between 0 and 20 specifying the number of most likely tokens to\nreturn at each token position, each with an associated log probability.\n`logprobs` must be set to `true` if this parameter is used.\n',
          },
          top_p: {
            type: 'number',
            description:
              'An alternative to sampling with temperature, called nucleus sampling,\nwhere the model considers the results of the tokens with top_p probability\nmass. So 0.1 means only the tokens comprising the top 10% probability mass\nare considered.\n\nWe generally recommend altering this or `temperature` but not both.\n',
          },
          user: {
            type: 'string',
            description:
              'A unique identifier representing your end-user, which can help DigitalOcean to monitor and detect abuse.\n',
          },
        },
      },
      {
        type: 'object',
        properties: {
          messages: {
            type: 'array',
            description: 'A list of messages comprising the conversation so far.\n',
            items: {
              anyOf: [
                {
                  type: 'object',
                  title: 'System message',
                  description:
                    'System-provided instructions that the model should follow, regardless of\nmessages sent by the user.\n',
                  properties: {
                    content: {
                      anyOf: [
                        {
                          type: 'string',
                          title: 'Text content',
                          description: 'The contents of the system message.',
                        },
                        {
                          type: 'array',
                          title: 'Array of content parts',
                          description:
                            'An array of content parts with a defined type. For system messages, only type `text` is supported.',
                          items: {
                            type: 'string',
                          },
                        },
                      ],
                      description: 'The contents of the system message.',
                    },
                    role: {
                      type: 'string',
                      description: 'The role of the messages author, in this case `system`.',
                      enum: ['system'],
                    },
                  },
                  required: ['content', 'role'],
                },
                {
                  type: 'object',
                  title: 'Developer message',
                  description:
                    'Developer-provided instructions that the model should follow, regardless of\nmessages sent by the user.\n',
                  properties: {
                    content: {
                      anyOf: [
                        {
                          type: 'string',
                          title: 'Text content',
                          description: 'The contents of the developer message.',
                        },
                        {
                          type: 'array',
                          title: 'Array of content parts',
                          description:
                            'An array of content parts with a defined type. For developer messages, only type `text` is supported.',
                          items: {
                            type: 'string',
                          },
                        },
                      ],
                      description: 'The contents of the developer message.',
                    },
                    role: {
                      type: 'string',
                      description: 'The role of the messages author, in this case `developer`.',
                      enum: ['developer'],
                    },
                  },
                  required: ['content', 'role'],
                },
                {
                  type: 'object',
                  title: 'User message',
                  description:
                    'Messages sent by an end user, containing prompts or additional context\ninformation.\n',
                  properties: {
                    content: {
                      anyOf: [
                        {
                          type: 'string',
                          title: 'Text content',
                          description: 'The text contents of the message.',
                        },
                        {
                          type: 'array',
                          title: 'Array of content parts',
                          description:
                            'An array of content parts with a defined type. Supported options differ based on the model being used to generate the response.',
                          items: {
                            type: 'string',
                          },
                        },
                      ],
                      description: 'The contents of the user message.\n',
                    },
                    role: {
                      type: 'string',
                      description: 'The role of the messages author, in this case `user`.',
                      enum: ['user'],
                    },
                  },
                  required: ['content', 'role'],
                },
                {
                  type: 'object',
                  title: 'Assistant message',
                  description: 'Messages sent by the model in response to user messages.\n',
                  properties: {
                    role: {
                      type: 'string',
                      description: 'The role of the messages author, in this case `assistant`.',
                      enum: ['assistant'],
                    },
                    content: {
                      anyOf: [
                        {
                          type: 'string',
                          title: 'Text content',
                          description: 'The contents of the assistant message.',
                        },
                        {
                          type: 'array',
                          title: 'Array of content parts',
                          description:
                            'An array of content parts with a defined type. Can be one or more of type `text`, or exactly one of type `refusal`.',
                          items: {
                            type: 'string',
                          },
                        },
                      ],
                      description: 'The contents of the assistant message.\n',
                    },
                  },
                  required: ['role'],
                },
              ],
              description:
                'System-provided instructions that the model should follow, regardless of\nmessages sent by the user.\n',
            },
          },
          model: {
            type: 'string',
            description: 'Model ID used to generate the response.\n',
          },
          stream: {
            type: 'string',
            description:
              'If set to true, the model response data will be streamed to the client\nas it is generated using server-sent events.',
            enum: [true],
          },
          frequency_penalty: {
            type: 'number',
            description:
              "Number between -2.0 and 2.0. Positive values penalize new tokens based on\ntheir existing frequency in the text so far, decreasing the model's\nlikelihood to repeat the same line verbatim.\n",
          },
          logit_bias: {
            type: 'object',
            description:
              'Modify the likelihood of specified tokens appearing in the completion.\n\nAccepts a JSON object that maps tokens (specified by their token ID in the\ntokenizer) to an associated bias value from -100 to 100. Mathematically,\nthe bias is added to the logits generated by the model prior to sampling.\nThe exact effect will vary per model, but values between -1 and 1 should\ndecrease or increase likelihood of selection; values like -100 or 100\nshould result in a ban or exclusive selection of the relevant token.\n',
          },
          logprobs: {
            type: 'boolean',
            description:
              'Whether to return log probabilities of the output tokens or not. If true,\nreturns the log probabilities of each output token returned in the\n`content` of `message`.\n',
          },
          max_completion_tokens: {
            type: 'integer',
            description:
              'The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run.\n',
          },
          max_tokens: {
            type: 'integer',
            description:
              "The maximum number of tokens that can be generated in the completion.\n\nThe token count of your prompt plus `max_tokens` cannot exceed the model's context length.\n",
          },
          metadata: {
            type: 'object',
            description:
              'Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n',
          },
          n: {
            type: 'integer',
            description:
              'How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs.',
          },
          presence_penalty: {
            type: 'number',
            description:
              "Number between -2.0 and 2.0. Positive values penalize new tokens based on\nwhether they appear in the text so far, increasing the model's likelihood\nto talk about new topics.\n",
          },
          stop: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
            description:
              'Up to 4 sequences where the API will stop generating further tokens. The\nreturned text will not contain the stop sequence.\n',
          },
          stream_options: {
            type: 'object',
            description: 'Options for streaming response. Only set this when you set `stream: true`.\n',
            properties: {
              include_usage: {
                type: 'boolean',
                description:
                  'If set, an additional chunk will be streamed before the `data: [DONE]`\nmessage. The `usage` field on this chunk shows the token usage statistics\nfor the entire request, and the `choices` field will always be an empty\narray. \n\nAll other chunks will also include a `usage` field, but with a null\nvalue. **NOTE:** If the stream is interrupted, you may not receive the\nfinal usage chunk which contains the total token usage for the request.\n',
              },
            },
            required: [],
          },
          temperature: {
            type: 'number',
            description:
              'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\nWe generally recommend altering this or `top_p` but not both.\n',
          },
          top_logprobs: {
            type: 'integer',
            description:
              'An integer between 0 and 20 specifying the number of most likely tokens to\nreturn at each token position, each with an associated log probability.\n`logprobs` must be set to `true` if this parameter is used.\n',
          },
          top_p: {
            type: 'number',
            description:
              'An alternative to sampling with temperature, called nucleus sampling,\nwhere the model considers the results of the tokens with top_p probability\nmass. So 0.1 means only the tokens comprising the top 10% probability mass\nare considered.\n\nWe generally recommend altering this or `temperature` but not both.\n',
          },
          user: {
            type: 'string',
            description:
              'A unique identifier representing your end-user, which can help DigitalOcean to monitor and detect abuse.\n',
          },
        },
      },
    ],
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.chat.completions.create(body));
};

export default { metadata, tool, handler };
