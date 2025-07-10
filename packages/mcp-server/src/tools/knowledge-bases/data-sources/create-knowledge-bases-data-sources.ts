// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'gradientai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import GradientAI from 'gradientai';

export const metadata: Metadata = {
  resource: 'knowledge_bases.data_sources',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources',
  operationId: 'create_knowledge_base_data_source',
};

export const tool: Tool = {
  name: 'create_knowledge_bases_data_sources',
  description:
    'To add a data source to a knowledge base, send a POST request to `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`.',
  inputSchema: {
    type: 'object',
    properties: {
      knowledge_base_uuid: {
        type: 'string',
        title: 'knowledge base id',
      },
      aws_data_source: {
        $ref: '#/$defs/aws_data_source',
      },
      spaces_data_source: {
        $ref: '#/$defs/api_spaces_data_source',
      },
      web_crawler_data_source: {
        $ref: '#/$defs/api_web_crawler_data_source',
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
  const { knowledge_base_uuid, ...body } = args as any;
  return asTextContentResult(await client.knowledgeBases.dataSources.create(knowledge_base_uuid, body));
};

export default { metadata, tool, handler };
