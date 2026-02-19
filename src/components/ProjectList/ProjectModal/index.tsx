import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { useQuery } from '@tanstack/react-query';
import { getProjectMarkdown, ProjectPost } from '@/utils/notion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'highlight.js/styles/github-dark.css'; // 코드 하이라이트 스타일
import 'github-markdown-css/github-markdown-dark.css';

interface Props {
  project: ProjectPost;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
  const { data: markdown, isLoading } = useQuery({
    queryKey: ['projectMarkdown', project.id],
    queryFn: () => getProjectMarkdown(project.id),
    enabled: !!project.id,
    initialData: '',
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* 1. 썸네일 영역 추가 */}
        {project.coverImage && (
          <div className="modal-thumbnail">
            <img src={project.coverImage} alt={project.title} />
          </div>
        )}

        {/* 2. 기존 헤더 및 메타 정보 */}
        <header className="modal-header">
          <h2 className="modal-title">{project.title}</h2>

          <div className="modal-meta">
            <div className="meta-item date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                {project.startDate} ~ {project.endDate}
              </span>
            </div>

            <div className="meta-item tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  #{tag}
                </span>
              ))}
            </div>

            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" className="modal-link">
                Visit Project <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
            {project.youtube && (
              <a href={project.youtube} target="_blank" rel="noreferrer" className="modal-link">
                Visit Youtube <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
          </div>
        </header>

        <hr className="modal-divider" />

        {/* 3. 상세 본문 섹션 */}
        <div className="modal-body">
          {isLoading ? (
            <p>상세 내용을 불러오는 중입니다...</p>
          ) : (
            <div className="markdown-body" style={{ backgroundColor: 'none' }}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]} // remarkPlugins에 추가
                rehypePlugins={[rehypeHighlight]}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
