// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GradientAI from 'gradientai';

const client = new GradientAI({
  apiKey: 'My API Key',
  inferenceKey: 'My Inference Key',
  agentKey: 'My Agent Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluationRuns', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.agents.evaluationRuns.create();
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
      client.agents.evaluationRuns.create(
        {
          agent_uuids: ['example string'],
          run_name: 'Evaluation Run Name',
          test_case_uuid: '"12345678-1234-1234-1234-123456789012"',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GradientAI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.agents.evaluationRuns.retrieve('"123e4567-e89b-12d3-a456-426614174000"');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listResults', async () => {
    const responsePromise = client.agents.evaluationRuns.listResults(
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

  // skipped: tests are disabled for the time being
  test.skip('listResults: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.evaluationRuns.listResults(
        '"123e4567-e89b-12d3-a456-426614174000"',
        { page: 0, per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GradientAI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveResults: only required params', async () => {
    const responsePromise = client.agents.evaluationRuns.retrieveResults(1, {
      evaluation_run_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
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
  test.skip('retrieveResults: required and optional params', async () => {
    const response = await client.agents.evaluationRuns.retrieveResults(1, {
      evaluation_run_uuid: '"123e4567-e89b-12d3-a456-426614174000"',
    });
  });
});
