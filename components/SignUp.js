import * as React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../styles";

export default function SignUp(props) {
  const { email, password, navigation } = props;

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.tinyLogoSignUp}
          source={require("./../assets/icon.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Full name"
          underlineColorAndroid="transparent"
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Confirm Password"
          value={password}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>
      <Button
        onPress={() => navigation.navigate("home")}
        mode="contained"
        style={[styles.buttonContainer]}
      >
        Sign up
      </Button>
      <Button
        onPress={() => navigation.navigate("login")}
        mode="outlined"
        style={[styles.buttonContainer, styles.outlineBtn]}
      >
        Login
      </Button>
    </View>
  );
}
