import {StyleSheet} from "react-native";

export const styles = ({ opacity }) =>
  StyleSheet.create({
    dotStyle: {
      margin: 10,
      width: 20,
      height: 5,
      borderRadius: 5,
      backgroundColor: "gray",
      opacity: opacity,
    },
  });
