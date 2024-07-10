import { Pressable, StyleSheet, View } from "react-native";
import Canvas from "./Canvas";
import { RoundedRect, Shadow } from "@shopify/react-native-skia";
import Colors from "@/constants/Colors";
import MontserratText from "./MontserratText";
import { Link } from "expo-router";

interface Props {
  children: React.ReactNode;
  width: number;
  height: number;
  href: string;
}

export default function Button({ children, width, height, href }: Props) {
  return (
    <View style={{ position: "relative" }}>
      <Canvas style={{ width, height }}>
        <RoundedRect
          x={0}
          y={0}
          width={72}
          height={28}
          r={4}
          color={Colors.primary}
        >
          <Shadow dx={-2} dy={-2} blur={2} color={Colors.lightRed} inner />
          <Shadow dx={2} dy={2} blur={2} color={Colors.darkRed} inner />
        </RoundedRect>
      </Canvas>

      <Link href={href} asChild>
        <Pressable style={styles.button}>
          <MontserratText
            variant="bold"
            style={{ fontSize: 10 }}
            color={Colors.white}
          >
            {children}
          </MontserratText>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 28,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
