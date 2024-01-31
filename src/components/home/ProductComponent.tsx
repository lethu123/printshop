import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import bannerIntro from '@assets/images/banner.png'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sp from '@assets/images/sp@2x.png';
import sp2 from '@assets/images/sp2.png';
import sp3 from '@assets/images/sp3.png';


const ProductComponent = () => {
  return (
    <div className="">

      <div className="w-5/6 mx-auto">
        <h1 className={`${styles.text_custom_yellow} text-[52.14px] uppercase ps-10`} style={{ borderLeft: '0.5rem solid #F77E0B' }}>sản phẩm</h1>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
      >
        <SwiperSlide>
          <div className="aspect-[3/2] " >
            <Image alt=""  src={sp} className='w-full' />
            <h3 className={`${styles.text_custom_yellow} text-center text-[21.42px] uppercase px-5`}>ấn phẩm</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className="aspect-[4/5] ">
            <h3 className={`${styles.text_custom_yellow} text-center text-[21.42px] uppercase px-5`}>Bao bì - hộp giấy</h3>
            <Image  alt="" src={sp2} className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[3/2] ">
            <Image alt="" src={sp3} className=" w-full " />
            <h3 className={`${styles.text_custom_yellow} text-[21.42px] text-center uppercase px-5`}>thiết bị quảng cáo</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-[4/5] ">
            <Image alt="" src={sp2} className=" w-full" />
            <h3 className={`${styles.text_custom_yellow} text-[21.42px] text-center uppercase px-5`}>thiết bị quảng cáo</h3>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className='grid grid-cols-3 gap-10'>
        <div  >
          <Image alt="" className="h-[200px] w-full" src={bannerIntro} />
          <h3 className={`${styles.text_custom_yellow} text-center text-[21.42px] uppercase px-5`}>ấn phẩm</h3>
        </div>
        <div className='relative'>
          <h3 className={`${styles.text_custom_yellow} text-center text-[21.42px] uppercase px-5`}>Bao bì - hộp giấy</h3>
          <Image alt="" src={bannerIntro} className="h-[200px] w-full" />
          <div className={`${styles.follow_me} absolute -bottom-20 right-[50%]`} style={{ transform: 'translateX(50%)' }} >
            <Link href={'/'}>Xem thêm</Link>
          </div>
        </div>
        <div>
          <Image alt="" src={bannerIntro} className="h-[200px] w-full" />
          <h3 className={`${styles.text_custom_yellow} text-[21.42px] text-center uppercase px-5`}>thiết bị quảng cáo</h3>
        </div>
      </div> */}
    </div>
  )
}

export default ProductComponent
