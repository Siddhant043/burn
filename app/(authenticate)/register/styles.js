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
    marginBottom: 10,
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
    marginTop: 30,
  },
  passwordContainer: {
    position: "relative",
  },
  passwordIcon: {
    position: "absolute",
    right: 10,
    top: 42,
    zIndex: 2,
  },
  forgotPasswordContainer: {
    marginTop: 20,
  },
  forgotPassword: {
    textAlign: "right",
    color: COLORS.white,
    fontSize: 12,
    fontFamily: "PoppinsMedium",
  },
  buttonContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  secondContainer: {
    marginTop: 10,
  },
  dividerContainerOne: {
    flexDirection: "row",
    alignItems: "center",
  },
  dividerOne: { flex: 1, height: 1, backgroundColor: COLORS.gray[100] },
  dividerText: {
    width: 100,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: COLORS.gray[100],
  },
  otherLoginContainer: {
    marginTop: 20,
    gap: 20,
  },
  goToSignupContainer: {
    marginTop: 20,
  },
  signupText: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 12,
    letterSpacing: 0.7,
    fontFamily: "PoppinsRegular",
  },
});
