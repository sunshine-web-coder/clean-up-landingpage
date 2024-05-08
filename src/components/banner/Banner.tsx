
import React from "react";
import Header from "../header/Header";
import Link from "next/link";
import Image from "next/image";
import SwiperTrusty from "./SwiperTrusty";

export default function Banner() {
  return (
    <div className="banner relative min-h-[947px] pt-[100px]">
      <Header />
      <svg
        className="hidden sm:block absolute top-0 left-[-90px]"
        width="730"
        height="730"
        viewBox="0 0 730 730"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H730L390.403 351.63L0 730V0Z"
          fill="#D9E5FF"
          fillOpacity="0.25"
        />
      </svg>
      <svg
        className="hidden sm:block absolute bottom-0 right-0"
        width="519"
        height="443"
        viewBox="0 0 519 443"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M555 555H0L258.187 287.665L555 0V555Z"
          fill="#D9E5FF"
          fillOpacity="0.25"
        />
      </svg>
      <div className="section relative pt-[50px] md:pt-[100px] pb-[50px] sm:pb-[100px] md:pb-[200px]">
        <div className="inner_section flex flex-col md:flex-row gap-[21px] justify-between items-center">
          <div className="w-full md:w-[647px] min-h-[353.76px] flex flex-col justify-between">
            <h2 className="w-full md:w-[647px] text-center md:text-left text-black text-[35px] md:text-5xl leading-[50px] md:leading-[60px] font-bold">
              We Wash, and do the Cleaning, Saving you Time and Effort
            </h2>
            <p className="w-full md:w-[647px] text-black text-center md:text-left mt-4 text-lg sm:text-xl font-normal capitalize">
              Effortless Cleaning Solutions Tailored to Your Needs. Let Us
              Handle the Dirty Work While You Enjoy your Work and Life's
              Moments.
            </p>
            <div className="flex items-center md:items-start justify-center md:justify-start">
              <Link
                href=""
                className="px-12 py-6 w-[300px] mt-6 bg-sky-500 rounded-xl justify-center items-center flex text-center text-white text-base font-semibold"
              >
                Get Your Free Quote Now!
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[644px] min-h-[250px] sm:min-h-[353.76px]">
            <Image
              src="https://i.imgur.com/Yh0z8ne.png"
              width={5000}
              height={5000}
              className="w-full h-full"
              alt="banner_img"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="inner_section">
          <div className="text-black text-center text-base font-bold mb-8">
            Trusted by productive organisations
          </div>
          <div className="">
            <SwiperTrusty />
          </div>
        </div>
      </div>
    </div>
  );
}
