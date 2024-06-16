import * as React from "react"
import Svg, { SvgProps, Defs, Path, Circle } from "react-native-svg"

interface SvgComponentProps extends SvgProps {
    color?: string;
}

const SvgComponent = ({ color, ...props }: SvgComponentProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="a"
    viewBox="0 0 567.3 487.1"
    width={24}
    height={24}
    {...props}
  >
    <Defs></Defs>
    <Path
      d="M454 345H171L40 431c-20 13-45-7-39-30l42-118L10 96h525c15 0 27 19 30 36 2 6 1 12-2 17l-78 171c-3 15-16 25-31 25Zm-344-59h325l57-129H78l32 129Z"
      className="b"
      style={{
        fill: color || "#000",
      }}
    />
    <Circle cx={176.6} cy={216.6} r={35.6} className="b" 
     style={{
        fill: color || "#000",
      }}/>
    <Circle cx={276.5} cy={216.6} r={35.6} className="b" 
     style={{
        fill: color || "#000",
      }}/>
    <Circle cx={376.5} cy={216.6} r={35.6} className="b" 
     style={{
        fill: color || "#000",
      }}/>
  </Svg>
)
export default SvgComponent
