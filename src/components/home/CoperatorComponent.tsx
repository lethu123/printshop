'use client'
import Image from 'next/image'
import React from 'react'
import "@assets/scss/home.scss";
import logo1 from '@assets/images/co1.svg';
import logo2 from '@assets/images/co3.svg';
import logo3 from '@assets/images/co2.svg';
import logo4 from '@assets/images/co12.png';

import logo5 from '@assets/images/co4.svg';
import logo6 from '@assets/images/co5.png';
import logo7 from '@assets/images/co6.png';
import logo8 from '@assets/images/co7.png';
import logo9 from '@assets/images/co8.png';
import logo10 from '@assets/images/co9.png';
import logo11 from '@assets/images/co10.png';
import logo12 from '@assets/images/co11.png';

import Container from '@srccommons/Container';
import { useRouter } from 'next/navigation';

const CoperatorComponent = () => {
    const router = useRouter()
    return (
        <div className={`coperator mb-[8rem] flex flex-col px-3 border-y py-[6rem] pb-3 lg:py-[6rem] relative `} style={{ borderTopColor: '#FF9D00', borderBottomColor: '#FF9D00' }}>
            <Container >
                <h1 className="text-white text-center tracking-[5px] text-2xl md:text-3xl lg:text-[30.48px] sm:px-3 md:px-0">CÁC QUÝ ĐỐI TÁC CỦA CHÚNG TÔI</h1>
                <div className="grid grid-cols-6 gap-x-[2rem] gap-y-[1rem] items-center md:px-[5rem] pt-6 flex-wrap justify-center">
                    <div className='col-span-1'>
                        <Image alt="" src={logo1} className='w-[3rem] md:w-[4rem] lg:w-[6rem] mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo2} className='w-[3rem] md:w-[4rem] lg:w-full' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem] mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo5} className='w-[3rem] md:w-[4rem] lg:w-full mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo6} className='w-[3rem] md:w-[4rem] lg:w-[6rem] mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo7} className='w-[3rem] md:w-[4rem] lg:w-[6rem] mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo8} className='w-[3rem] md:w-[4rem] lg:w-[6rem] mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo9} className='w-[3rem] md:w-[4rem] lg:w-full' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo10} className='w-[3rem] md:w-[4rem] lg:w-[6rem] mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo11} className='w-[3rem] md:w-[4rem] lg:w-full mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo4} className='w-[3rem] md:w-[4rem] lg:w-full mx-auto' />
                    </div>
                    <div className='col-span-1'>
                        <Image alt="" src={logo12} className='w-[3rem] md:w-[4rem] lg:w-[6rem] mx-auto' />
                    </div>
                </div>
            </Container> 
        </div>
    )
}

export default CoperatorComponent
