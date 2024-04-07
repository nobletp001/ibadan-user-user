
import Image from 'next/image'
import React, { useEffect } from 'react';
import MapImg from '../public/map.svg'


const MapImage: React.FC= () => {


    return (
        <div className='w-full'>
            <div className={` lg:w-[234px] h-auto w-full  p-4  md:relative bg-white  ] mt-1 md:mt-0 `}>
                <div className=" flex-col justify-center md:justify-start items-center md:items-start gap-[15px] inline-flex w-full">
                    <div className="h-20 flex-col justify-end md:justify-center items-center md:items-start md:gap-2 flex">
                        <div className="self-stretch text-black text-[8.3px] md:text-xs font-bold uppercase leading-none tracking-wide text-center md:text-start">Total agents</div>
                        <div className="text-center text-black text-[22.22px] md:text-[32px] font-bold leading-[39px] md:leading-[56px]">300+</div>
                    </div>
                    <div className="h-20 flex-col justify-end md:justify-center items-center md:items-start md:gap-2 flex">
                        <div className="self-stretch text-black text-[8.3px] md:text-xs font-bold uppercase leading-none tracking-wide text-center md:text-start">Total locations</div>
                        <div className="text-center text-black text-[22.22px] md:text-[32px] font-bold leading-[39px] md:leading-[56px]">40+</div>
                    </div>
                    <div className="h-20 flex-col justify-end md:justify-center items-center md:items-start md:gap-2 flex">
                        <div className="self-stretch text-black text-[8.3px] md:text-xs font-bold uppercase leading-none tracking-wide text-center md:text-start">Total users</div>
                        <div className="text-center text-black text-[22.22px] md:text-[32px] font-bold leading-[39px] md:leading-[56px]">3,000+</div>
                    </div>
                </div>
                <div className=' w-full flex items-center justify-center'>
                    <div className="w-[162.5px] md:w-full p-2.5 bg-neutral-200 bg-opacity-30 justify-center items-center gap-2.5 inline-flex">
                        <div className="text-center text-neutral-700 text-[9.72px] md:text-sm font-medium uppercase leading-normal tracking-[6.16px]">Stats today</div>
                    </div>
                </div>

            </div>

            <Image src={MapImg} alt='' className={`w-full md:w-[50%] md:h-full absolute md:fixed top-0 left-0 object-cover z-[-1]`} />
        </div>
    )
}

export default MapImage;