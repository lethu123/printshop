
import React from 'react'
import Container from '@srccommons/Container'
import Image from 'next/image' 
import styles from '@assets/scss/home.module.scss'
import icon30 from '@assets/images/30.png'
import '@assets/scss/home.scss';
import BannerSingle from '@srccommons/BannerSingle'
import service1 from '@assets/images/about2.png';
import service2 from '@assets/images/about1.png';
import service3 from '@assets/images/about3.png';
import myTeam from "@assets/images/about4.png"
import FooterComponent from '@srccomponents/home/FooterComponent'
import Screen from '@srccommons/Screen'
import banner from '@assets/images/baner1.jpg';

const AboutUs = () => {
    return (
        <Screen _className="product-page relative">
            <BannerSingle image={banner} />
            <section className='bg-black pt-10'>
                <Container>
                    <div className='xl:flex items-center justify-between'>
                        <h1 className='border-l-4 pl-5 border-white text-white text-[32px] mb-7 xl:mb-0 md:text-[40px] mt-10 '>VỀ DƯƠNG PHONG</h1>
                        <div className="flex items-end flex-wrap">
                            <div className="w-[150px] lg:w-[210px]">
                                <Image alt='' className="w-full" src={icon30} />
                            </div>
                            {/* <div className="flex items-end"> */}
                            <div className="pb-3 ps-2 ">
                                <h1 className="text-[30px] text_yellow lg:text-[19.2px] font-avo_bold">NĂM</h1>
                                <h1 className="text-[20px] lg:text-[13px] text-white font-avo_bold">ĐỂ PHÁT TRIỂN</h1>
                                <h2 className="text-[15px] lg:text-[10px] text-white ">ĐỂ TẬN TUY</h2>
                            </div>
                            <div className={`h-[70px] w-[5px] bg-white mb-3 hidden md:block mx-[40px]`}></div>
                            <div className="w-full mt-4 pb-2 lg:mt-0 md:w-auto">
                                <h1 className="text-[19.2px] text_yellow font-avo_bold">QUÁ TRÌNH HÌNH THÀNH</h1>
                                <h1 className="text-[19.2px] text-white font-avo_bold">VÀ PHÁT TRIỂN</h1>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="py-10 lg:pl-6">
                        <p className="text-[18px] text-white mb-3">
                            <span className="font-avo_bold">4-1998:</span>
                            <span className="text-white "> Thành lập Trung tâm Dịch vụ Quảng cáo và tổ chức Hội chợ: chuyên cung cấp các dịch vụ thiết kế, in ấn, quảng cáo ngoài trời, tổ chức hội chợ, sự kiện, thực hiện các dịch truyền thông, sản xuất TVCs
                            </span>
                        </p>
                        <p className="text-[18px] text-white mb-3">
                            <span className="font-avo_bold">4-2005:</span>
                            <br />
                            <span className="text-white ">- Chuyển đổi Trung tâm thành Công ty, thành lập công ty TNHH Quảng cáo và Thương Mại Dương Phong chuyên cung cấp các dịch vụ thiết kế, in ấn, quảng cáo ngoài trời, sản xuất thiết bị quảng cáo</span>
                            <br />
                            <span className="text-white ">
                                - Xây dựng xưởng cơ khí chuyên xây lắp dàn dựng bảng biển quảng cáo tấm lớn, sản xuất thiết bị quảng cáo
                            </span>
                        </p>
                        <p className="text-[18px] text-white mb-3">
                            <span className="font-avo_bold">2008: </span>
                            <span className="text-white ">
                                Xây dựng nhà in Dương Phong với quy mô nhỏ 700m2 chuyên in ấn phẩm quảng cáo, lịch, sách
                            </span>
                        </p>
                        <p className="text-[18px] text-white mb-3">
                            <span className="font-avo_bold">2012:</span>
                            <span className="text-white"> Nâng cấp nhà in Dương Phong lên quy mô 6.000m2, bổ sung thêm các máy móc phục vụ ngành sản xuất bao bì giấy, thùng hộp carton</span>
                        </p>
                        <p className="text-[18px] text-white mb-3">
                            <span className="font-avo_bold">2012-2024:</span>
                            <span className="text-white "> Liên tục nâng cấp nhà in, xưởng sản xuất thiết bị quảng cáo, trang bị máy móc hiện đại, hoàn thiện quy trình sản xuất đảm bảo tự động hoá chiếm 70% các công đoạn.</span>
                        </p>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className='grid grid-cols-3 gap-3 py-20'>
                        <div className="col-span-3 md:col-span-1  ">
                            <div className={`${styles.image_hover} aspect-[6/5]`}>
                                <Image alt="" className="w-full h-full" src={service1} />
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-1  ">
                            <div className={`${styles.image_hover} aspect-[6/5]`}>
                                <Image alt="" className="w-full h-full" src={service2} />
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-1  ">
                            <div className={`${styles.image_hover} aspect-[6/5]`}>
                                <Image alt="" className="w-full h-full" src={service3} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <div className='bg-header1 py-6 '>
                    <h1 className='text-[33px] md:text-[40px] text-center font-avo_bold'>TẦM NHÌN</h1>
                </div>
                <Container className="py-5">
                    <h1 className='text-[26px] sm:text-[31px] md:text-[36px] font-avo_bold text-[#145629]'>HƯỚNG ĐẾN NĂM 2030 LÀ 1 CÔNG TY XANH ĐẠT CÁC TIÊU CHÍ: </h1>
                    <div className='sm:hidden mb-5 mt-3'>
                        <p className="text-[#145629] font-avo_bold  text-xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">SẢN XUẤT  BỀN VỮNG</p>
                        <p className="text-[#145629] font-avo_bold  text-xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">THÂN THIỆN  MÔI TRƯỜNG</p>
                        <p className="text-[#145629] font-avo_bold  text-xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">TIẾT KIỆM  NĂNG LƯỢNG</p>
                    </div>
                    <div className="items-center pb-8 hidden sm:flex mt-3">
                        <div><p className="text-[#145629] font-avo_bold text-center text-lg md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">SẢN XUẤT <br className='sm:hidden' /> BỀN VỮNG</p></div>
                        <div className={`h-[35px] w-[3px] bg-[#145629] hidden md:block mx-[40px]`}></div>
                        <div><p className="text-[#145629] font-avo_bold text-center text-lg md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">THÂN THIỆN <br className='sm:hidden' /> MÔI TRƯỜNG</p></div>
                        <div className={`h-[35px] w-[3px] bg-[#145629] hidden md:block mx-[40px]`}></div>
                        <div><p className="text-[#145629] font-avo_bold text-center text-lg md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">TIẾT KIỆM <br className='sm:hidden' /> NĂNG LƯỢNG</p></div>
                    </div>
                    <div>
                        <p className='mb-3'>
                            <span>Nhà in cung cấp giải pháp đồng bộ cho sản phẩm in ấn: </span> <br />
                            <span>Thiết kế – tạo mẫu – tư vấn/cung cấp loại giấy phù hợp – ghi kẽm – in ấn – gia công thành phẩm – giao hàng tận nơi trên khắp Việt Nam</span>
                        </p>
                        <p className='mb-3'>
                            <span>Là nhà sản xuất hàng đầu về bao bì cao cấp, bao bì giấy chuyên ngành tại Việt Nam</span>
                        </p>
                        <p className='mb-3'>
                            <span>Là nhà thầu uy tín chuyên tạo mẫu – sản xuất các vật phẩm, thiết bị quảng cáo – thiết bị trưng bày tại siêu thị, hội chợ, showroom… trên phạm vi toàn quốc.
                            </span>
                        </p>
                        <p>
                            <span>Nhân viên DPA có văn hóa, có tâm và có kỹ năng công việc tốt, chuyên nghiệp</span>
                        </p>
                    </div>
                </Container>
            </section>
            <section className='mb-20'>
                <div className='bg-header1 py-6 '>
                    <h1 className='text-[31px] md:text-[40px] text-center font-avo_bold'>ĐỘI NGŨ CỦA <br className='sm:hidden' /> CHÚNG TÔI</h1>
                </div>
                <Container>
                    <div className=' '>
                        <Image alt='' className='w-full h-full' src={myTeam} />
                    </div>
                </Container>
            </section>
            <FooterComponent />
        </Screen>
    )
}

export default AboutUs
