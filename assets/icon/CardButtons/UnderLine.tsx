import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={306}
    height={25}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        stroke="#5FCFF6"
        strokeLinecap="round"
        strokeWidth={4}
        d="M8 12c59.28-9.552 216.677-9.112 288 0"
      />
    </G>
    <Defs></Defs>
  </Svg>
)

export default SvgComponent
