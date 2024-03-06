import React from 'react'
import homecss from '@assets/scss/home.module.scss'
import Container from '@srccommons/Container'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@assets/scss/home.module.scss'
import logo from '@assets/images/logo.svg'
import MenuMobile from './MenuMobile'

const BannerComponent = () => {

    return (
        <div className={`${homecss.banner} bg-fixed h-[400px] lg:h-svh 2xl:max-h-[700px]  flex flex-col justify-between`}>
            {/* me */}
            <Container>
                <MenuMobile />
                <div className="hidden lg:block">
                    <div className="flex items-center gap-14 justify-center pt-6">
                        <Link href={'/'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Trang chủ</Link>
                        <div className={`${styles.submenu} relative`}>
                            <div className={`  text-white text-[18px] cursor-pointer py-3`}>Sản phẩm <i className="fa fa-angle-down" style={{ color: '#f8dfa9' }}></i></div>
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
                            <div className="text-white text-[18px] cursor-pointer py-3">Dịch vụ <i className="fa fa-angle-down" style={{ color: '#f8dfa9' }}></i></div>
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
                            <Link href={'/'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Về chúng tôi</Link>
                        </div>
                        <div>
                            <Link href={'/'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Tin tức</Link>
                        </div>
                        <div>
                            <Link href={'/'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Liên hệ</Link>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='sm:hidden mb-5'>
                    <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">SẢN XUẤT  BỀN VỮNG</p>
                    <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">THÂN THIỆN  MÔI TRƯỜNG</p>
                    <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">TIẾT KIỆM  NĂNG LƯỢNG</p>
                </div>
                <div className="justify-center items-center pb-8 hidden sm:flex">
                    <div><p className="text-white text-center text-lg md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">SẢN XUẤT <br className='sm:hidden' /> BỀN VỮNG</p></div>
                    <div className={`${homecss.divider_col} `}></div>
                    <div><p className="text-white text-center text-lg md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">THÂN THIỆN <br className='sm:hidden' /> MÔI TRƯỜNG</p></div>
                    <div className={`${homecss.divider_col} `}></div>
                    <div><p className="text-white text-center text-lg md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">TIẾT KIỆM <br className='sm:hidden' /> NĂNG LƯỢNG</p></div>
                </div>
            </Container>
        </div>
    )
}

export default BannerComponent
