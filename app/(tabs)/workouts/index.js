import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import workoutStyles from "./workout.styles";
import PrimaryButton from "../../../components/PrimaryButton";
import ProfileLogo from "../../../assets/profile.png";
import WorkoutCardComponent from "../../../components/WorkoutCardComponent";
import { selectUserWorkouts } from "../../../redux/reducers/userSlice";
import { useSelector } from "react-redux";

const index = () => {
  const workouts = useSelector(selectUserWorkouts);
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
          {workouts &&
            workouts.map((workout) => (
              <WorkoutCardComponent
                key={workout.id}
                workout={workout}
                handlePress={() => {}}
              />
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
