import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import AppColors from "../assets/styles/AppColors";
import {
  NavigationContainer,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";

type WelcomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};
const Welcome = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("./../assets/images/Fondo-app.png")}
        style={styles.image}
      >
        <View style={{ ...styles.boxShadow, ...styles.welcomeContainer }}>
          <Text style={styles.welcomeTitle}>¡ WELCOME TO RAH-APP !</Text>
          <Text style={styles.description}>
            An app with some functionalities
          </Text>
          <Text style={styles.description}>Designed by Ricardo Álvarez</Text>
          <TouchableOpacity
            style={{ ...styles.touchable, ...styles.boxShadow }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonContent}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  welcomeTitle: {
    fontWeight: "700",
    fontSize: 35,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  welcomeContainer: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.firstColor,
    borderRadius: 30,
  },
  buttonContent: {
    color: "black",
    fontWeight: "700",
  },
  touchable: {
    marginTop: 15,
    marginBottom: 15,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: AppColors.secondColor,
  },
  boxShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 16,
  },
});
