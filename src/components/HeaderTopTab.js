import React from "react";
import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function HeaderTopTab() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ height: 100 }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#eee",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 7.5,
          marginRight: 10,
          padding: 5,
        }}
      >
        <MaterialIcons name="explore" size={20} color="black" />
        <Text style={{ fontSize: 15, marginLeft: 10, alignItems: "center" }}>
          Explore
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: "60%",
          width: 1,
          backgroundColor: "#909090",
          alignItems: "center",
          marginTop: 10,
          backgroundColor: "#eee",
        }}
      ></View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#4e4e4e",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 7.5,
          marginRight: 10,
          padding: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 15, alignItems: "center", color: "white" }}>
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#eee",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 7.5,
          marginRight: 10,
          padding: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 15, alignItems: "center" }}>Aviation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#eee",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 7.5,
          marginRight: 10,
          padding: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 15, alignItems: "center" }}>
          Computer programming
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#eee",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 7.5,
          marginRight: 10,
          padding: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 15, alignItems: "center" }}>JavaScript</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#eee",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 7.5,
          marginRight: 10,
          padding: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 15, alignItems: "center" }}>React native</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
