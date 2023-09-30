import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className='sticky top-0 flex flex-col z-10 bg-white'>
            <div className='flex flex-row items-center my-2 px-4'>
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
                    <div className='text-4xl font-bold'>Om Shanthi Theertham</div>
                    <div className='italic'>Mrtyor-Maa Amrtam Gamaya</div>
                </div>
            </div>
            <NavBar />
        </header>
    );
};

export default Header;