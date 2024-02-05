import Container from '@srccommons/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import phone from '@assets/images/phone1.svg';
import location from '@assets/images/loaction.svg';
import email from "@assets/images/email.svg";
import logoBlack from '@assets/images/logo-black.svg'
import phone2 from '@assets/images/phone-orange.svg'

const FooterComponent = () => {
  return (
    <footer className="pb-[6rem]">
      <Container>
        <div className="grid grid-cols-5 gap-5 items-stretch flex-wrap">
          <div className="col-span-5 lg:col-span-3">
            <h1 className="text-white text-xl lg:text-[21.9px] mb-2">CÔNG TY TNHH QUẢNG CÁO VÀ THƯƠNG MẠI
              <br className='hidden lg:block' />
              DƯƠNG PHONG (DPA)</h1>
            <div className="flex items-center gap-8 lg:gap-16 flex-wrap justify-center lg:justify-start">
              <div >
                <div className="flex text-white gap-2">
                  <Image width={12} alt="" src={location} />
                  <span className='text=[15px]'>66/52 Phổ Quang, P. 2, Q. Tân Bình, Tp.HCM</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex text-white gap-2">
                    <Image width={12} alt="" src={phone} />
                    <span className='text=[15px]'> 08. 38 44 1111M</span>
                  </div>
                  <div>
                    <span className="text-white text=[15px]">fax: 08. 3997 1009</span>
                  </div>
                </div>
                <div className="flex text-white gap-2">
                  <Image width={12} alt="" src={email} />
                  <span className='text=[15px]'>contact@dpa.vn</span>
                </div>
              </div>

              <div className="flex rounded-full items-center gap-4 bg-white  p-2 lg:p-[10px]">
                <div className="bg-black rounded-full w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] p-3"><Image alt="" className="w-full h-full" src={logoBlack} /></div>
                <div>
                  <div className="flex items-center gap-4">
                    <Image width={17} alt="" src={phone2} />
                    <p className="font-extrabold text-base lg:text-lg pe-1">Gọi cho chúng tôi</p>
                  </div>
                  <span className="text-[#F26311] text-base lg:text-lg font-bold">(+84) 913 927 471</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 lg:col-span-1 ">
            <h1 className="text-white text-[23.13px]">OUR MENU CATAGORIES</h1>
            <ul className={`${styles.ul} text-white`}>
              <li className='text=[15px]'>
                <Link href={'/'} >TRANG CHỦ</Link>
              </li>
              <li className='text=[15px] uppercase'><Link href={'/'} >giới thiệu</Link></li>
              <li className='text=[15px] uppercase'> <Link href={'/'} >Thư viện</Link></li>
              <li className='text=[15px] uppercase'> <Link href={'/'} >Thông tin</Link></li>
              <li className='text=[15px] uppercase'><Link href={'/'} >Hỗ trợ</Link></li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-2 lg:col-span-1">
            <h1 className="text-white text-[23.13px]">LAST EVENTS</h1>
            <ul className={`${styles.ul} text-white`}>
              <li className='text=[15px]'>
                <Link href={'/'} >CHRISMAS</Link>
              </li>
              <li className='text=[15px] '><Link href={'/'} >Black Friday</Link></li>
              <li className='text=[15px] '> <Link href={'/'} >Sunday Specia</Link></li>
            </ul>
          </div>

          <div className="text-white col-span-5 lg:col-span-3 ">
            <div className="my-9 text=[15px]">
              <h3 className='text=[15px] '>NHÀ IN DƯƠNG PHONG:</h3>
              <span>
                7/9A, Ấp 1, xã Xuân Thới Thượng, <br />
                Huyện Hóc Môn, Tp.HCM
              </span>
            </div>
            <div className="mb-9 text=[15px]">
              <h3>XƯỞNG SẢN XUẤT KỸ THUẬT SỐ</h3>
              <span>số 5 Phạm Ngũ Lão, Quận Gò Vấp, Tp.HCM</span>
            </div>
            <div className='text=[15px]'>
              <h3>VPĐD TẠI HÀ NỘI:</h3>
              <span>R.707, 65 Văn Miếu, Đống Đa , Hà Nội</span>
            </div>
          </div>

          <div className="col-span-5 lg:col-span-2 flex items-end mt-5 lg:0">
            <div className="flex gap-3 items-center flex-wrap">
              <h2 className="text-white text-[15.42px] font-avo_bold">New Enter</h2>
              <div className='flex gap-3 flex-wrap'>
                <input className={`${styles.input} text-base md:text-[15.42px] p-2 xl:p-3 border-0 outline-0 rounded-full font-semibold placeholder:text-black`} placeholder="enter your email address" />
                <button className={`${styles.btn} text-[15.42px] py-3 px-5 md:px-10 border-0 outline-0 rounded-full font-semibold`}>Subcribe</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterComponent
