import React from "react";

export default function WhyChooseCleanUp() {
  const content = [
    {
      svg: (
        <svg
          width="28"
          height="34"
          viewBox="0 0 28 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8327 0.766614L2.83268 4.51661C1.53268 5.01661 0.666016 6.24995 0.666016 7.64995V15.4999C0.666016 23.9166 6.34935 31.7666 13.9993 33.6833C21.6493 31.7666 27.3327 23.9166 27.3327 15.4999V7.64995C27.3315 6.97171 27.1234 6.30998 26.7363 5.75309C26.3492 5.1962 25.8014 4.77066 25.166 4.53328L15.166 0.78328C14.416 0.48328 13.5827 0.48328 12.8327 0.766614ZM11.0493 21.7166L7.51601 18.1833C7.36171 18.029 7.23931 17.8458 7.1558 17.6442C7.0723 17.4426 7.02931 17.2265 7.02931 17.0083C7.02931 16.7901 7.0723 16.574 7.1558 16.3724C7.23931 16.1708 7.36171 15.9876 7.51601 15.8333C7.67032 15.679 7.8535 15.5566 8.05511 15.4731C8.25672 15.3896 8.4728 15.3466 8.69101 15.3466C8.90923 15.3466 9.12531 15.3896 9.32692 15.4731C9.52853 15.5566 9.71171 15.679 9.86602 15.8333L12.216 18.1833L18.116 12.2833C18.2703 12.129 18.4535 12.0066 18.6551 11.9231C18.8567 11.8396 19.0728 11.7966 19.291 11.7966C19.5092 11.7966 19.7253 11.8396 19.9269 11.9231C20.1285 12.0066 20.3117 12.129 20.466 12.2833C20.6203 12.4376 20.7427 12.6208 20.8262 12.8224C20.9097 13.024 20.9527 13.2401 20.9527 13.4583C20.9527 13.6765 20.9097 13.8926 20.8262 14.0942C20.7427 14.2958 20.6203 14.479 20.466 14.6333L13.3993 21.6999C12.766 22.3666 11.6993 22.3666 11.0493 21.7166Z"
            fill="#01A4FF"
          />
        </svg>
      ),
      title: "Professional Excellence",
      desc: "Our experienced team is committed to delivering top-notch cleaning services with meticulous attention to detail, ensuring your space is spotless every time.",
    },
    {
      svg: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.7117 27.7834L32.3617 39.02L20.0067 30.04L28.7117 27.7834ZM40 15.5167H24.725L20.0083 0.981689L15.275 15.52L0 15.5L12.37 24.495L7.63667 39.0184L20.0067 30.04L27.645 24.495L40 15.5167Z"
            fill="#01A4FF"
          />
        </svg>
      ),
      title: "Trusted Reliability",
      desc: "Count on us to be there when you need us. We prioritize punctuality and reliability, providing consistent and dependable cleaning solutions that you can rely on.",
    },
    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.9283 1.995L10.485 14.4383L10.4983 21.5167L17.5617 21.5033L30 9.06666V30.33C30 30.772 29.8244 31.1959 29.5118 31.5085C29.1993 31.8211 28.7754 31.9967 28.3333 31.9967H1.66667C1.22464 31.9967 0.800716 31.8211 0.488155 31.5085C0.175595 31.1959 0 30.772 0 30.33V3.66333C0 3.2213 0.175595 2.79738 0.488155 2.48482C0.800716 2.17226 1.22464 1.99666 1.66667 1.99666L22.9283 1.995ZM29.1417 0.494995L31.5 2.85166L16.1783 18.1733L13.825 18.1767L13.8217 15.8167L29.1417 0.494995Z"
            fill="#01A4FF"
          />
        </svg>
      ),
      title: "Personalized Approach",
      desc: "We understand that every space is unique, with us, you'll receive customized cleaning solutions that exceed your expectations. ",
    },
  ];
  return (
    <div className="inner_section">
        <h3 className="text-black text-[30px] sm:text-[40px] text-center font-bold mb-12">
          Why Choose Clean Up
        </h3>
        <div className="flex flex-wrap gap-y-10 md:gap-y-[27px] gap-x-5 items-center justify-between">
          {content.map((item, i) => {
            return (
              <div key={i} className="flex flex-col text-center sm:text-left items-center sm:items-start justify-center sm:justify-start gap-4 sm:w-[331px] w-full">
                <div className="flex items-center gap-2">
                  {item.svg}
                  <span className="text-black text-2xl font-medium">
                    {item.title}
                  </span>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
