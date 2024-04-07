import React from 'react'
import Image from 'next/image';
import Email from '../../public/email.svg'
import Lock from '../../public/lock.svg'

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            {/* <div className="md:w-[619px] md:h-[650px] pl-[61px] bg-white shadow-lg pr-16 pt-[86px] pb-[84px] flex-col justify-center items-center"> */}
            <div className='md:w-[619px] md:h-[650px] bg-white shadow-lg flex justify-center items-center pt-[80px] rounded-[20px]'>
                <div className="self-stretch pb-[15px] flex-col justify-center items-center">
                    <div className="self-stretch flex-col justify-center items-center gap-6 flex">
                        <div className="self-stretch h-[136px] flex-col justify-center items-center gap-2 flex">
                            <div className="self-stretch text-center text-black text-xs font-bold uppercase leading-none tracking-wide">ibadan agent</div>
                            <div className="md:w-[430px] text-center text-black text-5xl font-bold leading-[56px]">Welcome back, Admin</div>
                        </div>
                        <div className="self-stretch text-center text-neutral-700 text-[15px] font-medium leading-normal">Enter your account details to proceed</div>
                    </div>
                    <div className="flex-col justify-center items-center flex">
                        <div className="flex-col justify-start items-start gap-4 flex">
                            <form className="flex-col justify-start items-start gap-1 flex mt-6">
                                <div><span className="text-zinc-800 text-sm font-medium font-['General Sans'] leading-normal">Email address</span><span className="text-red-800 text-sm font-medium leading-normal">*</span></div>
                                <div className='w-[300px] md:w-[500px] h-[60px] p-4 rounded-[44px] bg-white text-base flex items-center justify-center gap-[10px] input'>
                                    <span className='p-2 bg-[#F4F5FB] rounded-full'><Image src={Email} alt='' width={30} height={30} /></span>
                                    <input
                                        type="text"
                                        name="email"
                                        className='input-form'
                                        placeholder='Enter Your Email'
                                    />
                                </div>
                                <div className='mt-3'>
                                    <div><span className="text-zinc-800 text-sm font-medium font-['General Sans'] leading-normal">Password</span><span className="text-red-800 text-sm font-medium leading-normal">*</span></div>
                                    <div className='w-[300px] md:w-[500px] h-[60px] p-4 rounded-[44px] bg-white text-base flex items-center justify-center gap-[10px] input'>
                                        <span className='p-2 bg-[#F4F5FB] rounded-full'><Image src={Lock} alt='' width={30} height={30} /></span>
                                        <input
                                            type="password"
                                            name="password"
                                            className='input-form'
                                            placeholder='*****************'
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-2 mt-3'>
                                    <input type="checkbox" />
                                    <span className='text-sm'>Remember me</span>
                                </div>
                                <button className="w-[300px] md:w-[500px] h-12 mt-7 bg-[#52ADA2] rounded-[44px] justify-center items-center">
                                    <span className="text-center text-white text-base font-semibold font-['General Sans'] leading-tight">Sign in</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

{/* <div className="self-stretch pb-[15px] flex-col justify-start items-start gap-14 inline-flex">
                <div className="self-stretch h-[184px] flex-col justify-center items-center gap-6 flex">
                    <div className="self-stretch h-[136px] flex-col justify-center items-center gap-2 flex">
                        <div className="self-stretch text-center text-black text-xs font-bold font-['Satoshi'] uppercase leading-none tracking-wide">ibadan agent</div>
                        <div className="w-[430px] text-center text-black text-5xl font-bold font-['Satoshi'] leading-[56px]">Welcome back, Admin</div>
                    </div>
                    <div className="self-stretch text-center text-neutral-700 text-lg font-medium font-['General Sans'] leading-normal">Enter your account details to proceed</div>
                </div>
                <div className="flex-col justify-start items-start flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="flex-col justify-start items-start gap-1 flex">
                            <div><span className="text-zinc-800 text-sm font-medium font-['General Sans'] leading-normal">Email address</span><span className="text-red-800 text-sm font-medium font-['General Sans'] leading-normal"> *</span></div>
                            <div className="justify-start items-start inline-flex">
                                <div className="pl-[61px] pr-[17px] py-[19px] bg-white rounded-[44px] border border-emerald-200 justify-start items-start flex">
                                    <div className="pr-[295px] justify-start items-start flex">
                                        <div className="text-zinc-500 text-base font-medium font-['General Sans']">Enter Your Email</div>
                                    </div>
                                </div>
                                <div className="w-10 h-10 p-2 bg-slate-100 rounded-[100px] justify-center items-center flex">
                                    <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                        <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center items-center inline-flex">
                            <div className="self-stretch flex-col justify-start items-start gap-1 inline-flex">
                                <div><span className="text-zinc-800 text-sm font-medium font-['General Sans'] leading-normal">Password </span><span className="text-red-800 text-sm font-medium font-['General Sans'] leading-normal">*</span></div>
                                <div className="justify-start items-start inline-flex">
                                    <div className="pl-[61px] pr-[17px] py-[19px] bg-white rounded-[44px] border border-emerald-200 justify-start items-start flex">
                                        <div className="pr-[295px] justify-start items-start flex">
                                            <div className="text-zinc-500 text-base font-medium font-['General Sans']">***************</div>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 pl-[7.50px] pr-[8.50px] py-2 bg-slate-100 rounded-[100px] justify-center items-center flex">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                                            <div className="w-6 h-6 relative">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr-[303.50px] py-3 justify-start items-center gap-[8.50px] inline-flex">
                            <div className="w-5 h-5 bg-white rounded border-2 border-slate-300" />
                            <div className="self-stretch pr-6 justify-start items-start inline-flex">
                                <div className="w-[281px] text-zinc-800 text-sm font-normal font-['General Sans'] leading-normal">Remember me</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-28 border-t flex-col justify-start items-start gap-4 flex">
                        <div className="w-[494px] h-12 relative" />
                        <div className="w-[494px] pl-[31px] pr-[32.58px] py-3.5 bg-emerald-400 rounded-[44px] justify-center items-center inline-flex">
                            <div className="text-center text-white text-base font-semibold font-['General Sans'] leading-tight">Sign in</div>
                        </div>
                    </div>
                </div>
            </div> */}