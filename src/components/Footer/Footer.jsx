import React from 'react';

export const Footer = props => {
  const FontAwesomeIcon = props.FontAwesomeIcon;
  return (
    <footer>
      <div className="foot">
        <div className="f-logo">
          <img src={props.logo} alt="logo" draggable="false" />
          <p>재밌고 즐겁게 개발하는 개발자입니다.</p>
          <div className="go-link">
            <ul>
              <li><a href="mailto:bdoi2214@gmail.com" target="_blank">{<FontAwesomeIcon icon={['far', 'envelope']} />}</a></li>
              <li><a href="https://www.linkedin.com/in/sanghwan-seok-202938171/" target="_blank">{<FontAwesomeIcon icon={['fab', 'linkedin-in']} />}</a></li>
              <li><a href="https://github.com/seoksanghwan" target="_blank">{<FontAwesomeIcon icon={['fab', 'github']} />}</a></li>
            </ul>
          </div>
          <small>
            {<FontAwesomeIcon icon={['far', 'copyright']} />} Copyright 2019 FE PROJECT
          </small>
        </div>
      </div>
    </footer>
  );
};
