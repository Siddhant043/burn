import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import PrimaryButton from "../PrimaryButton";
import { useUpdateWorkout } from "../../hooks/workout/workoutHook";

const index = React.memo(({ exercise, lastItem, workout = {} }) => {
  const { updateWorkout } = useUpdateWorkout();
  const checkIfWorkoutExists = () => {
    return Object.keys(workout).length !== 0;
  };
  const checkIfExerciseAlreadyPresent = () => {
    if (checkIfWorkoutExists()) {
      return workout.exercises.some((obj) => obj._id === exercise._id);
    }
  };

  const addWorkout = () => {
    const updatedWorkout = {
      ...workout,
      exercises: [...workout.exercises, exercise._id],
    };
    updateWorkout(updatedWorkout);

    checkIfExerciseAlreadyPresent();
  };

  const removeWorkout = () => {
    const updatedExerciseList = workout.exercises.filter(
      (obj) => obj._id !== exercise._id
    );
    const updatedWorkout = {
      ...workout,
      exercises: updatedExerciseList,
    };
    updateWorkout(updatedWorkout);
    checkIfExerciseAlreadyPresent();
  };

  return (
    <View style={lastItem ? styles.lastItem : styles.main}>
      <Image source={{ uri: exercise.imageUrl }} style={styles.imgContainer} />
      <View style={styles.textContainer}>
        <Text style={styles.exerciseName}>{exercise.exerciseName}</Text>
        <Text style={styles.bodyPart}>{exercise.bodyPart}</Text>
      </View>
      {!checkIfWorkoutExists() ? (
        <PrimaryButton handlePress={() => {}} size={"small"}>
          View
        </PrimaryButton>
      ) : checkIfExerciseAlreadyPresent() ? (
        <Pressable onPress={removeWorkout}>
          <Text style={styles.removeText}>Remove</Text>
        </Pressable>
      ) : (
        <PrimaryButton handlePress={addWorkout} size={"small"}>
          Add
        </PrimaryButton>
      )}
    </View>
  );
});

export default index;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.gray[400],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  lastItem: {
    backgroundColor: COLORS.gray[400],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 300,
  },
  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
  textContainer: {
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    width: 150,
    height: 100,
  },
  exerciseName: {
    color: COLORS.white,

    textTransform: "capitalize",
    fontWeight: 500,
    fontFamily: "PoppinsMedium",
  },
  bodyPart: {
    color: COLORS.white,
    textTransform: "capitalize",
    fontFamily: "PoppinsLight",
  },
  removeText: {
    color: COLORS.red[600],
    fontSize: 12,
    fontFamily: "PoppinsMedium",
  },
});
