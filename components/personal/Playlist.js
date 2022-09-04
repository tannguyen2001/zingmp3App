import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Suggest from "../UI/Suggest";

function Playlist() {
  return (
    <View style={styles.playlist}>
      <View style={styles.addPlaylist}>
        <View style={styles.addPlaylistIcon}>
          <Ionicons name="add-circle-outline" size={28} color="#fff" />
        </View>
        <Text style={styles.addPlaylistText}>Tạo playlist</Text>
      </View>
      <View style={styles.suggest}>
        <Text style={styles.suggestTitle}>Gợi ý cho bạn</Text>
        <Text style={styles.suggestDesription}>
          Dựa trên lịch sử và thư viện cá nhân
        </Text>
        <Suggest title="Top hit Vietnam" author="Zing mp3" />
        <Suggest title="Top 100 nhạc trữ tình" author="Zing mp3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addPlaylist: {
    flexDirection: "row",
    marginVertical: 16,
    alignItems: "center",
  },
  addPlaylistIcon: {
    backgroundColor: "#c662ef",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  addPlaylistText: {
    color: "#c662ef",
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  suggestTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  suggestDesription: {
    color: "#fff",
    opacity: 0.8,
    fontSize: 14,
  },
});

export default Playlist;
