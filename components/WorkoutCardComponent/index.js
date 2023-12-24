import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import PrimaryButton from "../PrimaryButton";
import { format } from "date-fns";
import { MaterialIcons } from "@expo/vector-icons";

const index = ({ workout, handleOpenModal }) => {
  const { workoutName, exercises, createdAt } = workout;
  const formattedDate = format(createdAt, "dd/MM/yyyy");
  return (
    <View style={styles.main}>
      <View style={styles.headingView}>
        <Text style={styles.headText}>{workoutName}</Text>
        <Text style={styles.createdAt}>{formattedDate}</Text>
      </View>

      <View style={styles.exercisesContainer}>
        {exercises &&
          exercises.map((exercise, index) => (
            <Text style={styles.exerciseName} key={index}>
              {index + 1}. {exercise.exerciseName}
            </Text>
          ))}
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          size="small"
          handlePress={() => handleOpenModal(workout)}
        >
          Edit
        </PrimaryButton>
        <Pressable onPress={() => {}}>
          <MaterialIcons name="delete" size={24} color={COLORS.red[500]} />
        </Pressable>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.gray[400],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  headingView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headText: {
    color: COLORS.white,
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },

  exerciseName: {
    color: COLORS.white,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    textTransform: "capitalize",
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  createdAt: {
    color: COLORS.white,
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
  },
});
