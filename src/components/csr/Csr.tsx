import Link from "next/link";
import React from "react";

export default function Csr() {
  return (
    <div className="inner_section min-h-[383px] px-2 py-10 sm:py-20 bg-slate-50 rounded-xl flex-col justify-center items-center gap-2 flex">
      <div className="flex-col justify-start items-center gap-10 flex">
        <div className="max-w-[913px] text-center text-black text-[35px] sm:text-5xl leading-[45px] sm:leading-[60px] font-semibold">
          let us start cleaning your space for you, while you living and working
        </div>
        <Link href="" className="px-12 py-6 bg-sky-500 rounded-xl justify-center items-center gap-2 flex">
          <span className="text-center text-white text-base font-semibold">
            Get Your Free Quote Now!
          </span>
        </Link>
      </div>
    </div>
  );
}
