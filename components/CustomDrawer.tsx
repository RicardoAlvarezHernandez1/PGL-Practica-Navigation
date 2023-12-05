import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";
//import CustomHeader from './CustomHeader';

import LoginScreen from "../screens/LoginScreen";
import appColors from "../assets/styles/AppColors";
import Welcome from "../screens/Welcome";
import WelcomeUser from "../screens/WelcomeUser";
import PortfolioScreen from "../screens/PortfolioScreen";
import UserProvider from "../providers/UserProvider";
import { UserContext } from "../context/UserContext";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const { isLogged, toggleIsLogged } = React.useContext(UserContext);

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
    <>
      {isLogged ? (
        <Drawer.Navigator
          initialRouteName="WelcomeUser"
          screenOptions={drawerNavigatorScreenOptions}
        >
          <Drawer.Screen
            name="Home"
            component={WelcomeUser}
            options={{ title: "WelcomeUser" }}
          />
          <Drawer.Screen name="Portfolio" component={PortfolioScreen} />
        </Drawer.Navigator>
      ) : (
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
        </Drawer.Navigator>
      )}
    </>
  );
};

export default CustomDrawer;
