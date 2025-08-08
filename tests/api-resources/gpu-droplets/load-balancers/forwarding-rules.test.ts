// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  modelAccessKey: 'My Model Access Key',
  agentAccessKey: 'My Agent Access Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource forwardingRules', () => {
  // skipped: tests are disabled for the time being
  test.skip('add: only required params', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.forwardingRules.add(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      {
        forwarding_rules: [
          { entry_port: 443, entry_protocol: 'https', target_port: 80, target_protocol: 'http' },
        ],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('add: required and optional params', async () => {
    const response = await client.gpuDroplets.loadBalancers.forwardingRules.add(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      {
        forwarding_rules: [
          {
            entry_port: 443,
            entry_protocol: 'https',
            target_port: 80,
            target_protocol: 'http',
            certificate_id: '892071a0-bb95-49bc-8021-3afd67a210bf',
            tls_passthrough: false,
          },
        ],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('remove: only required params', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.forwardingRules.remove(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      {
        forwarding_rules: [
          { entry_port: 443, entry_protocol: 'https', target_port: 80, target_protocol: 'http' },
        ],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('remove: required and optional params', async () => {
    const response = await client.gpuDroplets.loadBalancers.forwardingRules.remove(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      {
        forwarding_rules: [
          {
            entry_port: 443,
            entry_protocol: 'https',
            target_port: 80,
            target_protocol: 'http',
            certificate_id: '892071a0-bb95-49bc-8021-3afd67a210bf',
            tls_passthrough: false,
          },
        ],
      },
    );
  });
});
