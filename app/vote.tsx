import { Gap, MontserratText } from "@/components";
import { VoteItem } from "@/components/vote";
import Colors from "@/constants/Colors";
import { CANDIDATES } from "@/constants/Data";
import { SCREEN_WIDTH } from "@/constants/Screen";
import { Image, Platform, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PADDING = 32;
const ITEM_WIDTH = SCREEN_WIDTH * 0.75;
const SPACER_SIZE = (SCREEN_WIDTH - ITEM_WIDTH) / 2;

export default function VoteScreen() {
  const insets = useSafeAreaInsets();

  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(({ contentOffset }) => {
    translateX.value = contentOffset.x;
  });

  return (
    <View style={[styles.container, { paddingTop: insets.top + PADDING }]}>
      <View style={styles.headerContainer}>
        <Image
          source={require("@/assets/images/logo-kpu.png")}
          style={styles.logoKpu}
        />
        <Gap height={16} />
        <MontserratText variant="bold" style={{ fontSize: 18 }}>
          Tentukan Pilihanmu
        </MontserratText>
        <Gap height={4} />
        <MontserratText style={styles.headerDescription} color={Colors.grey}>
          Pilihanmu menentukan masa depan Indonesia 5 tahun ke depan.
        </MontserratText>
      </View>

      <Gap height={24} />

      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        bounces={false}
        overScrollMode="never"
        snapToInterval={ITEM_WIDTH + 10}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 8 }}
        data={[{ key: "left-spacer" }, ...CANDIDATES, { key: "right-spacer" }]}
        renderItem={({ item, index }) => {
          if ("key" in item) {
            return <Gap width={SPACER_SIZE} />;
          }

          return <VoteItem translateX={translateX} index={index} item={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    padding: PADDING,
    paddingTop: 0,
    alignItems: "center",
  },
  logoKpu: {
    width: 50,
    height: undefined,
    aspectRatio: 32 / 37,
  },
  headerDescription: {
    textAlign: "center",
  },
});
