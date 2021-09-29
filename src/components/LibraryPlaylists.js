import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Coding",
    videos: "18 videos",
    imageicon:
      "https://i.ytimg.com/vi/C9obIgRce5w/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDNAuBMHfSLh2p19r3-88fXqyrvRw",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Projects",
    videos: "3 videos",
    imageicon:
      "https://i.ytimg.com/vi/bvn_HYpix6s/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCHUZCsa8KuTD0qxqT2JsyRG7IyoA",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Liked",
    videos: "536 videos",
    imageicon:
      "https://www.pinclipart.com/picdir/big/125-1252035_png-file-like-blanco-png-clipart.png",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Tips",
    videos: "4 videos",
    imageicon:
      "https://i.ytimg.com/vi/f6FTYXUc0Lo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAvhBpWji3KxDbG1q86xIA6IBDWmw",
  },
];

function Item({ imageicon, title, videos }) {
  return (
    <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
      <Image
        source={{
          uri: imageicon,
        }}
        style={{ height: 40, width: 40, marginLeft: 15 }}
      />
      <View style={{ marginLeft: 20 }}>
        <Text>{title}</Text>
        <Text style={{ color: "#7b7b7b" }}>{videos}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function LibraryPlaylists() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 25,
          margin: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>Playlists</Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text>A-Z</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 20,
        }}
      >
        <Ionicons name="add" size={24} color="#0459a6" />
        <Text style={{ marginLeft: 20, color: "#0459a6" }}>New playlist</Text>
      </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            imageicon={item.imageicon}
            videos={item.videos}
          />
        )}
      />
    </View>
  );
}
