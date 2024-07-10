import Colors from "@/constants/Colors";
import { useMemo } from "react";
import { ColorValue, Text, TextProps, TextStyle } from "react-native";

interface Props extends TextProps {
  variant?: "semiBold" | "bold";
  color?: ColorValue;
  style?: TextStyle;
}

export default function MontserratText({
  children,
  style,
  variant = "semiBold",
  color = Colors.black,
}: Props) {
  const fontFamily = useMemo(
    () => (variant === "semiBold" ? "Montserrat-SemiBold" : "Montserrat-Bold"),
    [variant]
  );

  return (
    <Text
      style={[
        style,
        { fontFamily, color, lineHeight: style?.lineHeight ?? style?.fontSize },
      ]}
    >
      {children}
    </Text>
  );
}
