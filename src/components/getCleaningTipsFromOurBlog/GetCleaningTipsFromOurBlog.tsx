import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getCleaningTipsFromOurBlogData } from "./data";

export default function GetCleaningTipsFromOurBlog() {
  return (
    <div className="inner_section">
      <div className="mx-auto max-w-[872px] flex-col justify-start items-center gap-4">
        <h3 className="text-black text-[25px] sm:text-[40px] font-bold text-center">
          Get Cleaning Tips From Our Blog
        </h3>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-y-10 md:gap-y-[27px] gap-x-5">
        {getCleaningTipsFromOurBlogData.map((item, i) => {
          return (
            <div
              key={i}
              className="w-[395px] flex-auto flex flex-col overflow-hidden relative bg-slate-50 rounded-xl"
            >
              <Image
                src={item.img}
                width={5000}
                height={5000}
                className="w-full h-[300px] sm:h-[339px] rounded-bl-2xl rounded-br-2xl"
                alt={item.title}
              />
              <div className="flex py-7 flex-col gap-4 pl-[12px] relative w-full text-black text-xl sm:text-2xl font-semibold">
                <span>{item.title}</span>
                <Link href={item.slug} className="flex items-center gap-2">
                  <span className="text-black text-base font-medium">
                    {item.label}
                  </span>
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9199 1.59754C11.8185 1.35319 11.6243 1.15901 11.3799 1.05754C11.2597 1.0063 11.1306 0.979119 10.9999 0.977539H0.999939C0.734722 0.977539 0.480369 1.0829 0.292832 1.27043C0.105296 1.45797 -6.10352e-05 1.71232 -6.10352e-05 1.97754C-6.10352e-05 2.24276 0.105296 2.49711 0.292832 2.68465C0.480369 2.87218 0.734722 2.97754 0.999939 2.97754H8.58994L0.289939 11.2675C0.196211 11.3605 0.121816 11.4711 0.0710478 11.593C0.0202791 11.7148 -0.00585938 11.8455 -0.00585938 11.9775C-0.00585938 12.1096 0.0202791 12.2403 0.0710478 12.3621C0.121816 12.484 0.196211 12.5946 0.289939 12.6875C0.382902 12.7813 0.493503 12.8557 0.615362 12.9064C0.737221 12.9572 0.867927 12.9833 0.999939 12.9833C1.13195 12.9833 1.26266 12.9572 1.38452 12.9064C1.50638 12.8557 1.61698 12.7813 1.70994 12.6875L9.99994 4.38754V11.9775C9.99994 12.2428 10.1053 12.4971 10.2928 12.6846C10.4804 12.8722 10.7347 12.9775 10.9999 12.9775C11.2652 12.9775 11.5195 12.8722 11.707 12.6846C11.8946 12.4971 11.9999 12.2428 11.9999 11.9775V1.97754C11.9984 1.84686 11.9712 1.71776 11.9199 1.59754Z"
                      fill="#101010"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
