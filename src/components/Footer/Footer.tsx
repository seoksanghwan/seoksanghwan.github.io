import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 사용할 아이콘들을 각각의 라이브러리에서 직접 불러옵니다.
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import logo from '../../images/logo.png';
import '../../styles/layout/footer.scss';

export const Footer: React.FC = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer>
      <div className="foot">
        <div className="f-logo">
          <img src={logo} alt="logo" draggable="false" />
          <p>재밌고 즐겁게 개발하는 개발자입니다.</p>

          <div className="go-link">
            <ul>
              <li>
                <a href="mailto:bdoi2214@gmail.com" target="_blank" rel="noreferrer">
                  {/* 배열 형태 대신 가져온 아이콘 객체를 직접 넣습니다. */}
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sanghwan-seok-202938171/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://github.com/seoksanghwan" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>

          <small>
            <FontAwesomeIcon icon={faCopyright} /> Copyright {CURRENT_YEAR} FE PROJECT
          </small>
        </div>
      </div>
    </footer>
  );
};
