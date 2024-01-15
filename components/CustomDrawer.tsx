import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
import LogoutScreen from "../screens/LogoutScreen";
import { UserContext } from "../context/UserContext";
import RegistrationScreen from "../screens/RegistrationScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const { isLogged, toggleIsLogged } = React.useContext(UserContext);

  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
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
        <>
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
            <Drawer.Screen
              name="Logout"
              component={LogoutScreen}
              options={{
                drawerIcon: () => (
                  <Ionicons name={"log-out-outline"} size={25} color={"red"} />
                ),
              }}
            />
          </Drawer.Navigator>
        </>
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
          <Drawer.Screen name="Registration" component={RegistrationScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      )}
    </>
  );
};

export default CustomDrawer;
