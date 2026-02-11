import React, { useRef } from 'react'; // 1. useRef 추가
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';
import { Main } from '../Main/Main';
import { NotSupport } from '../NotSupport/NotSupport';
import '../../styles/layout/App.scss';

interface AppProps {
  ieChecker: boolean;
  noneStyle: string;
  closePopUpButtonEvent: () => void;
}

export const App: React.FC<AppProps> = ({ ieChecker, noneStyle, closePopUpButtonEvent }) => {
  // 2. 스크롤 이동 대상이 될 Ref 생성
  const recentSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div id="pm_app">
      {!ieChecker && (
        <NotSupport noneStyle={noneStyle} closePopUpButtonEvent={closePopUpButtonEvent} />
      )}

      {/* 3. Navigation에 recent Ref 전달 */}
      <Navigation recent={recentSectionRef} />

      <Routes>
        {/* 4. Main에도 recent Ref를 전달하여 스크롤 도착 지점 설정 */}
        <Route path="/" element={<Main recent={recentSectionRef} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
};
