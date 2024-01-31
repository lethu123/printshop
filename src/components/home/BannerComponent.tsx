import React from 'react'
import homecss from '@assets/scss/home.module.scss' 
import Container from '@srccommons/Container'
import Image from 'next/image'
import logo from '@assets/images/logo.svg'

const BannerComponent = () => {
    return (
        <div className={`${homecss.banner} bg-fixed h-svh flex flex-col justify-between`}>
            {/* me */}
            <Container>
                <div className="flex items-center justify-around pt-6">
                    <div>
                        <span className="text-white text-[18px]">Trang chủ</span>
                    </div>
                    <div>
                        <span className="text-white text-[18px]">Sản phẩm</span>
                    </div>
                    <div>
                        <span className="text-white text-[18px]">Dịch vụ</span>
                    </div>
                    <div>
                        <Image height={70} width={150} alt='' src={logo} />
                    </div>
                    <div>
                        <span className="text-white text-[18px]">Về chúng tôi</span>
                    </div>
                    <div>
                        <span className="text-white text-[18px]">Tin tức</span>
                    </div>
                    <div>
                        <span className="text-white text-[18px]">Liên hệ</span>
                    </div>
                </div>
            </Container> 
            <Container>
                <div className="flex justify-center items-center pb-8">
                    <div><span className="text-white text-[34.32px]">SẢN XUẤT BỀN VỮNG</span></div>
                    <div className={`${homecss.divider_col} `}></div>
                    <div><span className="text-white text-[34.32px] ">THÂN THIỆN MÔI TRƯỜNG</span></div>
                    <div className={`${homecss.divider_col} `}></div>
                    <div><span className="text-white text-[34.32px] ">TIẾT KIỆM NĂNG LƯỢNG</span></div>
                </div>
            </Container>
        </div>
    )
}

export default BannerComponent
