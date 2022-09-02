import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Personal from "./screens/Personal";
import Follow from "./screens/Follow";
import Detect from "./screens/Detect";
import Zingchart from "./screens/Zingchart";
import Radio from "./screens/Radio";
import GlobalStyles from "./contants/GlobalStyles";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View View style={styles.container}>
        <NavigationContainer>
          <BottomTab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: GlobalStyles.tabarBackground,
              },
              tabBarActiveTintColor: GlobalStyles.textColorPrimary,
            }}
          >
            <BottomTab.Screen
              name="personal"
              component={Personal}
              options={{
                title: "Cá nhân",
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="file-tray-sharp" size={size} color={color} />
                ),
              }}
            />
            <BottomTab.Screen
              name="detect"
              component={Detect}
              options={{
                title: "Khám phá",
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="disc" size={size} color={color} />
                ),
              }}
            />
            <BottomTab.Screen
              name="zingchart"
              component={Zingchart}
              options={{
                title: "#zingchart",
                tabBarIcon: ({ size, color }) => (
                  <Ionicons
                    name="md-pie-chart-outline"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
            <BottomTab.Screen
              name="radio"
              component={Radio}
              options={{
                title: "Radio",
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="radio" size={size} color={color} />
                ),
              }}
            />
            <BottomTab.Screen
              name="follow"
              component={Follow}
              options={{
                title: "Theo dõi",
                tabBarIcon: ({ size, color }) => (
                  <Ionicons name="newspaper" size={size} color={color} />
                ),
              }}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
