// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'agents.evaluation_metrics.workspaces',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/workspaces/{workspace_uuid}/evaluation_test_cases',
  operationId: 'list_evaluation_test_cases_by_workspace',
};

export const tool: Tool = {
  name: 'list_evaluation_test_cases_evaluation_metrics_agents_workspaces',
  description:
    'To list all evaluation test cases by a workspace, send a GET request to `/v2/gen-ai/workspaces/{workspace_uuid}/evaluation_test_cases`.',
  inputSchema: {
    type: 'object',
    properties: {
      workspace_uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const { workspace_uuid, ...body } = args as any;
  return asTextContentResult(
    await client.agents.evaluationMetrics.workspaces.listEvaluationTestCases(workspace_uuid),
  );
};

export default { metadata, tool, handler };
