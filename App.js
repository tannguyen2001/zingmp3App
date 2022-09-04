import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomNavigator from "./components/Tab/BottomNavigator";

const StackTab = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View View style={styles.container}>
        <NavigationContainer>
          <StackTab.Navigator>
            <StackTab.Screen
              name="bottomTab"
              component={BottomNavigator}
              options={{
                headerShown: false,
              }}
            />
          </StackTab.Navigator>
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
