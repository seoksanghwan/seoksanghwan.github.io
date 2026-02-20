import { ProjectPost } from '@/types';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const NOTION_RETRY_STATUSES = [502, 503, 504];
const NOTION_RETRY_COUNT = 2;
const NOTION_RETRY_DELAY_MS = 1500;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function isRetryableNotionError(error: unknown): boolean {
  const e = error as { status?: number; message?: string };
  if (typeof e.status === 'number' && NOTION_RETRY_STATUSES.includes(e.status)) return true;
  const msg = e.message ?? '';
  return /502|503|504/.test(String(msg));
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

function mapNotionPageToPost(page: any): ProjectPost {
  const { properties, cover, id, url: notionUrl } = page;
  return {
    id,
    title: properties.Name?.title[0]?.plain_text || '제목 없음',
    description: properties.Description?.rich_text[0]?.plain_text || '',
    coverImage: cover?.file?.url || cover?.external?.url || null,
    url: properties.URL?.url || '',
    youtube: properties.Youtube?.url || '',
    tags: properties.Tag?.multi_select?.map((tag: any) => tag.name) || [],
    startDate: properties['Work Period']?.date?.start || '',
    endDate: properties['Work Period']?.date?.end || '',
    notionUrl,
  };
}

export const getBlogPosts = async (): Promise<ProjectPost[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!databaseId) {
    console.error('NOTION_DATABASE_ID 환경 변수가 설정되지 않았습니다.');
    throw new Error('Notion 설정이 올바르지 않습니다. NOTION_DATABASE_ID를 확인해 주세요.');
  }

  let lastError: unknown;
  for (let attempt = 0; attempt <= NOTION_RETRY_COUNT; attempt++) {
    try {
      const response = await (notion as any).dataSources.query({
        data_source_id: databaseId,
        sorts: [
          {
            property: 'Work Period',
            direction: 'descending',
          },
        ],
      });

      return (response.results as any[]).map(mapNotionPageToPost);
    } catch (error) {
      lastError = error;
      console.error(`getBlogPosts 실패 (시도 ${attempt + 1}/${NOTION_RETRY_COUNT + 1}):`, error);

      if (attempt < NOTION_RETRY_COUNT && isRetryableNotionError(error)) {
        await sleep(NOTION_RETRY_DELAY_MS);
        continue;
      }
      throw lastError;
    }
  }

  throw lastError;
};

// 4. 마크다운 변환 로직 유지
export const getProjectMarkdown = async (pageId: string): Promise<string> => {
  try {
    if (!pageId) return '';
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);
    return mdString.parent || '';
  } catch (error) {
    console.error('Markdown 변환 중 에러 발생:', error);
    return '';
  }
};

// 5. 상세 정보 로직 유지
export const getProjectDetail = async (pageId: string) => {
  try {
    const pageResponse = await notion.pages.retrieve({ page_id: pageId });
    const blocksResponse = await notion.blocks.children.list({
      block_id: pageId,
    });
    return {
      page: pageResponse,
      blocks: blocksResponse.results,
    };
  } catch (error) {
    console.error('SDK Detail Error:', error);
    throw error;
  }
};
