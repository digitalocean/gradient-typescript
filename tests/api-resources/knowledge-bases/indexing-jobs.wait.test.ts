import Gradient from '../../../src';

describe('resource indexingJobs waitForCompletion', () => {
  test('resolves when phase becomes SUCCEEDED', async () => {
    const client = new Gradient({ baseURL: 'http://localhost' });

    // mock retrieve to simulate running then succeeded
    let calls = 0;
    (client.knowledgeBases.indexingJobs as any).retrieve = async (uuid: string) => {
      calls += 1;
      if (calls < 3) {
        return { job: { uuid, phase: 'BATCH_JOB_PHASE_RUNNING' } };
      }
      return { job: { uuid, phase: 'BATCH_JOB_PHASE_SUCCEEDED' } };
    };

    const res = await client.knowledgeBases.indexingJobs.waitForCompletion('uuid', {
      interval: 1,
      timeout: 1000,
    });
    expect(res.job?.phase).toBe('BATCH_JOB_PHASE_SUCCEEDED');
    expect(calls).toBeGreaterThanOrEqual(3);
  });

  test('rejects when phase becomes FAILED', async () => {
    const client = new Gradient({ baseURL: 'http://localhost' });

    (client.knowledgeBases.indexingJobs as any).retrieve = async (uuid: string) => {
      return { job: { uuid, phase: 'BATCH_JOB_PHASE_FAILED' } };
    };

    await expect(
      client.knowledgeBases.indexingJobs.waitForCompletion('uuid', {
        interval: 1,
        timeout: 1000,
      }),
    ).rejects.toThrow(/terminal failure phase/);
  });

  test('rejects on timeout', async () => {
    const client = new Gradient({ baseURL: 'http://localhost' });

    (client.knowledgeBases.indexingJobs as any).retrieve = async (uuid: string) => {
      return { job: { uuid, phase: 'BATCH_JOB_PHASE_RUNNING' } };
    };

    await expect(
      client.knowledgeBases.indexingJobs.waitForCompletion('uuid', {
        interval: 1,
        timeout: 10,
      }),
    ).rejects.toThrow(/timeout waiting for indexing job to complete/);
  });
});
