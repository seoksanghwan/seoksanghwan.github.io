import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { mainImage, companyLogos } from '@/lib/consts/images';
import getDuration from '@/lib/getDuration';
import { careerData, skills } from '@/lib/consts/career';

interface MainProps {
  recent?: React.RefObject<HTMLDivElement>;
}

export const Main: React.FC<MainProps> = ({ recent }) => {
  return (
    <>
      {/* Career Section */}
      <section className="career-container">
        <div className="career-content">
          <div className="career-spack">
            <div className="introduce">
              <div className="profileImage" />
              <div className="introduce-myself">
                <div className="name">
                  <h3>프론트엔드 개발자</h3>
                  <h2>석상환</h2>
                </div>
                <div className="link">
                  <ul>
                    <li>
                      <a href="mailto:bdoi2214@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        bdoi2214@gmail.com
                      </a>
                    </li>
                    <li>
                      <a>
                        <FontAwesomeIcon icon={faPhone} />
                        010-4921-7224
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sanghwan-seok-202938171/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        github
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/seoksanghwan" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        LinkdIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-section">
              <div className="title">
                <h4>자기 소개</h4>
              </div>
              <div className="content">
                <p>
                  <b>
                    "효율적인 시스템으로 팀의 생산성을 높이고, 기술로 서비스의 가치를 더하는 개발자"
                  </b>
                  저는 명확한 책임과 의도가 담긴 설계를 지향합니다. 퍼블리셔 출신의 섬세한 UI
                  구현력에 프론트엔드 기술력을 더해, 디자이너와 개발자 모두가 만족하는 협업 구조를
                  만들어왔습니다.
                </p>
                <p>
                  특히 디자인 시스템을 주도적으로 구축하여 컴포넌트 재사용률을 50%까지 끌어올렸으며,
                  이를 통해 개발 리소스를 절감하고 서비스의 일관성을 확보했습니다. 개인의 기술적
                  성장이 팀 전체의 시너지로 이어지는 선순환 구조를 만드는 데 집중합니다.
                </p>
              </div>
            </div>
            <div className="about-section">
              <div className="title">
                <h4>기술 스택</h4>
              </div>
              <div className="content">
                <div className="skills">
                  {Object.entries(skills).map(([title, chips]) => (
                    <div key={title} className="skill-group">
                      <div className="skill-title">{title}</div>
                      <div className="skill-chips">
                        {(chips as string[]).map((chip) => (
                          <div className="chip" key={chip}>
                            {chip}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="about-section">
              <div className="title">
                <h4>경력</h4>
              </div>
              <div className="content is-career">
                {careerData.map((career, idx) => (
                  <div className="career-section" key={idx}>
                    <dl className="career-warp">
                      {/* 회사명 영역 */}
                      <div className="company-name">
                        <dt>회사명</dt>
                        <dd>{career.company}</dd>
                      </div>

                      {/* 근무 기간 영역 */}
                      <div className="period">
                        <dt>근무 기간 (근무 형태)</dt>
                        <dd>
                          {career.startDate} ~{' '}
                          {career.isGoing ? <span>재직 중</span> : career.endDate}
                          <span
                            className="duration-tag"
                            style={{ marginLeft: '8px', color: '#666' }}
                          >
                            ({getDuration(career.startDate, career.endDate, career.isGoing)})
                          </span>
                        </dd>
                      </div>

                      {/* 담당 업무 영역 (핵심) */}
                      <div className="personal-history">
                        <dt>담당 업무</dt>
                        <div className="list">
                          <ul>
                            {career.tasks.map((task, tIdx) => (
                              <li key={tIdx}>
                                <p>{task.service}</p>
                                <ul>
                                  {task.descriptions.map((desc, dIdx) => (
                                    <li key={dIdx}>{desc}</li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      {/* <section className="my-work-content">
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
      </section> */}
    </>
  );
};
