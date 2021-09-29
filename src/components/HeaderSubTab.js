import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    creator: "MrBeast G...",
    channel:
      "//yt3.ggpht.com/ytc/AKedOLRvgsd_ky0wkF1xLv6jbESo5mBQZWfn8lkTQbOcfQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    creator: "Google",
    channel:
      "//yt3.ggpht.com/ytc/AKedOLQybyN1mVv2t2XhNQKweDRXwqdf6t6sAHZWwh19Zdw=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    creator: "Linus T...",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSGE5pCFbd5alFmWeOJZPNjsEhkN1FCxFdYjaE3Og=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3da1-471f-bd96-11e29d72",
    creator: "Ali Abd...",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSWd0-HAZHehT9aad84m27uDgIAi86IS6sGsmTH=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    creator: "Clever Pr...",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    creator: "Don't Su...",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLRv2KOma9yXjoxAsKZAFhGfP-HomH7I_PDIVEtO=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    creator: "Engineer...",
    channel:
      "https://yt3.ggpht.com/_2SkjSy2d-0X8qKyImUTZzqHCQmWF6tj5j2VsM7_4SicZDXk5lyiHUUhAbXLuvhu4QllEjGPFg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    creator: "Gyasi Lin...",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSXsZtLxs9RI7NAhDsNikmqoPO6D-AQkHSgbDCdOp0=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    creator: "iJustine",
    channel:
      "https://yt3.ggpht.com/TJTGhrVOoYxtaMg5GL5GoNYkzFrmIieMA4-AeRecbstcc-rWnTcrw8Vt1Ea1t6QBx9o_CIixFP8=s88-c-k-c0x00ffffff-no-rj",
  },
];

function Item({ creator, channel }) {
  return (
    <TouchableOpacity style={styles.youtubers}>
      <Image
        source={{
          uri: channel,
        }}
        style={{ height: 40, width: 40, borderRadius: 30, margin: 10 }}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 12 }}>
        {creator}
      </Text>
    </TouchableOpacity>
  );
}

function headerSubTab() {
  return (
    <View style={{ flexDirection: "row" }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => (
          <Item creator={item.creator} channel={item.channel} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Text
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          color: "#065FDA",
          fontWeight: "500",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        ALL
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  youtubers: {
    marginTop: 3,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: "center",
  },
});

export default headerSubTab;
