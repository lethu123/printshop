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
            <div className="w-5/6 mx-auto mt-[9rem]">
                <h1 className={`${styles.text_custom_yellow} text-[52.14px] uppercase ps-10`} style={{ borderLeft: '0.5rem solid #F77E0B' }}>DỊCH VỤ</h1>
                <div className="grid grid-cols-10 gap-1 mt-5">
                    <div className="col-span-2">
                        <Image alt="" className="w-full" src={service1} />
                    </div>
                    <div className="col-span-2">
                        <div className={`${styles.bg_custom_yellow} h-full relative overflow-hidden`}>
                            <p className="text-white font-avo_bold p-3 text-[25px]">Thiết kế <br /> ấn phẩm</p>
                            <div className="absolute -bottom-10 -right-10 h-[80%] w-[80%] z-10 rounded-full" style={{ background: '#FAB674' }} ></div>
                        </div>

                    </div>
                    <div className="col-span-2">
                        <Image className="w-full" alt="" src={service2} />
                    </div>
                    <div className="col-span-2">
                        <div className={`${styles.bg_custom_yellow} h-full relative z-0`}>
                            <p className="text-white w-[14rem] ml-auto p-3 text-right text-[21.42px]">Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm (POSM)</p>
                            <div className="absolute bottom-10 right-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
                        </div>
                    </div> <div className="col-span-2">
                        <Image className="w-full" alt="" src={service6} />
                    </div>
                    <div className="col-span-2">
                        <Image className="w-full" alt="" src={service3} />
                    </div>
                    <div className="col-span-2">
                        <Image className="w-full" alt="" src={service4} />
                    </div>
                    <div className="col-span-2">
                        <div className={`${styles.bg_custom_yellow} h-full flex relative z-0`}>
                            <p className="text-white font-avo_bold p-3 items-end mt-auto text-[23px]">Thiết kế <br /> tạo mẫu bao bì, hộp</p>
                            <div className="absolute bottom-10 left-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
                        </div>
                    </div>
                    <div className="col-span-4 relative">
                        <Image className="w-full" alt="" src={service5} />
                        <div className={`${styles.follow_me} absolute -bottom-20 right-[50%]`} style={{transform: 'translateX(50%)'}} >
                            <Link href={'/'}>Xem thêm</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CategoryComponent
