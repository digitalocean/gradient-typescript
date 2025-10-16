// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gpuDroplets', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gpuDroplets.create({
      image: 'ubuntu-20-04-x64',
      name: 'example.com',
      size: 's-1vcpu-1gb',
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
    const response = await client.gpuDroplets.create({
      image: 'ubuntu-20-04-x64',
      name: 'example.com',
      size: 's-1vcpu-1gb',
      backup_policy: { hour: 0, plan: 'daily', weekday: 'SUN' },
      backups: true,
      ipv6: true,
      monitoring: true,
      private_networking: true,
      region: 'nyc3',
      ssh_keys: [289794, '3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45'],
      tags: ['env:prod', 'web'],
      user_data: '#cloud-config\nruncmd:\n  - touch /test.txt\n',
      volumes: ['12e97116-7280-11ed-b3d0-0a58ac146812'],
      vpc_uuid: '760e09ef-dc84-11e8-981e-3cfdfeaae000',
      with_droplet_agent: true,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gpuDroplets.retrieve(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.gpuDroplets.list();
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
      client.gpuDroplets.list(
        { name: 'name', page: 1, per_page: 1, tag_name: 'tag_name', type: 'droplets' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gpuDroplets.delete(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteByTag: only required params', async () => {
    const responsePromise = client.gpuDroplets.deleteByTag({ tag_name: 'tag_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteByTag: required and optional params', async () => {
    const response = await client.gpuDroplets.deleteByTag({ tag_name: 'tag_name' });
  });

  // Prism tests are disabled
  test.skip('listFirewalls', async () => {
    const responsePromise = client.gpuDroplets.listFirewalls(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFirewalls: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.listFirewalls(
        3164444,
        { page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listKernels', async () => {
    const responsePromise = client.gpuDroplets.listKernels(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listKernels: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.listKernels(3164444, { page: 1, per_page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listNeighbors', async () => {
    const responsePromise = client.gpuDroplets.listNeighbors(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listSnapshots', async () => {
    const responsePromise = client.gpuDroplets.listSnapshots(3164444);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listSnapshots: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.listSnapshots(
        3164444,
        { page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });
});
