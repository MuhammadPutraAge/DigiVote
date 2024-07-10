import Colors from "@/constants/Colors";
import { Circle, DashPathEffect, Shadow } from "@shopify/react-native-skia";
import { useMemo } from "react";
import Canvas from "./Canvas";

interface Props {
  size: number;
  value: number;
}

export default function CircleChart({ size, value }: Props) {
  const strokeWidth = useMemo(() => size / 4, []);
  const r = useMemo(() => size / 2 - strokeWidth / 2, [size, strokeWidth]);
  const circleLength = useMemo(() => 2 * Math.PI * r, [r]);

  return (
    <Canvas
      style={{
        width: size,
        height: size,
        transform: [{ rotate: "-90deg" }],
      }}
    >
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        color={Colors.lightGrey}
        style="stroke"
        strokeWidth={strokeWidth}
      />

      <Circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        color={Colors.primary}
        style="stroke"
        strokeWidth={strokeWidth}
        strokeCap="round"
        strokeJoin="round"
      >
        <DashPathEffect
          intervals={[circleLength, circleLength]}
          phase={circleLength * (1 - value / 100)}
        />
        <Shadow dx={-2} dy={-2} blur={2} color={Colors.lightRed} inner />
        <Shadow dx={2} dy={2} blur={2} color={Colors.darkRed} inner />
      </Circle>
    </Canvas>
  );
}
