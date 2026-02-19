import React, { useState } from 'react';
import { usePosts } from '@/hooks/usePosts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectPost } from '@/utils/notion';
import { ProjectModal } from './ProjectModal';

interface ProjectListProps {
  recent?: React.RefObject<HTMLDivElement>;
}

const SKELETON_ITEM_COUNT = 6;

const ProjectListSkeleton: React.FC = () => (
  <section className="my-recent-content project-list-skeleton">
    <div className="content">
      <div className="content-list">
        <ul>
          {Array.from({ length: SKELETON_ITEM_COUNT }).map((_, index) => (
            <li key={index}>
              <div className="block-info">
                <span className="skeleton-line skeleton-title" />
                <span className="skeleton-line skeleton-desc" />
                <div className="tags">
                  <span className="skeleton-tag" />
                  <span className="skeleton-tag" />
                  <span className="skeleton-tag" />
                </div>
              </div>
              <div className="skeleton-image" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const ProjectListInner: React.FC<ProjectListProps> = ({ recent }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectPost | null>(null);

  const openModal = (project: ProjectPost) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) return <ProjectList.Skeleton />;
  if (isError) return <div className="error">데이터 로드에 실패했습니다.</div>;
  return (
    <>
      {/* Recent Work Section */}
      <section className="my-recent-content">
        <div className="content" ref={recent}>
          <div className="content-list">
            <ul>
              {posts?.map((project: ProjectPost, index: number) => {
                return (
                  <li key={project.id} onClick={() => setSelectedProject(project)}>
                    <div className="block-info">
                      {/* 2. 제목 추가 (필요하시다면) */}
                      <h3>{project.title}</h3>

                      {/* 3. 가공된 필드명인 description 사용 */}
                      <p>{project.description}</p>

                      {/* 5. 태그가 있다면 여기서 출력 */}
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* 6. 가공된 필드명인 coverImage 사용 */}
                    {project.coverImage && (
                      <img src={project.coverImage} alt={project.title} draggable="false" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 모달 렌더링 */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </section>
    </>
  );
};

export const ProjectList = Object.assign(ProjectListInner, {
  Skeleton: ProjectListSkeleton,
});