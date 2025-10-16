// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource destroyWithAssociatedResources', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.gpuDroplets.destroyWithAssociatedResources.list(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkStatus', async () => {
    const responsePromise = client.gpuDroplets.destroyWithAssociatedResources.checkStatus(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteDangerous: only required params', async () => {
    const responsePromise = client.gpuDroplets.destroyWithAssociatedResources.deleteDangerous(3164444, {
      'X-Dangerous': true,
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
  test.skip('deleteDangerous: required and optional params', async () => {
    const response = await client.gpuDroplets.destroyWithAssociatedResources.deleteDangerous(3164444, {
      'X-Dangerous': true,
    });
  });

  // Prism tests are disabled
  test.skip('deleteSelective', async () => {
    const responsePromise = client.gpuDroplets.destroyWithAssociatedResources.deleteSelective(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteSelective: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.destroyWithAssociatedResources.deleteSelective(
        3164444,
        {
          floating_ips: ['6186916'],
          reserved_ips: ['6186916'],
          snapshots: ['61486916'],
          volume_snapshots: ['edb0478d-7436-11ea-86e6-0a58ac144b91'],
          volumes: ['ba49449a-7435-11ea-b89e-0a58ac14480f'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retry', async () => {
    const responsePromise = client.gpuDroplets.destroyWithAssociatedResources.retry(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
