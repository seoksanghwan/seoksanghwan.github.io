import React from 'react';
import {mainImage} from './images';

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
              <img src={mainImage.me} alt="seoksanghwan_Memoji" className="img-me" draggable="false" />
              <img src={mainImage.realme} alt="seoksanghwan_real" className="real-me" draggable="false" />
            </div>
          </div>
        </div>
      </section>
      <section className="career-container">
        <div className="content">
          <div className="introduce-myself">
            <h2>안녕하세요.<em></em>프론트엔드 개발자 석상환이라고 합니다. 만나서 반갑습니다.</h2>
            <p>
              HTML, CSS, JAVASCRIPT... 를 사용하며,
              늘 발전하고 좀 더 좋은 코드를 작성하기 위해, 늘 공부하고, 배워가면서
              좀 더 좋은 코드를 작성하고 싶어 하는 개발자입니다.
            </p>
          </div>
          <div className="career-spack">
            <dl className="my-part">
              <dt>
                <img src={mainImage.html} alt="html" className="html" />
                <p>Web Publisher</p>
              </dt>
              <dd>
                처음 시작을 퍼블리셔로 했습니다.
              </dd>
              <dd>
                <h3>보유 기술</h3>
                <p>HTML, CSS, Javascript, Jquery</p>
              </dd>
              <dd>
                <h3>사용하는 도구</h3>
                <ul>
                  <li>Jira</li>
                  <li>Sublime</li>
                  <li>Slack</li>
                  <li>FileZilla</li>
                </ul>
              </dd>
            </dl>
            <dl className="my-part">
              <dt>
                <img src={mainImage.code} alt="code" className="code" />
                <p>Front-end Developer</p>
              </dt>
              <dd>
                프론트엔드 개발자를 시작한 이유는, 제가 친 코드가<br />
                현실로 나타나는 것을 즐기고, 또 좋아하기 때문입니다.<br />
                또 한 유저가 사용하는 모습의 보람을 느낍니다.
              </dd>
              <dd>
                <h3>보유 기술</h3>
                <p>HTML, CSS, SCSS, Javascript, React, Next.js<br/>Redux, Mobx, NodeJs, styled-components</p>
              </dd>
              <dd>
                <h3>사용하는 도구</h3>
                <ul>
                  <li>Sourcetree</li>
                  <li>Github</li>
                  <li>Terminal</li>
                  <li>VScode</li>
                  <li>Slack</li>
                  <li>Jira</li>
                  <li>Zeplin</li>
                  <li>Figma</li>
                  <li>Netlify</li>
                  <li>AWS</li>
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
                  <p>마블러스다자이너 <br />웹 서비스(라이선스, 스토어 판매, 커뮤니티) 입니다.</p>
                  <a href="https://marvelousdesigner.com/" target="_blank">웹사이트 방문{<FontAwesomeIcon icon="external-link-alt" />}</a>
                </div>
                <img src={mainImage.project04} alt="project01" draggable="false" />
              </li>
              <li>
                <div className="block-info">
                  <p>그룹 화상채팅을 할 수 있는<br />웹서비스입니다.</p>
                  <a href="https://www.videos-conf.com/" target="_blank">웹사이트 방문{<FontAwesomeIcon icon="external-link-alt" />}</a>
                </div>
                <img src={mainImage.project01} alt="project01" draggable="false" />
              </li>
              <li>
                <div className="block-info">
                  <p>비트코인 마진 거래소<br />웹서비스입니다.</p>
                  {/* <a href="http://www.wbcmex.com" target="_blank">웹사이트 방문{<FontAwesomeIcon icon="external-link-alt" />}</a> */}
                  <a href="https://www.youtube.com/watch?v=Y0NS99Dzczc&feature=youtu.be" target="_blank">유튜브 영상보기{<FontAwesomeIcon icon="external-link-alt" />}</a>
                </div>
                <img src={mainImage.project02} alt="project02" draggable="false" />
              </li>
              <li>
                <div className="block-info">
                  <p>AIbot 대쉬보드<br />웹서비스입니다. </p>
                  {/* <a href="http://aipebot.com" target="_blank">웹사이트 방문{<FontAwesomeIcon icon="external-link-alt" />}</a> */}
                </div>
                <img src={mainImage.project03} alt="project02" draggable="false" />
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
              <li><img src={mainImage.b_logo_04} alt="클로버추얼패션_마블러스디자이너"/></li>
              <li><img src={mainImage.b_logo_01} alt="뉴럴비씨"/></li>
              <li><img src={mainImage.b_logo_03} alt="아이파트너즈"/></li>
              <li><img src={mainImage.b_logo_02} alt="조인스엠"/></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
