import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const index = ({ exercise }) => {
  return (
    <View style={styles.main}>
      <Image source={{ uri: exercise.imageUrl }} style={styles.imgContainer} />
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
    flexDirection: "row",
  },
  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
});
