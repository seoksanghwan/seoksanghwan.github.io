import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header>
      <nav className="nav-content">
        <div className="container">
          <div className="title-logo">
            <h1>
              <Link to="/">
                <img src={logo} alt="logo-image"/>
                <em>FE Project</em>
              </Link>
            </h1>
          </div>
          <div className="nav-menu">
            <ul>
              <li><Link to="/">Front-End Project</Link></li>
              <li><a href="http://seokweb.com/portfolio/" target="_blank">Publisher Project</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  ); 
};
