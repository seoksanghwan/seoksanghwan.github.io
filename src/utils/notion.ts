import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

// 1. 가공된 데이터의 타입을 정의합니다.
export interface ProjectPost {
  id: string;
  title: string;
  description: string;
  coverImage: string | null;
  url: string;
  tags: string[];
  startDate: string;
  endDate: string;
  notionUrl: string;
  youtube?: string;
}

const notion = new Client({
  auth: import.meta.env.VITE_NOTION_TOKEN,
  baseUrl: window.location.origin,
  fetch: window.fetch.bind(window),
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getBlogPosts = async (): Promise<ProjectPost[]> => {
  try {
    const response = await notion.dataSources.query({
      data_source_id: import.meta.env.VITE_NOTION_DATABASE_ID as string,
      sorts: [
        {
          property: 'Work Period',
          direction: 'descending',
        },
      ],
    });

    // 2. 응답 데이터를 사용하기 편하게 가공(Mapping)합니다.
    return (response.results as any[]).map((page) => {
      const { properties, cover, id, url: notionUrl } = page;

      return {
        id: id,
        // 프로젝트 명 (Title)
        title: properties.Name?.title[0]?.plain_text || '제목 없음',

        // 프로젝트 설명 (Rich Text)
        description: properties.Description?.rich_text[0]?.plain_text || '',

        // 커버 이미지 (파일 업로드 혹은 외부 링크 대응)
        coverImage: cover?.file?.url || cover?.external?.url || null,

        // 결과물 URL
        url: properties.URL?.url || '',

        youtube: properties.Youtube?.url || '',

        // 기술 스택 (Multi-select 배열을 문자열 배열로 변환)
        tags: properties.Tag?.multi_select?.map((tag: any) => tag.name) || [],

        // 작업 기간 (시작일 ~ 종료일)
        startDate: properties['Work Period']?.date?.start || '',
        endDate: properties['Work Period']?.date?.end || '',

        // 노션 원본 페이지 링크
        notionUrl: notionUrl,
      };
    });
  } catch (error) {
    console.error('getBlogPosts 가공 중 에러 발생:', error);
    throw error;
  }
};

export const getProjectMarkdown = async (pageId: string): Promise<string> => {
  try {
    if (!pageId) return ''; // ID가 없으면 빈 문자열 즉시 반환

    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);

    // mdString.parent가 undefined일 경우를 대비해 기본값을 설정합니다.
    return mdString.parent || '';
  } catch (error) {
    console.error('Markdown 변환 중 에러 발생:', error);
    // 에러 발생 시에도 undefined가 아닌 빈 값을 반환하여 쿼리 에러를 방지합니다.
    return '';
  }
};

export const getProjectDetail = async (pageId: string) => {
  try {
    // 1. 페이지의 기본 정보를 가져옵니다.
    const pageResponse = await notion.pages.retrieve({ page_id: pageId });

    // 2. 페이지의 하위 블록들을 모두 가져옵니다.
    const blocksResponse = await notion.blocks.children.list({
      block_id: pageId,
    });

    // 참고: react-notion-x는 Notion API 응답을 그대로 쓰기보다
    // 전용 비공식 API(notion-client)를 쓰는 경우가 많으나,
    // 공식 SDK 응답을 변환해서 쓸 수도 있습니다.
    return {
      page: pageResponse,
      blocks: blocksResponse.results,
    };
  } catch (error) {
    console.error('SDK Detail Error:', error);
    throw error;
  }
};
