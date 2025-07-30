// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  apiKey: 'My API Key',
  inferenceKey: 'My Inference Key',
  agentKey: 'My Agent Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource config', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.databases.schemaRegistry.config.retrieve(
      '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
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
  test.skip('update: only required params', async () => {
    const responsePromise = client.databases.schemaRegistry.config.update(
      '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
      { compatibility_level: 'BACKWARD' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.databases.schemaRegistry.config.update(
      '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
      { compatibility_level: 'BACKWARD' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSubject: only required params', async () => {
    const responsePromise = client.databases.schemaRegistry.config.retrieveSubject('customer-schema', {
      database_cluster_uuid: '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
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
  test.skip('retrieveSubject: required and optional params', async () => {
    const response = await client.databases.schemaRegistry.config.retrieveSubject('customer-schema', {
      database_cluster_uuid: '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateSubject: only required params', async () => {
    const responsePromise = client.databases.schemaRegistry.config.updateSubject('customer-schema', {
      database_cluster_uuid: '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
      compatibility_level: 'BACKWARD',
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
  test.skip('updateSubject: required and optional params', async () => {
    const response = await client.databases.schemaRegistry.config.updateSubject('customer-schema', {
      database_cluster_uuid: '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
      compatibility_level: 'BACKWARD',
    });
  });
});
