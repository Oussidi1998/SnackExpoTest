import * as React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { styles } from "./../styles";
import { Button } from "react-native-paper";

export default function ResetPassword(props) {
  const { email, navigation } = props;

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
        />
      </View>
      <Button
        onPress={() => navigation.navigate("new_password")}
        mode="contained"
        style={[styles.buttonContainer]}
      >
        Reset Password
      </Button>
    </View>
  );
}
