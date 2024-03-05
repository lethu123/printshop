'use client'

import Container from '@srccommons/Container'
import Screen from '@srccommons/Screen'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from '@assets/scss/home.module.scss'
import service1 from '@assets/images/sv1.png';
import service2 from '@assets/images/sv2.png';
import service3 from '@assets/images/sv3.png';
import service4 from '@assets/images/sv4.png';
import service5 from '@assets/images/sv5.png';
import service6 from '@assets/images/sv6.png';
import service7 from '@assets/images/sv7.png';
import service8 from '@assets/images/sv8.png';
import service9 from '@assets/images/sv9.png';
import service10 from '@assets/images/sv10.png';
import service11 from '@assets/images/sv11.png';
import service12 from '@assets/images/sv12.png';
import service13 from '@assets/images/sv13.png';
import service14 from '@assets/images/sv14.png';
import service15 from '@assets/images/sv15.png';
import service16 from '@assets/images/sv16.png';
import service17 from '@assets/images/sv17.png';
import service18 from '@assets/images/sp.jpg';

import { useParams } from 'next/navigation'

const ServiceDetail = () => {
  const params = useParams<{ slug: string }>();
  useEffect(() => {
    if (!params?.slug) {
      return;
    } else {
      const sectionToScrollTo = document.getElementById(params?.slug);
      if (sectionToScrollTo) {
        sectionToScrollTo.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [params?.slug]);

  return (
    <Screen _className="product-page">
      {/* <HeaderComponent /> */}
      <Container>
        <h1 className='border-l-4 pl-5 border-black text-[40px] md:text-[52.14px] mt-10'>Dịch vụ </h1>

      </Container>
      <div className='max-w-screen-2xl mx-auto'>
        <div id='thiet-ke-an-pham'  >
          <div className='bg-banner py-8 mt-16'>
            <h3 className='text-center text-white text-[30px] md:text-[40px]'>THIẾT BỊ QUẢNG CÁO</h3>
          </div>

          <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service1} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service2} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service3} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service4} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service5} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service6} />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service1} />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service3} />
              </div>
            </div>

          </div>
        </div>

        <div id='thiet-ke-tao-mau-quay-ke-tu-trung-bay-san-pham' className='mt-[10rem]'>
          <div className='bg-banner py-8 mt-16'>
            <h3 className='text-center text-white text-[30px] md:text-[40px]'>THIẾT KẾ TẠO MẪU BAO BÌ, HỘP</h3>

          </div>

          <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service7} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service8} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service9} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service10} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service11} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service12} />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service5} />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service7} />
              </div>
            </div>

          </div>
        </div>

        <div id='thiet-ke-tao-mau-bao-bi' className='mt-[10rem] mb-10'>
          <div className='bg-banner py-8 mt-16'>
            <h3 className='text-center text-white text-[30px] md:text-[40px]'>

              THIẾT KẾ - TẠO MẪU QUẦY KỆ, <br />
              TỦ TRƯNG BÀY SẢN PHẨM (POSM)

            </h3>
          </div>

          <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service13} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service14} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service15} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service16} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service17} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service18} />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service14} />
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service16} />
              </div>
            </div>

          </div>
        </div>


      </div>


    </Screen>
  )
}

export default ServiceDetail
