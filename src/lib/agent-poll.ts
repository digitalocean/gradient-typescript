import Gradient from "@digitalocean/gradient";

export type AgentStatus =
    | 'STATUS_UNKNOWN'
    | 'STATUS_WAITING_FOR_DEPLOYMENT'
    | 'STATUS_DEPLOYING'
    | 'STATUS_RUNNING'
    | 'STATUS_FAILED'
    | 'STATUS_WAITING_FOR_UNDEPLOYMENT'
    | 'STATUS_UNDEPLOYING'
    | 'STATUS_UNDEPLOYMENT_FAILED'
    | 'STATUS_DELETED';

export interface WaitForAgentOptions {
    /** Check interval in ms (default: 3000) */
    interval?: number;
    /** Maximum wait time in ms (default: 180000 = 3 mins) */
    timeout?: number;
    /** Optional callback for progress updates */
    onUpdate?: (status: AgentStatus, elapsed: number) => void;
    signal?: AbortSignal;
}

export class AgentTimeoutError extends Error {
    constructor(public agentId: string, public timeoutMs: number) {
        super(`Agent ${agentId} did not become ready within ${timeoutMs}ms`);
        this.name = 'AgentTimeoutError';
    }
}

export class AgentDeploymentError extends Error {
    constructor(public agentId: string, public status: AgentStatus) {
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
 *   onUpdate: (status, elapsed) => {
 *     console.log(`Status: ${status} (${elapsed}ms elapsed)`);
 *   }
 * });
 * ```
 * 
 * @param client - Gradient API client instance
 * @param agentId - ID of the agent to monitor
 * @param options - Polling configuration
 * @returns The agent object once STATUS_RUNNING is reached
 * @throws {AgentTimeoutError} When polling exceeds timeout duration
 * @throws {AgentDeploymentError} When agent enters a failure state
 */
export async function waitForAgentReady(
    client: Gradient,
    agentId: string,
    options: WaitForAgentOptions = {}
): Promise<Awaited<ReturnType<typeof client.agents.retrieve>>> {
    const { interval = 3000, timeout = 180000, onUpdate, signal } = options;
    const start = Date.now();

    while (true) {
        signal?.throwIfAborted();

        const elapsed = Date.now() - start;

        // ⏰ Check timeout BEFORE making the API call
        if (elapsed > timeout) {
            throw new AgentTimeoutError(agentId, timeout);
        }

        const agent = await client.agents.retrieve(agentId);
        const status = agent.agent?.deployment?.status as AgentStatus || 'STATUS_UNKNOWN';

        onUpdate?.(status, Date.now() - start);

        if (status === "STATUS_RUNNING") {
            return agent;
        }

        if (status === "STATUS_FAILED" || status === "STATUS_UNDEPLOYMENT_FAILED") {
            throw new AgentDeploymentError(agentId, status);
        }

        await new Promise((resolve) => setTimeout(resolve, interval));
    }
}
