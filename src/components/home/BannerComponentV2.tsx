import React, { useEffect } from 'react'
import Container from '@srccommons/Container'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@assets/scss/home.module.scss'
import logo from '@assets/images/logo.svg'
import MenuMobile from '../../commons/MenuMobile'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@assets/scss/home.scss';
import Slider from "react-slick";
import icLeft from "@assets/images/arrow_left.svg"
import icRight from "@assets/images/arrow_right.svg"
import banner from '@assets/images/bannerx1.png';
import banner2 from '@assets/images/bannerx2.png';
import banner3 from '@assets/images/bannerx3.png';
import icon1 from '@assets/images/icon1.svg'
import icon2 from '@assets/images/icon2.svg'
import icon3 from '@assets/images/icon3.svg'



function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <div className={`h-[3.5rem] w-[3.5rem] md:h-[5rem] md:w-[5rem] rounded-full  bg-black flex items-center justify-center button_hover`}>
                <Image alt='' src={icRight} />
            </div>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <div className={`h-[3.5rem] w-[3.5rem] md:h-[5rem] md:w-[5rem] rounded-full bg-black flex items-center justify-center button_hover`}>
                <Image alt='' src={icLeft} />
            </div>
        </div>
    );
}

const BannerComponentV2 = () => {
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
        <>
            <div className={`header-v2  top-0 z-40 w-full  ${!scrolled ? 'absolute top-10 duration-500' : 'sticky-header shadow'}`}>
                <Container>
                    <MenuMobile />
                    <div className="hidden xl:block">
                        <div className="flex items-center gap-14 justify-center py-3">
                            <Link href={'/'} className={`${styles.menu_single} ${styles.active} menu_single text-white text-[18px] py-3`}>Trang chủ</Link>
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
                                <Link href={'/'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Tin tức</Link>
                            </div>
                            <div>
                                <Link href={'/contact'} className={`${styles.menu_single} text-white text-[18px] py-3`}>Liên hệ</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Slider
                className='banner-slide'
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1}
                // autoplay={true}
                adaptiveHeight={false}
                autoplaySpeed={3000}
                speed={1000}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SamplePrevArrow />}
            >
                <div className='relative w-full'>
                    <div className={` h-[400px] md:h-[500px] lg:h-lvh rounded`}>
                        <Image alt="" src={banner} className='w-full h-full' />
                    </div>
                    <div className='absolute bottom-0 w-full pb-10'>
                        <Container>
                            <div className='sm:hidden mb-5'>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">SẢN XUẤT  BỀN VỮNG</p>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">THÂN THIỆN  MÔI TRƯỜNG</p>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">TIẾT KIỆM  NĂNG LƯỢNG</p>
                            </div>
                            <div className="justify-center items-center gap-10 flex-wrap pb-8 hidden sm:flex">
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon1} width={80} height={80} alt='' />

                                    <div className='bg-icon ' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">SẢN XUẤT <br className='sm:hidden' /> BỀN VỮNG</p>
                                    </div>
                                </div>
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon2} width={80} height={80} alt='' />

                                    <div className='bg-icon' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">THÂN THIỆN <br className='sm:hidden' /> MÔI TRƯỜNG</p>
                                    </div>
                                </div>
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon3} width={80} height={80} alt='' />

                                    <div className='bg-icon' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">SẢN XUẤT <br className='sm:hidden' /> BỀN VỮNG</p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
                <div className='relative' >
                    <div className={`h-[400px] md:h-[500px] lg:h-lvh rounded`}>
                        <Image alt="" src={banner2} className='w-full h-full' />
                    </div>
                    <div className='absolute bottom-0 w-full pb-10'>
                        <Container>
                            <div className='sm:hidden mb-5'>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">SẢN XUẤT  BỀN VỮNG</p>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">THÂN THIỆN  MÔI TRƯỜNG</p>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">TIẾT KIỆM  NĂNG LƯỢNG</p>
                            </div>
                            <div className="justify-center items-center gap-10 flex-wrap pb-8 hidden sm:flex">
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon1} width={80} height={80} alt='' />

                                    <div className='bg-icon ' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">SẢN XUẤT <br className='sm:hidden' /> BỀN VỮNG</p>
                                    </div>
                                </div>
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon2} width={80} height={80} alt='' />

                                    <div className='bg-icon' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">THÂN THIỆN <br className='sm:hidden' /> MÔI TRƯỜNG</p>
                                    </div>
                                </div>
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon3} width={80} height={80} alt='' />

                                    <div className='bg-icon' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">SẢN XUẤT <br className='sm:hidden' /> BỀN VỮNG</p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
                <div className='relative'>
                    <div className={`h-[400px] md:h-[500px] lg:h-lvh rounded`}>
                        <Image alt="" src={banner3} className='w-full h-full' />
                    </div>
                    <div className='absolute bottom-0 w-full pb-10'>
                        <Container>
                            <div className='sm:hidden mb-5'>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">SẢN XUẤT  BỀN VỮNG</p>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">THÂN THIỆN  MÔI TRƯỜNG</p>
                                <p className="text-white  text-2xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[34.32px] cursor-pointer">TIẾT KIỆM  NĂNG LƯỢNG</p>
                            </div>
                            <div className="justify-center items-center gap-10 flex-wrap pb-8 hidden sm:flex">
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon1} width={80} height={80} alt='' />

                                    <div className='bg-icon ' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">SẢN XUẤT <br className='sm:hidden' /> BỀN VỮNG</p>
                                    </div>
                                </div>
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon2} width={80} height={80} alt='' />

                                    <div className='bg-icon' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">THÂN THIỆN <br className='sm:hidden' /> MÔI TRƯỜNG</p>
                                    </div>
                                </div>
                                <div className='relative flex items-end'>
                                    <Image className='z-10 -mr-[30px]' src={icon3} width={80} height={80} alt='' />

                                    <div className='bg-icon' >
                                        <p className="text-white text-center text-lg md:text-xl py-3 ps-10 pe-5 lg:text-2xl 2xl:text-[25px] cursor-pointer">SẢN XUẤT <br className='sm:hidden' /> BỀN VỮNG</p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>

            </Slider>
        </>

    )
}

export default BannerComponentV2
