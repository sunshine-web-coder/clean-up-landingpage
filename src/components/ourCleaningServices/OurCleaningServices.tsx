import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ourCleaningServicesData } from "./data";

export default function OurCleaningServices() {
  return (
    <div className="inner_section">
      <div className="mx-auto max-w-[872px] flex-col justify-start items-center gap-4">
        <h3 className="text-black text-[25px] sm:text-[40px] font-bold text-center">
          Our Cleaning Services
        </h3>
        <p className="w-full text-center text-black text-opacity-90 mt-4 text-lg sm:text-xl font-normal">
          At Clean Up, our cleaning services go beyond the basic services and
          provide you with a comprehensive clean that will reenergize your home
          and enhance your life.
        </p>
      </div>
      {/* <div className="grid grid-cols-3 gap-y-[27px] gap-x-5 my-[64px]"> */}
      <div className="flex flex-wrap gap-y-10 md:gap-y-[27px] gap-x-5 my-[64px]">
        {ourCleaningServicesData.map((item, i) => {
          return (
            <div
              key={i}
              className="w-[395px] flex-auto min-h-[400px] flex flex-col justify-between overflow-hidden relative bg-slate-50 rounded-xl"
            >
              <Image
                src={item.img}
                width={5000}
                height={5000}
                className="w-full h-[339px] rounded-bl-2xl rounded-br-2xl"
                alt={item.title}
              />
              <div className="flex relative top-[-12px] pl-[12px] items-center w-full text-black text-xl sm:text-2xl font-semibold">
                <span>{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        href=""
        className="mx-auto max-w-[250px] h-[67px] px-12 py-6 bg-sky-500 rounded-xl justify-center items-center gap-2 flex"
      >
        <span className="text-center text-white text-base font-semibold">
          See More Services
        </span>
      </Link>
    </div>
  );
}
