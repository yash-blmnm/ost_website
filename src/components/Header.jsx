import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import NavBar from './NavBar';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

const Header = () => {

    return (
        <header className='sticky top-0 sm:flex sm:flex-col z-10 bg-white'>
            <div className='flex flex-row justify-center py-2 sm:py-3  bg-tertiary-orange'>
                <div className='flex flex-col gap-2 sm:gap-4 items-start sm:flex-row width-full text-primary-text'>
                    <div className='flex flex-row items-center gap-x-2'>
                        <div className='hidden sm:block'><Phone size={16} /></div>
                        <div className='block sm:hidden'><Phone size={12} /></div>
                        <b className='text-xs sm:text-base'>1300 VIMUKTI / 1300 846 858</b>
                    </div>
                    <div className='flex flex-row items-center gap-x-2'>
                        <div className='hidden sm:block'><Mail size={16} /></div>
                        <div className='block sm:hidden'><Mail size={12} /></div>
                        <b className='text-xs sm:text-base'>info@omshanthi.org.au</b>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center py-3 sm:py-2 px-3 sm:px-10'>
                <Link href='/'>
                    <Image
                        priority
                        src="/images/logo.png"
                        className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]'
                        height={80}
                        width={80}
                        alt="logo"
                    />
                </Link>
                <div className=' text-center flex-auto justify-self-center'>
                    <h1 className='text-xl sm:text-4xl font-bold'>Om Shanthi Theertham</h1>
                    <h3 className='text-xs sm:text-xl italic'>Mrtyor-Maa Amrtam Gamaya</h3>
                </div>
            </div>
            <NavBar />
        </header>
    );
};

export default Header;