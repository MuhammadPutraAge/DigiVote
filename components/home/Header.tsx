import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import Card from "../Card";
import MontserratText from "../MontserratText";

export default function Header() {
  const screen = useWindowDimensions();

  return (
    <Card width={screen.width - 64} borderRadius={8} style={{ padding: 16 }}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContentContainer}>
          <Image
            source={require("@/assets/images/logo-kpu.png")}
            style={{ width: 32, height: 37 }}
          />
          <MontserratText variant="bold">
            Digi
            <MontserratText variant="bold" color={Colors.primary}>
              Vote
            </MontserratText>
          </MontserratText>
        </View>

        <Link href="/profile" asChild>
          <Pressable>
            <Image
              source={require("@/assets/images/profile.png")}
              style={styles.profile}
            />
          </Pressable>
        </Link>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
});
