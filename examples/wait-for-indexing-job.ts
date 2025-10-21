import Gradient from '@digitalocean/gradient';

// Example usage of the new waitForCompletion method
async function example() {
  const client = new Gradient();

  try {
    // Start an indexing job
    const createResponse = await client.knowledgeBases.indexingJobs.create({
      knowledge_base_uuid: 'your-kb-uuid',
    });

    const jobUuid = createResponse.job?.uuid;
    if (!jobUuid) {
      throw new Error('Failed to get job UUID');
    }

    console.log(`Started indexing job: ${jobUuid}`);

    // Wait for completion with custom interval and timeout
    const result = await client.knowledgeBases.indexingJobs.waitForCompletion(jobUuid, {
      interval: 5000, // Poll every 5 seconds
      timeout: 1000 * 60 * 15, // 15 minute timeout
    });

    console.log('Indexing job completed successfully!', result.job);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('terminal failure phase')) {
        console.error('Indexing job failed:', error.message);
      } else if (error.message.includes('timeout')) {
        console.error('Indexing job timed out');
      } else {
        console.error('Unexpected error:', error.message);
      }
    }
  }
}

// Old way (no longer needed)
async function oldWay() {
  const client = new Gradient();

  while (true) {
    const job = await client.knowledgeBases.indexingJobs.retrieve('123e4567-e89b-12d3-a456-426614174000');
    if (job.job?.phase !== 'BATCH_JOB_PHASE_RUNNING') {
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}