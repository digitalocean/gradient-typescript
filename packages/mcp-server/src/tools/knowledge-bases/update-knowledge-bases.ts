// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/gen-ai/knowledge_bases/{uuid}',
  operationId: 'update_knowledge_base',
};

export const tool: Tool = {
  name: 'update_knowledge_bases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo update a knowledge base, send a PUT request to `/v2/gen-ai/knowledge_bases/{uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'information about an updated knowledge base',\n  properties: {\n    knowledge_base: {\n      $ref: '#/$defs/api_knowledge_base'\n    }\n  },\n  required: [],\n  $defs: {\n    api_knowledge_base: {\n      type: 'object',\n      title: 'Knowledgebase Description',\n      properties: {\n        added_to_agent_at: {\n          type: 'string',\n          title: 'time when the knowledge base was added to the agent',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          title: 'creation date / time',\n          format: 'date-time'\n        },\n        database_id: {\n          type: 'string'\n        },\n        embedding_model_uuid: {\n          type: 'string'\n        },\n        is_public: {\n          type: 'boolean',\n          title: 'whether the knowledge base is public or not'\n        },\n        last_indexing_job: {\n          $ref: '#/$defs/api_indexing_job'\n        },\n        name: {\n          type: 'string',\n          title: 'name of knowledge base'\n        },\n        project_id: {\n          type: 'string'\n        },\n        region: {\n          type: 'string',\n          title: 'region code'\n        },\n        tags: {\n          type: 'array',\n          title: 'Tags to organize related resources',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          title: 'last modified',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          title: 'id of user that created the knowledge base'\n        },\n        uuid: {\n          type: 'string',\n          title: 'unique id for knowledge base'\n        }\n      },\n      required: []\n    },\n    api_indexing_job: {\n      type: 'object',\n      title: 'IndexingJob description',\n      properties: {\n        completed_datasources: {\n          type: 'integer',\n          title: 'number of datasources indexed completed'\n        },\n        created_at: {\n          type: 'string',\n          title: 'creation date / time',\n          format: 'date-time'\n        },\n        data_source_uuids: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        finished_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        knowledge_base_uuid: {\n          type: 'string',\n          title: 'knowledge base id'\n        },\n        phase: {\n          type: 'string',\n          enum: [            'BATCH_JOB_PHASE_UNKNOWN',\n            'BATCH_JOB_PHASE_PENDING',\n            'BATCH_JOB_PHASE_RUNNING',\n            'BATCH_JOB_PHASE_SUCCEEDED',\n            'BATCH_JOB_PHASE_FAILED',\n            'BATCH_JOB_PHASE_ERROR',\n            'BATCH_JOB_PHASE_CANCELLED'\n          ]\n        },\n        started_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'INDEX_JOB_STATUS_UNKNOWN',\n            'INDEX_JOB_STATUS_PARTIAL',\n            'INDEX_JOB_STATUS_IN_PROGRESS',\n            'INDEX_JOB_STATUS_COMPLETED',\n            'INDEX_JOB_STATUS_FAILED',\n            'INDEX_JOB_STATUS_NO_CHANGES',\n            'INDEX_JOB_STATUS_PENDING'\n          ]\n        },\n        tokens: {\n          type: 'integer',\n          title: 'number of tokens'\n        },\n        total_datasources: {\n          type: 'integer',\n          title: 'number of datasources being indexed'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'last modified',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          title: 'unique id'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
        title: 'knowledge base id',
      },
      database_id: {
        type: 'string',
        description: 'the id of the DigitalOcean database this knowledge base will use, optiona.',
      },
      embedding_model_uuid: {
        type: 'string',
        description: 'Identifier for the foundation model.',
      },
      name: {
        type: 'string',
        title: 'knowledge base name',
      },
      project_id: {
        type: 'string',
        title: 'the id of the DigitalOcean project this knowledge base will belong to',
      },
      tags: {
        type: 'array',
        description: 'Tags to organize your knowledge base.',
        items: {
          type: 'string',
        },
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
  const { uuid, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.knowledgeBases.update(uuid, body)));
};

export default { metadata, tool, handler };
