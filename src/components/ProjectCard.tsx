'use client';

import { ProjectPost } from '@/types';

type ProjectCardProps = {
  project: ProjectPost;
  onClick: () => void;
};

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <li
    onClick={onClick}
    className="group relative h-[224px] rounded-[10px] shadow-lg overflow-hidden cursor-pointer bg-[#18181c]/80"
  >
    {project.coverImage && (
      <img
        src={project.coverImage}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 blur-sm"
      />
    )}
    {!project.coverImage && (
      <div
        data-title={project.title}
        className="w-full h-full bg-center transition-all duration-300 group-hover:scale-110 blur-sm" style={{ background: 'linear-gradient(135deg, #64ffda 0%, #0d1117 100%)' }}
      />
    )}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#18181c] p-6 text-center opacity-80">
      <h3 className="text-white text-[2rem] break-keep text-center font-bold">{project.title}</h3>
      <p className="text-white text-[1.4rem] break-keep">{project.description}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-[#2a2a2e] text-mint px-[1.2rem] py-[0.4rem] rounded-[4px] text-[1rem]">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </li>
);
