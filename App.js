import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/HomeScreen";
import ExploreScreen from "./src/ExploreScreen";
import SubscriptionScreen from "./src/SubscriptionScreen";
import LibraryScreen from "./src/LibraryScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconNameSub;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Explore") {
              iconName = "explore";
            } else if (route.name === "Subscription") {
              iconName = "subscriptions";
            } else if (route.name === "Library") {
              iconName = "video-library";
            }

            return (
              <View>
                <MaterialIcons name={iconName} size={24} color="black" />
              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Subscription" component={SubscriptionScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
