import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Suggest({ title, author, image, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.rootSugest}
    >
      <View style={styles.container}>
        <View style={styles.suggestTitle}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.textTitle}>{author}</Text>
          </View>
        </View>
        <Ionicons name="heart-outline" color="#fff" size={26} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootSugest: {
    opacity: 0.7,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  suggestTitle: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 4,
  },
  textContainer: {
    marginLeft: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  textTitle: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.7,
  },
});

export default Suggest;
