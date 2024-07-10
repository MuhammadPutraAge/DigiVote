import { CANDIDATES, Candidate } from "@/constants/Data";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Card from "../Card";
import MontserratText from "../MontserratText";
import Gap from "../Gap";
import { SCREEN_WIDTH } from "@/constants/Screen";
import Colors from "@/constants/Colors";

const PADDING = 32;
const ITEM_WIDTH = SCREEN_WIDTH * 0.75;
const ITEM_HEIGHT = ITEM_WIDTH * 1.3 - 16;

interface Props {
  translateX: SharedValue<number>;
  index: number;
  item: Candidate;
}

export default function VoteItem({ translateX, index, item }: Props) {
  const inputRange = [
    (index - 2) * ITEM_WIDTH,
    (index - 1) * ITEM_WIDTH,
    index * ITEM_WIDTH,
  ];

  const rCardStyle = useAnimatedStyle(() => {
    const scaleY = interpolate(
      translateX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scaleY }],
    };
  });

  return (
    <>
      <Animated.View style={[styles.itemContainer, rCardStyle]}>
        <Card
          width={ITEM_WIDTH - 16}
          height={ITEM_HEIGHT}
          borderRadius={8}
          containerStyle={styles.cardContainer}
          style={styles.card}
        >
          <View style={styles.candidateContainer}>
            <View style={styles.candidateNumberContainer}>
              <MontserratText
                variant="bold"
                color={Colors.primary}
                style={styles.candidateNumber}
              >
                {item.candidateNumber}
              </MontserratText>
            </View>

            <Image source={item.image} style={styles.candidateImage} />
          </View>
          <MontserratText variant="bold" style={styles.candidateName}>
            {item.candidateName}
          </MontserratText>
        </Card>
      </Animated.View>

      {index !== CANDIDATES.length && <Gap width={10} />}
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.3,
  },
  cardContainer: {
    transform: [{ translateX: 0 }, { translateY: 0 }],
  },
  card: {
    height: ITEM_HEIGHT,
  },
  candidateContainer: {
    position: "relative",
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    margin: 16,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  candidateNumberContainer: {
    position: "absolute",
    top: PADDING,
    left: (ITEM_WIDTH - 48) / 2,
    backgroundColor: Colors.white,
    width: 60,
    height: 60,
    borderRadius: 30,
    transform: [{ translateX: -30 }],
    justifyContent: "center",
    alignItems: "center",
  },
  candidateNumber: {
    fontSize: 32,
    transform: [{ translateY: 2.5 }],
  },
  candidateImage: {
    width: ITEM_WIDTH - 48,
    height: undefined,
    aspectRatio: 629 / 400,
  },
  candidateName: {
    textAlign: "center",
    fontSize: 14,
    paddingTop: 0,
    padding: 16,
  },
});
