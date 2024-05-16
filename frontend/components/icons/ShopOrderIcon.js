import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const ShopOrderIcon = () => (
  <Svg
    width="60px"
    height="40px"
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      x={5}
      y={4}
      width={14}
      height={17}
      rx={2}
      stroke="#33363F"
      strokeWidth={2}
    />
    <Path d="M9 9H15" stroke="#33363F" strokeWidth={2} strokeLinecap="round" />
    <Path d="M9 13H15" stroke="#33363F" strokeWidth={2} strokeLinecap="round" />
    <Path d="M9 17H13" stroke="#33363F" strokeWidth={2} strokeLinecap="round" />
  </Svg>
);
export default ShopOrderIcon;
