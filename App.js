import * as React from 'react';
import { Text, View, StyleSheet,TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Button from '@material-ui/core/Button';


export default function App() {
  return (
    <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom:10 }}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom:10 }}
        />
        <Button
          title="Login in"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});