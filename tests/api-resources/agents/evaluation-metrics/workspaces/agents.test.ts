// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  modelAccessKey: 'My Model Access Key',
  agentAccessKey: 'My Agent Access Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.evaluationMetrics.workspaces.agents.list(
      '"123e4567-e89b-12d3-a456-426614174000"',
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
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.evaluationMetrics.workspaces.agents.list(
        '"123e4567-e89b-12d3-a456-426614174000"',
        { only_deployed: true, page: 0, per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('move', async () => {
    const responsePromise = client.agents.evaluationMetrics.workspaces.agents.move(
      '"123e4567-e89b-12d3-a456-426614174000"',
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
  test.skip('move: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.evaluationMetrics.workspaces.agents.move(
        '"123e4567-e89b-12d3-a456-426614174000"',
        { agent_uuids: ['example string'], body_workspace_uuid: '123e4567-e89b-12d3-a456-426614174000' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });
});
