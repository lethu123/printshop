import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import logo1 from '@assets/images/logo1.svg';
import logo2 from '@assets/images/logo2.svg';
import logo3 from '@assets/images/logo3.svg';
import logo4 from '@assets/images/logo4.svg';

const CoperatorComponent = () => {
    return (
        <div className={`${styles.coperator} border-t py-[6rem] relative `} style={{ borderTopColor: '#FF9D00', borderBottomColor: '#FF9D00' }}>
            <h1 className="text-white text-center tracking-[5px] text-[30.48px]">CÁC QUÝ ĐỐI TÁC CỦA CHÚNG TÔI</h1>
            <div className="flex gap-x-[2rem] gap-y-[1rem] items-end px-[5rem] pt-6 flex-wrap justify-center">
                <Image alt="" src={logo1} style={{ width: '6rem' }} />
                <Image alt="" src={logo2} style={{ width: '6rem' }} />
                <Image alt="" src={logo3} style={{ width: '6rem' }} />
                <Image alt="" src={logo4} style={{ width: '6rem' }} />
                <Image alt="" src={logo2} style={{ width: '6rem' }} />
                <Image alt="" src={logo3} style={{ width: '6rem' }} />
                <Image alt="" src={logo1} style={{ width: '6rem' }} />
                <Image alt="" src={logo4} style={{ width: '6rem' }} />
                <Image alt="" src={logo2} style={{ width: '6rem' }} />
                <Image alt="" src={logo3} style={{ width: '6rem' }} />
                <Image alt="" src={logo3} style={{ width: '6rem' }} />
                <Image alt="" src={logo4} style={{ width: '6rem' }} />
                <Image alt="" src={logo2} style={{ width: '6rem' }} />
                <Image alt="" src={logo3} style={{ width: '6rem' }} />
                <Image alt="" src={logo1} style={{ width: '6rem' }} />
                <Image alt="" src={logo3} style={{ width: '6rem' }} />
                <Image alt="" src={logo4} style={{ width: '6rem' }} />
                <Image alt="" src={logo2} style={{ width: '6rem' }} />
                <Image alt="" src={logo3} style={{ width: '6rem' }} />
                <Image alt="" src={logo1} style={{ width: '6rem' }} />
            </div>
            <div className="flex items-center mt-9">
                <div className="flex-1" style={{ height: 1, background: '#FF9D00' }}></div>
                <div className={`${styles.follow_me} mb-[4rem]`}><span className={`text-white text-center text-[18px] px-7`}>ĐẾN VỚI CHÚNG TÔI </span></div>
                <div className="flex-1" style={{ height: 1, background: '#FF9D00' }}></div>
            </div>
        </div>
    )
}

export default CoperatorComponent
