import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../constants";
import { useExerciseData } from "../../hooks/exercise/exerciseHook";
import ExerciseCardComponent from "../ExerciseCardComponent";

const index = ({ workout }) => {
  const [exerciseList, setExerciseList] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading, error, refetch } = useExerciseData();

  useEffect(() => {
    if (search === "") {
      setExerciseList([...data]);
    }
  }, [data, isLoading]);

  const handleEndReached = () => {
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (page !== 1) {
      refetch(page);
    }
  }, [page]);
  return (
    <View>
      <TextInput
        style={styles.searchBox}
        placeholder="Search for exercise"
        placeholderTextColor={"#868181"}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      <FlatList
        data={exerciseList}
        renderItem={({ item, index }) => (
          <ExerciseCardComponent
            exercise={item}
            lastItem={exerciseList.length - 1 === index}
            workout={workout}
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
  );
};

export default index;

const styles = StyleSheet.create({
  searchBox: {
    height: 45,
    marginVertical: 20,
    backgroundColor: COLORS.gray[50],
    borderRadius: 10,
    fontSize: 14,
    paddingHorizontal: 14,
    fontFamily: "PoppinsRegular",
  },
});
