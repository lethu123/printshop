'use client'
import Screen from "@commons/Screen";
import HeaderComponent from "@components/home/HeaderComponent";
import BannerComponent from "@srccomponents/home/BannerComponent";
import styles from '@assets/scss/home.module.scss'
import Image from "next/image";
import bannerIntro from '@assets/images/banner.png'
import icon30 from '@assets/images/30.png'

import FooterComponent from "@srccomponents/home/FooterComponent";
import CoperatorComponent from "@srccomponents/home/CoperatorComponent";
import ProductComponent from "@srccomponents/home/ProductComponent";
import CategoryComponent from "@srccomponents/home/ServiceComponent";
import Container from "@srccommons/Container";

export default function Home() {
  return (
    <Screen _className="home-page">
      <HeaderComponent />
      {/* BANNER */}
      <BannerComponent />


      <div className={`${styles.bg_intro} pb-[5rem] pt-5`}  >
        <Container >
          <div className="w-full px-4 xl:px-0 xl:w-5/6 mx-auto lg:ms-auto xl:mr-0">
            <div className="flex items-end flex-wrap">
              <div className="w-[150px] lg:w-[210px]">
                <Image alt='' className="w-full" src={icon30} />
              </div>
              {/* <div className="flex items-end"> */}
              <div className="pb-3 ps-2 ">
                <h1 className="text-[30px] md:text-[25.45px]">NĂM</h1>
                <h1 className="text-[22px] md:text-[17.31px] text-white font-ava_bold">ĐỂ PHÁT TRIỂN</h1>
                <h2 className="text-[18px] md:text-[13.35px] text-white ">ĐỂ TẬN TUY</h2>
              </div>
              <div className={`${styles.divider_col2} mb-3 hidden md:block mx-[40px]`}></div>
              <div className="w-full mt-4 pb-2 md:mt-0 md:w-auto">
                <h1 className="text-[25.41px] font-ava_bold">QUÁ TRÌNH HÌNH THÀNH</h1>
                <h1 className="text-[25.41px] text-white">VÀ PHÁT TRIỂN</h1>
              </div>
              {/* </div> */}
            </div>
            <div className="grid grid-cols-6 gap-10 items-center mt-5">
              <div className="col-span-6 xl:col-span-3">
                <p className="text-[18px]">
                  <span className="font-avo_bold">4-1998:</span>
                  <span className="text-white "> Thành lập Trung tâm Dịch vụ Quảng cáo và tổ chức Hội chợ: chuyên cung cấp các dịch vụ thiết kế, in ấn, quảng cáo ngoài trời, tổ chức hội chợ, sự kiện, thực hiện các dịch truyền thông, sản xuất TVCs
                  </span>
                </p>
                <p className="text-[18px]">
                  <span className="font-avo_bold">4-2005:</span>
                  <br />
                  <span className="text-white ">- Chuyển đổi Trung tâm thành Công ty, thành lập công ty TNHH Quảng cáo và Thương Mại Dương Phong chuyên cung cấp các dịch vụ thiết kế, in ấn, quảng cáo ngoài trời, sản xuất thiết bị quảng cáo</span>
                  <br />
                  <span className="text-white ">
                    - Xây dựng xưởng cơ khí chuyên xây lắp dàn dựng bảng biển quảng cáo tấm lớn, sản xuất thiết bị quảng cáo
                  </span>
                </p>
                <p className="text-[18px]">
                  <span className="font-avo_bold">2008: </span>
                  <span className="text-white ">
                    Xây dựng nhà in Dương Phong với quy mô nhỏ 700m2 chuyên in ấn phẩm quảng cáo, lịch, sách
                  </span>
                </p>
                <p className="text-[18px]">
                  <span className="font-avo_bold">2012:</span>
                  <span className="text-white"> Nâng cấp nhà in Dương Phong lên quy mô 6.000m2, bổ sung thêm các máy móc phục vụ ngành sản xuất bao bì giấy, thùng hộp carton</span>
                </p>
                <p className="text-[18px]">
                  <span className="font-avo_bold">2012-2024:</span>
                  <span className="text-white "> Liên tục nâng cấp nhà in, xưởng sản xuất thiết bị quảng cáo, trang bị máy móc hiện đại, hoàn thiện quy trình sản xuất đảm bảo tự động hoá chiếm 70% các công đoạn.</span>
                </p>
              </div>
              <div className=" lg:col-start-2 col-span-6 lg:col-span-4  xl:col-span-3">
                <Image alt="" src={bannerIntro} style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div className={`${styles.bg_category} py-[4rem]`}>
        <Container >
          <ProductComponent />
          <CategoryComponent />
        </Container>
      </div>

      {/* coperator */}
      <CoperatorComponent />
      {/* footer */}
      <FooterComponent />
    </Screen>
  );
}
