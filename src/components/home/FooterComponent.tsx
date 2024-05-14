import Container from '@srccommons/Container' 
import Link from 'next/link'
import React from 'react'
import styles from '@assets/scss/home.module.scss' 
import { IconEmail, IconLocation, IconPhone } from '@srccommons/icons'

const FooterComponent = () => {
  return (
    <footer className="pb-[5rem]">
      <Container>
        <div className="grid grid-cols-5 gap-5 items-stretch flex-wrap">
          <div className="col-span-5 md:col-span-3">
            <h1 className="custom-text-mode text-xl font-extrabold lg:text-[21.9px] mb-2">CÔNG TY TNHH QUẢNG CÁO VÀ THƯƠNG MẠI
              <br className='hidden lg:block' />
              DƯƠNG PHONG (DPA)</h1>
            <div className="flex items-center gap-8 lg:gap-16 flex-wrap  lg:justify-start">
              <div >
                <div className="flex custom-text-mode gap-2">
                  <IconLocation color='white' className='w-[12px] custom-icon-show ' />
                  <IconLocation color='black' className='w-[12px] custom-icon-hidden' />
                  <span className='text=[15px] font-medium'>66/52 Phổ Quang, P. 2, Q. Tân Bình, Tp.HCM</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex custom-text-mode gap-2">
                    <IconPhone color='white' className='w-[12px] custom-icon-show' />
                    <IconPhone color='black' className='w-[12px] custom-icon-hidden' />

                    <span className='text=[15px]'> 028. 38 44. 1111</span>
                  </div>
                  <div>
                    <span className="custom-text-mode text=[15px]">fax: 028.39971009</span>
                  </div>
                </div>
                <div className="flex custom-text-mode gap-2">
                  <IconEmail color='white' className='w-[12px] custom-icon-show' />
                  <IconEmail color='black' className='w-[12px] custom-icon-hidden' />

                  <span className='text=[15px]'>contact@dpa.vn</span>
                </div>
              </div>

              {/* <div className="flex rounded-full items-center gap-4 bg-custom-mode p-2 lg:p-[10px]">
                <div className="bg-logo-custom-mode rounded-full w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] p-3"><Image alt="" className="w-full h-full" src={logoBlack} /></div>
                <div>
                  <div className="flex items-center gap-4">
                    <Image width={17} alt="" src={phone2} />
                    <p className="font-extrabold custom-text-logo-mode text-base lg:text-lg pe-1">Gọi cho chúng tôi</p>
                  </div>
                  <span className="text-[#F26311] text-base lg:text-lg font-bold"> 08. 38 44 1111</span>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-span-5 md:col-span-3 lg:col-span-2 flex flex-wrap justify-between">
            <div className=" ">
              <h1 className="custom-text-mode font-extrabold text-[20px]">OUR MENU CATAGORIES</h1>
              <div className='flex justify-between'>
                <ul className={`${styles.ul} custom-text-mode`}>
                  <li className='text-[15px]'>
                    <Link href={'/'} >Trang chủ</Link>
                  </li>
                  <li className='text-[15px] '><Link href={'/products/banner'} >Sản phẩm</Link></li>
                  <li className='text-[15px] '> <Link href={'/services/banner'} >Dịch vụ</Link></li> 
                </ul>
                <ul className={`${styles.ul} custom-text-mode`}> 
                  <li className='text-[15px] '><Link href={'/about-us'} >Về chúng tôi</Link></li>
                  <li className='text-[15px] '> <Link href={'/news'} >Tin tức</Link></li>
                  <li className='text-[15px] '> <Link href={'/contact'} >Liên hệ</Link></li> 
                </ul>
              </div>
            </div> 
          </div>


          <div className="custom-text-mode col-span-5 md:col-span-3 ">
            <div className="my-9 text=[15px]">
              <h3 className='text=[15px] font-extrabold '>NHÀ IN DƯƠNG PHONG:</h3>
              <span>
                7/9A, Ấp 1, xã Xuân Thới Thượng, <br />
                Huyện Hóc Môn, Tp.HCM
              </span>
            </div>
            <div className="mb-9 text=[15px]">
              <h3 className='font-extrabold'>XƯỞNG SẢN XUẤT KỸ THUẬT SỐ</h3>
              <span>số 5 Phạm Ngũ Lão, Quận Gò Vấp, Tp.HCM</span>
            </div>
            <div className='text=[15px]'>
              <h3 className='font-extrabold'>VPĐD TẠI HÀ NỘI:</h3>
              <span>R.707, 65 Văn Miếu, Đống Đa , Hà Nội</span>
            </div>
          </div>

          <div className="col-span-5 md:col-span-2 mt-5 lg:0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.521263707445!2d106.54401639357908!3d10.867770499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b93635e7d83%3A0x7784b185f7215232!2zTmjDoCBpbiBExrDGoW5nIFBob25n!5e0!3m2!1svi!2s!4v1709973614919!5m2!1svi!2s" className='w-full max-w-full' height="250" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <div className=" flex items-end mt-6">
              <div className="flex gap-3 items-center flex-wrap">
                <h2 className="custom-text-mode text-[15.42px] font-avo_bold">New Enter</h2>
                <div className='flex gap-3 flex-wrap'>
                  <input className={`${styles.input} text-base md:text-[15.42px] p-2 xl:p-3 border-0 outline-0 rounded-full font-semibold placeholder:text-black`} placeholder="enter your email address" />
                  <button className={`${styles.btn} text-[15.42px] py-3 px-5 md:px-10 border-0 outline-0 rounded-full font-semibold`}>Subcribe</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterComponent
