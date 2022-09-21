import React from "react";

const Line = ({ style }) => (
  <svg
    style={style || {}}
    width="98"
    height="58"
    viewBox="0 0 98 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M55.4293 -4.4726L44.0984 -10.6293L43.5445 -9.61001L30.1667 53.0903L44.0907 60.6559L55.4293 -4.4726Z"
      fill="url(#paint0_linear_31_48)"
    />
    <g filter="url(#filter0_f_31_48)">
      <ellipse
        rx="29.7733"
        ry="4.25333"
        transform="matrix(-0.145175 0.989406 -0.985244 -0.171154 48.8276 27.5335)"
        fill="#4AF5C5"
        fillOpacity="0.5"
      />
    </g>
    <path
      d="M57.0406 -8.31982L42.233 70.766"
      stroke="url(#paint1_linear_31_48)"
      strokeWidth="1.21059"
    />
    <defs>
      <filter
        id="filter0_f_31_48"
        x="0.436653"
        y="-44.3043"
        width="96.782"
        height="143.676"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="21.1854"
          result="effect1_foregroundBlur_31_48"
        />
      </filter>
      <linearGradient
        id="paint0_linear_31_48"
        x1="51.325"
        y1="25.8615"
        x2="38.1626"
        y2="23.59"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_31_48"
        x1="67.9127"
        y1="-2.41247"
        x2="31.3609"
        y2="64.8586"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0109952" stopColor="#00FFB7" stopOpacity="0" />
        <stop offset="0.323495" stopColor="#47FFF4" stopOpacity="0.722892" />
        <stop offset="0.443287" stopColor="white" />
        <stop offset="0.609954" stopColor="#00B2FF" stopOpacity="0.55" />
        <stop offset="1" stopColor="#00FFB7" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default Line;
