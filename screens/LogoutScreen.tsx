import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { UserContext } from "../context/UserContext";
import AppColors from "../assets/styles/AppColors";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { logoutUser } from "../services/LogoutService";

type WelcomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};
const LogoutScreen = ({ navigation }: WelcomeScreenProps) => {
  const { user, setUserName } = React.useContext(UserContext);
  const { isLogged, toggleIsLogged } = React.useContext(UserContext);
  const onClickButton = () => {
    logoutUser().then((response) => {
      if (response.status == 200) {
        toggleIsLogged();
      } else {
        window.alert("Ha habido un problema");
      }
    });
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("./../assets/images/fondologgeado.png")}
        style={styles.image}
      >
        <View style={{ ...styles.boxShadow, ...styles.welcomeContainer }}>
          <Text style={styles.welcomeTitle}>¡ BYE {user} !</Text>
          <Text style={styles.description}>
            Thanks for spend your time on my app my friend;)
          </Text>
          <TouchableOpacity
            style={{ ...styles.touchable, ...styles.boxShadow }}
            onPress={() => onClickButton()}
          >
            <Text style={styles.buttonContent}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogoutScreen;

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
    width: 275,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.firstColor,
    borderRadius: 30,
    padding: 10,
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
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 16,
  },
});
