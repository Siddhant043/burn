import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export default styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.gray[800],
  },
  innerContainer: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: "PoppinsLight",
  },
  name: {
    fontFamily: "PoppinsMedium",
  },
  profileImage: {
    height: 35,
    width: 35,
  },
  workoutContainer: {
    flexDirection: "column",
  },
});
