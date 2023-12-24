import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    alignItems: "flex-start",
    borderColor: COLORS.gray[300],
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: (size) => ({
    textAlign: "center",
    color: COLORS.white,
    fontSize: size === "small" ? 13 : size === "medium" ? 15 : 18,
    fontFamily: "PoppinsMedium",
  }),
  icon: {
    marginRight: 20,
    height: 20,
    width: 20,
  },
});

const index = ({ children, icon, handlePress, size }) => {
  return (
    <TouchableOpacity style={styles.main} onPress={handlePress}>
      {icon && (
        <Image
          source={icon}
          alt="icon"
          style={styles.icon}
          resizeMode="contain"
        />
      )}
      <Text style={styles.text(size)}>{children}</Text>
    </TouchableOpacity>
  );
};

export default index;
