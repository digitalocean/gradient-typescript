// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource droplets', () => {
  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.gpuDroplets.firewalls.droplets.add(
      'bb4b2611-3d72-467b-8602-280330ecd65c',
      { droplet_ids: [49696269] },
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
  test.skip('add: required and optional params', async () => {
    const response = await client.gpuDroplets.firewalls.droplets.add('bb4b2611-3d72-467b-8602-280330ecd65c', {
      droplet_ids: [49696269],
    });
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.gpuDroplets.firewalls.droplets.remove(
      'bb4b2611-3d72-467b-8602-280330ecd65c',
      { droplet_ids: [49696269] },
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.gpuDroplets.firewalls.droplets.remove(
      'bb4b2611-3d72-467b-8602-280330ecd65c',
      { droplet_ids: [49696269] },
    );
  });
});
