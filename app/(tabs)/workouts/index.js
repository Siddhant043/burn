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
import WorkoutDetailsModal from "../../../components/WorkoutDetailsModal";
import { selectUserWorkouts } from "../../../redux/reducers/userSlice";
import { useSelector } from "react-redux";

const Index = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const userWorkouts = useSelector(selectUserWorkouts);

  useEffect(() => {
    setWorkouts(userWorkouts);
  }, userWorkouts);

  const handleOpenModal = (workout) => {
    setSelectedWorkout(workout);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  console.log("workouts", workouts);

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
          {workouts.length > 0 ? (
            <FlatList
              data={workouts}
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
          <WorkoutDetailsModal
            openModal={openModal}
            workout={selectedWorkout}
            closeModal={closeModal}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Index;
