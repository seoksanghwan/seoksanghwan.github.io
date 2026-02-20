import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectPost } from '@/types';

type ProjectModalHeaderProps = {
  project: ProjectPost;
};

export const ProjectModalHeader = ({ project }: ProjectModalHeaderProps) => (
  <header className="mb-[2rem] bg-none">
    <h2 id="project-modal-title" className="text-[3.2rem] font-bold text-white mb-[1.5rem] leading-tight">
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
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-white text-[1.4rem] text-[#18181c] rounded-[8px] font-bold hover:opacity-80 transition-opacity"
          >
            Visit Project <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-4" />
          </a>
        )}
        {project.youtube && (
          <a
            href={project.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-red-600 text-[1.4rem] text-white rounded-[8px] font-bold hover:opacity-80 transition-opacity"
          >
            Visit Youtube <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-4" />
          </a>
        )}
      </div>
    </div>
  </header>
);
