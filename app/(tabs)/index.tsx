import { Button, Card, Gap, MontserratText } from "@/components";
import { Banner, Header, QuickCount, VoteInfo } from "@/components/home";
import Colors from "@/constants/Colors";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const screen = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: tabBarHeight + 60,
        backgroundColor: Colors.white,
      }}
    >
      <View style={[styles.container, { paddingTop: insets.top + 32 }]}>
        <Header />
        <Gap height={8} />
        <Banner />
        <Gap height={8} />
        <View style={styles.quickCountContainer}>
          <VoteInfo title="Suara Masuk" value={65} />
          <VoteInfo title="Suara Tidak Sah" value={12} />
        </View>
        <Gap height={8} />
        <QuickCount />
        <Gap height={8} />
        <Card
          width={screen.width - 64}
          borderRadius={4}
          style={styles.voteContainer}
        >
          <MontserratText variant="bold" style={{ fontSize: 12 }}>
            Lakukan pemungutan Suara
          </MontserratText>
          <Button width={72} height={28} href="/vote">
            Pilih
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  quickCountContainer: {
    flexDirection: "row",
    columnGap: 8,
  },
  voteContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
