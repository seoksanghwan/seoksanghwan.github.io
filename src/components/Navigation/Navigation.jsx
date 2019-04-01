import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation = ({ recent, logo }) => {

  const naviFocusMoveEvent = (recent, () => {
    window.scrollTo({
      top: recent.current.offsetTop - 50,
      left: 0,
      behavior: 'smooth'
    });
  });

  return (
    <header>
      <nav className="nav-content">
        <div className="container">
          <div className="title-logo">
            <h1>
              <Link to="/">
                <img src={logo} alt="logo-image" draggable="false" />
                {/* <em>FE Project</em> */}
              </Link>
            </h1>
          </div>
          <div className="nav-menu">
            <ul>
              <li onClick={naviFocusMoveEvent.bind(this)}>Front-End Project</li>
              <li><a href="http://seokweb.com/portfolio/" target="_blank">Publisher Project</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
