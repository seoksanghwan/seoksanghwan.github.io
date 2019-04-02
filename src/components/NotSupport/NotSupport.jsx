import React from 'react';
import { Link } from "react-router-dom";

export const NotSupport = ({FontAwesomeIcon, closePopUpButtonEvnet,noneStyle}) => {
  return (
    <div className="NotSupport" style={{
      display : noneStyle
    }}> 
      <p>
        죄송합니다, 이 브라우저는 깔끔하게 지원되지 않습니다.
        <br />크롬을 다운 후 실행시켜주세요.
        <a href="https://www.google.com/intl/ko_ALL/chrome/">CHROME 다운로드</a>
      </p>
      <p className="NotSupportText">Not Support</p>
      <div className="close-button" onClick={closePopUpButtonEvnet.bind(this)}>{<FontAwesomeIcon onClick={closePopUpButtonEvnet.bind(this)} icon={['fas', 'times']} />}</div>
    </div>
  );
};