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
        <div className={`${homecss.banner} bg-fixed h-svh flex flex-col justify-between`}>
            {/* me */}
            <Container>
               <MenuMobile /> 
                <div className="hidden lg:block">
                    <div className="flex items-center gap-14 justify-center pt-6">
                        <Link href={'/'} className="text-white text-[18px] py-3">Trang chủ</Link>
                        <div className={`${styles.submenu} relative`}>
                            <div className={`  text-white text-[18px] cursor-pointer py-3`}>Sản phẩm </div>
                            <div className={`${styles.submenu_show} absolute z-10 flex  max-w-max`}>
                                <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                    <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
                                        <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                            Sản phẩm 1
                                        </a>
                                        <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                            Sản phẩm 2
                                        </a>
                                        <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                            Sản phẩm 3
                                        </a>
                                        <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                            Sản phẩm 4
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.submenu} relative`}>
                            <div className="text-white text-[18px] cursor-pointer py-3">Dịch vụ</div>
                            <div className={`${styles.submenu_show} absolute z-10 flex  max-w-max`}>
                                <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                    <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
                                        <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                            Dịch vụ 1
                                        </a>
                                        <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                            Dịch vụ 2
                                        </a>
                                        <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                            Dịch vụ 3
                                        </a>
                                        <a href="#" className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                                            Dịch vụ 4
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image height={70} width={150} alt='' src={logo} />
                        </div>
                        <div>
                            <Link href={'/'} className="text-white text-[18px] py-3">Về chúng tôi</Link>
                        </div>
                        <div>
                            <Link href={'/'} className="text-white text-[18px] py-3">Tin tức</Link>
                        </div>
                        <div>
                            <Link href={'/'} className="text-white text-[18px] py-3">Liên hệ</Link>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex justify-center items-center pb-8">
                    <div><p className="text-white text-center text-lg md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">SẢN XUẤT <br className='sm:hidden'/> BỀN VỮNG</p></div>
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
