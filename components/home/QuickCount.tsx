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
import BarChart from "../BarChart";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export default function QuickCount() {
  const screen = useWindowDimensions();

  return (
    <Card
      width={screen.width - 64}
      height={187}
      borderRadius={8}
      style={styles.container}
    >
      <MontserratText variant="bold" style={{ fontSize: 16 }}>
        Hitung Cepat
      </MontserratText>

      <View style={styles.contentContainer}>
        <View style={{ alignItems: "center" }}>
          <MontserratText variant="bold" style={{ fontSize: 16 }}>
            55.50%
          </MontserratText>
          <Gap height={4} />
          <Image
            source={require("@/assets/images/calon-1.png")}
            style={styles.candidateImage}
          />
          <Gap height={4} />
          <MontserratText style={{ fontSize: 8 }}>
            Jokowi - Ma'ruf Amin
          </MontserratText>
        </View>

        <View style={{ flexDirection: "row", columnGap: 16 }}>
          <BarChart width={32} radius={4} value={55.5} />
          <BarChart width={32} radius={4} value={44.5} />
        </View>

        <View style={{ alignItems: "center" }}>
          <MontserratText variant="bold" style={{ fontSize: 16 }}>
            44.50%
          </MontserratText>
          <Gap height={4} />
          <Image
            source={require("@/assets/images/calon-2.png")}
            style={styles.candidateImage}
          />
          <Gap height={4} />
          <MontserratText style={{ fontSize: 8 }}>
            Prabowo - Sandiaga
          </MontserratText>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 187,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentContainer: {
    position: "absolute",
    bottom: 16,
    height: 155,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  candidateImage: {
    width: (SCREEN_WIDTH - 80) * 0.3,
    height: undefined,
    aspectRatio: 620 / 400,
  },
});
