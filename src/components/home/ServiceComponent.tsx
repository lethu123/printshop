import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import service1 from '@assets/images/sv5.jpg';
import service2 from '@assets/images/sv4.1.jpg';
import service3 from '@assets/images/sv2.jpg';
import service4 from '@assets/images/sv3.jpg';
import service5 from '@assets/images/spbb1.jpg';
import service6 from '@assets/images/sv1.jpg';
import '@assets/scss/home.scss';
import { useRouter } from 'next/navigation'
import Container from '@srccommons/Container';

const CategoryComponent = () => {
    const router = useRouter()
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className="px-4 xl:px-0  my-[8rem]">
                <Container>
                    <h1 className={`${styles.text_custom_yellow} text-[2.5rem] lg:text-[52.14px] uppercase ps-10`} style={{ borderLeft: '0.5rem solid #F77E0B' }}>DỊCH VỤ</h1>
                </Container>
                <div className="grid grid-cols-10 md:grid-cols-12 lg:grid-cols-10 items-stretch gap-1 mt-5 order-first">
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.image_hover} aspect-square`}>
                            <Image alt="" className="w-full h-full  object-cover" src={service1} />
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.bg_custom_yellow} h-full relative overflow-hidden`}>
                            <p className="text-white p-3 text-base xl:text-[25px]">Thiết kế <br /> ấn phẩm</p>
                            <div className="absolute -bottom-10 -right-10 h-[80%] w-[80%] z-10 rounded-full" style={{ background: '#FAB674' }} ></div>
                        </div>

                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2 order-6 md:order-none">
                        <div className={`${styles.image_hover} aspect-square`}>
                            <Image className="w-full h-full  object-cover" alt="" src={service2} />
                        </div>
                    </div>
                    <div className="col-span-5  md:col-span-4 lg:col-span-2 order-0 md:order-none">
                        <div className={`${styles.bg_custom_yellow} h-full relative z-0 overflow-hidden`}>
                            <p className="text-white w-full xl:w-[14rem] ml-auto p-3 text-right text-base xl:text-[21.42px]">Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm (POSM)</p>
                            <div className="absolute bottom-10 right-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
                        </div>
                    </div> <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.image_hover} aspect-square`}>
                            <Image className="w-full h-full  object-cover" alt="" src={service6} />
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.image_hover} aspect-square`}>
                            <Image className="w-full h-full  object-cover" alt="" src={service3} />
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.image_hover} aspect-square`}>
                            <Image className="w-full h-full  object-cover" alt="" src={service4} />
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-4 lg:col-span-2">
                        <div className={`${styles.bg_custom_yellow} h-full flex relative z-0 overflow-hidden`}>
                            <p className="text-white p-3 items-end mt-auto text-base xl:text-[23px]">Thiết kế <br /> tạo mẫu bao bì, hộp</p>
                            <div className="absolute bottom-10 left-10 h-[80%] w-[80%] -z-10 rounded-full border-[0.5px]" style={{ borderColor: '#FAB674' }}   ></div>
                        </div>
                    </div>
                    <div className="col-span-10 md:col-span-12 lg:col-span-4 relative order-last">
                        <div className={`${styles.image_hover} aspect-[2/1]`}>
                            <Image className="w-full h-full  object-cover" alt="" src={service5} />
                        </div>
                        <div className={`absolute -bottom-20 right-[50%]`} style={{ transform: 'translateX(50%)' }} >
                            <button onClick={() => router.push('/services/banner', { scroll: false })} className={`follow_me uppercase text-[22px] spin circle h-[130px] w-[130px] xl:h-[150px] xl:w-[150px]`}>Xem thêm
                                <div></div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CategoryComponent
