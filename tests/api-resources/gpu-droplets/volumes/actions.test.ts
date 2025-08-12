// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  modelAccessKey: 'My Model Access Key',
  agentAccessKey: 'My Agent Access Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.gpuDroplets.volumes.actions.retrieve(36804636, {
      volume_id: '7724db7c-e098-11e5-b522-000f53304e51',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.gpuDroplets.volumes.actions.retrieve(36804636, {
      volume_id: '7724db7c-e098-11e5-b522-000f53304e51',
      page: 1,
      per_page: 1,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.gpuDroplets.volumes.actions.list('7724db7c-e098-11e5-b522-000f53304e51');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.volumes.actions.list(
        '7724db7c-e098-11e5-b522-000f53304e51',
        { page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('initiateByID: only required params', async () => {
    const responsePromise = client.gpuDroplets.volumes.actions.initiateByID(
      '7724db7c-e098-11e5-b522-000f53304e51',
      { droplet_id: 11612190, type: 'attach' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('initiateByID: required and optional params', async () => {
    const response = await client.gpuDroplets.volumes.actions.initiateByID(
      '7724db7c-e098-11e5-b522-000f53304e51',
      {
        droplet_id: 11612190,
        type: 'attach',
        page: 1,
        per_page: 1,
        region: 'nyc3',
        tags: ['base-image', 'prod'],
      },
    );
  });

  // Prism tests are disabled
  test.skip('initiateByName: only required params', async () => {
    const responsePromise = client.gpuDroplets.volumes.actions.initiateByName({
      droplet_id: 11612190,
      type: 'attach',
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
  test.skip('initiateByName: required and optional params', async () => {
    const response = await client.gpuDroplets.volumes.actions.initiateByName({
      droplet_id: 11612190,
      type: 'attach',
      page: 1,
      per_page: 1,
      region: 'nyc3',
      tags: ['base-image', 'prod'],
    });
  });
});
