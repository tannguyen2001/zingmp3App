import { View, TextInput, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

import GlobalStyles from "../../contants/GlobalStyles";
import Suggest from "./Suggest";
import { getTop100 } from "../../api/musicApi";

function Search() {
  const [search, setSearch] = useState("");
  const [listSong, setListSong] = useState([]);
  function searchInputHandler(value) {
    setSearch(value);
  }
  useEffect(() => {
    async function fetchData() {
      const response = await getTop100();
      setListSong(response.data);
    }

    fetchData();
  }, []);

  function renderSong({ item }) {
    return (
      <Suggest
        title={item.title}
        author={item.artistsNames}
        image={item.thumbnailM}
      />
    );
  }

  return (
    <View style={styles.rootSearch}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" color="#fff" size={24} />
        <TextInput
          placeholder="Tìm kiếm"
          placeholderTextColor="#fff"
          style={styles.searchInput}
          value={search}
          onChangeText={searchInputHandler}
        />
        <View style={styles.micIconContainer}>
          <Ionicons name="mic" color="#fff" />
        </View>
      </View>
      <Ionicons name="settings" color="#fff" size={32} />
      <View style={styles.absoluteComponent}>
        <FlatList
          data={listSong}
          renderItem={renderSong}
          keyExtractor={(item) => item.encodeId}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootSearch: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    position: "relative",
  },
  searchContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginRight: 20,
    alignItems: "center",
    backgroundColor: GlobalStyles.purplePrimary,
    borderRadius: 16,
    paddingHorizontal: 8,
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
  absoluteComponent: {
    position: "absolute",
    zIndex: 3,
    top: 44,
    backgroundColor: "#201335e6",
    left: -52,
    right: 0,
    borderRadius: 4,
    height: 380,
  },
});

export default Search;
