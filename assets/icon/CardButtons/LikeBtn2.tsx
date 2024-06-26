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
      d="M195.7 252.93c9.02 5.04 17.8 10.53 26.22 16.52 2 1.42 3.97 2.87 5.92 4.34 3.94 2.97-3.26-2.62-.17-.13.89.71 1.78 1.41 2.66 2.13 4.11 3.34 8.11 6.81 11.98 10.42 3.71 3.47 7.29 7.07 10.73 10.81 1.64 1.79 3.25 3.61 4.81 5.46.96 1.14 1.9 2.28 2.83 3.44.95 1.19 2.8 4.41-.52-.7 2.8 4.3 5.98 8.32 8.64 12.74 2.61 4.34 4.96 8.83 7.06 13.44 2.94 6.46 11.2 10.29 17.93 10.29s15.16-3.8 17.93-10.29c10.99-25.65 23.03-50.68 38.59-73.91 8.14-12.15 16.65-24.05 25.44-35.74 1.96-2.6 3.93-5.19 5.91-7.77 1.57-2.04-2.79 3.6-1.23 1.59.44-.57.88-1.14 1.32-1.7l2.91-3.72c3.38-4.3 6.81-8.57 10.26-12.81 19.07-23.4 38.64-46.13 61.2-66.3 4.95-4.43 10.01-8.73 15.19-12.89 1.35-1.09 2.7-2.21 4.1-3.23-.1.07-4.31 3.28-1.71 1.33.7-.52 1.39-1.06 2.09-1.58 2.66-1.99 5.36-3.94 8.1-5.84 10.96-7.6 21.21-14.45 34.78-19.65-1.65.7-3.31 1.4-4.96 2.09 2.1-.88 4.22-1.72 6.37-2.51 5.17-1.9 9.71-7.2 12.36-11.01 2.95-4.23 2.63-9.31 2.14-14.54-.84-9.03-8.15-24.27-28.25-15.52-25.22 10.98-45.63 25.73-66.81 43.04-16.51 13.49-31.9 28.4-46.19 44.21-7.66 8.47-14.84 17.37-22.13 26.15-16.92 20.4-33.17 41.41-48.36 63.13-9.61 13.75-18.72 27.79-26.6 42.62-7.53 14.17-14.08 28.84-20.4 43.58h35.87c-9.23-20.33-23.8-38.42-40.04-53.61-16.53-15.46-35.29-28.75-55.03-39.78-9.49-5.3-23.11-2.6-28.42 7.45-5.18 9.8-2.68 22.76 7.45 28.42Z"
      style={{
        fill: "#3ebfef",
        filter: "url(#c)",
        strokeWidth: 0,
      }}
    />
  </Svg>
)

export default SvgComponent
