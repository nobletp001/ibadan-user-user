import React, { useState } from 'react'
import Link from 'next/link';

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        // <nav className="bg-transparent">
        //     <div className="container mx-auto flex justify-between items-center">
        //         <div className="text-white font-bold text-base tracking-wider">
        //             IBADAN AGENT
        //         </div>
        //         <div className="hidden md:block">
        //             <div className='flex space-x-[48px] mr-4'>
        //                 <Link href="#" className="text-white font-bold text-base tracking-wider">ABOUT US</Link>
        //                 <Link href="#" className="text-white font-bold text-base tracking-wider">CONTACT US</Link>
        //                 <Link href="#" className="text-white font-bold text-base tracking-wider">FAQ</Link>
        //             </div>
        //         </div>
        //         <div onClick={handleNav} className='block md:hidden'>
        //             {nav ? 'Hamburger' : 'Menu'}
        //         </div>
        //         <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        //             <div className="text-white font-bold text-base tracking-wider">
        //                 IBADAN AGENT
        //             </div>
        //             <Link href="#" className="text-white font-bold text-base tracking-wider">ABOUT US</Link>
        //             <Link href="#" className="text-white font-bold text-base tracking-wider">CONTACT US</Link>
        //             <Link href="#" className="text-white font-bold text-base tracking-wider">FAQ</Link>
        //         </ul>
        //     </div>
        // </nav>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AGENT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>ABOUT US</li>
                <li className='p-4'>CONTACT US</li>
                <li className='p-4'>FAQs</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden z-50'>
                {nav ? 'Close' : 'Hamburger'}
            </div>
            <ul className={nav ? 'fixed left-0 top-[85px] px-12 bg-[#1E1E1E] w-[60%] h-full ease-in-out duration-500' : 'ease-in-out duration-500 fixed top-[85px] px-12 left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AGENT.</h1>
                <li className='p-4'>ABOUT US</li>
                <li className='p-4'>CONTACT US</li>
                <li className='p-4'>FAQs</li>
            </ul>
        </div>
    )
}

export default Navbar