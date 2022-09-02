import { View, TextInput, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import GlobalStyles from "../../contants/GlobalStyles";

function HeaderMenu() {
  return (
    <View style={styles.headerMenu}>
      <Image
        style={styles.imageAvatar}
        source={require("../../assets/images/avatar.jpg")}
      />
      <View style={styles.searchContainer}>
        <Ionicons name="search" color="#fff" size={24} />
        <TextInput
          placeholder="Tìm kiếm"
          placeholderTextColor="#fff"
          style={styles.searchInput}
        />
        <View style={styles.micIconContainer}>
          <Ionicons name="mic" color="#fff" />
        </View>
      </View>
      <Ionicons name="settings" color="#fff" size={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: GlobalStyles.purplePrimary,
    borderRadius: 16,
    paddingHorizontal: 8,
  },
  imageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  searchInput: {
    flex: 1,
    textAlign: "left",
    paddingHorizontal: 4,
    color: "#fff",
    fontSize: 16,
  },
  micIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 12,
  },
});

export default HeaderMenu;
