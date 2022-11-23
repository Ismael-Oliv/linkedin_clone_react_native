import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as status, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { RootStack } from "./src/navigation/Stack/Root";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View
          style={{
            marginBottom: Platform.OS === "android" ? status.currentHeight : 0,
          }}
        >
          <StatusBar style="auto" />
        </View>
        <RootStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2b2b",
    alignItems: "center",
    justifyContent: "center",
  },
});
