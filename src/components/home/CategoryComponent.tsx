import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import service1 from '@assets/images/service1.png';
import service2 from '@assets/images/service2.png';
import service3 from '@assets/images/service3.png';
import service4 from '@assets/images/service4.png';
import service5 from '@assets/images/service5.png';
import service6 from '@assets/images/service6.png';
import Link from 'next/link';

const CategoryComponent = () => {
    return (
        <div>
            <div className="w-5/6 mx-auto my-[8rem]">
                <h1 className={`${styles.text_custom_yellow} text-[2.5rem] lg:text-[52.14px] uppercase ps-10`} style={{ borderLeft: '0.5rem solid #F77E0B' }}>DỊCH VỤ</h1>
                <div className="grid grid-cols-10 md:grid-cols-12 lg:grid-cols-10 items-stretch gap-1 mt-5 order-first">
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.image_hover}`}>
                            <Image alt="" className="w-full" src={service1} />
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.bg_custom_yellow} h-full relative overflow-hidden`}>
                            <p className="text-white font-avo_bold p-3 text-base xl:text-[25px]">Thiết kế <br /> ấn phẩm</p>
                            <div className="absolute -bottom-10 -right-10 h-[80%] w-[80%] z-10 rounded-full" style={{ background: '#FAB674' }} ></div>
                        </div>

                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2 order-6 md:order-none">
                        <div className={`${styles.image_hover}`}>
                            <Image className="w-full" alt="" src={service2} />
                        </div>
                    </div>
                    <div className="col-span-5  md:col-span-4 lg:col-span-2 order-0 md:order-none">
                        <div className={`${styles.bg_custom_yellow} h-full relative z-0 overflow-hidden`}>
                            <p className="text-white w-full xl:w-[14rem] ml-auto p-3 text-right text-base xl:text-[21.42px]">Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm (POSM)</p>
                            <div className="absolute bottom-10 right-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
                        </div>
                    </div> <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.image_hover}`}>
                            <Image className="w-full" alt="" src={service6} />
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.image_hover}`}>
                            <Image className="w-full" alt="" src={service3} />
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.image_hover}`}>
                            <Image className="w-full" alt="" src={service4} />
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.bg_custom_yellow} h-full flex relative z-0 overflow-hidden`}>
                            <p className="text-white font-avo_bold p-3 items-end mt-auto text-base xl:text-[23px]">Thiết kế <br /> tạo mẫu bao bì, hộp</p>
                            <div className="absolute bottom-10 left-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
                        </div>
                    </div>
                    <div className="col-span-10 md:col-span-12 lg:col-span-4 relative order-last">
                        <div className={`${styles.image_hover}`}>
                            <Image className="w-full" alt="" src={service5} />
                        </div>
                        <div className={`${styles.follow_me} absolute -bottom-20 right-[50%]`} style={{ transform: 'translateX(50%)' }} >
                            <Link href={'/'}>Xem thêm</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CategoryComponent
