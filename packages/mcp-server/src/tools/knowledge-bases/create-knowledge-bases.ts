// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'To create a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases`.',
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
          required: [],
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
    },
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
        required: [],
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
        required: [],
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
        required: [],
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
        required: [],
      },
    },
  },
};

export const handler = async (client: GradientAI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.knowledgeBases.create(body));
};

export default { metadata, tool, handler };
