import * as React from "react"
import Svg, { SvgProps, Defs, Circle, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 567.33 487.09"
    width={24}
    height={24}
    {...props}
  >
    <Defs></Defs>
    <Path
      d="M292.89 316.1c6.23.86 12.36-1.24 18.43-3.15 11.2-3.52 21.5-9.13 30.62-16.68a91.576 91.576 0 0 0 22.2-27.04c5.82-10.76 9.41-22.45 10.67-34.73 1.25-12.29.1-24.46-3.43-36.17a91.477 91.477 0 0 0-16.28-30.96c-7.41-9.24-16.36-16.82-26.62-22.52-10.64-5.92-22.22-9.55-34.4-10.79-12.18-1.24-24.25-.02-35.87 3.63-11.2 3.52-21.5 9.13-30.62 16.68a91.576 91.576 0 0 0-22.2 27.04c-5.82 10.76-9.41 22.45-10.67 34.73-1.06 10.39-.39 20.76 2 30.82a91.731 91.731 0 0 0 11.46 27.47 91.324 91.324 0 0 0 29.7 29.48l20.57-26.04c-1.35-.48-2.87-6.92-5.39-8.81-11.23-8.4-30.01-30.15-20.18-60.46 8.64-26.66 31.7-39.98 55.93-37.81 29.16 2.61 51.29 24.12 50.21 58.76-.56 17.85-18.68 45.94-45.1 48.78-8.08.87-16.95 8.88-17.4 18.44-.51 10.6 9.69 18.39 16.38 19.32Z"
      style={{
        fill: "#06ff00",
        strokeWidth: 0,
        filter: "url(#c)",
      }}
    />
    <Path
      d="m240.78 283.7-67.43 85.94"
      style={{
        fill: "none",
        filter: "url(#d)",
        stroke: "#06ff00",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 38,
      }}
    />
  </Svg>
)

export default SvgComponent
