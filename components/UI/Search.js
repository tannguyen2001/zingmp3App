import { View, TextInput, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import GlobalStyles from "../../contants/GlobalStyles";
import Suggest from "./Suggest";
import { getTop100 } from "../../api/musicApi";
import formatVNtoENG from "../../format/formatVNtoENG";

function Search() {
  const [search, setSearch] = useState("");
  const [listSong, setListSong] = useState([]);
  const [visibleSearchSong, setVisibleSearchSong] = useState(false);
  const [DATA_SONGS, SETDATA_SONGS] = useState([]);
  const navigation = useNavigation();

  function searchInputHandler(value) {
    setSearch(value);

    setListSong(
      DATA_SONGS.filter((item) =>
        formatVNtoENG(item.title).toLowerCase().includes(value)
      )
    );
  }
  useEffect(() => {
    async function fetchData() {
      const response = await getTop100();
      SETDATA_SONGS(response.data);
      setListSong(DATA_SONGS);
    }

    fetchData();
  }, []);

  function handlerPressSongItem(item) {
    navigation.navigate("startMusic", {
      idSong: item.encodeId,
      author: item.artistsNames,
      title: item.title,
      image: item.thumbnailM,
    });
  }

  function renderSong({ item }) {
    return (
      <Suggest
        title={item.title}
        author={item.artistsNames}
        image={item.thumbnailM}
        onPress={() => handlerPressSongItem(item)}
      />
    );
  }

  function handlerFocusSearchInput() {
    setVisibleSearchSong(true);
  }

  function handlerBlurSearchInput() {
    // setVisibleSearchSong(false);
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
          onFocus={handlerFocusSearchInput}
          onBlur={handlerBlurSearchInput}
        />
        <View style={styles.micIconContainer}>
          <Ionicons name="mic" color="#fff" />
        </View>
      </View>
      <Ionicons name="settings" color="#fff" size={32} />
      <View
        style={[
          styles.absoluteComponent,
          visibleSearchSong && styles.searchInputFocus,
        ]}
      >
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
    backgroundColor: "#201335e6",
    borderRadius: 8,
    maxHeight: 380,
    top: 40,
    overflow: "hidden",
    position: "absolute",
    left: -52,
    right: 0,
    zIndex: 3,
    display: "none",
  },
  searchInputFocus: {
    display: "flex",
  },
});

export default Search;
