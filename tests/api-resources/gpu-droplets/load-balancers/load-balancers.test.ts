// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  modelAccessKey: 'My Model Access Key',
  agentAccessKey: 'My Agent Access Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loadBalancers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.create({
      forwarding_rules: [
        { entry_port: 443, entry_protocol: 'https', target_port: 80, target_protocol: 'http' },
      ],
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
    const response = await client.gpuDroplets.loadBalancers.create({
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
      algorithm: 'round_robin',
      disable_lets_encrypt_dns_records: true,
      domains: [
        { certificate_id: '892071a0-bb95-49bc-8021-3afd67a210bf', is_managed: true, name: 'example.com' },
      ],
      droplet_ids: [3164444, 3164445],
      enable_backend_keepalive: true,
      enable_proxy_protocol: true,
      firewall: { allow: ['ip:1.2.3.4', 'cidr:2.3.0.0/16'], deny: ['ip:1.2.3.4', 'cidr:2.3.0.0/16'] },
      glb_settings: {
        cdn: { is_enabled: true },
        failover_threshold: 50,
        region_priorities: { nyc1: 1, fra1: 2, sgp1: 3 },
        target_port: 80,
        target_protocol: 'http',
      },
      health_check: {
        check_interval_seconds: 10,
        healthy_threshold: 3,
        path: '/',
        port: 80,
        protocol: 'http',
        response_timeout_seconds: 5,
        unhealthy_threshold: 5,
      },
      http_idle_timeout_seconds: 90,
      name: 'example-lb-01',
      network: 'EXTERNAL',
      network_stack: 'IPV4',
      project_id: '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      redirect_http_to_https: true,
      region: 'nyc3',
      size: 'lb-small',
      size_unit: 3,
      sticky_sessions: { cookie_name: 'DO-LB', cookie_ttl_seconds: 300, type: 'cookies' },
      target_load_balancer_ids: [
        '7dbf91fe-cbdb-48dc-8290-c3a181554905',
        '996fa239-fac3-42a2-b9a1-9fa822268b7a',
      ],
      tls_cipher_policy: 'STRONG',
      type: 'REGIONAL',
      vpc_uuid: 'c33931f2-a26a-4e61-b85c-4e95a2ec431b',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.retrieve('4de7ac8b-495b-4884-9a69-1050c6793cd6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.update('4de7ac8b-495b-4884-9a69-1050c6793cd6', {
      forwarding_rules: [
        { entry_port: 443, entry_protocol: 'https', target_port: 80, target_protocol: 'http' },
      ],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.gpuDroplets.loadBalancers.update('4de7ac8b-495b-4884-9a69-1050c6793cd6', {
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
      algorithm: 'round_robin',
      disable_lets_encrypt_dns_records: true,
      domains: [
        { certificate_id: '892071a0-bb95-49bc-8021-3afd67a210bf', is_managed: true, name: 'example.com' },
      ],
      droplet_ids: [3164444, 3164445],
      enable_backend_keepalive: true,
      enable_proxy_protocol: true,
      firewall: { allow: ['ip:1.2.3.4', 'cidr:2.3.0.0/16'], deny: ['ip:1.2.3.4', 'cidr:2.3.0.0/16'] },
      glb_settings: {
        cdn: { is_enabled: true },
        failover_threshold: 50,
        region_priorities: { nyc1: 1, fra1: 2, sgp1: 3 },
        target_port: 80,
        target_protocol: 'http',
      },
      health_check: {
        check_interval_seconds: 10,
        healthy_threshold: 3,
        path: '/',
        port: 80,
        protocol: 'http',
        response_timeout_seconds: 5,
        unhealthy_threshold: 5,
      },
      http_idle_timeout_seconds: 90,
      name: 'example-lb-01',
      network: 'EXTERNAL',
      network_stack: 'IPV4',
      project_id: '4de7ac8b-495b-4884-9a69-1050c6793cd6',
      redirect_http_to_https: true,
      region: 'nyc3',
      size: 'lb-small',
      size_unit: 3,
      sticky_sessions: { cookie_name: 'DO-LB', cookie_ttl_seconds: 300, type: 'cookies' },
      target_load_balancer_ids: [
        '7dbf91fe-cbdb-48dc-8290-c3a181554905',
        '996fa239-fac3-42a2-b9a1-9fa822268b7a',
      ],
      tls_cipher_policy: 'STRONG',
      type: 'REGIONAL',
      vpc_uuid: 'c33931f2-a26a-4e61-b85c-4e95a2ec431b',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.list();
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
      client.gpuDroplets.loadBalancers.list({ page: 1, per_page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.delete('4de7ac8b-495b-4884-9a69-1050c6793cd6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteCache', async () => {
    const responsePromise = client.gpuDroplets.loadBalancers.deleteCache(
      '4de7ac8b-495b-4884-9a69-1050c6793cd6',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
