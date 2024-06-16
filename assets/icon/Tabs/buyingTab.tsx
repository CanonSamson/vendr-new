import * as React from "react";
import Svg, { SvgProps, Defs, Path, Circle } from "react-native-svg";

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
      d="M30 63h68L71 48l4 6-3-8 44 236 13 67c19-6-6-35 0-2l5 22c2 14 16 23 28 23h308c15 0 31-14 30-31-1-16-13-30-30-30H162c10 8-43-36-34 18 3 16 7 38 22 34 16-6 40-33 37-51L139 79l-6-36c-2-7-3-14-6-20l-3-6c-5-9-15-15-26-15H30C15 2-1 16 0 32c1 17 14 31 30 31Z"
      style={{
        strokeWidth: 0,
        fill: color || "#000", // Use the prop color if provided, otherwise default to black
      }}
    />
    <Circle cx={186.1} cy={437} r={40.5} className="b" 
    style={{
        fill: color || "#000",
      }}
    />
    <Path
      d="M186 487a50 50 0 1 1 0-100 50 50 0 0 1 0 100Zm0-81a31 31 0 1 0 0 62 31 31 0 0 0 0-62Z"
      className="b"
      style={{
        fill: color || "#000",
      }}
    />
    <Circle cx={412.4} cy={437} r={40.5} className="b" 
    style={{
        fill: color || "#000",
      }}/>
    <Path
      d="M412 487a50 50 0 1 1 0-100 50 50 0 0 1 0 100Zm0-81a31 31 0 1 0 0 62 31 31 0 0 0 0-62Zm72-127H206L173 91h366c16 0 28 13 28 30v5l-56 130c-6 12-14 23-27 23Zm-228-52h203l41-88H239l17 88Z"
      className="b"
      style={{
        fill: color || "#000",
      }}
    />
  </Svg>
);

export default SvgComponent;
