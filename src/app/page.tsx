'use client'
import Screen from "@commons/Screen";
import HeaderComponent from "@components/home/HeaderComponent";
import styles from '@assets/scss/home.module.scss'
import Image from "next/image";
import icon30 from '@assets/images/30-01.svg'
import icon302 from '@assets/images/30-01-en.svg'

import certificate1 from '@assets/images/c1.jpg'
import certificate2 from '@assets/images/c2.jpg'
import certificate3 from '@assets/images/c3.jpg'
import certificate4 from '@assets/images/c4.jpg'
import certificate5 from '@assets/images/c5.png'
import certificate6 from '@assets/images/c6.png'
import certificate7 from '@assets/images/c7.png'

import FooterComponent from "@srccomponents/home/FooterComponent";
import CoperatorComponent from "@srccomponents/home/CoperatorComponent";
import ProductComponent from "@srccomponents/home/ProductComponent";
import CategoryComponent from "@srccomponents/home/ServiceComponent";
import BannerComponentV2 from "@srccomponents/home/BannerComponentV2";
import Slider from "react-slick";
import banner from '@assets/images/bannerx1.png';
import banner2 from '@assets/images/bannerx2.png';
import banner3 from '@assets/images/bannerx3.png';
import banner4 from '@assets/images/bannerx4.jpg';
import banner5 from '@assets/images/bannerx5.jpg';
import banner6 from '@assets/images/bannerx6.jpg';
import banner7 from '@assets/images/bannerx7.jpg';
import banner8 from '@assets/images/bannerx8.jpg';
import banner9 from '@assets/images/bannerx9.jpg';
import banner10 from '@assets/images/bannerx10.jpg';

import Container from "@srccommons/Container";
import '../../i18n'
import Translations from "@srccommons/Translations";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <Screen _className="home-page relative ">
      <HeaderComponent />

      {/* BANNER */}
      <BannerComponentV2 />


      <div className={`${styles.bg_intro} pb-[5rem] pt-10 -mt-2`}  >

        <div className="w-full px-4 xl:px-0 xl:w-5/6 mx-auto 3xl:mx-auto max-w-screen-2xl lg:ms-auto xl:mr-0">
          <div className="hidden md:flex items-center flex-wrap gap-6">
            <div className="w-[150px] lg:w-[210px]">
              <Image alt='' className="w-full" src={lang === 'en' ? icon302 : icon30} />
            </div>
            <div className="w-full md:mt-0 md:w-auto">
              <h1 className="text-[24px] text-white font-avo_bold"><Translations text="THÀNH LẬP CÔNG TY" /></h1>
              <h1 className="text-[24px] leading-7 text-white font-avo_bold ">1998 - 2028</h1>
            </div>
          </div>
          <div className="md:hidden flex justify-center flex-wrap gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[150px] lg:w-[210px]">
                <Image alt='' className="w-full" src={lang === 'en' ? icon302 : icon30} />
              </div>
              <h1 className="text-[24px] text-white"><Translations text="THÀNH LẬP CÔNG TY" /></h1>
              <h1 className="text-[24px] leading-7 text-white  ">1998 - 2028</h1>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-10 mt-5 items-center">
            <div className="col-span-6 xl:col-span-3">
              <p className="text-[18px]">
                <span className="font-avo_bold font-medium">4-1998:</span>
                <span className="text-white ">  <Translations text="30year-line1" />
                </span>
              </p>
              <p className="text-[18px]">
                <span className="font-avo_bold font-medium">4-2005:</span>
                <br />
                <span className="text-white ">
                  <Translations text="30year-line2.1" />
                </span>
                <br />
                <span className="text-white ">
                  <Translations text="30year-line2.2" />
                </span>
              </p>
              <p className="text-[18px]">
                <span className="font-avo_bold font-medium">2008: </span>
                <span className="text-white ">
                  <Translations text="30year-line3" />
                </span>
              </p>
              <p className="text-[18px]">
                <span className="font-avo_bold font-medium">2012:</span>
                <span className="text-white"> <Translations text="30year-line4" /></span>
              </p>
              <p className="text-[18px]">
                <span className="font-avo_bold font-medium">2012-2024:</span>
                <span className="text-white "><Translations text="30year-line5" /></span>
              </p>
              <p className="text-[18px]">
                <span className="font-avo_bold font-medium"><Translations text="2024-2028" />:</span>
                <span className="text-white "><Translations text="30year-line6" /></span>
              </p>
            </div>
            <div className=" lg:col-start-2 col-span-6 lg:col-span-4  xl:col-span-3">
              <Slider
                className='center'
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
                speed={1500}
                dots
              >

                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner} className='w-full' />

                </div>


                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner2} className='w-full  ' />

                </div>

                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner3} className='w-full  ' />

                </div>
                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner4} className='w-full' />

                </div>


                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner5} className='w-full  ' />

                </div>

                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner6} className='w-full  ' />

                </div>
                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner7} className='w-full' />

                </div>


                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner8} className='w-full  ' />

                </div>

                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner9} className='w-full  ' />

                </div>
                <div className={`${styles.image_hover} rounded`}>
                  <Image alt="" src={banner10} className='w-full  ' />

                </div>

              </Slider>
              {/* <Image alt="" src={bannerIntro} style={{ width: "100%" }} /> */}
            </div>
          </div>
        </div>

      </div>


      <div className={`${styles.bg_category} py-[4rem]`}>
        <ProductComponent />
        <CategoryComponent />
      </div>

      {/* certificate */}
      <div className="relative ">
        <div className={`${styles.bg_certificate} pb-[70px] pt-[50px]`}>
          <Container>

            <div className="flex items-center justify-center flex-col">
              <div className="inline-block pb-[50px]">
                <h1 className="text-center   text-2xl md:text-3xl lg:text-[30.48px] text-white uppercase">
                  <Translations text="Chứng nhận/ Bằng khen" />
                </h1>
              </div>
            </div>

            <Slider
              className='slide-certificate'
              infinite={true}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              speed={1500}
              // variableWidth={true}
              responsive={[
                {
                  breakpoint: 1536,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]}
            >

              <Image alt="" src={certificate1} className='w-full h-full' />

              <Image alt="" src={certificate2} className='w-full h-full  ' />

              <Image alt="" src={certificate3} className='w-full h-full  ' />

              <Image alt="" src={certificate4} className='w-full h-full  ' />

              <Image alt="" src={certificate5} className='w-full h-full  ' />

              <div className="h-full">
                <div className="flex justify-center items-center w-[426px] h-full">
                  <Image alt="" src={certificate6} className='my-auto' />
                </div>
              </div>
              <div></div>
              <div className="flex">
                <Image alt="" src={certificate7} className='h-[320px] w-auto' />
              </div>
            </Slider>
          </Container>
        </div>
      </div>

      {/* coperator */}
      <CoperatorComponent />
      {/* footer */}
      <FooterComponent />
    </Screen>
  );
}
