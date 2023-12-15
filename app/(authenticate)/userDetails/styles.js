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
  imageContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    height: 100,
    width: 100,
  },
  headingContainer: {
    flexDirection: "column",
  },
  heading: {
    fontSize: 32,
    marginBottom: 5,
    color: COLORS.white,
    fontFamily: "PoppinsSemiBold",
  },
  formContainer: {
    flexDirection: "column",
    marginTop: 5,
  },
  input: {
    backgroundColor: COLORS.gray[50],
    padding: 14,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    marginTop: 20,
  },
  inputTwo: {
    backgroundColor: COLORS.gray[50],
    padding: 14,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    marginTop: 30,
    flex: 1,
  },
  inputLeft: {
    backgroundColor: COLORS.gray[50],
    padding: 14,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    marginTop: 30,
    flex: 1,
    marginRight: 10,
  },
  inputRight: {
    backgroundColor: COLORS.gray[50],
    padding: 14,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    marginTop: 30,
    flex: 1,
    marginLeft: 10,
  },
  dateContainer: {
    backgroundColor: COLORS.gray[50],
    padding: 14,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
  },
  dateText: (date) => ({
    color: date ? COLORS.black : "#868181",
  }),
  secondLineContainer: {
    flexDirection: "row",
    gap: 10,
  },
  thirdLineContainer: {
    flexDirection: "row",
    gap: 10,
  },
  modalView: {
    height: 200,
    flex: 1,
  },
  datePicker: {
    backgroundColor: COLORS.white,
    position: "absolute",
    zIndex: 2,
    top: 250,
    left: 30,
  },
  confirmDate: {
    marginTop: 500,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: COLORS.gray[50],
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 100,
    borderRadius: 10,
  },
  buttonContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
});
