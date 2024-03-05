import Container from '@srccommons/Container'
import Screen from '@srccommons/Screen'
import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import service1 from '@assets/images/sv5.jpg';
import service2 from '@assets/images/sv4.1.jpg';
import service3 from '@assets/images/sv2.jpg';
import service4 from '@assets/images/sv3.jpg';
import service5 from '@assets/images/spbb1.jpg';
import service6 from '@assets/images/sv1.jpg';
import { useParams } from 'next/navigation'

const ServiceDetail = () => {
  const params = useParams<{ tag: string; item: string }>()
  return (
    <Screen _className="product-page">
      {/* <HeaderComponent /> */}
      <Container>
        <h1 className='border-l-4 pl-5 border-black text-[40px] md:text-[52.14px] mt-10'>SẢN PHẨM </h1>

      </Container>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='bg-banner py-8 mt-16'>
          <h3 className='text-center text-white text-[30px] md:text-[40px]'>ẤN PHẨM</h3>
        </div>

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
              <Image className="w-full h-full" alt="" src={service6} />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2 order-8">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service3} />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2 ">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service4} />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2 order-6">
            <div className={`${styles.bg_custom_yellow} h-full flex relative z-0 overflow-hidden`}>
              <p className="text-white font-avo_bold p-3 items-end mt-auto text-base xl:text-[23px]">Thiết kế <br /> tạo mẫu bao bì, hộp</p>
              <div className="absolute bottom-10 left-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
            </div>
          </div>
          <div className="col-span-10 sm:col-span-4 md:col-span-6 lg:col-span-4 relative">
            <div className={`${styles.image_hover} aspect-[2/1] sm:aspect-square md:aspect-[2/1]`}>
              <Image className="w-full h-full" alt="" src={service5} />
            </div>
          </div>
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
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2  ">
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
              <Image className="w-full h-full" alt="" src={service6} />
            </div>
          </div>

        </div>
      </div>

      <div className='mt-[10rem]'>
        <div className='bg-banner py-8 mt-16'>
          <h3 className='text-center text-white  text-[30px] md:text-[40px]'>BAO BÌ – HỘP GIẤY </h3>
        </div>

        <div className="grid grid-cols-10 sm:grid-cols-12 lg:grid-cols-10 items-stretch gap-1 mt-5 ">
          <div className="col-span-10 sm:col-span-8 md:col-span-6 lg:col-span-4">
            <div className={`${styles.image_hover} aspect-[2/1]`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service2} />
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
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2 order-7">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service2} />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service2} />
            </div>
          </div>

          <div className="col-span-5  sm:col-span-4 md:col-span-3 lg:col-span-2 order-5 ">
            <div className={`${styles.bg_custom_yellow} h-full relative z-0 overflow-hidden`}>
              <p className="text-white w-full xl:w-[14rem] ml-auto p-3 text-right text-base xl:text-[21.42px]">Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm (POSM)</p>
              <div className="absolute bottom-10 right-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
            </div>
          </div>
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service6} />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service3} />
            </div>
          </div>
          <div className="col-span-5 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service4} />
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
              <Image className="w-full h-full" alt="" src={service5} />
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
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-banner py-8 mt-16'>
          <h3 className='text-center text-white text-[30px] md:text-[40px]'>THIẾT BỊ QUẢNG CÁO</h3>
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-8 lg:col-span-4">
            <div className={`${styles.image_hover} aspect-square sm:aspect-[2/1]`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
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
              <Image className="w-full h-full" alt="" src={service2} />
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
              <Image className="w-full h-full" alt="" src={service6} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service3} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image className="w-full h-full" alt="" src={service4} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <div className={`${styles.image_hover} aspect-square`}>
              <Image alt="" className="w-full h-full" src={service1} />
            </div>
          </div>
        </div>
      </div>
    </Screen>
  )
}

export default ServiceDetail
