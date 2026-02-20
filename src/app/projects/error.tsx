'use client';

import { useEffect } from 'react';

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Projects 페이지 에러:', error);
  }, [error]);

  const isNotionError =
    error.message?.includes('502') ||
    error.message?.includes('Notion') ||
    error.message?.includes('NOTION');

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-[2.4rem] font-bold text-[#18181c] mb-4">
        프로젝트 목록을 불러오지 못했어요
      </h2>
      <p className="text-[1.6rem] text-[#555] mb-2 max-w-[480px]">
        {isNotionError
          ? 'Notion 서버가 일시적으로 불안정할 수 있어요. 잠시 후 다시 시도해 주세요.'
          : '일시적인 오류가 발생했어요. 아래 버튼으로 다시 시도해 주세요.'}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 px-6 py-3 bg-[#18181c] text-white text-[1.5rem] font-medium rounded-[10px] hover:opacity-90 transition-opacity"
      >
        다시 시도
      </button>
    </div>
  );
}
