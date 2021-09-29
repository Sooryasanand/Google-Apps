import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LibraryMain() {
  return (
    <View style={{ margin: 20 }}>
      <TouchableOpacity style={styles.items}>
        <MaterialCommunityIcons name="history" size={24} color="black" />
        <Text style={{ marginLeft: 20, marginBottom: 30 }}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <MaterialCommunityIcons
          name="play-box-outline"
          size={24}
          color="black"
        />
        <Text style={{ marginLeft: 20, marginBottom: 30 }}>Your videos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.items}>
        <MaterialIcons name="local-movies" size={24} color="black" />
        <Text style={{ marginLeft: 20, marginBottom: 30 }}>
          Your movies and shows
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name="clock-time-five-outline"
          size={24}
          color="black"
        />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ marginLeft: 20 }}>Watch later</Text>
          <Text style={{ marginLeft: 20, fontSize: 12, color: "#7b7b7b" }}>
            Videos you save for later
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
  },
});
