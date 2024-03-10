'use client'

import Container from '@srccommons/Container'
import Screen from '@srccommons/Screen'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from '@assets/scss/home.module.scss'
import service1 from '@assets/images/p1.png';
import service2 from '@assets/images/p2.png';
import service3 from '@assets/images/p3.png';
import service4 from '@assets/images/p4.png';
import service5 from '@assets/images/p5.png';
import service6 from '@assets/images/p6.jpg';
import service7 from '@assets/images/p7.png';
import service8 from '@assets/images/p8.png';
import service9 from '@assets/images/p9.png';

import bb1 from '@assets/images/bb1.png';
import bb2 from '@assets/images/bb2.png';
import bb3 from '@assets/images/bb3.png';
import bb4 from '@assets/images/bb4.png';
import bb5 from '@assets/images/bb5.png';
import bb6 from '@assets/images/bb6.png';
import bb7 from '@assets/images/bb7.png';
import bb8 from '@assets/images/bb8.png';
import bb9 from '@assets/images/bb9.png';
import bb10 from '@assets/images/bb10.png';

import cc1 from '@assets/images/cc1.png';
import cc2 from '@assets/images/sp.jpg';
import cc3 from '@assets/images/cc3.png';
import cc4 from '@assets/images/cc4.png';
import cc5 from '@assets/images/cc5.png';
import cc6 from '@assets/images/cc6.png';
import cc7 from '@assets/images/cc7.png';
import cc8 from '@assets/images/cc8.png';
import cc9 from '@assets/images/cc9.png';
import cc10 from '@assets/images/cc10.png';
import cc11 from '@assets/images/cc11.png';
import cc12 from '@assets/images/cc12.png';
import cc13 from '@assets/images/cc13.png';
import cc14 from '@assets/images/cc14.png';
import cc15 from '@assets/images/cc15.png';
import cc16 from '@assets/images/cc16.png';
import banner from '@assets/images/banner5.jpg';

import { useParams } from 'next/navigation'
import FooterComponent from '@srccomponents/home/FooterComponent'
import BannerSingle from '@srccommons/BannerSingle'

const ProductDetail = () => {
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
    <Screen _className="product-page relative">
      {/* <HeaderComponent /> */}
      <div id='banner'></div>
      <BannerSingle image={banner} />

      <Container>
        <h1 className='border-l-4 pl-5 border-[#FF9D00] text_yellow text-[40px] md:text-[52.14px] mt-10'>SẢN PHẨM </h1>
      </Container>

      <div id='an-pham'></div>
      <div className='mt-[7rem]'>
        <div className='bg-banner py-8'>
          <Container>
            <h3 className='text-center text-white text-[30px] md:text-[40px]'>ẤN PHẨM</h3>
          </Container>
        </div>

        <Container>
          <div className="grid grid-cols-10 sm:grid-cols-12 lg:grid-cols-10 items-stretch gap-1 mt-5 order-first">
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service1} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.bg_custom_yellow} h-full relative overflow-hidden`}>
                <p className="text-white font-avo_bold p-3 text-base xl:text-[25px]">Thiết kế <br /> ấn phẩm</p>
                <div className="absolute -bottom-10 -right-10 h-[80%] w-[80%] z-10 rounded-full" style={{ background: '#FAB674' }} ></div>
              </div>

            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={service2} />
              </div>
            </div>
            <div className="col-span-5  sm:col-span-4 md:col-span-3 lg:col-span-2 ">
              <div className={`${styles.bg_custom_yellow} h-full relative z-0 overflow-hidden`}>
                <p className="text-white w-full xl:w-[14rem] ml-auto p-3 text-right text-base xl:text-[21.42px]">Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm (POSM)</p>
                <div className="absolute bottom-10 right-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={service3} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2 order-8 lg:order-none">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={service4} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2 ">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={service5} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2 order-6 lg:order-none">
              <div className={`${styles.bg_custom_yellow} h-full flex relative z-0 overflow-hidden`}>
                <p className="text-white font-avo_bold p-3 items-end mt-auto text-base xl:text-[23px]">Thiết kế <br /> tạo mẫu bao bì, hộp</p>
                <div className="absolute bottom-10 left-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
              </div>
            </div>
            <div className="col-span-10 sm:col-span-4 md:col-span-6 lg:col-span-4 relative">
              <div className={`${styles.image_hover} aspect-[2/1] sm:aspect-square md:aspect-[2/1]`}>
                <Image className="w-full h-full" alt="" src={service6} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service7} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.bg_custom_yellow} h-full relative overflow-hidden`}>
                <p className="text-white font-avo_bold p-3 text-base xl:text-[25px]">Thiết kế <br /> ấn phẩm</p>
                <div className="absolute -bottom-10 -right-10 h-[80%] w-[80%] z-10 rounded-full" style={{ background: '#FAB674' }} ></div>
              </div>

            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2  ">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={service8} />
              </div>
            </div>
            <div className="col-span-5  sm:col-span-4 md:col-span-3 lg:col-span-2 ">
              <div className={`${styles.bg_custom_yellow} h-full relative z-0 overflow-hidden`}>
                <p className="text-white w-full xl:w-[14rem] ml-auto p-3 text-right text-base xl:text-[21.42px]">Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm (POSM)</p>
                <div className="absolute bottom-10 right-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={service9} />
              </div>
            </div>

          </div>
        </Container>
      </div>
      <div id='bao-bi-hop-giay'></div>
      <div className='mt-[7rem]'  >
        <div className='bg-banner py-8'>
          <Container>
            <h3 className='text-center text-white  text-[30px] md:text-[40px]'>BAO BÌ – HỘP GIẤY </h3>
          </Container>
        </div>

        <Container>
          <div className="grid grid-cols-10 sm:grid-cols-12 lg:grid-cols-10 items-stretch gap-1 mt-5 ">
            <div className="col-span-10 sm:col-span-8 md:col-span-6 lg:col-span-4">
              <div className={`${styles.image_hover} aspect-[2/1]`}>
                <Image alt="" className="w-full h-full" src={bb1} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={bb2} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.bg_custom_yellow} h-full relative overflow-hidden`}>
                <p className="text-white font-avo_bold p-3 text-base xl:text-[25px]">Thiết kế <br /> ấn phẩm</p>
                <div className="absolute -bottom-10 -right-10 h-[80%] w-[80%] z-10 rounded-full" style={{ background: '#FAB674' }} ></div>
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={bb3} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2 order-7 lg:order-none">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={bb4} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={bb5} />
              </div>
            </div>

            <div className="col-span-5  sm:col-span-4 md:col-span-3 lg:col-span-2 order-5 lg:order-none">
              <div className={`${styles.bg_custom_yellow} h-full relative z-0 overflow-hidden`}>
                <p className="text-white w-full xl:w-[14rem] ml-auto p-3 text-right text-base xl:text-[21.42px]">Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm (POSM)</p>
                <div className="absolute bottom-10 right-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={bb6} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={bb7} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={bb8} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.bg_custom_yellow} h-full flex relative z-0 overflow-hidden`}>
                <p className="text-white font-avo_bold p-3 items-end mt-auto text-base xl:text-[23px]">Thiết kế <br /> tạo mẫu bao bì, hộp</p>
                <div className="absolute bottom-10 left-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={bb9} />
              </div>
            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.bg_custom_yellow} h-full relative overflow-hidden`}>
                <p className="text-white font-avo_bold p-3 text-base xl:text-[25px]">Thiết kế <br /> ấn phẩm</p>
                <div className="absolute -bottom-10 -right-10 h-[80%] w-[80%] z-10 rounded-full" style={{ background: '#FAB674' }} ></div>
              </div>

            </div>
            <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={bb10} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div id='thiet-bi-quang-cao'></div>
      <div className='mt-[7rem] mb-10'>
        <div className='bg-banner py-8'>
          <Container>
            <h3 className='text-center text-white text-[30px] md:text-[40px]'>THIẾT BỊ QUẢNG CÁO</h3>
          </Container>
        </div>

        <Container>
          <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc1} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-8 lg:col-span-4">
              <div className={`${styles.image_hover} aspect-square sm:aspect-[2/1]`}>
                <Image alt="" className="w-full h-full" src={cc2} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc3} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc4} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc5} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc6} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc7} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc8} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc9} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.bg_custom_yellow} h-full relative overflow-hidden`}>
                <p className="text-white font-avo_bold p-3 text-base xl:text-[25px]">Thiết kế <br /> ấn phẩm</p>
                <div className="absolute -bottom-10 -right-10 h-[80%] w-[80%] z-10 rounded-full" style={{ background: '#FAB674' }} ></div>
              </div>

            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={cc10} />
              </div>
            </div>

            <div className=" col-span-6 sm:col-span-4 lg:col-span-2 ">
              <div className={`${styles.bg_custom_yellow} h-full relative z-0 overflow-hidden`}>
                <p className="text-white w-full xl:w-[14rem] ml-auto p-3 text-right text-base xl:text-[21.42px]">Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm (POSM)</p>
                <div className="absolute bottom-10 right-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-8 lg:col-span-4">
              <div className={`${styles.image_hover} aspect-[2/1]`}>
                <Image className="w-full h-full" alt="" src={cc11} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={cc12} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={cc13} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc14} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc15} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={cc16} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className='mt-20'>
        <FooterComponent />
      </div>
    </Screen>
  )
}

export default ProductDetail
