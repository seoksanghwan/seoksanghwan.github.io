import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 사용할 아이콘들을 각각의 라이브러리에서 직접 불러옵니다.
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import logo from '../../images/logo.png';

export const Footer: React.FC = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer>
      <div className="foot">
        <small>
          <FontAwesomeIcon icon={faCopyright} /> Copyright {CURRENT_YEAR} FE PROJECT
        </small>
      </div>
    </footer>
  );
};
