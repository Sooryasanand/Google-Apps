import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    creator: "MrBeast Gaming",
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
    creator: "Linus Tech Tips",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSGE5pCFbd5alFmWeOJZPNjsEhkN1FCxFdYjaE3Og=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3da1-471f-bd96-11e29d72",
    creator: "Ali Abdaal",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLSWd0-HAZHehT9aad84m27uDgIAi86IS6sGsmTH=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "58694a0f-3d1f-bd96-145571e29d72",
    creator: "Clever Programmer",
    channel:
      "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj",
  },
];

function Sub({}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ height: 100, backgroundColor: "lightblue", height: 90 }}
    >
      <TouchableOpacity style={styles.youtubers}>
        <Text>MrBeast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.youtubers}>
        <Text>Adrian Twarog</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.youtubers}>
        <Text>Ali Abdaal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.youtubers}>
        <Text>Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.youtubers}>
        <Text>Beast Reacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.youtubers}>
        <Text>Ben Awad</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function headerSubTab() {
  return <Sub />;
}

const styles = StyleSheet.create({
  youtubers: {
    margin: 10,
  },
});

export default headerSubTab;
