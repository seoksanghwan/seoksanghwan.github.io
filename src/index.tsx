import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppContainer from './container/App';
import './common.scss';

const container = document.getElementById('root');
const queryClient = new QueryClient();

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      {/* 1. 가장 바깥쪽이나 HashRouter 바로 안쪽에 Provider를 배치합니다. */}
      <QueryClientProvider client={queryClient}>
        <HashRouter basename="/">
          <AppContainer />
        </HashRouter>
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
