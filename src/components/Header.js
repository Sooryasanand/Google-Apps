import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constant from "expo-constants";

function Header() {
  return (
    <View>
      <View style={styles.header}>
        <View style={{ justifyContent: "center", paddingLeft: 20 }}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png",
            }}
          />
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <MaterialIcons
              style={styles.headerIcon}
              name="cast"
              size={23}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              style={styles.headerIcon}
              name="notifications-outline"
              size={23}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              style={styles.headerIcon}
              name="search"
              size={23}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.profile}
              source={{
                uri: "https://lh3.googleusercontent.com/a-/AOh14GhNLYub8y9muOoFj63j7SfuHmsr6hoMlZDo_QB4-A=s96-c-rg-br100",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Constant.statusBarHeight,
    height: 60,
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    marginHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 50,
  },
  profile: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 10,
  },
});

export default Header;
