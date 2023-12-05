import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import CustomDrawer from "./components/CustomDrawer";
import appColors from "./assets/styles/AppColors";
import UserProvider from "./providers/UserProvider";

export default function App() {
  const myTheme: Theme = {
    dark: false,
    colors: {
      primary: "white",
      background: appColors.secondColor,
      card: appColors.firstColor,
      text: "white",
      border: "yellow",
      notification: "purple",
    },
  };

  return (
    <View style={styles.appContainer}>
      {/* <NavigationContainer theme={myTheme}> */}
      <UserProvider>
        <NavigationContainer>
          <CustomDrawer></CustomDrawer>
        </NavigationContainer>
      </UserProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
