import { ImageProps } from "react-native";

export type CardData = {
  id: number;
  image: ImageProps;
  title: string;
  body: string;
  imageBackground: ImageProps;
};

export const cardData: CardData[] = [
  {
    id: 1,
    image: require("./../assets/images/lee.jpg"),
    title: "Ricardo Colleman",
    body: "Soy un intento de culturista , al que le gusta reirse de las personas con alopecia degenerativa (es irónico porque yo tambien lo tengo)",
    imageBackground: require("./../assets/images/goldo.jpg"),
  },
];
