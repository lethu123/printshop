import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@assets/scss/home.scss';
import Slider from "react-slick";
import icLeft from "@assets/images/arrow_left.svg"
import icRight from "@assets/images/arrow_right.svg"
import sp from '@assets/images/sp1.1.jpg';
import sp2 from '@assets/images/sp2.jpg';
import sp3 from '@assets/images/sp.jpg';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Translations from '@srccommons/Translations';


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
      <div className={`h-[3.5rem] w-[3.5rem] md:h-[5rem] md:w-[5rem] rounded-full  bg-black flex items-center justify-center button_hover`}>
        <Image alt='' src={icLeft} />
      </div>
    </div>
  );
}


const ProductComponent = () => {
  const router = useRouter()

  return (
    <div className="relative product  max-w-screen-2xl mx-auto">
      <div className="w-5/6 mx-auto">
        <h1 className={`${styles.text_custom_yellow} text-[2.5rem] lg:text-[52.14px] uppercase ps-10`} style={{ borderLeft: '0.5rem solid #F77E0B' }}>
          <Translations text='Sản phẩm' />
        </h1>
      </div>
      <Slider
        className='center'
        infinite={true}
        slidesToShow={3}
        slidesToScroll={3}
        // autoplay={true}
        autoplaySpeed={3000}
        speed={1500}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={[
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
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        <div className='md:pt-3'>
          {/* <HoverImage classImage='' /> */}
          <h3 className={`${styles.text_custom_yellow} text-center text-[21.42px] md:hidden uppercase px-5`}>
            <Translations text='Ấn Phẩm' />
          </h3>
          <div className={`${styles.image_hover} rounded`}>
            <Image alt="" src={sp} className='h-full object-cover' />
            <div className={`${styles.view_detail} flex justify-center items-center`}>
              <Link href={'#'}><Translations text='Xem chi tiết' /></Link>
            </div>
          </div>
          <h3 className={`${styles.text_custom_yellow} text-center text-[21.42px] hidden md:block uppercase px-5 mt-5`}> <Translations text='Ấn Phẩm' /></h3>
        </div>
        <div >
          <h3 className={`${styles.text_custom_yellow} text-center text-[21.42px] uppercase px-5 md:mb-5`}><Translations text='Bao bì - hộp giấy' /> </h3>

          <div className={`${styles.image_hover} rounded md:mb-7`}>
            <Image alt="" src={sp2} className='object-cover w-full md:h-[400px] lg:h-[450px] xl:h-[560px]' />
            <div className={`${styles.view_detail} flex justify-center items-center`}>
              <Link href={'#'}><Translations text='Xem chi tiết' /></Link>
            </div>
          </div>

        </div>
        <div className='pt-3'>
          <h3 className={`${styles.text_custom_yellow} text-[21.42px] text-center md:hidden uppercase px-5 `}><Translations text='Thiết bị quảng cáo' /></h3>
          <div className={`${styles.image_hover} rounded`}>
            <Image className='object-cover' alt="" src={sp3} />
            <div className={`${styles.view_detail} flex justify-center items-center`}>
              <Link href={'#'}><Translations text='Xem chi tiết' /></Link>
            </div>
          </div>
          <h3 className={`${styles.text_custom_yellow} text-[21.42px] hidden md:block text-center uppercase px-5  mt-5`}><Translations text='Thiết bị quảng cáo' /></h3>

        </div>


      </Slider>
      <div className={`absolute -bottom-12 right-[50%]`} style={{ transform: 'translateX(50%)' }} >
        <button onClick={() => router.push('/products/banner', { scroll: false })} className={`follow_me uppercase text-[22px] spin circle h-[130px] w-[130px] xl:h-[150px] xl:w-[150px]`}> <Translations text='Xem thêm' />
          <div></div>
        </button>
      </div>
    </div>
  )
}

export default ProductComponent
