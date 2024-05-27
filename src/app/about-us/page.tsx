"use client";
import React from "react";
import Container from "@srccommons/Container";
import Image from "next/image";
import styles from "@assets/scss/home.module.scss";
import icon30 from "@assets/images/30-01-yellow.svg";
import icon302 from "@assets/images/30-01-yellow-en.svg";

import "@assets/scss/home.scss";
import BannerSingle from "@srccommons/BannerSingle";
import service1 from "@assets/images/about1.jpg";
import service2 from "@assets/images/about2.jpg";
import service3 from "@assets/images/about3.png";
import myTeam from "@assets/images/about4.png";
import FooterComponent from "@srccomponents/home/FooterComponent";
import Screen from "@srccommons/Screen";
import Translations from "@srccommons/Translations";
import "../../../i18n";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <Screen _className="product-page relative">
      <BannerSingle classImage={"bg-banner-about"} />
      <section className="bg-[#6D6E70] pt-10">
        <Container>
          <div className="xl:flex items-center justify-between">
            <h1 className="border-l-4 pl-5 border-white text-white text-[32px] mb-7 xl:mb-0 md:text-[40px] mt-10 uppercase text-shadown">
              <Translations text="Hành trình của chúng tôi" />
            </h1>
            <div className="hidden md:flex items-center flex-wrap gap-6">
              <div className="w-[150px] lg:w-[210px]">
                <Image
                  alt=""
                  className="w-full"
                  src={lang === "en" ? icon302 : icon30}
                />
              </div>
              <div className="w-full md:mt-0 md:w-auto">
                <h1 className="text-[23px] font-avo_bold text-white">
                  <Translations text="THÀNH LẬP CÔNG TY" />
                </h1>
                <h1 className="text-[23px] font-avo_bold leading-7 text-white ">
                  1998 - 2028
                </h1>
              </div>
            </div>
            <div className="md:hidden justify-center flex  flex-wrap gap-6">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[150px] lg:w-[210px]">
                  <Image
                    alt=""
                    className="w-full"
                    src={lang === "en" ? icon302 : icon30}
                  />
                </div>
                <h1 className="text-[24px] font-avo_bold text-white">
                  <Translations text="THÀNH LẬP CÔNG TY" />
                </h1>
                <h1 className="text-[24px] font-avo_bold leading-7 text-white  ">
                  1998 - 2028
                </h1>
              </div>
            </div>
          </div>
          <div className="py-10 lg:pl-6">
            <p className="text-[18px] text-white mb-3">
              <span className="font-avo_bold">4-1998: </span>
              <span className="text-white ">
                <Translations text="30year-line1" />
              </span>
            </p>
            <p className="text-[18px] text-white mb-3">
              <span className="font-avo_bold">4-2005:</span>
              <br />
              <span className="text-white ">
                <Translations text="30year-line2.1" />
              </span>
              <br />
              <span className="text-white ">
                <Translations text="30year-line2.2" />
              </span>
            </p>
            <p className="text-[18px] text-white mb-3">
              <span className="font-avo_bold">2008: </span>
              <span className="text-white ">
                <Translations text="30year-line3" />
              </span>
            </p>
            <p className="text-[18px] text-white mb-3">
              <span className="font-avo_bold">2012: </span>
              <span className="text-white">
                <Translations text="30year-line4" />
              </span>
            </p>
            <p className="text-[18px] text-white mb-3">
              <span className="font-avo_bold">2012-2024: </span>
              <span className="text-white ">
                <Translations text="30year-line5" />
              </span>
            </p>
            <p className="text-[18px]">
              <span className="font-avo_bold font-medium text-white">
                <Translations text="2024-2028" />:{" "}
              </span>
              <span className="text-white ">
                <Translations text="30year-line6" />
              </span>
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid grid-cols-3 gap-3 py-20">
            <div className="col-span-3 md:col-span-1  ">
              <div className={`${styles.image_hover} aspect-[6/5]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service1}
                />
              </div>
            </div>
            <div className="col-span-3 md:col-span-1  ">
              <div className={`${styles.image_hover} aspect-[6/5]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service2}
                />
              </div>
            </div>
            <div className="col-span-3 md:col-span-1  ">
              <div className={`${styles.image_hover} aspect-[6/5]`}>
                <Image
                  alt=""
                  className="w-full h-full object-cover"
                  src={service3}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="bg-header1 py-6 ">
          <h1 className="text-[33px] text-shadown text-white md:text-[40px] text-center font-avo_bold uppercase">
            <Translations text="Tầm nhìn" />
          </h1>
        </div>
        <Container className="py-5">
          <h1 className="text-[26px] sm:text-[31px] md:text-[36px] font-avo_bold text-[#145629] uppercase">
            <Translations text="HƯỚNG ĐẾN NĂM 2030 LÀ 1 CÔNG TY XANH ĐẠT CÁC TIÊU CHÍ" />
            :{" "}
          </h1>
          <div className="sm:hidden mb-5 mt-3">
            <p className="text-[#145629] font-avo_bold  text-xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">
              <Translations text="SẢN XUẤT BỀN VỮNG" />
            </p>
            <p className="text-[#145629] font-avo_bold  text-xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">
              <Translations text="THÂN THIỆN MÔI TRƯỜNG" />
            </p>
            <p className="text-[#145629] font-avo_bold  text-xl mb-1 md:mb-0 md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer">
              <Translations text="TIẾT KIỆM NĂNG LƯỢNG" />
            </p>
          </div>
          <div className="items-center pb-8 hidden sm:flex mt-3">
            <div>
              <p className="text-[#145629] font-avo_bold text-center text-lg md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer uppercase">
                {" "}
                <Translations text="Sản xuất" /> <br className="sm:hidden" />{" "}
                <Translations text="Bền vững" />{" "}
              </p>
            </div>
            <div
              className={`h-[35px] w-[3px] bg-[#145629] hidden md:block mx-[40px]`}
            ></div>
            <div>
              <p className="text-[#145629] font-avo_bold text-center text-lg md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer uppercase">
                {" "}
                <Translations text="Thân thiện" /> <br className="sm:hidden" />{" "}
                <Translations text="Môi trường" />
              </p>
            </div>
            <div
              className={`h-[35px] w-[3px] bg-[#145629] hidden md:block mx-[40px]`}
            ></div>
            <div>
              <p className="text-[#145629] font-avo_bold text-center text-lg md:text-xl lg:text-2xl 2xl:text-[28px] cursor-pointer uppercase  ">
                {" "}
                <Translations text="Tiết kiệm" />
                <br className="sm:hidden" /> <Translations text="Năng lượng" />
              </p>
            </div>
          </div>
          <div>
            <p className="mb-3">
              <span>
                <Translations text="text-about1" />{" "}
              </span>{" "}
              <br />
              <span>
                <Translations text="text-about2" />
              </span>
            </p>
            <p className="mb-3">
              <span>
                <Translations text="text-about3" />
              </span>
            </p>
            <p className="mb-3">
              <span>
                <Translations text="text-about4" />
              </span>
            </p>
            <p>
              <span>
                <Translations text="text-about5" />
              </span>
            </p>
          </div>
        </Container>
      </section>
      <section className="mb-20">
        <div className="bg-header1 py-6 ">
          <h1 className="text-white text-[31px] md:text-[40px] text-center font-avo_bold text-shadown uppercase">
            <Translations text="Đội ngũ của" /> <br className="sm:hidden" />{" "}
            <Translations text="Chúng tôi" />
          </h1>
        </div>
        <Container>
          <div className=" ">
            <Image alt="" className="w-full h-full" src={myTeam} />
          </div>
        </Container>
      </section>
      <FooterComponent />
    </Screen>
  );
};

export default AboutUs;
