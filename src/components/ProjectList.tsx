'use client';

import { useState } from 'react';
import { ProjectPost } from '@/types';
import { ProjectModal } from './ProjectModal';

// 1. Skeleton을 명시적으로 Export 합니다.
export const ProjectListSkeleton = () => (
  <section className="max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-[224px] rounded-[10px] bg-gray-200 animate-pulse" />
      ))}
    </div>
  </section>
);

// 2. 메인 리스트 컴포넌트도 명시적으로 Export 합니다.
export const ProjectList = ({ posts }: { posts: ProjectPost[] }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectPost | null>(null);

  return (
    <section className="max-w-[1200px] mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {posts.map((project) => (
          <li
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative h-[224px] rounded-[10px] shadow-lg overflow-hidden cursor-pointer bg-[#10073a]/80"
          >
            {project.coverImage && (
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
              />
            )}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#18181c] p-6 text-center opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-white text-[2rem] font-bold">{project.title}</h3>
              <p className="text-white/70 text-[1.2rem] line-clamp-2">{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
