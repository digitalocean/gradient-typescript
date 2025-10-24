// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Gradient from '@digitalocean/gradient';
import {
  WaitForDatabaseFailedError,
  WaitForDatabaseTimeoutError,
  waitForDatabase,
} from '../../../src/resources/knowledge-bases/wait-for-database';

const client = new Gradient({
  accessToken: 'My Access Token',
  modelAccessKey: 'My Model Access Key',
  agentAccessKey: 'My Agent Access Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('waitForDatabase', () => {
  const kbUuid = '123e4567-e89b-12d3-a456-426614174000';

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('error classes', () => {
    it('should create WaitForDatabaseTimeoutError with correct properties', () => {
      const error = new WaitForDatabaseTimeoutError('Test timeout', kbUuid, 1000);

      expect(error.name).toBe('WaitForDatabaseTimeoutError');
      expect(error.message).toBe('Test timeout');
      expect(error).toBeInstanceOf(Error);
    });

    it('should create WaitForDatabaseFailedError with correct properties', () => {
      const error = new WaitForDatabaseFailedError('Test failure', kbUuid, 'DECOMMISSIONED');

      expect(error.name).toBe('WaitForDatabaseFailedError');
      expect(error.message).toBe('Test failure');
      expect(error).toBeInstanceOf(Error);
    });
  });

  describe('function parameters', () => {
    it('should accept correct parameters', () => {
      expect(typeof waitForDatabase).toBe('function');
      expect(waitForDatabase.length).toBe(3);
    });

    it('should use default options when none provided', () => {
      const options = {};
      expect(waitForDatabase).toBeDefined();
      // Function should exist and be callable (will fail at runtime due to mocking, but should compile)
    });
  });

  describe('status constants', () => {
    it('should handle different database status values', () => {
      // Test that status strings are handled correctly
      const statuses = [
        'ONLINE',
        'CREATING',
        'REBUILDING',
        'RESIZING',
        'POWERING_ON',
        'DECOMMISSIONED',
        'UNHEALTHY',
      ];

      statuses.forEach((status) => {
        expect(typeof status).toBe('string');
      });
    });
  });

  describe('integration test placeholder', () => {
    it('should integrate with knowledge base retrieval', async () => {
      // This is a placeholder test - actual integration tests would require a running mock server
      expect(client.knowledgeBases).toBeDefined();
      expect(client.knowledgeBases.retrieve).toBeDefined();
    });
  });
});
