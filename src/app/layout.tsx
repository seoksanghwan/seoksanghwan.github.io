import './globals.css';
import React from 'react';
import type { Metadata } from "next";
import { Navigation } from '@/components/common/Navigation';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: "석상환 | 프론트엔드 개발자 포트폴리오", // 탭에 표시될 이름
  description: "프론트엔드 개발자 석상환의 포트폴리오입니다.", // 검색 엔진 최적화용
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-[calc(100dvh-131px)] max-h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
