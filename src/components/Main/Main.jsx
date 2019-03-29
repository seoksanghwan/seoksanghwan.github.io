import React from 'react';
import me from '../../images/me.png'
import realme from '../../images/realme.png'

export const Main = () => {
  return (
    <>
      <section className="main-container">
        <div className="content">
          <div className="about-me">
            <div className="info-text">
              <p>
                Front-end Developer<br />
                <small>저는 제가 하는 일에 보람을 느끼며, 코드 짜는 것을 좋아합니다.</small>
              </p>
            </div>
            <div className="circle">
              <img src={me} alt="seoksanghwan" className="img-me"/>
              <img src={realme} alt="seoksanghwan" className="real-me"/>
            </div>
          </div>
        </div>
      </section>
      <section className="career-container">
        <div className="content">
          <div className="introduce-myself">
            <h2>안녕하세요. 프론트엔드 개발자 석상환이라고 합니다. 만나서 반갑습니다.</h2>
            <p>
              거의 4~5년간 HTML, CSS, JAVASCRIPT... 를 사용하며, <br />
              늘 발전하고 좀 더 좋은 코드를 작성하기 위해, 늘 공부하고, 배워가면서 <br />
              좀 더 좋은 코드를 작성하고 싶어 하는 개발자입니다.
            </p>
          </div>
          <div className="career-spack">

          </div>
        </div>
      </section>
    </>
  );
};
