import { SCREEN_WIDTH } from "@/constants/Screen";
import Card from "../Card";
import { Image, StyleSheet, View } from "react-native";
import Gap from "../Gap";
import MontserratText from "../MontserratText";
import Colors from "@/constants/Colors";

const PADDING = 32;
const CARD_WIDTH = SCREEN_WIDTH - PADDING * 2;

interface Props {
  nik: string;
  name: string;
}

export default function IdentityCard({ nik, name }: Props) {
  return (
    <Card width={CARD_WIDTH} borderRadius={4} style={styles.container}>
      <Image
        source={require("@/assets/images/indonesia-map.png")}
        style={styles.indonesianMap}
      />
      <Gap height={24} />
      <View style={styles.contentIdentityCard}>
        <View style={styles.identityContainer}>
          <MontserratText variant="bold" style={styles.nik}>
            {nik}
          </MontserratText>
          <Gap height={4} />
          <MontserratText color={Colors.grey} style={styles.name}>
            {name}
          </MontserratText>
        </View>

        <Image
          source={require("@/assets/images/logo-kpu.png")}
          style={styles.logoKpu}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 16,
    alignItems: "center",
  },
  indonesianMap: {
    width: CARD_WIDTH * 0.6,
    height: undefined,
    aspectRatio: 193 / 78,
  },
  contentIdentityCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 16,
  },
  identityContainer: {
    flex: 1,
  },
  nik: {
    fontSize: 16,
  },
  name: {
    fontSize: 12,
  },
  logoKpu: {
    width: 32,
    height: undefined,
    aspectRatio: 32 / 37,
  },
});
