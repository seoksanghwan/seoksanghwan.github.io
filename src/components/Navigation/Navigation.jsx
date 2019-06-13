import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { easeInOutQuad } from 'ez.js';

export const Navigation = ({ recent, logo }) => {

  const naviFocusMoveEvent = (target, duration) => {
    let startPosition = window.scrollY || window.pageYOffset;
    let targetPosition = target.current.offsetTop - 50;
    let distance = targetPosition - startPosition;
    let timeStart = null;

    const loop = timeCurrent => {
      if (timeStart === null) timeStart = timeCurrent;
      let timeElapsed = timeCurrent - timeStart;
      let next = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, next);
      if (timeElapsed < duration) window.requestAnimationFrame(loop);
    }

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
              <li onClick={ () => naviFocusMoveEvent(recent,500)}>Front-End Project</li>
              <li><a href="http://seokweb.com/portfolio/" target="_blank">Publisher Project</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
