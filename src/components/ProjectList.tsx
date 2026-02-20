'use client';

import { useState } from 'react';
import { ProjectPost } from '@/types';
import { ProjectModal } from './ProjectModal/index';
import { ProjectCard } from './ProjectCard';

export const ProjectListSkeleton = () => (
  <section className="max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-[224px] rounded-[10px] bg-gray-200 animate-pulse" />
      ))}
    </div>
  </section>
);

export const ProjectList = ({ posts }: { posts: ProjectPost[] }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectPost | null>(null);

  return (
    <section className="max-w-[1200px] mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {posts.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </ul>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
