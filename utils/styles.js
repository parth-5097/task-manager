import { StyleSheet } from "react-native";

/**
 * Common styles for the application.
 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 65,
  },
  imgContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  logoImg: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  heading: {
    color: "#dddddd",
    fontSize: 32,
    textAlign: "center",
    marginVertical: 20,
  },
  taskList: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  btn: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
});
