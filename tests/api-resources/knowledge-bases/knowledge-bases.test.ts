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
  test.skip('create', async () => {
    const responsePromise = client.knowledgeBases.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.knowledgeBases.create(
        {
          database_id: '"12345678-1234-1234-1234-123456789012"',
          datasources: [
            {
              aws_data_source: {
                bucket_name: '"example name"',
                item_path: '"example string"',
                key_id: '"123e4567-e89b-12d3-a456-426614174000"',
                region: '"example string"',
                secret_key: '"example string"',
              },
              bucket_name: '"example name"',
              bucket_region: '"example string"',
              file_upload_data_source: {
                original_file_name: '"example name"',
                size_in_bytes: '"12345"',
                stored_object_key: '"example string"',
              },
              item_path: '"example string"',
              spaces_data_source: {
                bucket_name: '"example name"',
                item_path: '"example string"',
                region: '"example string"',
              },
              web_crawler_data_source: {
                base_url: '"example string"',
                crawling_option: 'UNKNOWN',
                embed_media: true,
              },
            },
          ],
          embedding_model_uuid: '"12345678-1234-1234-1234-123456789012"',
          name: '"My Knowledge Base"',
          project_id: '"12345678-1234-1234-1234-123456789012"',
          region: '"tor1"',
          tags: ['example string'],
          vpc_uuid: '"12345678-1234-1234-1234-123456789012"',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.knowledgeBases.retrieve('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.knowledgeBases.update('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.knowledgeBases.update(
        '"123e4567-e89b-12d3-a456-426614174000"',
        {
          database_id: '"12345678-1234-1234-1234-123456789012"',
          embedding_model_uuid: '"12345678-1234-1234-1234-123456789012"',
          name: '"My Knowledge Base"',
          project_id: '"12345678-1234-1234-1234-123456789012"',
          tags: ['example string'],
          body_uuid: '"12345678-1234-1234-1234-123456789012"',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.knowledgeBases.list();
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
      client.knowledgeBases.list({ page: 0, per_page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Gradient.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.knowledgeBases.delete('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
