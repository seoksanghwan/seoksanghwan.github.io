// @ts-nocheck
/* eslint-disable */
// scripts/fetch-notion.cjs 상단에 추가
require('dotenv').config({ path: '.env.local' });

const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');
const fs = require('fs');
const path = require('path');

// 1. 클라이언트 설정 (상환님의 기존 설정을 노드 환경에 맞게 조정)
const notion = new Client({
  auth: process.env.VITE_NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

async function fetchNotionData() {
  try {
    console.log('🚀 상환님, 노션 데이터 추출을 시작합니다...');

    // 2. 상환님의 기존 코드 그대로 dataSources.query를 사용합니다.
    const response = await notion.dataSources.query({
      data_source_id: process.env.VITE_NOTION_DATABASE_ID,
      sorts: [
        {
          property: 'Work Period',
          direction: 'descending',
        },
      ],
    });

    const projects = await Promise.all(
      response.results.map(async (page) => {
        const { properties, cover, id, url: notionUrl } = page;

        // 마크다운 변환 로직 (빌드 타임에 미리 수행)
        let contentHtml = '';
        try {
          const mdblocks = await n2m.pageToMarkdown(id);
          const mdString = n2m.toMarkdownString(mdblocks);
          contentHtml = mdString.parent || '';
        } catch (err) {
          console.error(`ID ${id} 변환 실패:`, err);
        }

        // 상환님의 매핑 로직 그대로 유지
        return {
          id: id,
          title: properties.Name?.title[0]?.plain_text || '제목 없음',
          description: properties.Description?.rich_text[0]?.plain_text || '',
          coverImage: cover?.file?.url || cover?.external?.url || null,
          url: properties.URL?.url || '',
          youtube: properties.Youtube?.url || '',
          tags: properties.Tag?.multi_select?.map((tag) => tag.name) || [],
          startDate: properties['Work Period']?.date?.start || '',
          endDate: properties['Work Period']?.date?.end || '',
          notionUrl: notionUrl,
          content: contentHtml,
        };
      }),
    );

    // 3. 파일 저장 경로 설정
    const dataDir = path.join(__dirname, '../src/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(dataDir, 'projects.json'),
      JSON.stringify(projects, null, 2),
      'utf-8',
    );

    console.log(
      `✅ 성공! ${projects.length}개의 프로젝트가 src/data/projects.json에 저장되었습니다.`,
    );
  } catch (error) {
    console.error('❌ 스크립트 실행 중 에러 발생:', error);
    process.exit(1);
  }
}

fetchNotionData();
