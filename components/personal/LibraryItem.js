import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import GlobalStyles from "../../contants/GlobalStyles";

function LibraryItem({ text }) {
  return (
    <View style={styles.container}>
      <Ionicons name="file-tray-outline" color="#fff" size={36} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: 140,
    backgroundColor: GlobalStyles.purplePrimary,
    borderRadius: 6,
    marginRight: 18,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 4,
    fontSize: 16,
  },
});

export default LibraryItem;
