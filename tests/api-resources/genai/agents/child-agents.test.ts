// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DigitaloceanGenaiSDK from 'digitalocean-genai-sdk';

const client = new DigitaloceanGenaiSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource childAgents', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.genai.agents.childAgents.update('child_agent_uuid', {
      path_parent_agent_uuid: 'parent_agent_uuid',
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
    const response = await client.genai.agents.childAgents.update('child_agent_uuid', {
      path_parent_agent_uuid: 'parent_agent_uuid',
      body_child_agent_uuid: 'child_agent_uuid',
      if_case: 'if_case',
      body_parent_agent_uuid: 'parent_agent_uuid',
      route_name: 'route_name',
      uuid: 'uuid',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.genai.agents.childAgents.delete('child_agent_uuid', {
      parent_agent_uuid: 'parent_agent_uuid',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.genai.agents.childAgents.delete('child_agent_uuid', {
      parent_agent_uuid: 'parent_agent_uuid',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('add: only required params', async () => {
    const responsePromise = client.genai.agents.childAgents.add('child_agent_uuid', {
      path_parent_agent_uuid: 'parent_agent_uuid',
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
  test.skip('add: required and optional params', async () => {
    const response = await client.genai.agents.childAgents.add('child_agent_uuid', {
      path_parent_agent_uuid: 'parent_agent_uuid',
      body_child_agent_uuid: 'child_agent_uuid',
      if_case: 'if_case',
      body_parent_agent_uuid: 'parent_agent_uuid',
      route_name: 'route_name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('view', async () => {
    const responsePromise = client.genai.agents.childAgents.view('uuid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
