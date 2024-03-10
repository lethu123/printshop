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
import logo from '@assets/images/logo.svg'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import MenuMobile from '@srccommons/MenuMobile'
import FooterComponent from '@srccomponents/home/FooterComponent'

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
    <Screen _className="product-page relative">
      {/* <HeaderComponent /> */}
      <div className='sticky top-0 bg-white z-30 shadow'>
        <Container>
          <MenuMobile />
          <div className="hidden  lg:block">

            <div className="flex items-center gap-14 justify-center py-5 bg-white">
              <Link href={'/'} className={`${styles.menu_single} text-[18px] py-3`}>Trang chủ</Link>
              <div className={`${styles.submenu} relative`}>
                <div className={`  text-[18px] cursor-pointer py-3`}>Sản phẩm <i className="fa fa-angle-down text-black"  ></i></div>
                <div className={`${styles.submenu_show} absolute z-10 flex  max-w-max`}>
                  <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
                      <Link href="/products/an-pham" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                        Ấn Phẩm
                      </Link>
                      <Link href="/products/bao-bi-hop-giay" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                        Bao bì - hộp giấy
                      </Link>
                      <Link href="/products/thiet-bi-quang-cao" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                        Thiết bị quảng cáo
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.submenu} relative`}>
                <div className=" text-[18px] cursor-pointer py-3">Dịch vụ <i className="fa fa-angle-down text-black" ></i></div>
                <div className={`${styles.submenu_show} absolute z-10 flex  max-w-max`}>
                  <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
                      <Link href="/services/thiet-ke-an-pham" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                        Thiết kế ấn phẩm
                      </Link>
                      <a href="/services/thiet-ke-tao-mau-bao-bi" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                        Thiết kế - tạo mẫu bao bì
                      </a>
                      <a href="/services/thiet-ke-tao-mau-quay-ke-tu-trung-bay-san-pham" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                        Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image className='h-[70px] w-[150px]' alt='' src={logo} />
              </div>
              <div>
                <Link href={'/'} className={`${styles.menu_single} text-[18px] py-3`}>Về chúng tôi</Link>
              </div>
              <div>
                <Link href={'/'} className={`${styles.menu_single} text-[18px] py-3`}>Tin tức</Link>
              </div>
              <div>
                <Link href={'/'} className={`${styles.menu_single} text-[18px] py-3`}>Liên hệ</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <h1 className='border-l-4 pl-5 border-[#FF9D00] text_yellow text-[40px] uppercase  md:text-[52.14px] mt-10'>Dịch vụ </h1>
      </Container>

      <div id='thiet-ke-an-pham' ></div>
      <div className='mt-[7rem]'   >
        <div className='bg-banner py-8 '>
          <Container>
            <h3 className='text-center text-white text-[30px] md:text-[40px]'>THIẾT BỊ QUẢNG CÁO</h3>
          </Container>
        </div>

        <Container>
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
        </Container>
      </div>

      <div id='thiet-ke-tao-mau-bao-bi'   ></div>
      <div className='mt-[7rem]' >
        <div className='bg-banner py-8'>
          <Container>
            <h3 className='text-center text-white text-[30px] md:text-[40px]'>THIẾT KẾ TẠO MẪU BAO BÌ, HỘP</h3>
          </Container>
        </div>

        <Container>
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
        </Container>
      </div>

      <div id='thiet-ke-tao-mau-quay-ke-tu-trung-bay-san-pham' > </div>
      <div className=' mb-10 mt-[7rem]'>
        <div className='bg-banner py-8'>
          <Container>
            <h3 className='text-center text-white text-[30px] md:text-[40px]'>

              THIẾT KẾ - TẠO MẪU QUẦY KỆ, <br />
              TỦ TRƯNG BÀY SẢN PHẨM (POSM)

            </h3>
          </Container>
        </div>

        <Container>
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
        </Container>
      </div>

      <div className='mt-20'>
        <FooterComponent />
      </div>
    </Screen>
  )
}

export default ServiceDetail
