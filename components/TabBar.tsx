import Colors from "@/constants/Colors";
import { HomeIcon, UserIcon, VoteIcon } from "@/icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Circle, Path, Shadow } from "@shopify/react-native-skia";
import { Link } from "expo-router";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import Canvas from "./Canvas";
import MontserratText from "./MontserratText";
import { SvgProps } from "react-native-svg";

interface MenuIconProps extends SvgProps {
  routeName: string;
}

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const TAB_BAR_WIDTH = SCREEN_WIDTH - 64;
const TAB_BAR_PATH = `
    M 40 32
    H ${SCREEN_WIDTH / 2 - 46}
    Q ${SCREEN_WIDTH / 2 - 38} 32 ${SCREEN_WIDTH / 2 - 38} 40
    Q ${SCREEN_WIDTH / 2 - 38} 70 ${SCREEN_WIDTH / 2} 70
    Q ${SCREEN_WIDTH / 2 + 38} 70 ${SCREEN_WIDTH / 2 + 38} 40
    Q ${SCREEN_WIDTH / 2 + 38} 32 ${SCREEN_WIDTH / 2 + 46} 32
    H ${SCREEN_WIDTH - 40}
    Q ${SCREEN_WIDTH - 32} 32 ${SCREEN_WIDTH - 32} 40
    V 96
    Q ${SCREEN_WIDTH - 32} 104 ${SCREEN_WIDTH - 40} 104
    H 40
    Q 32 104 32 96
    V 40
    Q 32 32 40 32
    Z
`;

const MenuIcon = ({ routeName, ...svgProps }: MenuIconProps) => {
  switch (routeName) {
    case "index":
      return <HomeIcon {...svgProps} />;
    case "profile":
      return <UserIcon {...svgProps} />;
  }
};

export default function TabBar({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  return (
    <View>
      <Canvas style={styles.canvas}>
        <Path path={TAB_BAR_PATH} color={Colors.white}>
          <Shadow dx={-2} dy={-2} blur={2} color={Colors.lightWhite} />
          <Shadow dx={2} dy={2} blur={2} color={Colors.darkWhite} />
        </Path>

        <Circle cx={SCREEN_WIDTH / 2} cy={32} r={30} color={Colors.primary}>
          <Shadow dx={-4} dy={-4} blur={4} color={Colors.lightRed} inner />
          <Shadow dx={4} dy={4} blur={4} color={Colors.darkRed} inner />
        </Circle>
      </Canvas>

      <View style={styles.container}>
        <View style={styles.menuListContainer}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <Pressable
                key={route.key}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.menuContainer}
              >
                <MenuIcon
                  routeName={route.name}
                  width={24}
                  height={24}
                  color={isFocused ? Colors.primary : Colors.grey}
                />
                <MontserratText
                  style={styles.menuTitle}
                  color={isFocused ? Colors.primary : Colors.grey}
                >
                  {options.title}
                </MontserratText>
              </Pressable>
            );
          })}
        </View>

        <Link href="/vote" asChild>
          <Pressable style={styles.voteContainer}>
            <VoteIcon width={32} height={32} color={Colors.white} />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: SCREEN_WIDTH,
    height: 134,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  container: {
    width: TAB_BAR_WIDTH,
    height: 70,
    position: "absolute",
    bottom: 32,
    left: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  voteContainer: {
    position: "absolute",
    left: TAB_BAR_WIDTH / 2 - 30,
    top: -30,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  menuListContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 76,
  },
  menuContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  menuTitle: {
    marginTop: 4,
    fontSize: 12,
  },
});
