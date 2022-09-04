import { View, Image, StyleSheet } from "react-native";
import { useState } from "react";

import Search from "../UI/Search";

function HeaderMenu() {
  return (
    <View style={styles.headerMenu}>
      <Image
        style={styles.imageAvatar}
        source={require("../../assets/images/avatar.jpg")}
      />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  headerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 20,
  },
});

export default HeaderMenu;
