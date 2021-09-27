import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import Header from "./components/Header";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import HeaderSubTab from "./components/HeaderSubTab";
import HeaderTopTab from "./components/HeaderTopTab";
import { ScrollView } from "react-native-gesture-handler";
import HeaderTopTabSub from "./components/HeaderTopTabSub";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "1 vs 10 Hunters in GTA!",
    creator: "MrBeast Gaming",
    time: "10:05",
    imageUrl:
      "https://i.ytimg.com/vi/xwdhHTtc-3w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpemt8kKZhBhSoErqA2XdyrJhu3w",
    channel:
      "//yt3.ggpht.com/ytc/AKedOLRvgsd_ky0wkF1xLv6jbESo5mBQZWfn8lkTQbOcfQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Google – How to Start a New Job",
    creator: "Google",
    time: "0:31",
    imageUrl:
      "https://i.ytimg.com/vi/uzHYX1CmO6A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrR96Z0zV8dnhraSzNrZit8bPWUQ",
    channel:
      "//yt3.ggpht.com/ytc/AKedOLQybyN1mVv2t2XhNQKweDRXwqdf6t6sAHZWwh19Zdw=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "The BIGGEST Tech Hoarder!",
    creator: "Linus Tech Tips",
    time: "10:05",
    imageUrl:
      "https://i.ytimg.com/vi/cw7_dWogBIU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkBHaUAgzzJWtsubMfBL05Fucncg",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSGE5pCFbd5alFmWeOJZPNjsEhkN1FCxFdYjaE3Og=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3da1-471f-bd96-11e29d72",
    title: "How to Learn Anything FASTER",
    time: "14:43",
    creator: "Ali Abdaal",
    imageUrl:
      "https://i.ytimg.com/vi/unityETmypk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlAjKGmwF2sKnQjTLLv_St3Lt6-g",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSWd0-HAZHehT9aad84m27uDgIAi86IS6sGsmTH=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    title: "🔴 Build Tesla Clone with React Native",
    time: "20:34",
    creator: "Clever Programmer",
    imageUrl:
      "https://i.ytimg.com/vi/y7-IG4SSI3E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0kAjWozIgCjBwRk9vmI3_1rsvdg",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj",
  },
];

function Item({ title, imageUrl, channel, creator, time }) {
  return (
    <View style={styles.item}>
      <ImageBackground source={{ uri: imageUrl }} style={{ height: 200 }}>
        <Text
          style={{
            position: "absolute",
            marginTop: 170,
            marginLeft: 330,
            backgroundColor: "black",
            padding: 2,
            color: "white",
            fontSize: 13,
          }}
        >
          {time}
        </Text>
      </ImageBackground>
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
            style={{ height: 30, width: 30, borderRadius: 30, margin: 10 }}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text
              style={{
                paddingLeft: 6,
                paddingTop: 4,
                color: "#606060",
              }}
            >
              {creator} · {parseInt(Math.random() * 1000)}K Views ·{" "}
              {parseInt(Math.random() * 10)} months ago
            </Text>
          </View>
        </View>
        <Icon
          name="dots-vertical"
          size={25}
          color="#606060"
          style={{ paddingTop: 10 }}
        />
      </View>
    </View>
  );
}

function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <HeaderSubTab />
        <HeaderTopTabSub />
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              time={item.time}
              imageUrl={item.imageUrl}
              channel={item.channel}
              creator={item.creator}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    height: 270,
    borderStyle: "solid",
    borderBottomColor: "grey",
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    paddingLeft: 6,
    paddingTop: 8,
    shadowOpacity: 0,
  },
});

export default ExploreScreen;
