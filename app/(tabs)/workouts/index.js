import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import workoutStyles from "./workout.styles";
import PrimaryButton from "../../../components/PrimaryButton";
import ProfileLogo from "../../../assets/profile.png";
import WorkoutCardComponent from "../../../components/WorkoutCardComponent";
import ExerciseListModal from "../../../components/ExerciseListModal";
import { selectUserWorkouts } from "../../../redux/reducers/userSlice";
import { useSelector } from "react-redux";

const Index = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const userWorkouts = useSelector(selectUserWorkouts);

  const handleOpenModal = (workout) => {
    setSelectedWorkout(workout);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <SafeAreaView style={workoutStyles.main}>
      <View style={workoutStyles.innerContainer}>
        <View style={workoutStyles.headerContainer}>
          <Text style={workoutStyles.title}>Workouts</Text>
          <Image
            source={ProfileLogo}
            style={workoutStyles.profileImage}
            alt=""
            resizeMode="contain"
          />
        </View>
        <View style={workoutStyles.ctaContainer}>
          <PrimaryButton handlePress={() => {}} size={"small"}>
            Create Workout
          </PrimaryButton>
          <Text style={workoutStyles.historyCta}>Check History</Text>
        </View>
        <View style={styles.cardsContainer}>
          {userWorkouts.length > 0 ? (
            <FlatList
              data={userWorkouts}
              renderItem={({ item }) => (
                <WorkoutCardComponent
                  workout={item}
                  handleOpenModal={handleOpenModal}
                />
              )}
              keyExtractor={(item) => item?._id}
              contentContainerStyle={{ rowGap: 10 }}
              vertical
            />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        {/* Render the modal component based on the state */}
        {openModal && selectedWorkout && (
          <ExerciseListModal
            openModal={openModal}
            workout={selectedWorkout}
            closeExerciseModal={closeModal}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Index;
