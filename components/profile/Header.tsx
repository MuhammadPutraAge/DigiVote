import { SCREEN_WIDTH } from "@/constants/Screen";
import Card from "../Card";
import { Image, StyleSheet } from "react-native";

const PADDING = 32;
const CARD_WIDTH = SCREEN_WIDTH - PADDING * 2;

export default function Header() {
  return (
    <Card width={CARD_WIDTH} borderRadius={4} style={styles.container}>
      <Image
        source={require("@/assets/images/logo-kpu.png")}
        style={styles.logoKpu}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logoKpu: {
    width: 32,
    height: undefined,
    aspectRatio: 32 / 37,
  },
});
