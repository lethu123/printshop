import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import "@assets/scss/home.scss";
import logo1 from '@assets/images/logo1.svg';
import logo2 from '@assets/images/logo2.svg';
import logo3 from '@assets/images/logo3.svg';
import logo4 from '@assets/images/logo4.svg';
import Container from '@srccommons/Container';

const CoperatorComponent = () => {
    return (
        <div className={`coperator mb-[10rem] flex flex-col px-3 border-y py-[6rem] pb-3 lg:py-[6rem] relative `} style={{ borderTopColor: '#FF9D00', borderBottomColor: '#FF9D00' }}>
            <Container >
                <h1 className="text-white text-center tracking-[5px] text-2xl md:text-3xl lg:text-[30.48px] sm:px-3 md:px-0">CÁC QUÝ ĐỐI TÁC CỦA CHÚNG TÔI</h1>
                <div className="flex gap-x-[2rem] gap-y-[1rem] items-end md:px-[5rem] pt-6 flex-wrap justify-center">
                    <Image alt="" src={logo1} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo2} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo4} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo2} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo1} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo4} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo2} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo4} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo2} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo1} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo4} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo2} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo3} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                    <Image alt="" src={logo1} className='w-[3rem] md:w-[4rem] lg:w-[6rem]' />
                </div>
                <div className="flex w-full justify-center items-center mt-9 -mb-[13rem]">
                    {/* <div className="flex-1" style={{ height: 1, background: '#FF9D00' }}></div> */}
                    <button className={`follow_me spin circle h-[150px] w-[150px] uppercase text-[22px]  mb-[4rem] text-white text-center text-[16px] px-7`}> ĐẾN VỚI CHÚNG TÔI
                        <div></div>
                    </button>
                    {/* <div className="flex-1" style={{ height: 1, background: '#FF9D00' }}></div> */}
                </div>
            </Container>
        </div>
    )
}

export default CoperatorComponent
