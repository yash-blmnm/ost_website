import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='flex flex-col px-4 pt-8 pb-4 w-full bg-primary-orange'>
            <div className='flex flex-row flex-1 text-sm justify-around'>
                <nav className='flex flex-col'>
                    <div>Terms of use</div>			
                    <div>Privacy</div>			
                    <div>Disclaimer</div>					
                </nav>
                <nav className='flex flex-col'>		
                    <div>Legal</div>			
                    <Link href='/contact'>Connect with us</Link>		
                    <div>Company/ABN</div>			
                </nav>
                </div>
            <cite className='text-center text-xs mt-4'>Copyright @ 2022 Australian Dhaarmic Seva Mandali  Ltd – ABN: 95657329416 – Trading as Om Shanthi Theertham​</cite>
        </footer>
    );
};

export default Footer;