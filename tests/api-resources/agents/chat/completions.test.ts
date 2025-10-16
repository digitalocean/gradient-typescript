// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agents.chat.completions.create({
      messages: [{ content: 'string', role: 'system' }],
      model: 'llama3-8b-instruct',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.agents.chat.completions.create({
      messages: [{ content: 'string', role: 'system' }],
      model: 'llama3-8b-instruct',
      frequency_penalty: -2,
      logit_bias: { foo: 0 },
      logprobs: true,
      max_completion_tokens: 256,
      max_tokens: 0,
      metadata: { foo: 'string' },
      n: 1,
      presence_penalty: -2,
      stop: '\n',
      stream: false,
      stream_options: { include_usage: true },
      temperature: 1,
      tool_choice: 'none',
      tools: [
        {
          function: { name: 'name', description: 'description', parameters: { foo: 'bar' } },
          type: 'function',
        },
      ],
      top_logprobs: 0,
      top_p: 1,
      user: 'user-1234',
    });
  });
});
