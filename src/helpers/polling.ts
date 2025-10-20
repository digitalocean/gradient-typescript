import type { Gradient } from '../client';

export type PollUntilOptions<T = unknown> = {
  /** Called each iteration to fetch the latest resource state */
  fetcher: () => Promise<T>;
  /** Returns true when the resource is “ready” */
  isDone: (state: T) => boolean;
  /** Optional: returns true when the resource is irrecoverably failed */
  isFailed?: (state: T) => boolean;
  /** Max ms to wait overall (default 10m) */
  timeoutMs?: number;
  /** Start delay and exponential factor (default 1s * 1.5^n, capped at 10s) */
  initialDelayMs?: number;
  factor?: number;
  maxDelayMs?: number;
  /** Abort support */
  signal?: AbortSignal;
  /** Optional: observe each tick */
  onTick?: (state: T, ctx: { attempt: number; delayMs: number }) => void;
};

function createAbortError(): Error {
  const { DOMException: DomExceptionCtor } = globalThis as {
    DOMException?: new (message?: string, name?: string) => Error;
  };

  if (DomExceptionCtor) {
    return new DomExceptionCtor('Aborted', 'AbortError');
  }

  const error = new Error('Aborted');
  error.name = 'AbortError';
  return error;
}

export async function pollUntil<T>(opts: PollUntilOptions<T>): Promise<T> {
  const {
    fetcher,
    isDone,
    isFailed,
    timeoutMs = 10 * 60_000,
    initialDelayMs = 1_000,
    factor = 1.5,
    maxDelayMs = 10_000,
    signal,
    onTick,
  } = opts;

  const start = Date.now();
  let delay = initialDelayMs;
  let attempt = 0;

  while (true) {
    if (signal?.aborted) throw createAbortError();
    const state = await fetcher();

    if (isDone(state)) return state;
    if (isFailed?.(state)) throw new Error('Resource entered failed state');

    onTick?.(state, { attempt, delayMs: delay });

    if (Date.now() - start > timeoutMs) {
      throw new Error('pollUntil: timeout exceeded');
    }
    await new Promise((r) => setTimeout(r, delay));
    delay = Math.min(maxDelayMs, Math.ceil(delay * factor));
    attempt++;
  }
}

type Agent = { status?: string };
type KnowledgeBase = { database_status?: string; indexing_status?: string };

// DONE when agent is ready (issue #4)
export function waitForAgentDeployment(
  client: Gradient,
  agentId: string,
  opts?: Omit<PollUntilOptions<Agent>, 'fetcher' | 'isDone'>,
) {
  return pollUntil<Agent>({
    fetcher: async () => client.get(`/agents/${agentId}`),
    isDone: (a) => a?.status === 'ready' || a?.status === 'active',
    isFailed: (a) => a?.status === 'failed' || a?.status === 'error',
    ...opts,
  });
}

// DONE when KB’s backing DB created (issue #5)
export function waitForKnowledgeBaseDatabase(
  client: Gradient,
  kbId: string,
  opts?: Omit<PollUntilOptions<KnowledgeBase>, 'fetcher' | 'isDone'>,
) {
  return pollUntil<KnowledgeBase>({
    fetcher: async () => client.get(`/knowledge_bases/${kbId}`),
    isDone: (kb) => kb?.database_status === 'ready',
    isFailed: (kb) => kb?.database_status === 'failed',
    ...opts,
  });
}

// DONE when KB indexing complete (issue #6)
export function waitForKnowledgeBaseIndexing(
  client: Gradient,
  kbId: string,
  opts?: Omit<PollUntilOptions<KnowledgeBase>, 'fetcher' | 'isDone'>,
) {
  return pollUntil<KnowledgeBase>({
    fetcher: async () => client.get(`/knowledge_bases/${kbId}`),
    isDone: (kb) => kb?.indexing_status === 'completed' || kb?.indexing_status === 'ready',
    isFailed: (kb) => kb?.indexing_status === 'failed',
    ...opts,
  });
}
