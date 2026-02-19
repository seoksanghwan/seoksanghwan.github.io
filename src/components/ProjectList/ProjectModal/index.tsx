import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
// useQuery와 getProjectMarkdown 임포트는 이제 필요 없습니다.
import { ProjectPost } from '@/utils/notion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'highlight.js/styles/github-dark.css';
import 'github-markdown-css/github-markdown-dark.css';

interface Props {
  project: ProjectPost & { content?: string }; // content 필드 타입을 포함시킵니다.
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
  // 1. useQuery 로직을 완전히 제거합니다.
  // 2. 대신 fetch-notion.cjs에서 미리 구워둔 project.content를 바로 사용합니다.
  const markdown = project.content || '';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {project.coverImage && (
          <div className="modal-thumbnail">
            <img src={project.coverImage} alt={project.title} />
          </div>
        )}

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

        <div className="modal-body">
          {/* 3. 로딩 상태 체크 없이 즉시 렌더링합니다. */}
          <div className="markdown-body" style={{ backgroundColor: 'transparent' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
