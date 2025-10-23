import { Gradient } from '../../client';
import { RequestOptions } from '../../internal/request-options';
import { GradientError } from '../../core/error';
import { sleep } from '../../internal/utils';
import { AgentReadinessResponse, APIAgent } from './agents';

type AgentStatus = NonNullable<APIAgent.Deployment['status']>;

export interface WaitForAgentOptions extends RequestOptions {
  /** Check interval in ms (default: 3000) */
  interval?: number;
}

export class AgentTimeoutError extends GradientError {
  constructor(
    public agentId: string,
    public timeoutMs: number,
  ) {
    super(`Agent ${agentId} did not become ready within ${timeoutMs}ms`);
    this.name = 'AgentTimeoutError';
  }
}

export class AgentDeploymentError extends GradientError {
  constructor(
    public agentId: string,
    public status: AgentStatus,
  ) {
    super(`Agent ${agentId} deployment failed with status: ${status}`);
    this.name = 'AgentDeploymentError';
  }
}

/**
 * Polls an agent until it reaches STATUS_RUNNING.
 *
 * @example
 * ```typescript
 * const agent = await waitForAgentReady(client, 'agent-123', {
 *   timeout: 60000, // 1 minute
 * });
 * ```
 *
 * @param client - Gradient API client instance
 * @param uuid - UUID of the agent to monitor
 * @param options - Polling configuration
 * @returns The agent object once STATUS_RUNNING is reached
 * @throws {AgentTimeoutError} When polling exceeds timeout duration
 * @throws {AgentDeploymentError} When agent enters a failure state
 */
export async function waitForAgentReady(
  client: Gradient,
  uuid: string,
  options: WaitForAgentOptions = {},
): Promise<AgentReadinessResponse> {
  const { interval = 3000, timeout = 180000, signal } = options;
  const start = Date.now();

  while (true) {
    signal?.throwIfAborted();

    const elapsed = Date.now() - start;

    // ⏰ Check timeout BEFORE making the API call
    if (elapsed > timeout) {
      throw new AgentTimeoutError(uuid, timeout);
    }

    const agent = await client.agents.retrieve(uuid, options);
    const status = (agent.agent?.deployment?.status as AgentStatus) || 'STATUS_UNKNOWN';

    if (status === 'STATUS_RUNNING') {
      return agent;
    }

    if (status === 'STATUS_FAILED' || status === 'STATUS_UNDEPLOYMENT_FAILED') {
      throw new AgentDeploymentError(uuid, status);
    }

    await sleep(interval);
  }
}
