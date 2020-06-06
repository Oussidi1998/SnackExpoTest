import * as React from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Button,
  LeftContent,
  Avatar,
  Badge,
} from "react-native-paper";
import { styles } from "./../styles/dotStyle";

import Carousel from "react-native-snap-carousel";

const Dot = (props) => {
  return <View style={styles(props).dotStyle}></View>;
};

export default Dot;
