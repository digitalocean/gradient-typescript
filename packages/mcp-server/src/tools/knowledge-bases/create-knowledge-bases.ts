// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'gradientai-mcp/filtering';
import { Metadata, asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/knowledge_bases',
  operationId: 'create_knowledge_base',
};

export const tool: Tool = {
  name: 'create_knowledge_bases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'information about a newly created knowledge base',\n  properties: {\n    knowledge_base: {\n      $ref: '#/$defs/api_knowledge_base'\n    }\n  },\n  $defs: {\n    api_knowledge_base: {\n      type: 'object',\n      title: 'Knowledgebase Description',\n      properties: {\n        added_to_agent_at: {\n          type: 'string',\n          title: 'time when the knowledge base was added to the agent',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          title: 'creation date / time',\n          format: 'date-time'\n        },\n        database_id: {\n          type: 'string'\n        },\n        embedding_model_uuid: {\n          type: 'string'\n        },\n        is_public: {\n          type: 'boolean',\n          title: 'whether the knowledge base is public or not'\n        },\n        last_indexing_job: {\n          $ref: '#/$defs/api_indexing_job'\n        },\n        name: {\n          type: 'string',\n          title: 'name of knowledge base'\n        },\n        project_id: {\n          type: 'string'\n        },\n        region: {\n          type: 'string',\n          title: 'region code'\n        },\n        tags: {\n          type: 'array',\n          title: 'Tags to organize related resources',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          title: 'last modified',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          title: 'id of user that created the knowledge base'\n        },\n        uuid: {\n          type: 'string',\n          title: 'unique id for knowledge base'\n        }\n      }\n    },\n    api_indexing_job: {\n      type: 'object',\n      title: 'IndexingJob description',\n      properties: {\n        completed_datasources: {\n          type: 'integer',\n          title: 'number of datasources indexed completed'\n        },\n        created_at: {\n          type: 'string',\n          title: 'creation date / time',\n          format: 'date-time'\n        },\n        data_source_uuids: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        finished_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        knowledge_base_uuid: {\n          type: 'string',\n          title: 'knowledge base id'\n        },\n        phase: {\n          type: 'string',\n          enum: [            'BATCH_JOB_PHASE_UNKNOWN',\n            'BATCH_JOB_PHASE_PENDING',\n            'BATCH_JOB_PHASE_RUNNING',\n            'BATCH_JOB_PHASE_SUCCEEDED',\n            'BATCH_JOB_PHASE_FAILED',\n            'BATCH_JOB_PHASE_ERROR',\n            'BATCH_JOB_PHASE_CANCELLED'\n          ]\n        },\n        started_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'INDEX_JOB_STATUS_UNKNOWN',\n            'INDEX_JOB_STATUS_PARTIAL',\n            'INDEX_JOB_STATUS_IN_PROGRESS',\n            'INDEX_JOB_STATUS_COMPLETED',\n            'INDEX_JOB_STATUS_FAILED',\n            'INDEX_JOB_STATUS_NO_CHANGES',\n            'INDEX_JOB_STATUS_PENDING'\n          ]\n        },\n        tokens: {\n          type: 'integer',\n          title: 'number of tokens'\n        },\n        total_datasources: {\n          type: 'integer',\n          title: 'number of datasources being indexed'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'last modified',\n          format: 'date-time'\n        },\n        uuid: {\n          type: 'string',\n          title: 'unique id'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      database_id: {
        type: 'string',
        description:
          'Identifier of the DigitalOcean OpenSearch database this knowledge base will use, optional.\nIf not provided, we create a new database for the knowledge base in\nthe same region as the knowledge base.',
      },
      datasources: {
        type: 'array',
        description:
          'The data sources to use for this knowledge base. See [Organize Data Sources](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#spaces-buckets) for more information on data sources best practices.',
        items: {
          type: 'object',
          properties: {
            aws_data_source: {
              $ref: '#/$defs/aws_data_source',
            },
            bucket_name: {
              type: 'string',
              title: 'Deprecated, moved to data_source_details',
            },
            bucket_region: {
              type: 'string',
              title: 'Deprecated, moved to data_source_details',
            },
            file_upload_data_source: {
              $ref: '#/$defs/api_file_upload_data_source',
            },
            item_path: {
              type: 'string',
            },
            spaces_data_source: {
              $ref: '#/$defs/api_spaces_data_source',
            },
            web_crawler_data_source: {
              $ref: '#/$defs/api_web_crawler_data_source',
            },
          },
        },
      },
      embedding_model_uuid: {
        type: 'string',
        description:
          'Identifier for the [embedding model](https://docs.digitalocean.com/products/genai-platform/details/models/#embedding-models).',
      },
      name: {
        type: 'string',
        description: 'Name of the knowledge base.',
      },
      project_id: {
        type: 'string',
        description: 'Identifier of the DigitalOcean project this knowledge base will belong to.',
      },
      region: {
        type: 'string',
        description: 'The datacenter region to deploy the knowledge base in.',
      },
      tags: {
        type: 'array',
        description: 'Tags to organize your knowledge base.',
        items: {
          type: 'string',
        },
      },
      vpc_uuid: {
        type: 'string',
        title: 'The VPC to deploy the knowledge base database in',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      aws_data_source: {
        type: 'object',
        title: 'AWS S3 Data Source',
        properties: {
          bucket_name: {
            type: 'string',
            title: 'Spaces bucket name',
          },
          item_path: {
            type: 'string',
          },
          key_id: {
            type: 'string',
            title: 'The AWS Key ID',
          },
          region: {
            type: 'string',
            title: 'Region of bucket',
          },
          secret_key: {
            type: 'string',
            title: 'The AWS Secret Key',
          },
        },
      },
      api_file_upload_data_source: {
        type: 'object',
        description: 'File to upload as data source for knowledge base.',
        properties: {
          original_file_name: {
            type: 'string',
            title: 'The original file name',
          },
          size_in_bytes: {
            type: 'string',
            title: 'The size of the file in bytes',
          },
          stored_object_key: {
            type: 'string',
            title: 'The object key the file was stored as',
          },
        },
      },
      api_spaces_data_source: {
        type: 'object',
        title: 'Spaces Bucket Data Source',
        properties: {
          bucket_name: {
            type: 'string',
            title: 'Spaces bucket name',
          },
          item_path: {
            type: 'string',
          },
          region: {
            type: 'string',
            title: 'Region of bucket',
          },
        },
      },
      api_web_crawler_data_source: {
        type: 'object',
        title: 'WebCrawlerDataSource',
        properties: {
          base_url: {
            type: 'string',
            description: 'The base url to crawl.',
          },
          crawling_option: {
            type: 'string',
            description:
              'Options for specifying how URLs found on pages should be handled.\n\n - UNKNOWN: Default unknown value\n - SCOPED: Only include the base URL.\n - PATH: Crawl the base URL and linked pages within the URL path.\n - DOMAIN: Crawl the base URL and linked pages within the same domain.\n - SUBDOMAINS: Crawl the base URL and linked pages for any subdomain.',
            enum: ['UNKNOWN', 'SCOPED', 'PATH', 'DOMAIN', 'SUBDOMAINS'],
          },
          embed_media: {
            type: 'boolean',
            description: 'Whether to ingest and index media (images, etc.) on web pages.',
          },
        },
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.knowledgeBases.create(body)));
};

export default { metadata, tool, handler };
