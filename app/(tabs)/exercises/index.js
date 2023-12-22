import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import exercisesStyles from "./exercises.styles";
import ProfileLogo from "../../../assets/profile.png";
import { useExerciseData } from "../../../hooks/exercise/exerciseHook";
import ExerciseCardComponent from "../../../components/ExerciseCardComponent";

const index = () => {
  const { data, isLoading, error, refetch } = useExerciseData();

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
        <View style={exercisesStyles.cardsContainer}>
          {isLoading ? (
            <Text style={{ color: "#fff" }}>Loading...</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ExerciseCardComponent exercise={item} handlePress={() => {}} />
              )}
              keyExtractor={(item) => item?._id}
              contentContainerStyle={{ rowGap: 10 }}
              vertical
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
