import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='flex justify-center p-4 w-full bg-primary-orange'>
            <div className='flex flex-col gap-y-4'>
                <nav className='flex flex-row flex-1 text-sm justify-between'>
                    <Link href='/privacy'>Privacy</Link>
                    <Link href='/disclaimer'>Disclaimer</Link>
                    <Link href='/contact'>Connect with Us</Link>		
                </nav>
                <cite className='text-center text-xs'>Copyright @ 2022 Australian Dhaarmic Seva Mandali Ltd. ABN: 95657329416 Trading as Om Shanthi Theertham​</cite>
            </div>
        </footer>
    );
};

export default Footer;