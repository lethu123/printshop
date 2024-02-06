import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import logo1 from '@assets/images/logo1.svg';
import logo2 from '@assets/images/logo2.svg';
import logo3 from '@assets/images/logo3.svg';
import logo4 from '@assets/images/logo4.svg';

const CoperatorComponent = () => {
    return (
        <div className={`${styles.coperator} px-3 border-t py-[6rem] pb-3 lg:py-[6rem] relative `} style={{ borderTopColor: '#FF9D00', borderBottomColor: '#FF9D00' }}>
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
            <div className="flex items-center mt-9">
                <div className="flex-1" style={{ height: 1, background: '#FF9D00' }}></div>

                <button className={`${styles.follow_me} ${styles.spin} ${styles.circle} mb-[4rem] text-white text-center text-[16px] px-7`}> ĐẾN VỚI CHÚNG TÔI
                    <div></div>
                </button>

                {/* <div className={`${styles.follow_me} mb-[4rem]`}><span className={`text-white text-center text-[16px] px-7`}>ĐẾN VỚI CHÚNG TÔI </span></div> */}
                <div className="flex-1" style={{ height: 1, background: '#FF9D00' }}></div>
            </div>
        </div>
    )
}

export default CoperatorComponent
