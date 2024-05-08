import React from "react";
import { useSwiper } from "swiper/react";

export function SwiperButtonPrev() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()}>
      <svg
        width="52"
        height="14"
        className="rotate-[180deg]"
        viewBox="0 0 52 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 6.95508L50 6.95508M50 6.95508L44.5 12.9551M50 6.95508L44.5 0.955078"
          stroke="#010101"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

export function SwiperButtonNext() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>
      <svg
        width="52"
        height="14"
        viewBox="0 0 52 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 6.95508L50 6.95508M50 6.95508L44.5 12.9551M50 6.95508L44.5 0.955078"
          stroke="#010101"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
