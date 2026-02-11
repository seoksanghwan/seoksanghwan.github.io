import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './container/App';
import './common.scss';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      {/* 상환님의 요청대로 basename을 /로 고정합니다. */}
      <BrowserRouter basename="/">
        <AppContainer />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
