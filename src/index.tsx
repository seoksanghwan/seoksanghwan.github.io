import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './container/App';
import reportWebVitals from './reportWebVitals'; // 추가
import './common.scss'; //

// FontAwesome 설정 생략 (기존 유지)

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </React.StrictMode>,
  );
}

// 성능 측정을 원한다면 결과를 콘솔에 출력하거나 엔드포인트로 전송
reportWebVitals();
