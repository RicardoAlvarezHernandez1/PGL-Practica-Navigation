import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import AppColors from "../assets/styles/AppColors";

const Card = (props: {
  avatar: ImageProps;
  title: string;
  body: string;
  imageBackground: ImageProps;
}) => {
  const { avatar, title, body, imageBackground } = props;
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={imageBackground}
        style={styles.BackImage}
        resizeMode="cover"
      >
        <View style={styles.cardContent}>
          <Image style={styles.avatar} source={avatar} />
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <Text style={styles.bodyText}>{body}</Text>
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: -9,
  },
  cardContent: {
    margin: 8,
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    width: "70%",
    flexDirection: "row",
  },
  cardTitle: {
    fontWeight: "900",
    textAlign: "center",
    paddingBottom: 1,
    fontSize: 30,
    fontStyle: "italic",
    color: AppColors.secondColor,
    paddingTop: 20,
    paddingLeft: 25,
    textShadowColor: "black",
    textShadowRadius: 30,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderColor: AppColors.firstColor,
    borderWidth: 2,
  },
  BackImage: {
    padding: 15,
    width: 400,
  },
  bodyText: {
    color: AppColors.firstColor,
    fontWeight: "700",
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
    textShadowColor: "black",
    textShadowRadius: 5,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
