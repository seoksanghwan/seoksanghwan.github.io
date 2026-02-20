'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { ProjectPost } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'highlight.js/styles/github-dark.css'; // 코드 하이라이트 스타일
import 'github-markdown-css/github-markdown-dark.css';

export const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectPost;
  onClose: () => void;
}) => {
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/project-md?id=${project.id}`)
      .then((res) => res.json())
      .then((data) => {
        setMarkdown(data.content || '');
        setIsLoading(false);
      });
  }, [project.id]);

  return (
    /* .modal-overlay */
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-[5px] z-[1000] flex justify-center items-center p-4"
      onClick={onClose}
    >
      {/* .modal-content */}
      <div
        className="relative w-full max-w-[800px] max-h-[90vh] bg-[#0d1117] rounded-[20px] overflow-y-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)] scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute cursor-pointer top-5 right-5 z-[1010] flex items-center justify-center w-[45px] h-[45px] bg-black/60 backdrop-blur-[4px] rounded-full border border-white/10 text-white text-[2rem] hover:bg-black/90 hover:text-mint hover:scale-110 hover:rotate-90 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] max-md:w-[35px] max-md:h-[35px] max-md:text-[1.6rem]"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {project.coverImage && (
          <div className="w-full mx-auto h-[350px] overflow-hidden max-md:w-[calc(100%+40px)] max-md:mx-auto max-md:mb-[3rem] max-md:h-[200px]">
            <img src={project.coverImage} className="w-full h-full object-cover block" alt="" />
          </div>
        )}

        {/* .modal-header */}
        <section className="p-10">
          <header className="mb-[2rem] bg-none">
            <h2 className="text-[3.2rem] font-bold text-white mb-[1.5rem] leading-tight">
              {project.title}
            </h2>

            <div className="flex flex-col gap-[1.2rem] text-[1.6rem] text-[#aaa]">
              <div className="flex items-center gap-[1rem]">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>
                  {project.startDate} ~ {project.endDate}
                </span>
              </div>

              <div className="flex flex-wrap gap-[0.8rem]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#2a2a2e] text-mint px-[1.2rem] py-[0.4rem] rounded-[4px] text-[1.4rem]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    className="inline-flex items-center px-5 py-2 bg-white text-[1.4rem] text-[#18181c] rounded-[8px] font-bold hover:opacity-80 transition-opacity"
                  >
                    Visit Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-4" />
                  </a>
                )}
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    className="inline-flex items-center px-5 py-2 bg-red-600 text-[1.4rem] text-white rounded-[8px] font-bold hover:opacity-80 transition-opacity"
                  >
                    Visit Youtube <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-4" />
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* .modal-body */}
          <div>
            {isLoading ? (
              <p className="text-[#aaa] text-[1.6rem] animate-pulse text-center py-20">
                상세 내용을 불러오는 중입니다...
              </p>
            ) : (
              <div className="markdown-body github-markdown-dark">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                  {markdown}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
