"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { trustyLogo } from "./data";

export default function SwiperTrusty() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        1024: {
          slidesPerView: 6,
        },
        767: {
          slidesPerView: 5,
        },
        640: {
          slidesPerView: 4,
        },
      }}
    >
      {trustyLogo.map((item, index) => (
        <SwiperSlide key={index} className="w-full">
          <div className="w-full flex items-center justify-center h-[50px]">
            {item.logo}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
