"use client"

import React, { useEffect } from 'react'
import Container from '@srccommons/Container'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@assets/scss/home.module.scss'
import logo from '@assets/images/logo.svg'
import MenuMobile from './MenuMobile'
import '@assets/scss/home.scss';

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 135) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll)
        }
        return () => window.removeEventListener("scroll", handleScroll)

    }, [])
    return (

        <div className={`header-v2  top-0 z-40 w-full  ${!scrolled ? 'absolute top-3 duration-500' : 'sticky-header shadow'}`}>
            <Container>
                <MenuMobile />
                <div className="hidden xl:block">
                    <div className="flex items-center gap-14 justify-center py-3">
                        <Link href={'/'} className={`${styles.menu_single} menu_single text-white text-[18px] py-3`}>Trang chủ</Link>
                        <div className={`${styles.submenu} relative`}>
                            <h3 className={`  text-white text-[18px] cursor-pointer py-3`}>Sản phẩm <i className="fa fa-angle-down" style={{ color: '#f8dfa9' }}></i></h3>
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
                            <h3 className="text-white text-[18px] cursor-pointer py-3">Dịch vụ <i className="fa fa-angle-down" style={{ color: '#f8dfa9' }}></i></h3>
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
                            <Link href={'/about-us'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Về chúng tôi</Link>
                        </div>
                        <div>
                            <Link href={'/news'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Tin tức</Link>
                        </div>
                        <div>
                            <Link href={'/contact'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Liên hệ</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Navbar
