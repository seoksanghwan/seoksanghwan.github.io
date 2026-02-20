'use client';

import Link from 'next/link';
import { navItems } from '@/lib/consts/nav';
import { NavLink } from './NavLink';

export const Navigation = () => (
  <header className="w-full m-auto py-[1.9rem] bg-white sticky top-0 z-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
    <nav className="nav-content flex mx-auto w-full max-w-[1200px] max-tablet:w-[90%]" aria-label="메인 메뉴">
      <div className="w-full mx-auto flex justify-between items-center">
        <div className="title-logo min-h-13">
          <h1>
            <Link href="/about">
              <img
                src="/images/logo.png"
                alt="로고 - About 페이지로 이동"
                className="w-[50px] max-md:w-[40px] align-middle"
                draggable={false}
              />
            </Link>
          </h1>
        </div>
        <div className="nav-menu">
          <ul className="flex items-center gap-[10px]">
            {navItems.map(({ href, label }) => (
              <li
                key={href}
                className="text-[2rem] max-md:text-[1.5rem] max-md:mr-[1.3rem] last:mr-0 cursor-pointer"
              >
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
