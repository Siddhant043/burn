import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    alignItems: "flex-start",
  },
  text: (size) => ({
    textAlign: "center",
    color: COLORS.gray[800],
    fontSize: size === "small" ? 13 : size === "medium" ? 15 : 18,
    fontFamily: "PoppinsMedium",
  }),
});

const index = ({ handlePress, children, size }) => {
  const getButtonSize = () => {
    switch (size) {
      case "small":
        return 20;
      case "medium":
        return 50;
      case "large":
        return 70;
      default:
        return 30;
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <LinearGradient
        colors={["#2DFFF5", "#C3F99D", "#DBF98F", "#FFF878"]}
        start={{ x: 0, y: 0 }} // Gradient start point (top-left)
        end={{ x: 1, y: 0 }} // Gradient end point (top-right)
        style={{
          paddingVertical: 10,
          paddingHorizontal: getButtonSize(),
          borderRadius: 10,
        }}
      >
        <Text style={styles.text(size)}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default index;
