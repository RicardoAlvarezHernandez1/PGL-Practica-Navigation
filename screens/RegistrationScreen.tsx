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
import { UserContext } from "../context/UserContext";
import { registerUser } from "../services/RegistrationService";

const RegistrationScreen = () => {
  const { user, setUserName } = React.useContext(UserContext);
  const [userEmail, setuserEmail] = React.useState("");
  const [userPassword, setuserPassword] = React.useState("");
  const [isSuccesfull, setisSuccesfull] = React.useState(201);

  function setUser(text: string) {
    setUserName(text);
  }
  function setEmail(text: string) {
    setuserEmail(text);
  }
  function setPassword(text: string) {
    setuserPassword(text);
  }
  /* function alert (
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions,
  ); */
  const onClickButton = (user: string, email: string, password: string) => {
    registerUser(user, email, password)
      .then((status) => {
        if (status == 400) {
          window.alert("Error : no se a podido registrar el usuario");
        } else {
          window.alert("Registro exitoso");
        }
      })
      .catch((err) => console.log(err));
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
            onChangeText={(text) => setEmail(text)}
            placeholder="Email..."
            style={styles.inputStyle}
          ></TextInput>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Contraseña..."
            style={styles.inputStyle}
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity
            style={styles.Pressable}
            onPress={() =>
              onClickButton(`${user}`, `${userEmail}`, `${userPassword}`)
            }
          >
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

export default RegistrationScreen;

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
