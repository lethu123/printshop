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
import { useParams } from 'next/navigation'
import Link from 'next/link'
import MenuMobile from '@srccomponents/home/MenuMobile'
import logo from '@assets/images/logo.svg'
import FooterComponent from '@srccomponents/home/FooterComponent'

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

      <div className='sticky top-0 bg-white z-30 shadow'>
        <MenuMobile />
        <div className="hidden border lg:block">
          <Container>
            <div className="flex items-center gap-14 justify-center py-5 bg-white">
              <Link href={'/'} className={`${styles.menu_single} text-[18px] py-3`}>Trang chủ</Link>
              <div className={`${styles.submenu} relative`}>
                <div className={`  text-[18px] cursor-pointer py-3`}>Sản phẩm <i className="fa fa-angle-down" style={{ color: '#f8dfa9' }}></i></div>
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
                <div className=" text-[18px] cursor-pointer py-3">Dịch vụ <i className="fa fa-angle-down" style={{ color: '#f8dfa9' }}></i></div>
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
          </Container>
        </div>
      </div>

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
                <Image alt="" className="w-full h-full" src={service1} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-8 lg:col-span-4">
              <div className={`${styles.image_hover} aspect-square sm:aspect-[2/1]`}>
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
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service5} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service4} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service3} />
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
                <Image className="w-full h-full" alt="" src={service1} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={service2} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image className="w-full h-full" alt="" src={service3} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service4} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service1} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-2">
              <div className={`${styles.image_hover} aspect-square`}>
                <Image alt="" className="w-full h-full" src={service5} />
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
