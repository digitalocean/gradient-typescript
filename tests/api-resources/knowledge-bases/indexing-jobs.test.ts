// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource indexingJobs', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.knowledgeBases.indexingJobs.create();
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
      client.knowledgeBases.indexingJobs.create(
        {
          data_source_uuids: ['example string'],
          knowledge_base_uuid: '"12345678-1234-1234-1234-123456789012"',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.knowledgeBases.indexingJobs.retrieve(
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
  test.skip('list', async () => {
    const responsePromise = client.knowledgeBases.indexingJobs.list();
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
      client.knowledgeBases.indexingJobs.list({ page: 0, per_page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveDataSources', async () => {
    const responsePromise = client.knowledgeBases.indexingJobs.retrieveDataSources(
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
  test.skip('updateCancel', async () => {
    const responsePromise = client.knowledgeBases.indexingJobs.updateCancel(
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
  test.skip('updateCancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.knowledgeBases.indexingJobs.updateCancel(
        '"123e4567-e89b-12d3-a456-426614174000"',
        { body_uuid: '"12345678-1234-1234-1234-123456789012"' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  describe('waitForCompletion', () => {
    // Prism tests are disabled
    test.skip('waits for job completion successfully', async () => {
      const jobUuid = '123e4567-e89b-12d3-a456-426614174000';
      const responsePromise = client.knowledgeBases.indexingJobs.waitForCompletion(jobUuid, {
        interval: 100,
        timeout: 1000,
      });
      const response = await responsePromise;
      expect(response).toBeDefined();
      expect(response.job).toBeDefined();
    });

    // Prism tests are disabled
    test.skip('throws error when job fails', async () => {
      const jobUuid = '123e4567-e89b-12d3-a456-426614174000';
      await expect(
        client.knowledgeBases.indexingJobs.waitForCompletion(jobUuid, {
          interval: 100,
          timeout: 1000,
        }),
      ).rejects.toThrow();
    });

    // Prism tests are disabled
    test.skip('throws error when job is cancelled', async () => {
      const jobUuid = '123e4567-e89b-12d3-a456-426614174000';
      await expect(
        client.knowledgeBases.indexingJobs.waitForCompletion(jobUuid, {
          interval: 100,
          timeout: 1000,
        }),
      ).rejects.toThrow('Indexing job was cancelled');
    });

    // Prism tests are disabled
    test.skip('throws error when timeout is reached', async () => {
      const jobUuid = '123e4567-e89b-12d3-a456-426614174000';
      await expect(
        client.knowledgeBases.indexingJobs.waitForCompletion(jobUuid, {
          interval: 100,
          timeout: 50, // Very short timeout
        }),
      ).rejects.toThrow('Indexing job polling timed out');
    });

    // Prism tests are disabled
    test.skip('throws error when job is not found', async () => {
      const jobUuid = 'nonexistent-job-uuid';
      await expect(
        client.knowledgeBases.indexingJobs.waitForCompletion(jobUuid, {
          interval: 100,
          timeout: 1000,
        }),
      ).rejects.toThrow('Job not found');
    });
  });
});
