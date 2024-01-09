import React, { useState } from "react";
import {
  Image,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import AppColors from "../assets/styles/AppColors";
import { getRandomActivities } from "../services/randomActivitiesService";

const ActivitynaitorScreen = () => {
  let [displaySpinner, setDisplaySpinner] = useState<boolean>(false);
  let [activity, setActivity] = useState<string>();

  const fetchActivity = () => {
    const fetchData = async () => {
      setDisplaySpinner(true);
      const newActivity = await getRandomActivities();
      setActivity(newActivity);
      setDisplaySpinner(false);
    };

    fetchData();
  };

  return (
    <View style={styles.screenContainer}>
      <Spinner
        visible={displaySpinner}
        textContent={"Requesting activities..."}
        textStyle={{ color: "#FFF" }}
      />
      <Text style={styles.title}>ACTIVITYNAITOR</Text>
      <Pressable
        onPress={fetchActivity}
        style={styles.submitButton}
        accessibilityLabel="Find activity"
      >
        <Text style={styles.buttonText}> SEARCH </Text>
      </Pressable>
      <Text style={styles.activity}>{activity}</Text>
    </View>
  );
};

export default ActivitynaitorScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: AppColors.secondColor,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: AppColors.thirdColor,
    color: AppColors.firstColor,
    width: "40%",
    alignSelf: "center",
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: AppColors.firstColor,
    textTransform: "uppercase",
  },
  activity: {
    width: "80%",
    backgroundColor: AppColors.fourthColor,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
