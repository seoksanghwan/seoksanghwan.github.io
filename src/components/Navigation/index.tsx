import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import home from '../../images/logo.png';

interface NavigationProps {
  recent: React.RefObject<HTMLDivElement | null>;
}

export const Navigation: React.FC<NavigationProps> = ({ recent }) => {
  return (
    <header>
      <nav className="nav-content">
        <div className="container">
          <div className="title-logo">
            <h1>
              <Link to="/">
                <img src={home} alt="logo-image" draggable="false" />
              </Link>
            </h1>
          </div>
          <div className="nav-menu">
            <ul>
              <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" end className={({ isActive }) => (isActive ? 'active' : '')}>
                  Front-End Project
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
