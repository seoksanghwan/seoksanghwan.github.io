import React from 'react';

interface NotSupportProps {
  noneStyle: string;
  closePopUpButtonEvent: () => void;
}

export const NotSupport: React.FC<NotSupportProps> = ({ noneStyle, closePopUpButtonEvent }) => {
  return (
    <div className="NotSupport" style={{ display: noneStyle }}>
      <span className="NotSupportText" aria-hidden="true">
        IE
      </span>
      <p>본 사이트는 Chrome, Edge, Safari 브라우저에 최적화되어 있습니다.</p>
      <button type="button" className="close-button" onClick={closePopUpButtonEvent}>
        닫기
      </button>
    </div>
  );
};
