import React from 'react';
import me from '../../images/me.png';
import realme from '../../images/realme.png';
import code from '../../images/code.png';
import html from '../../images/html.png';
import project01 from '../../images/project01.png';
import project02 from '../../images/project02.png';
import b_logo_01 from '../../images/b_logo_01.png';
import b_logo_02 from '../../images/b_logo_02.png';
import b_logo_03 from '../../images/b_logo_03.png';

export const Main = props => {
  const FontAwesomeIcon = props.FontAwesomeIcon;
  return (
    <>
      <section className="main-container">
        <div className="content">
          <div className="about-me">
            <div className="info-text">
              <p>
                Front-end Developer<br />
                <small>저는 제가 하는 일에 보람을 느끼며, <em></em>코드 짜는 것을 좋아합니다.</small>
              </p>
            </div>
            <div className="circle">
              <img src={me} alt="seoksanghwan" className="img-me" draggable="false" />
              <img src={realme} alt="seoksanghwan" className="real-me" draggable="false" />
            </div>
          </div>
        </div>
      </section>
      <section className="career-container">
        <div className="content">
          <div className="introduce-myself">
            <h2>안녕하세요.<em></em>프론트엔드 개발자 석상환이라고 합니다. 만나서 반갑습니다.<span>👋</span></h2>
            <p>
              거의 4~5년간 HTML, CSS, JAVASCRIPT... 를 사용하며,
              늘 발전하고 좀 더 좋은 코드를 작성하기 위해, 늘 공부하고, 배워가면서
              좀 더 좋은 코드를 작성하고 싶어 하는 개발자입니다.
            </p>
          </div>
          <div className="career-spack">
            <dl className="my-part">
              <dt>
                <img src={html} alt="html" className="html" />
                <p>Web Publisher</p>
              </dt>
              <dd>
                처음 시작을 퍼블리셔로 했습니다.<br />
                좀 더 발전하고 싶어 프론트엔드로 전향하였습니다.
              </dd>
              <dd>
                <h3>사용하는 언어</h3>
                <p>HTML, CSS, Jquery</p>
              </dd>
              <dd>
                <h3>사용하는 도구</h3>
                <ul>
                  <li>Jira</li>
                  <li>Sublime</li>
                  <li>Slack</li>
                </ul>
              </dd>
            </dl>
            <dl className="my-part">
              <dt>
                <img src={code} alt="code" className="code" />
                <p>Front-end Developer</p>
              </dt>
              <dd>
                프론트엔드 개발자를 시작한 이유는, 제가 친 코드가<br />
                현실로 나타나는 것을 즐기고, 또 좋아하기 때문입니다.
              </dd>
              <dd>
                <h3>사용하는 언어</h3>
                <p>HTML, CSS, SCSS, Javascript, React, Redux, NodeJs</p>
              </dd>
              <dd>
                <h3>사용하는 도구</h3>
                <ul>
                  <li>Bitbucket</li>
                  <li>Github</li>
                  <li>Terminal</li>
                  <li>VScode</li>
                  <li>Slack</li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="my-recent-content">
        <div className="content" ref={props.recent}>
          <div className="content-title">
            <h2>My Recent Work</h2>
            <p>
              최근 작업했던, 작업물들입니다. <br />
              퍼블리셔로 작업 했던 리스트를 보실려면, <a href="http://seokweb.com/portfolio/" target="_blank">여기</a>를 클릭해주세요.
            </p>
          </div>
          <div className="content-list">
            <ul>
              <li>
                <div className="block-info">
                  <p>그룹 화상채팅을 할 수 있는<br />웹서비스입니다.</p>
                  <a href="https://www.videos-conf.com/" target="_blank">웹사이트 방문{<FontAwesomeIcon icon="external-link-alt" />}</a>
                </div>
                <img src={project01} alt="project01" draggable="false" />
              </li>
              <li>
                <div className="block-info">
                  <p>비트코인 마진 거래소<br />웹서비스입니다.</p>
                  <a href="https://www.youtube.com/watch?v=Y0NS99Dzczc&feature=youtu.be" target="_blank">유튜브 영상보기{<FontAwesomeIcon icon="external-link-alt" />}</a>
                </div>
                <img src={project02} alt="project02" draggable="false" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="my-work-content">
        <div className="content">
          <div className="content-title">
            <h2>저는 여러 회사들과 협력하게 된 것을<br/>자랑스럽게 생각합니다.</h2>
          </div>
          <div className="content-list">
            <ul>
              <li><img src={b_logo_01} alt=""/></li>
              <li><img src={b_logo_03} alt=""/></li>
              <li><img src={b_logo_02} alt=""/></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
