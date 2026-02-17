// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource responses', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.responses.create({
      input: 'Tell me a three-sentence bedtime story about a unicorn.',
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
    const response = await client.responses.create({
      input: 'Tell me a three-sentence bedtime story about a unicorn.',
      model: 'llama3-8b-instruct',
      instructions: 'You are a helpful assistant.',
      max_output_tokens: 1024,
      max_tokens: 1024,
      metadata: { foo: 'string' },
      modalities: ['text'],
      parallel_tool_calls: true,
      stop: '\n',
      stream: false,
      stream_options: { include_usage: true },
      temperature: 1,
      tool_choice: 'none',
      tools: [
        {
          type: 'function',
          description: 'description',
          name: 'name',
          parameters: { foo: 'bar' },
        },
      ],
      top_p: 1,
      user: 'user-1234',
    });
  });
});
