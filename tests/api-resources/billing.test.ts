// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billing', () => {
  // Prism tests are disabled
  test.skip('listInsights: only required params', async () => {
    const responsePromise = client.billing.listInsights('2025-01-31', {
      account_urn: 'do:team:12345678-1234-1234-1234-123456789012',
      start_date: '2025-01-01',
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
  test.skip('listInsights: required and optional params', async () => {
    const response = await client.billing.listInsights('2025-01-31', {
      account_urn: 'do:team:12345678-1234-1234-1234-123456789012',
      start_date: '2025-01-01',
      page: 1,
      per_page: 1,
    });
  });
});
