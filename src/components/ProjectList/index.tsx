import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { mainImage, projectList, companyLogos } from '@/lib/consts/images';

interface ProjectList {
  recent?: React.RefObject<HTMLDivElement>;
}

export const ProjectList: React.FC<ProjectList> = ({ recent }) => {
  return (
    <>
      {/* Recent Work Section */}
      <section className="my-recent-content">
        <div className="content" ref={recent}>
          <div className="content-title">
            <h2>My Recent Work</h2>
            <p>
              최근 작업물들입니다. <br />
              퍼블리셔 작업 리스트는{' '}
              <a href="http://seokweb.dothome.co.kr/portfolio/" target="_blank" rel="noreferrer">
                여기
              </a>
              를 클릭해주세요.
            </p>
          </div>
          <div className="content-list">
            <ul>
              {projectList.map((project, index) => (
                <li key={index}>
                  <div className="block-info">
                    <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.linkText}
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    )}
                  </div>
                  <img src={project.src} alt={project.alt} draggable="false" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
