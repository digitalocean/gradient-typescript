// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource droplets', () => {
  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.droplets.add(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      { droplet_ids: [3164444, 3164445] },
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
    const response = await client.gpuDroplets.loadBalancers.droplets.add(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      { droplet_ids: [3164444, 3164445] },
    );
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.droplets.remove(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      { droplet_ids: [3164444, 3164445] },
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
    const response = await client.gpuDroplets.loadBalancers.droplets.remove(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      { droplet_ids: [3164444, 3164445] },
    );
  });
});
