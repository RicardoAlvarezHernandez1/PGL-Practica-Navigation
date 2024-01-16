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
              name="WelcomeUser"
              component={WelcomeUser}
              options={{
                drawerIcon: () => (
                  <Ionicons name={"happy-outline"} size={25} color={"black"} />
                ),
              }}
            />
            <Drawer.Screen
              name="Portfolio"
              component={PortfolioScreen}
              options={{
                drawerIcon: () => (
                  <Ionicons name={"reader-outline"} size={25} color={"black"} />
                ),
              }}
            />
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
            name="Welcome"
            component={Welcome}
            options={{
              drawerIcon: () => (
                <Ionicons
                  name={"thumbs-up-outline"}
                  size={25}
                  color={"black"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              drawerIcon: () => (
                <Ionicons
                  name={"person-add-outline"}
                  size={25}
                  color={"black"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{
              drawerIcon: () => (
                <Ionicons name={"log-in-outline"} size={25} color={"black"} />
              ),
            }}
          />
        </Drawer.Navigator>
      )}
    </>
  );
};

export default CustomDrawer;
