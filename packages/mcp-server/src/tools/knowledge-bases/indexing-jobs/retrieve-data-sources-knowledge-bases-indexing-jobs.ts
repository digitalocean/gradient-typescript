// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases.indexing_jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources',
  operationId: 'genai_list_indexing_job_data_sources',
};

export const tool: Tool = {
  name: 'retrieve_data_sources_knowledge_bases_indexing_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo list all datasources for an indexing job, send a GET request to `/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    indexed_data_sources: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/api_indexed_data_source'\n      }\n    }\n  },\n  required: [],\n  $defs: {\n    api_indexed_data_source: {\n      type: 'object',\n      properties: {\n        completed_at: {\n          type: 'string',\n          description: 'Timestamp when data source completed indexing',\n          format: 'date-time'\n        },\n        data_source_uuid: {\n          type: 'string',\n          description: 'Uuid of the indexed data source'\n        },\n        error_details: {\n          type: 'string',\n          description: 'A detailed error description'\n        },\n        error_msg: {\n          type: 'string',\n          description: 'A string code provinding a hint which part of the system experienced an error'\n        },\n        failed_item_count: {\n          type: 'string',\n          description: 'Total count of files that have failed'\n        },\n        indexed_file_count: {\n          type: 'string',\n          description: 'Total count of files that have been indexed'\n        },\n        indexed_item_count: {\n          type: 'string',\n          description: 'Total count of files that have been indexed'\n        },\n        removed_item_count: {\n          type: 'string',\n          description: 'Total count of files that have been removed'\n        },\n        skipped_item_count: {\n          type: 'string',\n          description: 'Total count of files that have been skipped'\n        },\n        started_at: {\n          type: 'string',\n          description: 'Timestamp when data source started indexing',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'DATA_SOURCE_STATUS_UNKNOWN',\n            'DATA_SOURCE_STATUS_IN_PROGRESS',\n            'DATA_SOURCE_STATUS_UPDATED',\n            'DATA_SOURCE_STATUS_PARTIALLY_UPDATED',\n            'DATA_SOURCE_STATUS_NOT_UPDATED',\n            'DATA_SOURCE_STATUS_FAILED'\n          ]\n        },\n        total_bytes: {\n          type: 'string',\n          description: 'Total size of files in data source in bytes'\n        },\n        total_bytes_indexed: {\n          type: 'string',\n          description: 'Total size of files in data source in bytes that have been indexed'\n        },\n        total_file_count: {\n          type: 'string',\n          description: 'Total file count in the data source'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      indexing_job_uuid: {
        type: 'string',
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
  const { indexing_job_uuid, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.knowledgeBases.indexingJobs.retrieveDataSources(indexing_job_uuid)),
  );
};

export default { metadata, tool, handler };
