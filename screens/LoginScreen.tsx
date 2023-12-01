import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppColors from "../assets/styles/AppColors";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { LoggedContext } from "../context/LoggedContext";
import { UserContext } from "../context/UserContext";

const LoginScreen = () => {
  const { isLogged, toggleIsLogged } = React.useContext(LoggedContext);
  const { user, setUserName } = React.useContext(UserContext);
  const onClickButton = () => {
    toggleIsLogged();
  };

  const setUser = (text: string) => {
    setUserName(text);
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("./../assets/images/Fondo-app.png")}
        style={styles.imagebackground}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("./../assets/images/user.png")}
            style={styles.image}
          ></Image>
          <TextInput
            onChangeText={(text) => setUser(text)}
            placeholder="Nombre..."
            style={styles.inputStyle}
          ></TextInput>
          <TextInput
            placeholder="Contraseña..."
            style={styles.inputStyle}
          ></TextInput>
          <TouchableOpacity style={styles.Pressable} onPress={onClickButton}>
            <Ionicons
              name={"paper-plane-outline"}
              size={20}
              color={"white"}
              style={styles.icon}
            />
            <Text style={styles.buttonContent}>Enviar Datos</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  imagebackground: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  welcomeContainer: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  buttonContent: {
    color: "black",
    fontWeight: "700",
  },
  icon: {
    marginRight: 5,
  },
  Pressable: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: AppColors.secondColor,
  },
  inputStyle: {
    width: 250,
    height: 50,
    backgroundColor: AppColors.thirdColor,
    borderRadius: 10,
    marginTop: 10,
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
