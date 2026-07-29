// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({ accessToken: 'My Access Token', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource retrieve', () => {
  // Mock server tests are disabled
  test.skip('documents: only required params', async () => {
    const responsePromise = client.retrieve.documents('550e8400-e29b-41d4-a716-446655440000', { num_results: 5, query: 'What are the best practices for deploying machine learning models?' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('documents: required and optional params', async () => {
    const response = await client.retrieve.documents('550e8400-e29b-41d4-a716-446655440000', {
    num_results: 5,
    query: 'What are the best practices for deploying machine learning models?',
    alpha: 0.75,
    filters: {
    must: [{
    field: 'category',
    operator: 'eq',
    value: 'documentation',
  }],
    must_not: [{
    field: 'category',
    operator: 'eq',
    value: 'documentation',
  }],
    should: [{
    field: 'category',
    operator: 'eq',
    value: 'documentation',
  }],
  },
  });
  });
});
