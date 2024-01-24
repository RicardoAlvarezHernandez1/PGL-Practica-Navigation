import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";
import { Animated } from "react-native";

type RecordFile = {
  time: string;
  uri: string;
};

export const saveURI = async (Object: string) => {
  await AsyncStorage.setItem("URI", Object);
};

export const getRecordingArray = async () => {
  return await AsyncStorage.getItem("URI");
};

export const removeAllRecords = async () => {
  await AsyncStorage.removeItem("URI");
};

export function getDurationFormatted(millis: number) {
  const minutes = millis / 1000 / 60;
  const minutesDisplay = Math.floor(minutes);
  const seconds = Math.round((minutes - minutesDisplay) * 60);
  const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutesDisplay}:${secondsDisplay}`;
}

export const playRecordFile = async (recordFile: RecordFile): Promise<void> => {
  const playbackObject = new Audio.Sound();
  await playbackObject.loadAsync({ uri: recordFile.uri });
  await playbackObject.playAsync();
};

export const fadeAnimation = (fadeAnim: Animated.Value) => {
  {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      fadeAnimation(fadeAnim);
    });
  }
};
