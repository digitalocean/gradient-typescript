// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  modelAccessKey: 'My Model Access Key',
  agentAccessKey: 'My Agent Access Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  // skipped: tests are disabled for the time being
  test.skip('add', async () => {
    const responsePromise = client.gpuDroplets.firewalls.rules.add('bb4b2611-3d72-467b-8602-280330ecd65c');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('add: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.firewalls.rules.add(
        'bb4b2611-3d72-467b-8602-280330ecd65c',
        {
          inbound_rules: [
            {
              ports: '3306',
              protocol: 'tcp',
              sources: {
                addresses: ['1.2.3.4', '18.0.0.0/8'],
                droplet_ids: [49696269],
                kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
                load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
                tags: ['base-image', 'prod'],
              },
            },
          ],
          outbound_rules: [
            {
              destinations: {
                addresses: ['1.2.3.4', '18.0.0.0/8'],
                droplet_ids: [49696269],
                kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
                load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
                tags: ['base-image', 'prod'],
              },
              ports: '3306',
              protocol: 'tcp',
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('remove', async () => {
    const responsePromise = client.gpuDroplets.firewalls.rules.remove('bb4b2611-3d72-467b-8602-280330ecd65c');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('remove: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.firewalls.rules.remove(
        'bb4b2611-3d72-467b-8602-280330ecd65c',
        {
          inbound_rules: [
            {
              ports: '3306',
              protocol: 'tcp',
              sources: {
                addresses: ['1.2.3.4', '18.0.0.0/8'],
                droplet_ids: [49696269],
                kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
                load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
                tags: ['base-image', 'prod'],
              },
            },
          ],
          outbound_rules: [
            {
              destinations: {
                addresses: ['1.2.3.4', '18.0.0.0/8'],
                droplet_ids: [49696269],
                kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
                load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
                tags: ['base-image', 'prod'],
              },
              ports: '3306',
              protocol: 'tcp',
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });
});
