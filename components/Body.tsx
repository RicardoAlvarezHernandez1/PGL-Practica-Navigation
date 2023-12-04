import { StyleSheet, View } from "react-native";
import React from "react";
import { CardData, cardData } from "../data/CardData";
import Card from "./Card";
import InfoList from "./InfoList";

const Body = () => {
  const cardDataId1 = cardData.find((portafolios) => portafolios.id === 1);
  return (
    <View>
      <View style={styles.bodyStyles}>
        {cardDataId1 ? (
          <Card
            avatar={cardDataId1.image}
            title={cardDataId1.title}
            body={cardDataId1.body}
            imageBackground={cardDataId1.imageBackground}
          />
        ) : null}
        <InfoList />
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
  },
});
