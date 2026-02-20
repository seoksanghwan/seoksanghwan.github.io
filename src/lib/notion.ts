import { ProjectPost } from '@/types';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

// 2. 클라이언트 설정 (Next.js 서버 사이드 대응)
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// 3. 상환님의 dataSources.query 로직 그대로 이식
export const getBlogPosts = async (): Promise<ProjectPost[]> => {
  try {
    const response = await (notion as any).dataSources.query({
      data_source_id: process.env.NOTION_DATABASE_ID as string,
      sorts: [
        {
          property: 'Work Period',
          direction: 'descending',
        },
      ],
    });

    return (response.results as any[]).map((page) => {
      const { properties, cover, id, url: notionUrl } = page;

      return {
        id: id,
        title: properties.Name?.title[0]?.plain_text || '제목 없음',
        description: properties.Description?.rich_text[0]?.plain_text || '',
        coverImage: cover?.file?.url || cover?.external?.url || null,
        url: properties.URL?.url || '',
        youtube: properties.Youtube?.url || '',
        tags: properties.Tag?.multi_select?.map((tag: any) => tag.name) || [],
        startDate: properties['Work Period']?.date?.start || '',
        endDate: properties['Work Period']?.date?.end || '',
        notionUrl: notionUrl,
      };
    });
  } catch (error) {
    console.error('getBlogPosts 가공 중 에러 발생:', error);
    throw error;
  }
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
