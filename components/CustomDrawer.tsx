import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
//import CustomHeader from './CustomHeader';

import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import appColors from "../assets/styles/AppColors";
import Welcome from "./Welcome";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    //header: ({navigation}) => <CustomHeader navigation={navigation}></CustomHeader>,
    headerTitle: "RAH-APP",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: appColors.firstColor,
    },
    headerTintColor: "black",
    drawerItemStyle: {
      width: "100%",
    },
    drawerActiveTintColor: "darkblue",
    drawerActiveBackgroundColor: appColors.secondColor,
    drawerInactiveTintColor: "black",
    drawerInactiveBackgroundColor: appColors.firstColor,
    drawerType: "front",
  };

  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen
        name="Home"
        component={Welcome}
        options={{ title: "Welcome" }}
      />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  headerContainer: {},
  headerTitle: {},
});
