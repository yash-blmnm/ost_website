import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className='sticky top-0 sm:flex sm:flex-col z-10 bg-white'>
            <div className='flex flex-row items-center my-4 sm:my-2 px-4'>
                <Link href='/'>
                    <Image
                        priority
                        src="/images/sample_logo.png"
                        height={100}
                        width={100}
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