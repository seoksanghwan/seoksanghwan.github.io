import React, { useState } from 'react';
// 1. hooks 대신 생성된 JSON 데이터를 직접 import 합니다.
import projects from '@/data/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectPost } from '@/utils/notion';
import { ProjectModal } from './ProjectModal';

interface ProjectListProps {
  recent?: React.RefObject<HTMLDivElement>;
}

// Skeleton은 데이터 로딩이 없는 정적 방식에서는 사실상 필요 없으나,
// 디자인 통일성을 위해 남겨두거나 제거하셔도 됩니다.
const ProjectListInner: React.FC<ProjectListProps> = ({ recent }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectPost | null>(null);

  // 2. 이제 isLoading, isError 상태가 필요 없습니다.
  // 빌드 시점에 이미 데이터가 확정되어 있기 때문입니다.
  const posts = projects as ProjectPost[];

  return (
    <>
      <section className="my-recent-content">
        <div className="content" ref={recent}>
          <div className="content-list">
            <ul>
              {posts.map((project: ProjectPost) => {
                return (
                  <li key={project.id} onClick={() => setSelectedProject(project)}>
                    <div className="block-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag-badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.coverImage && (
                      <img src={project.coverImage} alt={project.title} draggable="false" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </section>
    </>
  );
};

export const ProjectList = Object.assign(ProjectListInner, {
  Skeleton: () => null, // 로딩이 없으므로 null 혹은 기본 UI 반환
});
