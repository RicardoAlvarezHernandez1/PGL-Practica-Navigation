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

type WelcomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};
const WelcomeUser = ({ navigation }: WelcomeScreenProps) => {
  const { user, setUserName } = React.useContext(UserContext);
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("./../assets/images/Fondo-app.png")}
        style={styles.image}
      >
        <View style={{ ...styles.boxShadow, ...styles.welcomeContainer }}>
          <Text style={styles.welcomeTitle}>¡ WELCOME {user} !</Text>
          <Text style={styles.description}>Thank you loggin in ;) </Text>
          <Text style={styles.description}>
            Please , press the portfolio button to see my portfolio
          </Text>
          <TouchableOpacity
            style={{ ...styles.touchable, ...styles.boxShadow }}
            onPress={() => navigation.navigate("Portfolio")}
          >
            <Text style={styles.buttonContent}>Portfolio</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeUser;

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
