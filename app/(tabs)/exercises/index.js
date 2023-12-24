import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import exercisesStyles from "./exercises.styles";
import ProfileLogo from "../../../assets/profile.png";
import { useExerciseData } from "../../../hooks/exercise/exerciseHook";
import ExerciseListComponent from "../../../components/ExerciseListComponent";

const index = () => {
  return (
    <SafeAreaView style={exercisesStyles.main}>
      <View style={exercisesStyles.innerContainer}>
        <View style={exercisesStyles.headerContainer}>
          <Text style={exercisesStyles.title}>Exercises</Text>
          <Image
            source={ProfileLogo}
            style={exercisesStyles.profileImage}
            alt=""
            resizeMode="contain"
          />
        </View>
        <ExerciseListComponent />
      </View>
    </SafeAreaView>
  );
};

export default index;
