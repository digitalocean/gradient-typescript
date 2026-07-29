// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';

const client = new Gradient({ accessToken: 'My Access Token', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource dataSources', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.knowledgeBases.dataSources.create('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.knowledgeBases.dataSources.create('"123e4567-e89b-12d3-a456-426614174000"', {
    aws_data_source: {
    bucket_name: 'example name',
    item_path: 'example string',
    key_id: '123e4567-e89b-12d3-a456-426614174000',
    region: 'example string',
    secret_key: 'example string',
  },
    chunking_algorithm: 'CHUNKING_ALGORITHM_SECTION_BASED',
    chunking_options: {
    child_chunk_size: 350,
    max_chunk_size: 750,
    parent_chunk_size: 1000,
    semantic_threshold: 0.5,
  },
    knowledge_base_uuid: '"12345678-1234-1234-1234-123456789012"',
    spaces_data_source: {
    bucket_name: 'example name',
    item_path: 'example string',
    region: 'example string',
  },
    web_crawler_data_source: {
    base_url: 'example string',
    crawling_option: 'UNKNOWN',
    embed_media: true,
    exclude_tags: ['example string'],
  },
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Gradient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.knowledgeBases.dataSources.update('123e4567-e89b-12d3-a456-426614174000', { path_knowledge_base_uuid: '123e4567-e89b-12d3-a456-426614174000' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.knowledgeBases.dataSources.update('123e4567-e89b-12d3-a456-426614174000', {
    path_knowledge_base_uuid: '123e4567-e89b-12d3-a456-426614174000',
    chunking_algorithm: 'CHUNKING_ALGORITHM_SECTION_BASED',
    chunking_options: {
    child_chunk_size: 350,
    max_chunk_size: 750,
    parent_chunk_size: 1000,
    semantic_threshold: 0.5,
  },
    data_source_uuid: '98765432-1234-1234-1234-123456789012',
    body_knowledge_base_uuid: '12345678-1234-1234-1234-123456789012',
  });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.knowledgeBases.dataSources.list('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.knowledgeBases.dataSources.list('"123e4567-e89b-12d3-a456-426614174000"', { page: 0, per_page: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Gradient.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.knowledgeBases.dataSources.delete('"123e4567-e89b-12d3-a456-426614174000"', { knowledge_base_uuid: '"123e4567-e89b-12d3-a456-426614174000"' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.knowledgeBases.dataSources.delete('"123e4567-e89b-12d3-a456-426614174000"', { knowledge_base_uuid: '"123e4567-e89b-12d3-a456-426614174000"' });
  });

  // Mock server tests are disabled
  test.skip('createPresignedURLs', async () => {
    const responsePromise = client.knowledgeBases.dataSources.createPresignedURLs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createPresignedURLs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.knowledgeBases.dataSources.createPresignedURLs({ files: [{ file_name: 'example name', file_size: 'file_size' }] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Gradient.NotFoundError);
  });
});
