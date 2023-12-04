import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import QRData from "../data/QRData";
import AppColors from "../assets/styles/AppColors";
import InfoData from "../data/InfoData";

const InfoList = () => {
  return (
    <View style={styles.principalContainer}>
      <Text style={styles.infoTitle}>Cosas que ME ENCANTAN :</Text>
      <ScrollView style={styles.scrollStyle}>
        <InfoData />
      </ScrollView>
    </View>
  );
};
export default InfoList;

const styles = StyleSheet.create({
  principalContainer: {
    flex: 1,
    marginBottom: 0,
    width: 400,
    paddingHorizontal: 40,
    backgroundColor: AppColors.firstColor,
  },
  infoTitle: {
    fontWeight: "900",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
  },
  scrollStyle: {
    padding: 10,
    marginBottom: 10,
  },
  icons: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
});
