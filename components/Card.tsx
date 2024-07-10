import Colors from "@/constants/Colors";
import { RoundedRect, Shadow } from "@shopify/react-native-skia";
import { ReactNode, useMemo, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Canvas from "./Canvas";

interface Props {
  width: number;
  height?: number;
  borderRadius: number;
  children: ReactNode;
  style?: ViewStyle;
  containerStyle?: ViewStyle
}

export default function Card({
  width,
  height,
  borderRadius,
  children,
  style,
  containerStyle
}: Props) {
  const [viewHeight, setViewHeight] = useState<number>(0);

  const selectedHeight = useMemo(
    () => height ?? viewHeight,
    [height, viewHeight]
  );

  return (
    <View
      style={[
        styles.cardContainer,
        containerStyle,
        { width: width + 16, height: selectedHeight + 16 },
      ]}
    >
      <Canvas
        style={[
          styles.canvas,
          { width: width + 16, height: selectedHeight + 16 },
        ]}
      >
        <RoundedRect
          x={8}
          y={8}
          width={width}
          height={selectedHeight}
          r={borderRadius}
          color={Colors.white}
        >
          <Shadow dx={-2} dy={-2} blur={2} color={Colors.lightWhite} />
          <Shadow dx={2} dy={2} blur={2} color={Colors.darkWhite} />
        </RoundedRect>
      </Canvas>

      <View
        style={[styles.contentContainer, { borderRadius, width }]}
        onLayout={(e) => setViewHeight(e.nativeEvent.layout.height)}
      >
        <View style={style}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    transform: [{ translateX: -8 }, { translateY: -8 }],
  },
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  contentContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    overflow: 'hidden',
  },
});
