// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobInvocations', () => {
  // Prism tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.apps.jobInvocations.cancel('123e4567-e89b-12d3-a456-426', {
      app_id: '4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf',
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
  test.skip('cancel: required and optional params', async () => {
    const response = await client.apps.jobInvocations.cancel('123e4567-e89b-12d3-a456-426', {
      app_id: '4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf',
      job_name: 'job_name',
    });
  });
});
