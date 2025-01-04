"use client";
import Image from "next/image";
import pic0 from "../../public/Images/pic0.svg";
import pic1 from "../../public/Images/pic1.svg";
import pic2 from "../../public/Images/pic2.svg";
import pic4 from "../../public/Images/pic4.svg";
import pic5 from "../../public/Images/pic5.svg";
import pic6 from "../../public/Images/pic6.svg";
import wave from "../../public/Images/wave.svg";
import wave2 from "../../public/Images/wave2.svg";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FreeMode , Pagination } from "swiper/modules";
export default function Carousel() {
  return (
    <>
      <div className="relative  ">
        <div className=" ">
          <Image
            src={wave}
            className="w-full absolute -top-3 md:-top-6 -z-40"
            alt="wave"
          />
          <Image
            src={wave}
            className="w-full absolute -top-5 md:-top-10 -z-40"
            alt="wave"
          />
          <Image src={wave2} className="w-full absolute -z-40" alt="wave" />
          
        </div>
        
        
        <div className="py-20">
          <div className="flex flex-col justify-center items-center gap-2">
            <h5 className="uppercase underline  text-lightgreen font-medium text-2xl">
              ScreenShots
            </h5>
            <h1 className="capitalize font-bold text-5xl">app Screenshots</h1>
          </div>
        </div>
        <Swiper
        breakpoints={{
          340:{
            slidesPerView:2,
            spaceBetween:15
          },
          700:{
            slidesPerView:2,
            spaceBetween:15
          },
        }}
        freeMode={true}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-[80%]"
          loop={true}
          modules={{  Pagination,FreeMode }}
        >
          
          <SwiperSlide>
            <Image src={pic1} className="" alt="pic1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={pic2} className="" alt="pic1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={pic4} className="" alt="pic1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={pic5} className="" alt="pic1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={pic6} className="" alt="pic1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
