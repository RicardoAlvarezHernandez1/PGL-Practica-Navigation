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
import { Audio } from "expo-av";
import {
  fadeAnimation,
  getDurationFormatted,
  getRecordingArray,
  playRecordFile,
  removeAllRecords,
  saveURI,
} from "../services/RecorderService";
import { ScrollView } from "react-native-gesture-handler";

type RecordFile = {
  time: string;
  uri: string;
};

const RecorderScreen = () => {
  const { user, setUserName } = React.useContext(UserContext);
  const [isRecording, setisRecording] = React.useState(false);
  const [fadeAnim, setfadeAnim] = React.useState(new Animated.Value(0));
  const [recording, setRecording] = React.useState<Audio.Recording>();
  const [recordings, setRecordings] = React.useState<Array<RecordFile>>([]);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const recordingsFunction = async () => {
      const data = await getRecordingArray();
      if (data != null) {
        setRecordings(JSON.parse(data));
      } else {
        console.log("No hay grabaciones");
      }
    };
    recordingsFunction();
  }, []);

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        setisRecording(!isRecording);
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

  async function stopRecording() {
    setRecording(undefined);

    if (recording !== undefined) {
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
      });
      let updatedRecordings = [...recordings];
      const recordTime: number = (await recording.getStatusAsync())
        .durationMillis;

      const uriRecord = recording.getURI();
      updatedRecordings.push({
        time: getDurationFormatted(recordTime),
        uri: uriRecord ?? "",
      });

      setRecordings(updatedRecordings);
      saveURI(JSON.stringify(updatedRecordings));
      setisRecording(!isRecording);
    }
  }

  const removeRecord = (item: RecordFile) => {
    const newRecordArray: RecordFile[] = recordings.filter(
      (data) => data != item
    );
    saveURI(JSON.stringify(newRecordArray));
    setRecordings(newRecordArray);
  };

  const removeRecordsList = () => {
    removeAllRecords();
    setRecordings([]);
  };

  function getRecordingLines() {
    if (recordings.length == 0) {
      return (
        <View style={styles.noRecordings}>
          <Text>No recordings to show</Text>
        </View>
      );
    } else {
      return recordings.map((recordingLine, index) => {
        return (
          <View key={index} style={styles.individualRecordContainer}>
            <Text>
              Recording {index + 1} - {recordingLine.time}
            </Text>
            <TouchableOpacity onPress={() => playRecordFile(recordingLine)}>
              <Ionicons name={"play-outline"} size={20} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeRecord(recordingLine)}>
              <Ionicons name={"trash-outline"} size={20} color={"black"} />
            </TouchableOpacity>
          </View>
        );
      });
    }
  }

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
          <>
            <View style={{ ...styles.boxShadow, ...styles.recordContainer }}>
              <TouchableOpacity
                onPress={() => {
                  startRecording(), fadeAnimation(fadeAnim);
                }}
              >
                <Ionicons
                  name={"mic-circle-outline"}
                  size={50}
                  color={"black"}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.recordsContainer}>
              <View style={styles.recordsTitleContainer}>
                <Text style={styles.descriptionRecords}>RECORDS</Text>
                <TouchableOpacity onPress={() => removeRecordsList()}>
                  <Text style={{ marginTop: 15, color: "red" }}>
                    Delete All
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scroll}>
                {getRecordingLines()}
              </ScrollView>
            </View>
          </>
        ) : (
          <>
            <View
              style={{ ...styles.boxShadow, ...styles.isRecordingContainer }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => stopRecording()}
              >
                <Ionicons name={"stop-outline"} size={40} color={"red"} />
                <Animated.Text
                  style={{ ...styles.recordingText, opacity: fadeAnim }}
                >
                  Recording...{" "}
                </Animated.Text>
              </TouchableOpacity>
            </View>
            <View style={styles.recordsContainer}>
              <View style={styles.recordsTitleContainer}>
                <Text style={styles.descriptionRecords}>RECORDS</Text>
                <TouchableOpacity onPress={() => removeRecordsList()}>
                  <Text style={{ marginTop: 5, color: "red" }}>Delete All</Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scroll}>
                {getRecordingLines()}
              </ScrollView>
            </View>
          </>
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
  scroll: {
    width: 200,
  },
  recordingText: {
    fontSize: 20,
    fontWeight: "400",
    color: "red",
  },
  recordsTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  noRecordings: {
    alignSelf: "center",
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  descriptionRecords: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    padding: 10,
  },
  recordContainer: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.firstColor,
    borderRadius: 60,
    marginTop: 10,
  },
  individualRecordContainer: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: AppColors.firstColor,
    borderRadius: 30,
    marginTop: 8,
    padding: 5,
  },
  recordsContainer: {
    width: 220,
    height: 260,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: AppColors.firstColor,
    borderRadius: 30,
    marginTop: 8,
    padding: 10,
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
