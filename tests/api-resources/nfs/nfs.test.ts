// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({ accessToken: 'My Access Token', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource nfs', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.nfs.create({
    name: 'sammy-share-drive',
    region: 'atl1',
    size_gib: 1024,
    vpc_ids: ['796c6fe3-2a1d-4da2-9f3e-38239827dc91'],
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.nfs.create({
    name: 'sammy-share-drive',
    region: 'atl1',
    size_gib: 1024,
    vpc_ids: ['796c6fe3-2a1d-4da2-9f3e-38239827dc91'],
    performance_tier: 'standard',
  });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.nfs.retrieve('0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.nfs.retrieve('0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d', { region: 'region' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Gradient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.nfs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.nfs.list({ region: 'region' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Gradient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.nfs.delete('0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.nfs.delete('0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d', { region: 'region' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Gradient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('initiateAction: only required params', async () => {
    const responsePromise = client.nfs.initiateAction('0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d', { type: 'resize' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('initiateAction: required and optional params', async () => {
    const response = await client.nfs.initiateAction('0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d', {
    type: 'resize',
    params: { size_gib: 2048 },
    region: 'atl1',
  });
  });
});
