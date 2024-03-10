"use client"

import React from 'react'
import Image from 'next/image'
import '@assets/scss/home.scss';
import banner from '@assets/images/banner1.png';
import Navbar from './Navbar'

const BannerSingle = () => {
    return (
        <>
            <Navbar />
            <div className={` h-[400px] md:h-[500px] lg:h-lvh  rounded`}>
                <Image alt="" src={banner} className='w-full h-full' />
            </div>
        </>

    )
}

export default BannerSingle

