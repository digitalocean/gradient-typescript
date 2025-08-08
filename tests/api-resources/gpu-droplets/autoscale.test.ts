// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  modelAccessKey: 'My Model Access Key',
  agentAccessKey: 'My Agent Access Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource autoscale', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.gpuDroplets.autoscale.create({
      config: { max_instances: 5, min_instances: 1 },
      droplet_template: {
        image: 'ubuntu-20-04-x64',
        region: 'nyc3',
        size: 'c-2',
        ssh_keys: ['3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45'],
      },
      name: 'my-autoscale-pool',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.gpuDroplets.autoscale.create({
      config: {
        max_instances: 5,
        min_instances: 1,
        cooldown_minutes: 10,
        target_cpu_utilization: 0.5,
        target_memory_utilization: 0.6,
      },
      droplet_template: {
        image: 'ubuntu-20-04-x64',
        region: 'nyc3',
        size: 'c-2',
        ssh_keys: ['3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45'],
        ipv6: true,
        name: 'example.com',
        project_id: '746c6152-2fa2-11ed-92d3-27aaa54e4988',
        tags: ['env:prod', 'web'],
        user_data: '#cloud-config\nruncmd:\n  - touch /test.txt\n',
        vpc_uuid: '760e09ef-dc84-11e8-981e-3cfdfeaae000',
        with_droplet_agent: true,
      },
      name: 'my-autoscale-pool',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.gpuDroplets.autoscale.retrieve('0d3db13e-a604-4944-9827-7ec2642d32ac');
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
    const responsePromise = client.gpuDroplets.autoscale.update('0d3db13e-a604-4944-9827-7ec2642d32ac', {
      config: { target_number_instances: 2 },
      droplet_template: {
        image: 'ubuntu-20-04-x64',
        region: 'nyc3',
        size: 'c-2',
        ssh_keys: ['3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45'],
      },
      name: 'my-autoscale-pool',
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
    const response = await client.gpuDroplets.autoscale.update('0d3db13e-a604-4944-9827-7ec2642d32ac', {
      config: { target_number_instances: 2 },
      droplet_template: {
        image: 'ubuntu-20-04-x64',
        region: 'nyc3',
        size: 'c-2',
        ssh_keys: ['3b:16:e4:bf:8b:00:8b:b8:59:8c:a9:d3:f0:19:fa:45'],
        ipv6: true,
        name: 'example.com',
        project_id: '746c6152-2fa2-11ed-92d3-27aaa54e4988',
        tags: ['env:prod', 'web'],
        user_data: '#cloud-config\nruncmd:\n  - touch /test.txt\n',
        vpc_uuid: '760e09ef-dc84-11e8-981e-3cfdfeaae000',
        with_droplet_agent: true,
      },
      name: 'my-autoscale-pool',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.gpuDroplets.autoscale.list();
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
      client.gpuDroplets.autoscale.list(
        { name: 'name', page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.gpuDroplets.autoscale.delete('0d3db13e-a604-4944-9827-7ec2642d32ac');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteDangerous: only required params', async () => {
    const responsePromise = client.gpuDroplets.autoscale.deleteDangerous(
      '0d3db13e-a604-4944-9827-7ec2642d32ac',
      { 'X-Dangerous': true },
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
  test.skip('deleteDangerous: required and optional params', async () => {
    const response = await client.gpuDroplets.autoscale.deleteDangerous(
      '0d3db13e-a604-4944-9827-7ec2642d32ac',
      { 'X-Dangerous': true },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listHistory', async () => {
    const responsePromise = client.gpuDroplets.autoscale.listHistory('0d3db13e-a604-4944-9827-7ec2642d32ac');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.autoscale.listHistory(
        '0d3db13e-a604-4944-9827-7ec2642d32ac',
        { page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMembers', async () => {
    const responsePromise = client.gpuDroplets.autoscale.listMembers('0d3db13e-a604-4944-9827-7ec2642d32ac');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listMembers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.gpuDroplets.autoscale.listMembers(
        '0d3db13e-a604-4944-9827-7ec2642d32ac',
        { page: 1, per_page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });
});
