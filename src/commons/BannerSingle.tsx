"use client"

import React from 'react'
import Image from 'next/image'
import '@assets/scss/home.scss';
import Navbar from './Navbar'

const BannerSingle = ({ image }: { image: any }) => {
    return (
        <>
            <Navbar />
            <div className={` h-[400px] md:h-[500px] lg:h-lvh 3xl:max-h-[900px] rounded`}>
                <Image alt="" src={image} className='w-full h-full' />
            </div>
        </>

    )
}

export default BannerSingle

