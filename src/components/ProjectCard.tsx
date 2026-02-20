'use client';

import { ProjectPost } from '@/types';

type ProjectCardProps = {
  project: ProjectPost;
  onClick: () => void;
};

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <li
    onClick={onClick}
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
);
