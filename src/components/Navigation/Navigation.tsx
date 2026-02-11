import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../styles/layout/header.scss';

// 1. 없는 함수였던 easeInOutQuad를 직접 정의합니다.
// t: 현재 시간, b: 시작 위치, c: 이동 거리, d: 전체 지속 시간
const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

interface NavigationProps {
  recent: React.RefObject<HTMLDivElement | null>;
}

export const Navigation: React.FC<NavigationProps> = ({ recent }) => {
  const naviFocusMoveEvent = (target: React.RefObject<HTMLDivElement | null>, duration: number) => {
    if (!target.current) return;

    let startPosition = window.scrollY || window.pageYOffset;
    let targetPosition = target.current.offsetTop - 50;
    let distance = targetPosition - startPosition;
    let timeStart: number | null = null;

    const loop = (timeCurrent: number) => {
      if (timeStart === null) timeStart = timeCurrent;
      let timeElapsed = timeCurrent - timeStart;

      // 여기서 위에서 정의한 함수를 사용합니다.
      let next = easeInOutQuad(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, next);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(loop);
      }
    };

    window.requestAnimationFrame(loop);
  };

  return (
    <header>
      <nav className="nav-content">
        <div className="container">
          <div className="title-logo">
            <h1>
              <Link to="/">
                <img src={logo} alt="logo-image" draggable="false" />
              </Link>
            </h1>
          </div>
          <div className="nav-menu">
            <ul>
              <li onClick={() => naviFocusMoveEvent(recent, 500)} style={{ cursor: 'pointer' }}>
                Front-End Project
              </li>
              <li>
                <a
                  href="https://github.com/seoksanghwan/prev-Project-List"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Publisher Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
