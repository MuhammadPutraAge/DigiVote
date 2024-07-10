import { StyleSheet, useWindowDimensions } from "react-native";
import Card from "../Card";
import MontserratText from "../MontserratText";
import Gap from "../Gap";
import CircleChart from "../CircleChart";

interface Props {
  title: string;
  value: number;
}

export default function VoteInfo({ title, value }: Props) {
  const screen = useWindowDimensions();

  return (
    <Card
      width={(screen.width - 64) / 2 - 12}
      borderRadius={8}
      style={styles.container}
    >
      <MontserratText variant="bold" style={{ fontSize: 12 }}>
        {title}
      </MontserratText>
      <Gap height={8} />
      <CircleChart size={40} value={value} />
      <Gap height={8} />
      <MontserratText variant="bold" style={{ fontSize: 16 }}>
        {`${value.toFixed(2)}%`}
      </MontserratText>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});
