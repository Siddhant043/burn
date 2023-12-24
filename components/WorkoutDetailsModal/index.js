import {
  StyleSheet,
  Text,
  SareAreaView,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import PrimaryButton from "../PrimaryButton";
import SimpleButton from "../SimpleButton";
import ExerciseListModal from "../ExerciseListModal";

const index = ({ openModal, workout, closeModal }) => {
  const [workoutName, setWorkoutName] = useState(workout.workoutName);
  const [showWorkoutEdit, toggleWorkoutEdit] = useState(false);
  const handleNamePress = () => {
    toggleWorkoutEdit(true);
  };
  const [openExerciseModal, setOpenExerciseModal] = useState(false);

  const handleOpenModal = (workout) => {
    setSelectedWorkout(workout);
    setOpenExerciseModal(true);
  };

  const closeExerciseModal = () => {
    setOpenExerciseModal(false);
  };

  return (
    <Modal visible={openModal} animationType="fade" transparent={true}>
      <View style={styles.transparentView}>
        <View style={styles.visibleView}>
          <View style={styles.workoutNameContainer}>
            {showWorkoutEdit ? (
              <TextInput
                value={workoutName}
                onChangeText={(text) => setWorkoutName(text)}
                style={styles.workoutNameInput}
                onEndEditing={() => toggleWorkoutEdit(false)}
              />
            ) : (
              <TouchableOpacity onPress={handleNamePress}>
                <Text style={styles.workoutName}>{workoutName}</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.exerciseList}>
            {workout.exercises.map((item, index) => (
              <Text style={styles.exerciseName} key={`${item._id}`}>
                {index + 1}. {item.exerciseName}
              </Text>
            ))}
          </View>
          <View style={styles.ctaContainer}>
            <PrimaryButton
              size="small"
              handlePress={() => setOpenExerciseModal(true)}
            >
              Add exercise
            </PrimaryButton>
            <SimpleButton handlePress={closeModal} size={"small"}>
              Done
            </SimpleButton>
          </View>
        </View>
      </View>
      {openExerciseModal && (
        <ExerciseListModal
          openModal={openExerciseModal}
          workout={workout}
          closeExerciseModal={closeExerciseModal}
        />
      )}
    </Modal>
  );
};

export default index;

const styles = StyleSheet.create({
  transparentView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.transparent,
  },
  visibleView: {
    padding: 20,
    minHeight: 350,
    width: "90%",
    backgroundColor: COLORS.gray[600],
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  workoutNameContainer: {
    width: "100%",
    alignItems: "center",
  },
  workoutName: {
    fontFamily: "PoppinsBold",
    color: COLORS.white,
    fontSize: 20,
  },
  workoutNameInput: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: "PoppinsRegular",
  },
  exerciseList: {
    flexDirection: "column",
    flex: 1,
    marginTop: 20,
  },
  exerciseName: {
    color: COLORS.white,
    fontFamily: "PoppinsRegular",
    textTransform: "capitalize",
    marginBottom: 10,
    fontSize: 16,
  },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
