// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GradientAI from 'gradientai';

const client = new GradientAI({
  apiKey: 'My API Key',
  inferenceKey: 'My Inference Key',
  agentKey: 'My Agent Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource firewalls', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.gpuDroplets.firewalls.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.firewalls.create(
        {
          body: {
            droplet_ids: [8043964],
            inbound_rules: [
              {
                ports: '80',
                protocol: 'tcp',
                sources: {
                  addresses: ['1.2.3.4', '18.0.0.0/8'],
                  droplet_ids: [8043964],
                  kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
                  load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
                  tags: ['base-image', 'prod'],
                },
              },
              {
                ports: '22',
                protocol: 'tcp',
                sources: {
                  addresses: ['18.0.0.0/8'],
                  droplet_ids: [8043964],
                  kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
                  load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
                  tags: ['gateway'],
                },
              },
            ],
            name: 'firewall',
            outbound_rules: [
              {
                destinations: {
                  addresses: ['0.0.0.0/0', '::/0'],
                  droplet_ids: [8043964],
                  kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
                  load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
                  tags: ['base-image', 'prod'],
                },
                ports: '80',
                protocol: 'tcp',
              },
            ],
            tags: ['base-image', 'prod'],
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GradientAI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.gpuDroplets.firewalls.retrieve('bb4b2611-3d72-467b-8602-280330ecd65c');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.gpuDroplets.firewalls.update('bb4b2611-3d72-467b-8602-280330ecd65c', {
      firewall: { name: 'frontend-firewall' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.gpuDroplets.firewalls.update('bb4b2611-3d72-467b-8602-280330ecd65c', {
      firewall: {
        droplet_ids: [8043964],
        inbound_rules: [
          {
            ports: '8080',
            protocol: 'tcp',
            sources: {
              addresses: ['1.2.3.4', '18.0.0.0/8'],
              droplet_ids: [8043964],
              kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
              load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
              tags: ['base-image', 'prod'],
            },
          },
          {
            ports: '22',
            protocol: 'tcp',
            sources: {
              addresses: ['18.0.0.0/8'],
              droplet_ids: [8043964],
              kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
              load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
              tags: ['gateway'],
            },
          },
        ],
        name: 'frontend-firewall',
        outbound_rules: [
          {
            destinations: {
              addresses: ['0.0.0.0/0', '::/0'],
              droplet_ids: [8043964],
              kubernetes_ids: ['41b74c5d-9bd0-5555-5555-a57c495b81a3'],
              load_balancer_uids: ['4de7ac8b-495b-4884-9a69-1050c6793cd6'],
              tags: ['base-image', 'prod'],
            },
            ports: '8080',
            protocol: 'tcp',
          },
        ],
        tags: ['frontend'],
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.gpuDroplets.firewalls.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.firewalls.list({ page: 1, per_page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(GradientAI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.gpuDroplets.firewalls.delete('bb4b2611-3d72-467b-8602-280330ecd65c');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
