import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { UserContext } from "../context/UserContext";
import AppColors from "../assets/styles/AppColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AVPlaybackStatus, Audio } from "expo-av";

const RecorderScreen = () => {
  const { user, setUserName } = React.useContext(UserContext);
  const [isRecording, setisRecording] = React.useState(false);
  const [fadeAnim, setfadeAnim] = React.useState(new Animated.Value(0));
  const [recording, setRecording] = React.useState<Audio.Recording>();
  const [recordings, setRecordings] = React.useState<
    Array<{
      sound: Audio.Sound;
      duration: string;
      file: string | null;
    }>
  >([]);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  function getDurationFormatted(millis: number) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  async function stopRecording() {
    if (recording) {
      try {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        let updatedRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
          sound: sound,
          duration: getDurationFormatted(
            (await recording.getStatusAsync()).durationMillis
          ),
          file: recording.getURI(),
        });
        setRecordings(updatedRecordings);
      } catch (err) {
        console.error("Failed to stop recording", err);
        setRecording(undefined);
      }
    } else {
      console.log("Error on stop recording.");
    }
  }

  const fadeAnimation = () => {
    {
      if (!isRecording) {
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
          fadeAnimation();
        });
      }
    }
  };

  const OnclickButton = () => {
    setisRecording(!isRecording);
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("./../assets/images/fondologgeado.png")}
        style={styles.image}
      >
        <View style={{ ...styles.boxShadow, ...styles.welcomeContainer }}>
          <Text style={styles.welcomeTitle}>RAH-APP Recorder</Text>
        </View>
        <View style={{ ...styles.boxShadow, ...styles.descriptionContainer }}>
          <Text style={styles.description}>
            {user} , record your voice memos and delete them whenever you want
          </Text>
        </View>
        {!isRecording ? (
          <View style={{ ...styles.boxShadow, ...styles.recordContainer }}>
            <TouchableOpacity
              onPress={() => OnclickButton()}
              onPressIn={() => fadeAnimation()}
            >
              <Ionicons name={"mic-circle-outline"} size={50} color={"black"} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ ...styles.boxShadow, ...styles.isRecordingContainer }}>
            <TouchableOpacity onPress={() => OnclickButton()}>
              <Ionicons name={"stop-outline"} size={40} color={"red"} />
            </TouchableOpacity>
            <Animated.Text
              style={{ ...styles.recordingText, opacity: fadeAnim }}
            >
              Recording...{" "}
            </Animated.Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default RecorderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  welcomeTitle: {
    fontWeight: "700",
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  isRecordingContainer: {
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.firstColor,
    borderRadius: 30,
    padding: 6,
    marginTop: 10,
  },
  recordingText: {
    fontSize: 20,
    fontWeight: "400",
    color: "red",
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  recordContainer: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.firstColor,
    borderRadius: 60,
    marginTop: 10,
  },
  descriptionContainer: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.firstColor,
    borderRadius: 30,
    padding: 6,
  },
  welcomeContainer: {
    width: 275,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.firstColor,
    borderRadius: 30,
    paddingBottom: 20,
    marginVertical: 10,
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
