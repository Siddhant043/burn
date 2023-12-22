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
import ExerciseCardComponent from "../../../components/ExerciseCardComponent";

const index = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const { data, isLoading, error, refetch } = useExerciseData();

  useEffect(() => {
    if (!isLoading && search === "") {
      setExerciseList((prev) => [...prev, ...data]);
    }
  }, [data, isLoading]);

  const handleEndReached = () => {
    setPage((prev) => prev + 1);
    refetch(page);
  };

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
        <TextInput
          style={exercisesStyles.searchBox}
          placeholder="Search for exercise"
          placeholderTextColor={"#868181"}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <View style={exercisesStyles.cardsContainer}>
          <FlatList
            data={exerciseList}
            renderItem={({ item, index }) => (
              <ExerciseCardComponent
                exercise={item}
                lastItem={exerciseList.length - 1 === index}
              />
            )}
            keyExtractor={(item, index) => `${item?._id}${index}`}
            contentContainerStyle={{ rowGap: 20 }}
            vertical
            showsVerticalScrollIndicator={false}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
          />
          {isLoading && <Text style={{ color: "#fff" }}>Loading...</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
