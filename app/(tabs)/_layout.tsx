import { TabBar } from "@/components";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
      backBehavior="history"
    >
      <Tabs.Screen name="index" options={{ title: "Beranda" }} />
      <Tabs.Screen name="profile" options={{ title: "Akun Saya" }} />
    </Tabs>
  );
}
