import { useEffect, useState } from "react";
import { AppState } from "react-native";

export default function useCanvas() {
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      setIsReady(state === "active");
    });

    return () => subscription.remove();
  }, []);

  return { isReady };
}
