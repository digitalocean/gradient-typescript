// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routes', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agents.routes.update('"123e4567-e89b-12d3-a456-426614174000"', {
      path_parent_agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
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
    const response = await client.agents.routes.update('"123e4567-e89b-12d3-a456-426614174000"', {
      path_parent_agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
      body_child_agent_uuid: '"12345678-1234-1234-1234-123456789012"',
      if_case: '"use this to get weather information"',
      body_parent_agent_uuid: '"12345678-1234-1234-1234-123456789012"',
      route_name: '"weather_route"',
      uuid: '"12345678-1234-1234-1234-123456789012"',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agents.routes.delete('"123e4567-e89b-12d3-a456-426614174000"', {
      parent_agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.agents.routes.delete('"123e4567-e89b-12d3-a456-426614174000"', {
      parent_agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
    });
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.agents.routes.add('"123e4567-e89b-12d3-a456-426614174000"', {
      path_parent_agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
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
  test.skip('add: required and optional params', async () => {
    const response = await client.agents.routes.add('"123e4567-e89b-12d3-a456-426614174000"', {
      path_parent_agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
      body_child_agent_uuid: '"12345678-1234-1234-1234-123456789012"',
      if_case: '"use this to get weather information"',
      body_parent_agent_uuid: '"12345678-1234-1234-1234-123456789012"',
      route_name: '"weather_route"',
    });
  });

  // Prism tests are disabled
  test.skip('view', async () => {
    const responsePromise = client.agents.routes.view('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
