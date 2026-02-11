import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { mainImage, projectList, companyLogos } from './images';
import '../../styles/base/_base.scss';

interface MainProps {
  recent?: React.RefObject<HTMLDivElement>;
}

export const Main: React.FC<MainProps> = ({ recent }) => {
  return (
    <>
      {/* Intro Section */}
      <section className="main-container">
        <div className="content">
          <div className="about-me">
            <div className="info-text">
              <p>
                Front-end Developer
                <br />
                <small>
                  저는 제가 하는 일에 보람을 느끼며, <em></em>코드 짜는 것을 좋아합니다.
                </small>
              </p>
            </div>
            <div className="circle">
              <img
                src={mainImage.me}
                alt="seoksanghwan_Memoji"
                className="img-me"
                draggable="false"
              />
              <img
                src={mainImage.realme}
                alt="seoksanghwan_real"
                className="real-me"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="career-container">
        <div className="content">
          <div className="introduce-myself">
            <h2>
              안녕하세요.<em></em>프론트엔드 개발자 석상환이라고 합니다. 만나서 반갑습니다.
            </h2>
            <p>
              HTML, CSS, JAVASCRIPT... 를 사용하며, 늘 발전하고 좀 더 좋은 코드를 작성하기 위해
              공부하는 개발자입니다.
            </p>
          </div>
          <div className="career-spack">
            {/* Publisher Info */}
            <dl className="my-part">
              <dt>
                <img src={mainImage.html} alt="html" className="html" />
                <p>Web Publisher</p>
              </dt>
              <dd>처음 시작을 퍼블리셔로 했습니다.</dd>
              <dd>
                <h3>보유 기술</h3>
                <p>HTML, CSS, Javascript, Jquery</p>
              </dd>
              <dd>
                <h3>사용하는 도구</h3>
                <ul>
                  <li>Jira, Sublime, Slack, FileZilla</li>
                </ul>
              </dd>
            </dl>
            {/* Frontend Info */}
            <dl className="my-part">
              <dt>
                <img src={mainImage.code} alt="code" className="code" />
                <p>Front-end Developer</p>
              </dt>
              <dd>제가 짠 코드가 현실로 나타나는 것을 즐깁니다.</dd>
              <dd>
                <h3>보유 기술</h3>
                <p>
                  HTML, CSS, SCSS, Javascript, React, Next.js, Redux, Mobx, NodeJs,
                  styled-components
                </p>
              </dd>
              <dd>
                <h3>사용하는 도구</h3>
                <ul>
                  <li>Github, VScode, Slack, Jira, Figma, AWS 등</li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </section>

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

      {/* Collaboration Section */}
      <section className="my-work-content">
        <div className="content">
          <div className="content-title">
            <h2>
              저는 여러 회사들과 협력하게 된 것을
              <br />
              자랑스럽게 생각합니다.
            </h2>
          </div>
          <div className="content-list">
            <ul>
              {companyLogos.map((logo, index) => (
                <li key={index}>
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
