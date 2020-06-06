import * as React from "react";
import { View, Image,Text } from "react-native";
import { styles } from "../styles";

export default class SplashPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace("getStarted");
    }, 2000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#643EFF",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("./../assets/splash.png")}
        ></Image>
        <Text style={{position:"absolute",bottom:20,color:"white"}}>by ensas</Text>
      </View>
    );
  }
}
