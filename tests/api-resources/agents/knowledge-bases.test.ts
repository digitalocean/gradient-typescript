// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  apiKey: 'My API Key',
  inferenceKey: 'My Inference Key',
  agentKey: 'My Agent Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource knowledgeBases', () => {
  // skipped: tests are disabled for the time being
  test.skip('attach', async () => {
    const responsePromise = client.agents.knowledgeBases.attach('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('attachSingle: only required params', async () => {
    const responsePromise = client.agents.knowledgeBases.attachSingle(
      '"123e4567-e89b-12d3-a456-426614174000"',
      { agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"' },
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
  test.skip('attachSingle: required and optional params', async () => {
    const response = await client.agents.knowledgeBases.attachSingle(
      '"123e4567-e89b-12d3-a456-426614174000"',
      { agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('detach: only required params', async () => {
    const responsePromise = client.agents.knowledgeBases.detach('"123e4567-e89b-12d3-a456-426614174000"', {
      agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
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
  test.skip('detach: required and optional params', async () => {
    const response = await client.agents.knowledgeBases.detach('"123e4567-e89b-12d3-a456-426614174000"', {
      agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
    });
  });
});
