import './globals.css';
import React from 'react';
import { Navigation } from '@/components/common/Navigation';
import { Footer } from '@/components/common/Footer';

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
