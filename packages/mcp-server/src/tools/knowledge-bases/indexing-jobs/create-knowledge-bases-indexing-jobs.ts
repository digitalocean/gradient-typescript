// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'knowledge_bases.indexing_jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/indexing_jobs',
  operationId: 'genai_create_indexing_job',
};

export const tool: Tool = {
  name: 'create_knowledge_bases_indexing_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo start an indexing job for a knowledge base, send a POST request to `/v2/gen-ai/indexing_jobs`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'StartKnowledgeBaseIndexingJobOutput description',\n  properties: {\n    job: {\n      $ref: '#/$defs/api_indexing_job'\n    }\n  },\n  $defs: {\n    api_indexing_job: {\n      type: 'object',\n      description: 'IndexingJob description',\n      properties: {\n        completed_datasources: {\n          type: 'integer',\n          description: 'Number of datasources indexed completed'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation date / time',\n          format: 'date-time'\n        },\n        data_source_uuids: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        finished_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        knowledge_base_uuid: {\n          type: 'string',\n          description: 'Knowledge base id'\n        },\n        phase: {\n          type: 'string',\n          enum: [            'BATCH_JOB_PHASE_UNKNOWN',\n            'BATCH_JOB_PHASE_PENDING',\n            'BATCH_JOB_PHASE_RUNNING',\n            'BATCH_JOB_PHASE_SUCCEEDED',\n            'BATCH_JOB_PHASE_FAILED',\n            'BATCH_JOB_PHASE_ERROR',\n            'BATCH_JOB_PHASE_CANCELLED'\n          ]\n        },\n        started_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'INDEX_JOB_STATUS_UNKNOWN',\n            'INDEX_JOB_STATUS_PARTIAL',\n            'INDEX_JOB_STATUS_IN_PROGRESS',\n            'INDEX_JOB_STATUS_COMPLETED',\n            'INDEX_JOB_STATUS_FAILED',\n            'INDEX_JOB_STATUS_NO_CHANGES',\n            'INDEX_JOB_STATUS_PENDING'\n          ]\n        },\n        tokens: {\n          type: 'integer',\n          description: 'Number of tokens'\n        },\n        total_datasources: {\n          type: 'integer',\n          description: 'Number of datasources being indexed'\n        },\n        total_items_failed: {\n          type: 'string',\n          description: 'Total Items Failed'\n        },\n        total_items_indexed: {\n          type: 'string',\n          description: 'Total Items Indexed'\n        },\n        total_items_skipped: {\n          type: 'string',\n          description: 'Total Items Skipped'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Last modified',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          description: 'Unique id'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      data_source_uuids: {
        type: 'array',
        description:
          'List of data source ids to index, if none are provided, all data sources will be indexed',
        items: {
          type: 'string',
        },
      },
      knowledge_base_uuid: {
        type: 'string',
        description: 'Knowledge base id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.knowledgeBases.indexingJobs.create(body)),
  );
};

export default { metadata, tool, handler };
