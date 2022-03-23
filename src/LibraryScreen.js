import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./components/Header";
import LibraryMain from "./components/LibraryMain";
import LibraryPlaylists from "./components/LibraryPlaylists";
import Recent from "./components/Recent";

function LibraryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Recent />
      <View
        style={{
          marginTop: 10,
          borderBottomColor: "#dadada",
          borderBottomWidth: 1,
        }}
      />
      <LibraryMain />
      <View
        style={{
          marginTop: 10,
          borderBottomColor: "#dadada",
          borderBottomWidth: 1,
        }}
      />
      <LibraryPlaylists />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    height: 300,
    borderStyle: "solid",
    borderBottomColor: "gray",
  },
  title: {
    fontSize: 20,
    paddingLeft: 6,
    paddingTop: 10,
    shadowOpacity: 0,
  },
});

export default LibraryScreen;
