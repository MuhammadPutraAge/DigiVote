import { Gap } from "@/components";
import { Header, IdentityCard, MenuItem } from "@/components/profile";
import Colors from "@/constants/Colors";
import { HelpIcon, LogoutIcon, SettingIcon } from "@/icons";
import SecurityIcon from "@/icons/SecurityIcon";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const PADDING = 32;

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: tabBarHeight + 60,
        backgroundColor: Colors.white,
      }}
    >
      <View style={[styles.container, { paddingTop: insets.top + PADDING }]}>
        <Header />
        <Gap height={8} />
        <IdentityCard nik="6472 1234 5678 9012" name="Benedict Cumberbatch" />
        <Gap height={8} />
        <View>
          <View style={styles.menuContainer}>
            <MenuItem label="Pengaturan" Icon={SettingIcon} />
            <MenuItem label="Keamanan" Icon={SecurityIcon} />
          </View>
          <Gap height={8} />
          <View style={styles.menuContainer}>
            <MenuItem label="Bantuan" Icon={HelpIcon} />
            <MenuItem label="Keluar" Icon={LogoutIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: Colors.white,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 8,
  },
});
