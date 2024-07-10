import { SCREEN_WIDTH } from "@/constants/Screen";
import Card from "../Card";
import { Pressable, StyleSheet } from "react-native";
import { SettingIcon } from "@/icons";
import Colors from "@/constants/Colors";
import Gap from "../Gap";
import MontserratText from "../MontserratText";
import { SvgProps } from "react-native-svg";

const PADDING = 32;
const CONTAINER_WIDTH = SCREEN_WIDTH - PADDING * 2;
const CARD_WIDTH = CONTAINER_WIDTH / 2 - 12;

interface Props {
  label: string;
  Icon: (props: SvgProps) => React.JSX.Element;
  onPress?: () => void;
}

export default function MenuItem({ label, Icon, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Card
        width={CARD_WIDTH}
        height={120}
        borderRadius={4}
        style={styles.container}
      >
        <Icon width={40} height={40} color={Colors.primary} />
        <Gap height={8} />
        <MontserratText variant="bold" style={{ fontSize: 12 }}>
          {label}
        </MontserratText>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
});
