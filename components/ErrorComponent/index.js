import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.red[500],
    marginTop: 10,
  },
});

const ErrorComponent = ({ error }) => {
  if (error !== "") return <Text style={styles.errorText}>{error}</Text>;
  else return null;
};

export default ErrorComponent;
