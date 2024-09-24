import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className='sticky top-0 sm:flex sm:flex-col z-10 bg-white'>
            <div className='flex flex-row justify-center py-1  bg-tertiary-orange'>
                <div className='width-full text-primary-text'><span className=''>Phone:</span> <b className=''>1300 VIMUKTI / 1300 846 858</b> &nbsp;&nbsp; <span className=''>Email:</span> <b className=''>info@omshanthi.org.au</b></div>
            </div>
            <div className='flex flex-row items-center my-4 sm:py-2 px-10'>
                <Link href='/'>
                    <Image
                        priority
                        src="/images/logo.png"
                        height={80}
                        width={80}
                        alt="logo"
                    />
                </Link>
                <div className=' text-center flex-auto justify-self-center'>
                    <h1 className='text-2xl sm:text-4xl font-bold'>Om Shanthi Theertham</h1>
                    <h3 className='text-xs sm:text-xl italic'>Mrtyor-Maa Amrtam Gamaya</h3>
                </div>
            </div>
            <NavBar />
        </header>
    );
};

export default Header;