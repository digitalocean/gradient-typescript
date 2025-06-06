// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DigitaloceanGenaiSDK from 'digitalocean-genai-sdk';

const client = new DigitaloceanGenaiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.agents.functions.create('agent_uuid', {});
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
    const responsePromise = client.agents.functions.update('function_uuid', {
      path_agent_uuid: 'agent_uuid',
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
    const response = await client.agents.functions.update('function_uuid', {
      path_agent_uuid: 'agent_uuid',
      body_agent_uuid: 'agent_uuid',
      description: 'description',
      faas_name: 'faas_name',
      faas_namespace: 'faas_namespace',
      function_name: 'function_name',
      body_function_uuid: 'function_uuid',
      input_schema: {},
      output_schema: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agents.functions.delete('function_uuid', { agent_uuid: 'agent_uuid' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.agents.functions.delete('function_uuid', { agent_uuid: 'agent_uuid' });
  });
});
