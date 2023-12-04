import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Body from "../components/Body";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import AppColors from "../assets/styles/AppColors";
import QRData from "../data/QRData";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const PortfolioScreen = () => {
  const PortfolioTabOptions = (): BottomTabNavigationOptions => {
    return {
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={"document-text-outline"} size={30} color={color} />
      ),
    };
  };

  const QRTabOptions = (): BottomTabNavigationOptions => {
    return {
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={"qr-code-outline"} size={30} color={color} />
      ),
    };
  };

  const tabNavigatorScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarInactiveTintColor: AppColors.firstColor,
    tabBarActiveTintColor: AppColors.fifthColor,
    tabBarShowLabel: false,
    tabBarStyle: { backgroundColor: AppColors.secondColor },
  };
  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={tabNavigatorScreenOptions}>
        <Tab.Screen
          name="Body"
          component={Body}
          options={PortfolioTabOptions}
        />
        <Tab.Screen name="QR" component={QRData} options={QRTabOptions} />
      </Tab.Navigator>
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 20,
    backgroundColor: "#fff",
  },
});
