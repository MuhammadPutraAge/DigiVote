import { RoundedRect, Shadow } from "@shopify/react-native-skia";
import Canvas from "./Canvas";
import Colors from "@/constants/Colors";
import { View } from "react-native";
import { useState } from "react";

interface Props {
  width: number;
  value: number;
  radius: number;
}

export default function BarChart({ width, value, radius }: Props) {
  const [viewHeight, setViewHeight] = useState(0);

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "flex-end",
      }}
      onLayout={(e) => setViewHeight(e.nativeEvent.layout.height)}
    >
      <Canvas style={{ width, height: viewHeight * (value / 100) }}>
        <RoundedRect
          x={0}
          y={0}
          width={width}
          height={viewHeight * (value / 100)}
          r={radius}
          color={Colors.primary}
        >
          <Shadow dx={-4} dy={-4} blur={4} color={Colors.lightRed} inner />
          <Shadow dx={4} dy={4} blur={4} color={Colors.darkRed} inner />
        </RoundedRect>
      </Canvas>
    </View>
  );
}
