import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import Card from "../Card";
import MontserratText from "../MontserratText";
import Gap from "../Gap";
import Colors from "@/constants/Colors";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export default function Banner() {
  const screen = useWindowDimensions();

  return (
    <Card
      width={screen.width - 64}
      height={182}
      borderRadius={8}
      style={styles.bannerContainer}
    >
      <Image
        source={require("@/assets/images/logo-kpu.png")}
        style={styles.kpuLogo}
      />
      <Gap height={8} />
      <MontserratText variant="bold">Pemilihan Presiden</MontserratText>
      <Gap height={8} />
      <View style={styles.badge}>
        <MontserratText color={Colors.white} style={{ fontSize: 8 }}>
          Indonesia
        </MontserratText>
      </View>

      <Image
        source={require("@/assets/images/calon-1.png")}
        style={[styles.candidateImage, { left: 0 }]}
      />

      <Image
        source={require("@/assets/images/calon-2.png")}
        style={[styles.candidateImage, { right: 0 }]}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    position: "relative",
    padding: 16,
    alignItems: "center",
    height: 182,
  },
  kpuLogo: {
    width: 32,
    height: 37,
  },
  badge: {
    backgroundColor: Colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  candidateImage: {
    width: (SCREEN_WIDTH - 64) * 0.4,
    height: undefined,
    aspectRatio: 620 / 400,
    position: "absolute",
    bottom: 0,
  },
});
