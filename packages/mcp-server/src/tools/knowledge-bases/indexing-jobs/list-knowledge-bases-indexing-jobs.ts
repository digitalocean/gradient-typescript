// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases.indexing_jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/indexing_jobs',
  operationId: 'list_indexing_jobs',
};

export const tool: Tool = {
  name: 'list_knowledge_bases_indexing_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all indexing jobs for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'indexing jobs',\n  properties: {\n    jobs: {\n      type: 'array',\n      title: 'the indexing jobs',\n      items: {\n        $ref: '#/$defs/api_indexing_job'\n      }\n    },\n    links: {\n      $ref: '#/$defs/api_links'\n    },\n    meta: {\n      $ref: '#/$defs/api_meta'\n    }\n  },\n  required: [],\n  $defs: {\n    api_indexing_job: {\n      type: 'object',\n      title: 'IndexingJob description',\n      properties: {\n        completed_datasources: {\n          type: 'integer',\n          title: 'number of datasources indexed completed'\n        },\n        created_at: {\n          type: 'string',\n          title: 'creation date / time',\n          format: 'date-time'\n        },\n        data_source_uuids: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        finished_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        knowledge_base_uuid: {\n          type: 'string',\n          title: 'knowledge base id'\n        },\n        phase: {\n          type: 'string',\n          enum: [            'BATCH_JOB_PHASE_UNKNOWN',\n            'BATCH_JOB_PHASE_PENDING',\n            'BATCH_JOB_PHASE_RUNNING',\n            'BATCH_JOB_PHASE_SUCCEEDED',\n            'BATCH_JOB_PHASE_FAILED',\n            'BATCH_JOB_PHASE_ERROR',\n            'BATCH_JOB_PHASE_CANCELLED'\n          ]\n        },\n        started_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'INDEX_JOB_STATUS_UNKNOWN',\n            'INDEX_JOB_STATUS_PARTIAL',\n            'INDEX_JOB_STATUS_IN_PROGRESS',\n            'INDEX_JOB_STATUS_COMPLETED',\n            'INDEX_JOB_STATUS_FAILED',\n            'INDEX_JOB_STATUS_NO_CHANGES',\n            'INDEX_JOB_STATUS_PENDING'\n          ]\n        },\n        tokens: {\n          type: 'integer',\n          title: 'number of tokens'\n        },\n        total_datasources: {\n          type: 'integer',\n          title: 'number of datasources being indexed'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'last modified',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          title: 'unique id'\n        }\n      },\n      required: []\n    },\n    api_links: {\n      type: 'object',\n      title: 'Links to other pages',\n      properties: {\n        pages: {\n          type: 'object',\n          title: 'Information about how to reach other pages',\n          properties: {\n            first: {\n              type: 'string',\n              title: 'first page'\n            },\n            last: {\n              type: 'string',\n              title: 'last page'\n            },\n            next: {\n              type: 'string',\n              title: 'next page'\n            },\n            previous: {\n              type: 'string',\n              title: 'previous page'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    api_meta: {\n      type: 'object',\n      title: 'Meta information about the data set',\n      properties: {\n        page: {\n          type: 'integer',\n          title: 'the current page'\n        },\n        pages: {\n          type: 'integer',\n          title: 'total number of pages'\n        },\n        total: {\n          type: 'integer',\n          title: 'total amount of items over all pages'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'page number.',
      },
      per_page: {
        type: 'integer',
        description: 'items per page.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.knowledgeBases.indexingJobs.list(body)));
};

export default { metadata, tool, handler };
