import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import ExerciseListComponent from "../ExerciseListComponent";
import { AntDesign } from "@expo/vector-icons";

const index = ({ openModal, workout = {}, closeExerciseModal }) => {
  return (
    <Modal visible={openModal} animationType="slide" transparent={true}>
      <SafeAreaView>
        <View style={styles.visibleView}>
          <View style={styles.iconView}>
            <TouchableOpacity onPress={closeExerciseModal}>
              <AntDesign name="close" style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <ExerciseListComponent workout={workout} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default index;

const styles = StyleSheet.create({
  visibleView: {
    flex: 1,
    padding: 20,
    minHeight: "100%",
    width: "100%",
    backgroundColor: COLORS.gray[600],
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    color: COLORS.gray[100],
    fontSize: 24,
  },
});
