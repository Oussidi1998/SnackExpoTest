import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "MontserratRegular",
    paddingBottom: 20,
  },
  inputContainer: {
    borderColor: "#C7C7C7",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderWidth: 0.5,
    width: "85%",
    height: 40,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    flex: 1,
  },
  buttonContainer: {
    width: "85%",
    padding: 3,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 30,
  },
  outlineBtn: { color: "#643EFF", borderColor: "#643EFF" },
  textLink: {
    color: "#643EFF",
  },
  tinyLogo: {
    height: 100,
    width: 70.25,
    marginBottom: 50,
  },
  tinyLogoSignUp: {
    height: 71,
    width: 50,
    marginBottom: 50,
  },
});
