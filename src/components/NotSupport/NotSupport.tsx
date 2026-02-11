import React from 'react';
import '../../styles/layout/NotSupport.scss'; //

interface NotSupportProps {
  noneStyle: string;
  closePopUpButtonEvent: () => void;
}

export const NotSupport: React.FC<NotSupportProps> = ({ noneStyle, closePopUpButtonEvent }) => {
  return (
    <div className="not-support-popup" style={{ display: noneStyle }}>
      <div className="popup-content">
        <p>본 사이트는 Chrome, Edge, Safari 브라우저에 최적화되어 있습니다.</p>
        <button onClick={closePopUpButtonEvent}>닫기</button>
      </div>
    </div>
  );
};
