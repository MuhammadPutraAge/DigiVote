import useCanvas from "@/hooks/useCanvas";
import { CanvasProps, Canvas as SkiaCanvas } from "@shopify/react-native-skia";

export default function Canvas(props: CanvasProps) {
  const { isReady } = useCanvas();

  if (!isReady) return null;

  return <SkiaCanvas {...props}>{props.children}</SkiaCanvas>;
}
