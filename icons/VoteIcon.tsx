import { Path, Svg, SvgProps } from "react-native-svg";

export default function VoteIcon({ width, height, color }: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m9 12 2 2 4-4" />
      <Path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <Path d="M22 19H2" />
    </Svg>
  );
}
