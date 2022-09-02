import { FlatList } from "react-native";

import LibraryItem from "./LibraryItem";

function ListLibrary({ data }) {
  function renderItem({ item }) {
    return <LibraryItem text={item} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      horizontal
    />
  );
}

export default ListLibrary;
