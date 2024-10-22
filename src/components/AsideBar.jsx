'use client'

import { useRef, useState, useMemo, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { HEADER_OFFSET } from '../lib/constants';
import { aboutContent } from '../lib/about';
import { servicesContent } from '../lib/services';

const AsideBar = () => {
  const pathname = usePathname();
  const sectionParam = useSearchParams().get('section');
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 215; // Adjust this based on your fixed header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // Smooth scrolling behavior
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    if (sectionParam) {
      scrollToSection(sectionParam);
    }
  }, [sectionParam])

  const sectionHeadings = useMemo(() =>{
    switch(pathname) {
      case '/' : {
        const headingIdArray = aboutContent.map(content => { 
          const {heading} = content;
          return [heading.toLowerCase().replaceAll(' ', '_'), heading]
        });
        return headingIdArray
      }; break;
      case '/services' : {
        const headingIdArray = servicesContent.map(content => { 
          const {heading} = content;
          return [heading.toLowerCase().replaceAll(' ', '_'), heading]
        });
        return headingIdArray
      }; break;
      default: return [];
    }
  }, [pathname])

  const activeStyle = 'text-secondary-orange font-bold';
  return (
    <aside className={`hidden lg:flex sticky basis-1/5 top-[172px] h-[calc(85vh-172px)] p-8  overflow-y-scroll text-sm`}>
      <div className="flex flex-col gap-2 ml-8">
        <span className="font-semibold text-xl">On this Page</span>
        {sectionHeadings.map((heading, index) => {
          const [headingId, title] = heading;

          return (<div className='cursor-pointer' key={headingId}><a 
            className={activeSection === headingId ? activeStyle : ''} 
            key={index}
            // href={`#${headingId}`}
            onClick={() => scrollToSection(headingId)}
          >
              {title}
          </a></div>)
        })}
      </div>
    </aside>
  );
};

export default AsideBar;