import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="fixed action-bar bottom-0 right-0 left-0 flex items-center justify-between px-4 py-2">
      <div className="flex items-center flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.999 23V13L13.999 4L4.99902 13V23H9.99902V14H17.999V23H22.999Z"
            fill="url(#paint0_linear_2025_9894)"
          />
          <path d="M25 25H3V26H25V25Z" fill="url(#paint1_linear_2025_9894)" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9986 0L0 14H1.40077L13.9986 1.39975L26.5992 14H28L13.9986 0Z"
            fill="url(#paint2_linear_2025_9894)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2025_9894"
              x1="13.999"
              y1="39.283"
              x2="13.999"
              y2="4.114"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2025_9894"
              x1="14"
              y1="26.857"
              x2="14"
              y2="25.006"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2025_9894"
              x1="14"
              y1="25.998"
              x2="14"
              y2="0.0840012"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-[#A5AED6] text-xs">Home</p>
      </div>
      <div className="flex items-center flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 12L4 25H23L26 12H1ZM10 23H7V15H10V23ZM15 23H12V15H15V23ZM20 23H17V15H20V23Z"
            fill="url(#paint0_linear_2025_15922)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 0H16L24 9H3L11 0H9L1 9V10H26V9L18 0Z"
            fill="url(#paint1_linear_2025_15922)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2025_15922"
              x1="13.5"
              y1="36.141"
              x2="13.5"
              y2="12.078"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2025_15922"
              x1="13.5"
              y1="18.57"
              x2="13.5"
              y2="0.0600009"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-[#A5AED6] text-xs">Store</p>
      </div>
      <div className="flex items-center flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 0L1 3.729C1 21.229 3.343 19.929 13.5 26C23.656 19.926 26 21.225 26 3.729L13.5 0ZM16.585 23.077C15.651 23.599 14.624 24.177 13.5 24.837C12.375 24.174 11.3491 23.5991 10.4141 23.076C3.56906 19.2451 2.05098 18.397 2.00098 4.47595L13.501 1.04602L25.001 4.47595C24.949 18.4 23.4319 19.246 16.5869 23.077H16.585Z"
            fill="url(#paint0_linear_2025_14202)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 3.13098L4.01123 5.96204C4.12523 17.262 5.14985 17.837 11.4229 21.347C12.0709 21.711 12.763 22.098 13.501 22.522C14.25 22.091 14.9518 21.6991 15.6108 21.3311C21.8528 17.8381 22.8748 17.264 22.9888 5.96204L13.5 3.13098ZM18.2739 13.975C18.0445 14.2063 17.7701 14.3884 17.4678 14.51C17.1655 14.6316 16.8418 14.6901 16.5161 14.682C15.9371 14.6871 15.3732 14.4964 14.916 14.141C14.669 13.958 14.251 13.8781 14.251 14.0031C14.245 17.0111 15.9611 16.947 16.9941 17.015L17.5708 18H9.42822L10.0142 17.0081C11.3992 17.0081 12.7748 17.008 12.7598 14C12.7598 13.78 12.4598 13.9691 12.1958 14.1541C11.6969 14.4995 11.1029 14.6806 10.4961 14.672C10.1722 14.6763 9.85082 14.6149 9.55127 14.4917C9.25172 14.3685 8.98004 14.1859 8.75293 13.955C8.51807 13.7319 8.33235 13.4626 8.20703 13.1639C8.08172 12.8653 8.01951 12.5438 8.0249 12.22C8.0249 10.829 10.1412 9.56298 10.7012 9.09998C11.6506 8.27192 12.4907 7.32635 13.2012 6.28601C13.3942 5.81001 13.7169 5.74502 13.9009 6.29102C14.6455 7.41411 15.5542 8.41959 16.5962 9.27405C17.6402 10.195 18.9761 11.154 18.9961 12.21C19.0091 12.5386 18.9515 12.8663 18.8271 13.1708C18.7028 13.4753 18.5143 13.7494 18.2749 13.975H18.2739Z"
            fill="url(#paint1_linear_2025_14202)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2025_14202"
              x1="13.5"
              y1="48.282"
              x2="13.5"
              y2="0.156002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2025_14202"
              x1="13.5"
              y1="39.1401"
              x2="13.5"
              y2="3.24733"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-[#A5AED6] text-xs">Clubs</p>
      </div>
      <div className="flex items-center flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 25V0H1V26H27V25H2Z"
            fill="url(#paint0_linear_2025_11296)"
          />
          <path
            d="M26.001 16H20.001V23H26.001V16Z"
            fill="url(#paint1_linear_2025_11296)"
          />
          <path
            d="M18.001 10H12.001V23H18.001V10Z"
            fill="url(#paint2_linear_2025_11296)"
          />
          <path
            d="M10.001 2H4.00098V23H10.001V2Z"
            fill="url(#paint3_linear_2025_11296)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2025_11296"
              x1="14"
              y1="48.282"
              x2="14"
              y2="0.156002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2025_11296"
              x1="23.001"
              y1="28.999"
              x2="23.001"
              y2="16.042"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2025_11296"
              x1="15.001"
              y1="34.141"
              x2="15.001"
              y2="10.078"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2025_11296"
              x1="7.00098"
              y1="40.997"
              x2="7.00098"
              y2="2.126"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-[#A5AED6] text-xs">Results</p>
      </div>
      <div className="flex items-center flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9648 12.83C19.201 13.8167 18.2214 14.6155 17.1011 15.165C15.9807 15.7146 14.7493 16.0002 13.5015 16.0002C12.2536 16.0002 11.0222 15.7146 9.90186 15.165C8.78149 14.6155 7.80198 13.8167 7.03809 12.83C5.20057 13.9408 3.68004 15.5059 2.62256 17.3746C1.56507 19.2434 1.00614 21.3528 1 23.5V26H26V23.5C25.9943 21.3531 25.4359 19.2438 24.3789 17.3751C23.322 15.5064 21.8019 13.9411 19.9648 12.83ZM25 25H2V23.5C1.9978 21.6638 2.43854 19.8543 3.28516 18.225C4.13177 16.5956 5.35903 15.1946 6.86279 14.141C7.71655 15.0439 8.74593 15.7631 9.88721 16.2546C11.0285 16.7462 12.2579 16.9998 13.5005 16.9998C14.7431 16.9998 15.9725 16.7462 17.1138 16.2546C18.255 15.7631 19.2844 15.0439 20.1382 14.141C21.6418 15.1947 22.8689 16.5958 23.7153 18.2251C24.5618 19.8544 25.0023 21.6639 25 23.5V25Z"
            fill="url(#paint0_linear_2025_11289)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.9771 23C22.8676 20.6422 21.8665 18.414 20.1768 16.766C18.2538 18.2158 15.9112 19 13.5029 19C11.0947 19 8.75206 18.2158 6.8291 16.766C5.13927 18.4139 4.13815 20.6422 4.02881 23H22.9771Z"
            fill="url(#paint1_linear_2025_11289)"
          />
          <path
            d="M13.501 13C16.5385 13 19.001 10.0899 19.001 6.5C19.001 2.91015 16.5385 0 13.501 0C10.4634 0 8.00098 2.91015 8.00098 6.5C8.00098 10.0899 10.4634 13 13.501 13Z"
            fill="url(#paint2_linear_2025_11289)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2025_11289"
              x1="13.5"
              y1="37.2867"
              x2="13.5"
              y2="12.909"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2025_11289"
              x1="13.5029"
              y1="28.3425"
              x2="13.5029"
              y2="16.8034"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2025_11289"
              x1="13.501"
              y1="24.141"
              x2="13.501"
              y2="0.0780012"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#61688F" />
              <stop offset="1" stopColor="#A5AED6" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-[#A5AED6] text-xs">Account</p>
      </div>
    </nav>
  );
}
