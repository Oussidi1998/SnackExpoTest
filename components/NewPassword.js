import * as React from "react";
import { View, TextInput, Image } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../styles";

export default function NewPassword(props) {
  const { new_password,c_password,navigation } = props;

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require("./../assets/icon.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          value={new_password}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Confirm Password"
          value={c_password}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>
      <Button onPress={() => navigation.navigate("home")}
        mode="contained"
        style={[styles.buttonContainer]}
      >Save</Button>
    </View>
  );
}
