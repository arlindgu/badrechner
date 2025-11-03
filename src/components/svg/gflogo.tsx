import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 642 542"
    {...props}
  >
    <path
      d="M348.773 163.144H207.068v59.611h75.82v87.324c-23.007 13.072-53.335 19.347-86.801 19.347-76.343 0-127.064-58.564-127.064-137.522 0-73.729 50.721-132.294 127.064-132.294 37.126 0 73.206 13.073 96.736 36.08l48.63-49.152C302.758 12.027 252.037 0 195.564 0 81.572 0 0 77.389 0 196.087c0 115.561 81.572 192.95 195.564 192.95 56.996 0 108.24-12.55 153.209-36.603v-189.29Z"
      style={{
        fill: "url(#a)",
        fillRule: "nonzero",
      }}
    />
    <path
      d="M402.336 541.542s41.062-10.774 66.05-25.774c0-15.265-.164-146.17-.164-146.17h92.642v-59.61h-92.642v-87.074h173.079v-59.611H402.336v378.239Z"
      style={{
        fill: "url(#b)",
        fillRule: "nonzero",
      }}
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="translate(0 267.365) scale(621.688)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#45b4fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#581ad2",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="translate(19.613 266.15) scale(621.688)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#45b4fa",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#581ad2",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
);
export { SvgComponent as GFLogo };
