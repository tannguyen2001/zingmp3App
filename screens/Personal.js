import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import GlobalStyles from "../contants/GlobalStyles";
import HeaderMenu from "../components/personal/HeaderMenu";
import ListLibrary from "../components/personal/LibraryList";
import Playlist from "../components/personal/Playlist";

const DATA_TOP = ["Bài hát", "Podcast", "Upload", "Nghệ sĩ"];
const DATA_BOTTOM = ["Trên thiết bị", "Karaoke", "MV"];

function Personal() {
  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.container}>
        <HeaderMenu />
        <View style={styles.listLibrary}>
          <Text style={styles.listTitle}>Thư viện</Text>
          <ListLibrary data={DATA_TOP} />
          <ListLibrary data={DATA_BOTTOM} />
        </View>
        <View style={styles.group}>
          <Text style={[styles.groupTitle, styles.selectTedTitle]}>
            Playlist
          </Text>
          <Text style={styles.groupTitle}>Album</Text>
          <Text style={styles.groupTitle}>Gần đây</Text>
        </View>
        <View style={styles.viewDetail}>
          <Playlist />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.primaryBackground,
  },
  container: {
    flex: 1,
    marginTop: 44,
    marginHorizontal: 16,
  },
  listLibrary: {
    marginTop: 20,
  },
  listTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  group: {
    flexDirection: "row",
    marginTop: 12,
  },
  groupTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 16,
    opacity: 0.7,
  },
  selectTedTitle: {
    opacity: 1,
  },
  viewDetail: {
    flex: 1,
  },
});

export default Personal;
