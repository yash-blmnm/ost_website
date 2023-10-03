'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NAV_LINKS } from '../lib/constants';
import { useState } from 'react';

const activeLinkClass = 'text-white font-bold';
const normalLinkClass = 'hover:text-gray-100'

const NavBar = () => {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
      <div className='bg-primary-orange py-4 px-8'>
        <section className="MOBILE-MENU flex flex-col lg:hidden">
        {isNavOpen ? 
        <>
          <div className="" onClick={() => setIsNavOpen(false)}>
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
            <nav className='flex flex-col items-center gap-y-2 sm:flex-row sm:gap-0 sm:m-0 justify-around text-l font-medium'>
              {NAV_LINKS.map((link, index) =>
                <Link key={index} className={pathname === link.path ? activeLinkClass : normalLinkClass} href={link.path}>{link.heading}</Link>
              )}
            </nav>
            </> : 
          <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
        }
        </section>
        
        <nav className='DESKTOP-MENU hidden lg:flex flex-col gap-y-2 sm:flex-row sm:gap-0 justify-around text-l font-medium'>
          {NAV_LINKS.map((link, index) =>
            <Link key={index} className={pathname === link.path ? activeLinkClass : normalLinkClass} href={link.path}>{link.heading}</Link>
          )}
        </nav>
      </div>
    );
};

export default NavBar;