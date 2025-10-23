// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.agents.functions.create('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.functions.create(
        '"123e4567-e89b-12d3-a456-426614174000"',
        {
          body_agent_uuid: '"12345678-1234-1234-1234-123456789012"',
          description: '"My Function Description"',
          faas_name: '"my-function"',
          faas_namespace: '"default"',
          function_name: '"My Function"',
          input_schema: {},
          output_schema: {},
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agents.functions.update('"123e4567-e89b-12d3-a456-426614174000"', {
      path_agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
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
    const response = await client.agents.functions.update('"123e4567-e89b-12d3-a456-426614174000"', {
      path_agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
      body_agent_uuid: '"12345678-1234-1234-1234-123456789012"',
      description: '"My Function Description"',
      faas_name: '"my-function"',
      faas_namespace: '"default"',
      function_name: '"My Function"',
      body_function_uuid: '"12345678-1234-1234-1234-123456789012"',
      input_schema: {},
      output_schema: {},
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agents.functions.delete('"123e4567-e89b-12d3-a456-426614174000"', {
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

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.agents.functions.delete('"123e4567-e89b-12d3-a456-426614174000"', {
      agent_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
    });
  });
});
