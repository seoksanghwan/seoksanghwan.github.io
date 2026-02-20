'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();
  const getActiveClass = (path: string) =>
    pathname === path ? 'text-[#ffbc2b] font-bold underline' : '';

  return (
    <header className="w-full m-auto py-[1.9rem] bg-white sticky top-0 z-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <nav className="nav-content flex mx-auto w-full max-w-[1200px] max-tablet:w-[90%]">
        <div className="w-full mx-auto flex justify-between items-center">
          <div className="title-logo min-h-[3.25rem]">
            <h1>
              <Link href="/about">
                <img
                  src="/images/logo.png"
                  alt="logo-image"
                  className="w-[50px] max-md:w-[40px] align-middle"
                  draggable="false"
                />
              </Link>
            </h1>
          </div>
          <div className="nav-menu">
            <ul className="flex items-center gap-[10px]">
              <li className="text-[2rem] max-md:text-[1.5rem] max-md:mr-[1.3rem] last:mr-0 cursor-pointer">
                <Link
                  href="/about"
                  className={`text-[2rem] max-md:text-[1.5rem] transition-all duration-200 ease-in hover:text-[#ffbc2b] hover:font-bold hover:underline ${getActiveClass('/about')}`}
                >
                  About
                </Link>
              </li>
              <li className="text-[2rem] max-md:text-[1.5rem] last:mr-0 cursor-pointer">
                <Link
                  href="/projects"
                  className={`text-[2rem] max-md:text-[1.5rem] transition-all duration-200 ease-in hover:text-[#ffbc2b] hover:font-bold hover:underline ${getActiveClass('/projects')}`}
                >
                  Front-End Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
