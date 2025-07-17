// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GradientAI from 'gradientai';

const client = new GradientAI({
  apiKey: 'My API Key',
  inferenceKey: 'My Inference Key',
  agentKey: 'My Agent Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.agents.versions.update('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.versions.update(
        '"123e4567-e89b-12d3-a456-426614174000"',
        {
          body_uuid: '"12345678-1234-1234-1234-123456789012"',
          version_hash: 'c3658d8b5c05494cd03ce042926ef08157889ed54b1b74b5ee0b3d66dcee4b73',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GradientAI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.agents.versions.list('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.versions.list(
        '"123e4567-e89b-12d3-a456-426614174000"',
        { page: 0, per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GradientAI.NotFoundError);
  });
});
