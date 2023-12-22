import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export default styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  innerContainer: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: "PoppinsMedium",
  },
  profileImage: {
    height: 35,
    width: 35,
  },
  searchBox: {
    height: 45,
    marginVertical: 20,
    backgroundColor: COLORS.gray[50],
    borderRadius: 10,
    fontSize: 14,
    paddingHorizontal: 14,
    fontFamily: "PoppinsRegular",
  },
  cardsContainer: {},
});
