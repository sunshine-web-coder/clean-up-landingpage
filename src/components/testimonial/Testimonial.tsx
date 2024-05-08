"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "./data";
import { SwiperButtonNext, SwiperButtonPrev } from "./SwiperNavigation";

export default function Testimonial() {

  return (
    <div className="inner_section flex flex-col gap-10 sm:gap-16">
      <div className="mx-auto max-w-[872px] flex-col justify-start items-center gap-4">
        <h3 className="text-black text-[25px] sm:text-[40px] font-bold text-center">
          What our Customers are Saying
        </h3>
      </div>
      <div className="">
        <Swiper
          slidesPerView={1}
          style={{ width: "100%" }}
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="w-full min-h-[408px] px-2 py-16 bg-slate-50 rounded-xl flex-col justify-center items-center gap-2 flex">
                <div className="flex-col justify-center items-center gap-6 flex">
                  <div className="flex-col justify-start items-center gap-4 flex">
                    <Image
                      src={item.avatar}
                      width={500}
                      height={500}
                      className="w-[75px] sm:w-[100px] h-[75px] sm:h-[100px] rounded-full"
                      alt="testimonial-avatar"
                    />
                    <span className="text-center text-black text-opacity-90 text-lg sm:text-xl font-normal">
                      {item.name}
                    </span>
                  </div>
                  <p className="max-w-[864px] text-center text-black text-xl sm:text-2xl font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="justify-start items-start gap-4 flex"></div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex items-end justify-end gap-4 pr-4 relative top-[-30px] z-[9999]">
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
