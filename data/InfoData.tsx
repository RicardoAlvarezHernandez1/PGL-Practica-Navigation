import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/AppColors";

const RicaInfoData = () => {
  return (
    <View style={styles.scrollStyle}>
      <Text style={styles.likedInfo}>La Proteína</Text>
      <Text style={styles.likedInfo}>Las Mancuernas</Text>
      <Text style={styles.likedInfo}>Las Barras</Text>
      <Text style={styles.likedInfo}>La Banca</Text>
      <Text style={styles.likedInfo}>Hacer Pecho</Text>
      <Text style={styles.likedInfo}>One Piece</Text>
      <Text style={styles.likedInfo}>La Proteína</Text>
      <Text style={styles.likedInfo}>El anime</Text>
      <Text style={styles.likedInfo}>BERSERK</Text>
      <Text style={styles.likedInfo}>La Proteína</Text>
      <Text style={styles.likedInfo}>La hipertrofia muscular</Text>
      <Text style={styles.likedInfo}>La Proteína Gorda</Text>
    </View>
  );
};

export default RicaInfoData;

const styles = StyleSheet.create({
  scrollStyle: {
    //padding: 20,
    marginBottom: 20,
  },
  likedInfo: {
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: appColors.secondColor,
  },
});
