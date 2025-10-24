// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Gradient } from '../../client';
import { GradientError } from '../../core/error';
import { sleep } from '../../internal/utils/sleep';
import { KnowledgeBaseRetrieveResponse } from './knowledge-bases';

export interface WaitForDatabaseOptions {
  /**
   * The polling interval in milliseconds. Defaults to 5000 (5 seconds).
   */
  interval?: number;

  /**
   * The maximum time to wait in milliseconds. Defaults to 600000 (10 minutes).
   */
  timeout?: number;

  /**
   * AbortSignal to cancel the polling operation.
   */
  signal?: AbortSignal;

  /**
   * Additional request options to pass through to the knowledge base retrieval request.
   */
  requestOptions?: import('../../internal/request-options').RequestOptions;
}

/**
 * Database status values that indicate a successful deployment.
 */
const ONLINE_STATUSES = ['ONLINE'] as const;

/**
 * Database status values that indicate a failed deployment.
 */
const FAILED_STATUSES = ['DECOMMISSIONED', 'UNHEALTHY'] as const;

/**
 * Database status values that indicate the deployment is still in progress.
 */
const PENDING_STATUSES = [
  'CREATING',
  'POWEROFF',
  'REBUILDING',
  'REBALANCING',
  'FORKING',
  'MIGRATING',
  'RESIZING',
  'RESTORING',
  'POWERING_ON',
] as const;

export class WaitForDatabaseTimeoutError extends GradientError {
  constructor(message: string, kbId?: string, timeout?: number) {
    super(message);
    this.name = 'WaitForDatabaseTimeoutError';
    if (kbId) {
      (this as any).knowledgeBaseId = kbId;
      (this as any).timeout = timeout;
    }
  }
}

export class WaitForDatabaseFailedError extends GradientError {
  constructor(message: string, kbId?: string, status?: string) {
    super(message);
    this.name = 'WaitForDatabaseFailedError';
    if (kbId) {
      (this as any).knowledgeBaseId = kbId;
      (this as any).databaseStatus = status;
    }
  }
}

/**
 * Polls for knowledge base database creation to complete.
 *
 * This helper function polls the knowledge base status until the database is ONLINE,
 * handling various error states and providing configurable timeout and polling intervals.
 *
 * @example
 * ```ts
 * import Gradient from '@digitalocean/gradient';
 *
 * const client = new Gradient();
 * 
 * // Basic usage
 * try {
 *   const kb = await client.knowledgeBases.waitForDatabase('123e4567-e89b-12d3-a456-426614174000');
 *   console.log('Database is ready:', kb.database_status); // 'ONLINE'
 * } catch (error) {
 *   if (error instanceof WaitForDatabaseTimeoutError) {
 *     console.log('Polling timed out');
 *   } else if (error instanceof WaitForDatabaseFailedError) {
 *     console.log('Database deployment failed');
 *   }
 * }
 *
 * // With AbortSignal
 * const controller = new AbortController();
 * setTimeout(() => controller.abort(), 30000); // Cancel after 30 seconds
 * 
 * try {
 *   const kb = await client.knowledgeBases.waitForDatabase('123e4567-e89b-12d3-a456-426614174000', {
 *     signal: controller.signal
 *   });
 * } catch (error) {
 *   if (error.message === 'Operation was aborted') {
 *     console.log('Operation was cancelled');
 *   }
 * }
 * ```
 *
 * @param client - The Gradient client instance
 * @param uuid - The knowledge base UUID to poll for
 * @param options - Configuration options for polling behavior
 * @returns Promise<KnowledgeBaseRetrieveResponse> - The knowledge base with ONLINE database status
 * @throws WaitForDatabaseTimeoutError - If polling times out
 * @throws WaitForDatabaseFailedError - If the database enters a failed state
 * @throws Error - If the operation is aborted via AbortSignal
 */
export async function waitForDatabase(
  client: Gradient,
  uuid: string,
  options: WaitForDatabaseOptions,
): Promise<KnowledgeBaseRetrieveResponse> {
  const { interval = 5000, timeout = 600000, signal, requestOptions } = options;

  const startTime = Date.now();

  while (true) {
    // Check if operation was aborted
    if (signal?.aborted) {
      throw new Error('Operation was aborted');
    }

    const elapsed = Date.now() - startTime;

    if (elapsed > timeout) {
      throw new WaitForDatabaseTimeoutError(
        `Knowledge base database ${uuid} did not become ONLINE within ${timeout}ms`,
        uuid,
        timeout,
      );
    }

    try {
      const response = await client.knowledgeBases.retrieve(uuid, requestOptions);
      const status = response.database_status;

      if (!status) {
        // If database_status is not present, continue polling
        await sleep(interval);
        continue;
      }

      // Check for successful completion
      if (ONLINE_STATUSES.includes(status as any)) {
        return response;
      }

      // Check for failed states
      if (FAILED_STATUSES.includes(status as any)) {
        throw new WaitForDatabaseFailedError(
          `Knowledge base database ${uuid} entered failed state: ${status}`,
          uuid,
          status,
        );
      }

      // Check if still in progress
      if (PENDING_STATUSES.includes(status as any)) {
        await sleep(interval);
        continue;
      }

      // Unknown status - treat as error for safety
      throw new WaitForDatabaseFailedError(
        `Knowledge base database ${uuid} entered unknown state: ${status}`,
        uuid,
        status,
      );
    } catch (error) {
      // If it's our custom error, re-throw it
      if (error instanceof WaitForDatabaseFailedError || error instanceof WaitForDatabaseTimeoutError) {
        throw error;
      }

      // For other errors (network issues, etc.), try waiting a bit longer before retrying
      await sleep(Math.min(interval * 2, 30000)); // Max 30 seconds between retries
      continue;
    }
  }
}
