'use client'

import { useRef, useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HEADER_OFFSET } from '../lib/constants';
import { aboutContent } from '@/lib/about';

const AsideBar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY + HEADER_OFFSET;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sectionHeadings.length && setActiveSection(sectionHeadings[0][0])
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionHeadings = useMemo(() =>{
    switch(pathname) {
      case '/' : {
        const headingIdArray = aboutContent.map(content => { 
          const {heading} = content;
          return [heading.toLowerCase().replaceAll(' ', '_'), heading]
        });
        return headingIdArray
      }; break;
      default: return [];
    }
  })

  const activeStyle = 'text-secondary-orange font-bold';
  return (
    <aside className={`hidden lg:flex sticky basis-1/5 top-[172px] h-[calc(85vh-172px)] p-8  overflow-y-scroll text-sm`}>
      <div className="flex flex-col gap-2 ml-8">
        <span className="font-semibold text-xl">On this Page</span>
        {sectionHeadings.map((heading, index) => {
          const [headingId, title] = heading;
          return (<Link 
            className={activeSection === headingId ? activeStyle : ''} 
            key={index}
            href={`#${headingId}`}
          >
              {title}
          </Link>)
        })}
      </div>
    </aside>
  );
};

export default AsideBar;