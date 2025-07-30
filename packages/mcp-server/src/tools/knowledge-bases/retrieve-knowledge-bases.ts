// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradient-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradient-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Gradient from '@digitalocean/gradient';

export const metadata: Metadata = {
  resource: 'knowledge_bases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/gen-ai/knowledge_bases/{uuid}',
  operationId: 'genai_get_knowledge_base',
};

export const tool: Tool = {
  name: 'retrieve_knowledge_bases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo retrive information about an existing knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/{uuid}`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'The knowledge base',\n  properties: {\n    database_status: {\n      type: 'string',\n      enum: [        'CREATING',\n        'ONLINE',\n        'POWEROFF',\n        'REBUILDING',\n        'REBALANCING',\n        'DECOMMISSIONED',\n        'FORKING',\n        'MIGRATING',\n        'RESIZING',\n        'RESTORING',\n        'POWERING_ON',\n        'UNHEALTHY'\n      ]\n    },\n    knowledge_base: {\n      $ref: '#/$defs/api_knowledge_base'\n    }\n  },\n  $defs: {\n    api_knowledge_base: {\n      type: 'object',\n      description: 'Knowledgebase Description',\n      properties: {\n        added_to_agent_at: {\n          type: 'string',\n          description: 'Time when the knowledge base was added to the agent',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation date / time',\n          format: 'date-time'\n        },\n        database_id: {\n          type: 'string'\n        },\n        embedding_model_uuid: {\n          type: 'string'\n        },\n        is_public: {\n          type: 'boolean',\n          description: 'Whether the knowledge base is public or not'\n        },\n        last_indexing_job: {\n          $ref: '#/$defs/api_indexing_job'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of knowledge base'\n        },\n        project_id: {\n          type: 'string'\n        },\n        region: {\n          type: 'string',\n          description: 'Region code'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags to organize related resources',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Last modified',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          description: 'Id of user that created the knowledge base'\n        },\n        uuid: {\n          type: 'string',\n          description: 'Unique id for knowledge base'\n        }\n      }\n    },\n    api_indexing_job: {\n      type: 'object',\n      description: 'IndexingJob description',\n      properties: {\n        completed_datasources: {\n          type: 'integer',\n          description: 'Number of datasources indexed completed'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation date / time',\n          format: 'date-time'\n        },\n        data_source_uuids: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        finished_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        knowledge_base_uuid: {\n          type: 'string',\n          description: 'Knowledge base id'\n        },\n        phase: {\n          type: 'string',\n          enum: [            'BATCH_JOB_PHASE_UNKNOWN',\n            'BATCH_JOB_PHASE_PENDING',\n            'BATCH_JOB_PHASE_RUNNING',\n            'BATCH_JOB_PHASE_SUCCEEDED',\n            'BATCH_JOB_PHASE_FAILED',\n            'BATCH_JOB_PHASE_ERROR',\n            'BATCH_JOB_PHASE_CANCELLED'\n          ]\n        },\n        started_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'INDEX_JOB_STATUS_UNKNOWN',\n            'INDEX_JOB_STATUS_PARTIAL',\n            'INDEX_JOB_STATUS_IN_PROGRESS',\n            'INDEX_JOB_STATUS_COMPLETED',\n            'INDEX_JOB_STATUS_FAILED',\n            'INDEX_JOB_STATUS_NO_CHANGES',\n            'INDEX_JOB_STATUS_PENDING'\n          ]\n        },\n        tokens: {\n          type: 'integer',\n          description: 'Number of tokens'\n        },\n        total_datasources: {\n          type: 'integer',\n          description: 'Number of datasources being indexed'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Last modified',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          description: 'Unique id'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['uuid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Gradient, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.knowledgeBases.retrieve(uuid)));
};

export default { metadata, tool, handler };
