// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource config', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.databases.schemaRegistry.config.update(
      '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
      { compatibility_level: 'BACKWARD' },
    );
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('retrieveSubject: required and optional params', async () => {
    const response = await client.databases.schemaRegistry.config.retrieveSubject('customer-schema', {
      database_cluster_uuid: '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('updateSubject: required and optional params', async () => {
    const response = await client.databases.schemaRegistry.config.updateSubject('customer-schema', {
      database_cluster_uuid: '9cc10173-e9ea-4176-9dbc-a4cee4c4ff30',
      compatibility_level: 'BACKWARD',
    });
  });
});
