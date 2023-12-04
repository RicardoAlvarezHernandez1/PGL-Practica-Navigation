import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const QRData = () => {
  return (
    <ImageBackground source={require("./../assets/images/fondologgeado.png")}>
      <View style={styles.bodyStyles}>
        <View style={styles.centerQRCode}>
          <QRCode
            value="https://github.com/RicardoAlvarezHernandez1/PGL-Practica-Navigation.git"
            size={200}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default QRData;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
  },
  centerQRCode: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
