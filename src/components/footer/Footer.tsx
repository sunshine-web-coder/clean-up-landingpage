import React from "react";
import Link from "next/link";
import { footerLink } from "./data";

interface FooterLink {
  title: string;
  children: {
    label: string;
    icon?: JSX.Element; // Define icon as optional
    slug: string;
  }[];
}

export default function Footer() {
  return (
    <footer className="py-[50px]">
      <div className="inner_section flex flex-wrap justify-between gap-20">
        <div className="w-full sm:w-[380px]">
          <svg
            width="139"
            height="29"
            viewBox="0 0 139 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9.66667" cy="9.66667" r="9.66667" fill="#010101" />
            <circle cx="21.7487" cy="16.9167" r="2.41667" fill="#010101" />
            <circle cx="14.5013" cy="24.1666" r="4.83333" fill="#010101" />
            <path
              d="M48.9247 18.648C47.4367 20.376 45.1807 21.456 42.3247 21.456C37.0927 21.456 33.1807 17.808 33.1807 12.48C33.1807 7.032 37.2127 3.552 42.3967 3.552C44.7727 3.552 47.3407 4.416 48.7567 6.048L45.9727 8.832C45.2047 7.776 43.8367 7.272 42.5407 7.272C39.6847 7.272 37.6447 9.48 37.6447 12.48C37.6447 15.576 39.6367 17.688 42.4687 17.688C44.0767 17.688 45.3487 16.968 46.0687 15.96L48.9247 18.648ZM54.4996 21H50.5156V2.856H54.4996V21ZM60.7841 13.656H65.8481C65.8481 12.408 65.0561 11.376 63.4961 11.376C61.9841 11.376 60.8801 12.432 60.7841 13.656ZM69.4721 15.168C69.4721 15.48 69.4721 15.816 69.4481 16.104H60.7841C60.9041 17.424 62.2241 18.36 63.6401 18.36C64.8881 18.36 65.7521 17.832 66.2801 17.112L69.0161 18.84C67.8881 20.472 66.0161 21.384 63.5921 21.384C59.9921 21.384 57.0161 19.104 57.0161 15.072C57.0161 11.16 59.8481 8.664 63.4721 8.664C67.0001 8.664 69.4721 11.088 69.4721 15.168ZM78.8283 16.2V15.792H78.3243C76.5963 15.792 74.6523 16.008 74.6523 17.424C74.6523 18.336 75.5643 18.648 76.3563 18.648C77.9403 18.648 78.8283 17.688 78.8283 16.2ZM73.5963 12.816L71.6043 10.68C72.9963 9.36 74.9883 8.664 76.9323 8.664C80.9403 8.664 82.4283 10.632 82.4283 14.976V21H78.8283V19.728H78.7563C78.1563 20.712 76.7883 21.288 75.3723 21.288C73.4763 21.288 71.0283 20.352 71.0283 17.544C71.0283 14.088 75.2283 13.512 78.7083 13.512V13.32C78.7083 12.144 77.7723 11.592 76.5483 11.592C75.4203 11.592 74.3163 12.144 73.5963 12.816ZM97.1741 21H93.2141V14.472C93.2141 13.152 92.8541 11.952 91.4381 11.952C90.0461 11.952 89.3261 13.152 89.3261 14.52V21H85.3661V9.048H89.1821V10.704H89.2301C89.7821 9.648 91.1501 8.712 92.8061 8.712C96.0221 8.712 97.1741 11.208 97.1741 13.608V21ZM120.771 14.592C120.771 18.672 117.891 21.456 113.451 21.456C108.987 21.456 106.203 18.672 106.203 14.592V4.008H110.283V14.256C110.283 16.08 111.171 17.76 113.475 17.76C115.803 17.76 116.667 16.08 116.667 14.256V4.008H120.771V14.592ZM137.17 14.976C137.17 18.312 135.082 21.336 131.482 21.336C130.018 21.336 128.602 20.712 127.858 19.68H127.81V26.76H123.874V9.048H127.618V10.512H127.69C128.41 9.552 129.754 8.712 131.506 8.712C134.986 8.712 137.17 11.64 137.17 14.976ZM133.354 14.976C133.354 13.44 132.418 11.928 130.546 11.928C128.77 11.928 127.666 13.488 127.666 15C127.666 16.56 128.77 18.072 130.546 18.072C132.418 18.072 133.354 16.536 133.354 14.976Z"
              fill="#010101"
            />
          </svg>
          <p className="max-w-[321px] mt-6 text-black text-opacity-90 text-base font-normal">
            Join our newsletter to stay up to date on our pricing and news
          </p>
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Email address"
              className="p-4  w-full sm:w-[238px] bg-white rounded-md border border-gray-300"
            />
            <button className="w-[120px] sm:w-[134.01px] text-[#F7F7F7] self-stretch px-[30px] py-[15px] bg-sky-500 rounded-[10px] border justify-center items-center gap-2.5 flex">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[457px] flex items-start sm:items-end justify-start sm:justify-end">
          <div className="max-w-max flex gap-[57px]">
            {footerLink.map((item: FooterLink, index: number) => (
              <div key={index} className="flex w-full sm:w-[200px] flex-col gap-6">
                <h3 className={`text-xl text-[#111111]`}>{item.title}</h3>
                <ul className="flex flex-col gap-4">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        href={child.slug}
                        className={`text-base font-medium self-stretch flex items-center gap-2 leading-normal text-[#111111]`}
                      >
                        {child.icon && <span>{child.icon}</span>}
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
