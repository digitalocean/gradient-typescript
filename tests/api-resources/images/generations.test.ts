// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  modelAccessKey: 'My Model Access Key',
  agentAccessKey: 'My Agent Access Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource generations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.images.generations.create({
      prompt: 'A cute baby sea otter floating on its back in calm blue water',
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
    const response = await client.images.generations.create({
      prompt: 'A cute baby sea otter floating on its back in calm blue water',
      background: 'auto',
      model: 'openai-gpt-image-1',
      moderation: 'auto',
      n: 1,
      output_compression: 100,
      output_format: 'png',
      partial_images: 1,
      quality: 'auto',
      size: 'auto',
      stream: false,
      user: 'user-1234',
    });
  });
});
