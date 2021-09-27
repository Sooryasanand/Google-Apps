import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import Header from "./components/Header";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import HeaderSubTab from "./components/HeaderSubTab";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "I spent 50 Hours in Prison",
    imageUrl:
      "https://i.ytimg.com/vi/nM89Wl03Q4g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9WIrGCwdI6am1QbaZeUfaXygVXQ",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSdjk3yfmEPE7rf2rQTHWvSMx-2sQ59M4kRh9SWSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Hit The Target, Win $300,000",
    imageUrl:
      "https://i.ytimg.com/vi/NZlClr_ivb4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUchtvs9Prx09JbJCZEMKAlrhQDA",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSdjk3yfmEPE7rf2rQTHWvSMx-2sQ59M4kRh9SWSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Anything You Can Fit In The Triangle I’ll Pay For",
    imageUrl:
      "https://i.ytimg.com/vi/E6E22XQPhhg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4G7vzHqiFBBElGr4V2zBOwzubVw",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSdjk3yfmEPE7rf2rQTHWvSMx-2sQ59M4kRh9SWSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3da1-471f-bd96-11e29d72",
    title: "I Got Hunted By A Real Bounty Hunter",
    imageUrl:
      "https://i.ytimg.com/vi/TQHEJj68Jew/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDG2dQ5h-UfhfPyFUEq2fDHjLa83w",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSdjk3yfmEPE7rf2rQTHWvSMx-2sQ59M4kRh9SWSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    title: "Extreme $100,000 Game of Tag!",
    imageUrl:
      "https://i.ytimg.com/vi/WcwGleN38zE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYGFz9ePvZvaXO6P2bX9AmQyZrkQ",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSdjk3yfmEPE7rf2rQTHWvSMx-2sQ59M4kRh9SWSQ=s176-c-k-c0x00ffffff-no-rj",
  },
];

function Item({ title, imageUrl, channel }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: imageUrl }} style={{ height: 200 }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: channel }}
            style={{ height: 60, width: 60, borderRadius: 30, margin: 10 }}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text
              style={{
                paddingLeft: 6,
                paddingTop: 4,
                color: "gray",
              }}
            >
              MrBeast . {parseInt(Math.random() * 1000)}K Views
            </Text>
            <Text
              style={{
                paddingLeft: 6,
                color: "gray",
              }}
            >
              {parseInt(Math.random() * 10)} months ago
            </Text>
          </View>
        </View>
        <Icon
          name="dots-vertical"
          size={25}
          color="gray"
          style={{ paddingTop: 20 }}
        />
      </View>
    </View>
  );
}

function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HeaderSubTab />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            imageUrl={item.imageUrl}
            channel={item.channel}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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

export default ExploreScreen;
