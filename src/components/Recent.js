import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "1 vs 10 Hunters...",
    creator: "MrBeast Gaming",
    time: "10:05",
    imageUrl:
      "https://i.ytimg.com/vi/xwdhHTtc-3w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpemt8kKZhBhSoErqA2XdyrJhu3w",
    channel:
      "//yt3.ggpht.com/ytc/AKedOLRvgsd_ky0wkF1xLv6jbESo5mBQZWfn8lkTQbOcfQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Google – How to Sta...",
    creator: "Google",
    time: "0:31",
    imageUrl:
      "https://i.ytimg.com/vi/uzHYX1CmO6A/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrR96Z0zV8dnhraSzNrZit8bPWUQ",
    channel:
      "//yt3.ggpht.com/ytc/AKedOLQybyN1mVv2t2XhNQKweDRXwqdf6t6sAHZWwh19Zdw=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "The BIGGEST Tech Ho...",
    creator: "Linus Tech Tips",
    time: "10:05",
    imageUrl:
      "https://i.ytimg.com/vi/cw7_dWogBIU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkBHaUAgzzJWtsubMfBL05Fucncg",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSGE5pCFbd5alFmWeOJZPNjsEhkN1FCxFdYjaE3Og=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3da1-471f-bd96-11e29d72",
    title: "How to Learn Anyt...",
    time: "14:43",
    creator: "Ali Abdaal",
    imageUrl:
      "https://i.ytimg.com/vi/unityETmypk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlAjKGmwF2sKnQjTLLv_St3Lt6-g",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSWd0-HAZHehT9aad84m27uDgIAi86IS6sGsmTH=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    title: "🔴 Build Tesla Clon...",
    time: "20:34",
    creator: "Clever Programmer",
    imageUrl:
      "https://i.ytimg.com/vi/y7-IG4SSI3E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0kAjWozIgCjBwRk9vmI3_1rsvdg",
  },
];

function Item({ title, imageUrl, creator }) {
  return (
    <TouchableOpacity style={styles.item}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={{ height: 70, width: 150 }}
      ></ImageBackground>
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
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text
              style={{
                paddingTop: 2,
                fontSize: 12,
                color: "#606060",
              }}
            >
              {creator}
            </Text>
          </View>
        </View>
        <Icon
          name="dots-vertical"
          size={15}
          color="#606060"
          style={{ paddingTop: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
}

function Recent() {
  return (
    <View>
      <Text style={{ fontSize: 15, marginLeft: 20, marginBottom: 5 }}>
        Recent
      </Text>
      <View style={{ flexDirection: "row" }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              creator={item.creator}
              imageUrl={item.imageUrl}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
  },
  title: {
    fontSize: 14,
    paddingTop: 5,
    shadowOpacity: 0,
  },
});

export default Recent;
