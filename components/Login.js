import * as React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { styles } from "./../styles";
import { Button } from "react-native-paper";

export default function Login(props) {
  const { email, password, navigation } = props;

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
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          value={email}
          onChangeText={(email) => this.setState({ email })}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(password) => this.setState({ password })}
        />
      </View>
      <Button
        onPress={() => navigation.navigate("home")}
        mode="contained"
        style={[styles.buttonContainer]}
      >
        Login
      </Button>
      <Button
        onPress={() => navigation.navigate("signup")}
        mode="outlined"
        style={[styles.buttonContainer, styles.outlineBtn]}
      >
        Sign up
      </Button>
      <Text
        style={styles.textLink}
        onPress={() => navigation.navigate("reset_password")}
      >
        Forget password !!
      </Text>
    </View>
  );
}
