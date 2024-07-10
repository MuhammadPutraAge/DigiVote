import { View, ViewStyle } from "react-native";

interface Props {
  width?: ViewStyle["width"];
  height?: ViewStyle["height"];
}

export default function Gap({ width, height }: Props) {
  return <View style={{ width, height }} />;
}
