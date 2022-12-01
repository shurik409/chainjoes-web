import React from "react";
const Tiktok = ({ color }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4229 5.6606C14.3243 5.61173 14.2282 5.55815 14.1352 5.50008C13.8647 5.32881 13.6168 5.12703 13.3967 4.89907C12.8452 4.29495 12.6393 3.68212 12.564 3.25345H12.5666C12.5036 2.89695 12.5296 2.66675 12.5341 2.66675H10.0237V11.9637C10.0237 12.0882 10.0237 12.212 10.0185 12.3339C10.0185 12.3489 10.0166 12.3625 10.0159 12.3793C10.0159 12.3856 10.0159 12.393 10.014 12.3999V12.4055C9.98763 12.739 9.87611 13.0611 9.68923 13.3437C9.50235 13.6262 9.24585 13.8603 8.9423 14.0256C8.62561 14.1982 8.26742 14.2887 7.90308 14.2881C6.73395 14.2881 5.78566 13.3748 5.78566 12.2468C5.78566 11.1182 6.73395 10.2049 7.90308 10.2049C8.12456 10.2049 8.34475 10.2385 8.55519 10.3044L8.55844 7.85559C7.91932 7.77661 7.27006 7.8254 6.65162 7.99888C6.03318 8.17235 5.459 8.46676 4.96532 8.8635C4.53265 9.22345 4.16888 9.65296 3.89038 10.1327C3.78451 10.3075 3.38441 11.0112 3.33634 12.1523C3.30582 12.7993 3.50911 13.4712 3.60589 13.7481V13.7543C3.6663 13.9173 3.90272 14.4748 4.28723 14.9445C4.59731 15.3216 4.96367 15.6528 5.37452 15.9275V15.9213L5.38036 15.9275C6.59495 16.7177 7.9427 16.6661 7.9427 16.6661C8.17587 16.6567 8.95724 16.6661 9.84447 16.2635C10.8285 15.8168 11.3884 15.1517 11.3884 15.1517C11.7463 14.7542 12.031 14.3012 12.2301 13.8122C12.4575 13.2398 12.5328 12.5542 12.5328 12.2804V7.34729C12.5633 7.36471 12.9693 7.62166 12.9693 7.62166C12.9693 7.62166 13.5538 7.98065 14.4651 8.21396C15.1185 8.38008 15.9999 8.41554 15.9999 8.41554V6.0283C15.6914 6.06065 15.0646 5.96733 14.4222 5.66122L14.4229 5.6606Z"
      fill={color || "white"}
    />
  </svg>
);

export default Tiktok;
