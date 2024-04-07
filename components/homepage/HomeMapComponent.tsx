import Image from 'next/image'
import React from 'react'
import CutMapBg from '@/public/cutMapBg.svg';
import CutMap from '@/public/cutMap.svg';
import { motion } from 'framer-motion';

const HomeMapComponent = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='relative w-full hidden md:flex justify-end items-baseline'
        >
            <div className={`relative flex justify-end opacity-100 h-full max-w-[27.3rem]`}>
                <div className=''>
                    <div className=" z-20 translate-x-2 ">
                        <Image src={CutMapBg} alt='' />
                    </div>
                    <div className="absolute top-[0.8rem] z-20 ">
                        <Image src={CutMap} alt='' />
                        <div className={`absolute left-[53%] translate-x-[-50%] top-[50%] translate-y-[-50%]  w-[1.56rem] h-[1.56rem]  rounded-full bg-[#52ADA2] z-40 border-4 border-[#52ada266]`}>
                        </div>
                        <div className={`absolute left-[53%] translate-x-[-50%] top-[50%] translate-y-[-50%]  w-[3rem] h-[3rem] rounded-full bg-[#52ada266] z-30`}>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default HomeMapComponent
