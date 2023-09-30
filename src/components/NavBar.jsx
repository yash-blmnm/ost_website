'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants';

const activeLinkClass = 'text-white font-bold';
const normalLinkClass = 'hover:text-gray-100'

const NavBar = () => {
    const pathname = usePathname();
    return (
      <div className='bg-primary-orange py-4 px-8'>
        <nav className='flex flex-row justify-around text-l font-medium'>
          {NAV_LINKS.map((link, index) =>
            <Link key={index} className={pathname === link.path ? activeLinkClass : normalLinkClass} href={link.path}>{link.heading}</Link>
          )}
        </nav>
      </div>
    );
};

export default NavBar;